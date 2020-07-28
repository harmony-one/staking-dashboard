<template>
  <tr
    :class="rowClass"
    :data-moniker="validator.moniker"
    @click="
      $router.push({
        name: 'validator',
        params: { validator: validator.operator_address }
      })
    "
  >
    <td class="hide-xs">{{ index + 1 }}</td>
    <td class="hide-xs">
      <div class="status-container">
        <span
          :class="status | toClassName"
          class="validator-status"
          :title="status_detailed"
          >{{ status }}</span
        >
      </div>
    </td>
    <td class="data-table__row__info">
      <ValidatorLogo
        :name="validator.moniker"
        :operator-address="validator.operator_address"
        :logo-url="validator.logo_url"
      />
      <div class="validator-info">
        <h3 class="li-validator-name">{{ validator.moniker }}</h3>
      </div>
    </td>
    <!-- <td :class="{ 'hide-xs': showOnMobile !== 'expectedReturns' }">
      {{ 0.00005 | percent }}
    </td>-->
    <td class="hide-xs">{{ validator.rate | percent | notAvailable }}</td>
    <td>{{ validator.apr | percent | notAvailable }}</td>
    <td class="hide-xs">{{ validator.total_stake | ones | zeroDecimals }}</td>
    <td class="hide-xs">
      {{ validator.uptime_percentage | percent | notAvailable }}
    </td>
  </tr>
</template>

<script>
import {
  percent,
  shortDecimals,
  atoms,
  ones,
  zeroDecimals,
  twoDecimals
} from "scripts/num"
import ValidatorLogo from "./components/ValidatorLogo"
import { mapState } from "vuex"

export default {
  name: `li-validator`,
  components: { ValidatorLogo },
  filters: {
    atoms,
    ones,
    shortDecimals,
    percent,
    toLower: text => text.toLowerCase(),
    toClassName: text => text.toLowerCase().replace(/ /g, "_"),
    zeroDecimals,
    twoDecimals
  },
  props: {
    validator: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    showOnMobile: {
      type: String,
      /* istanbul ignore next */
      default: () => "returns"
    }
  },
  computed: {
    ...mapState({ networkInfo: state => state.connection.networkInfo }),
    status() {
      if (
        this.validator.jailed ||
        this.validator.tombstoned ||
        this.validator.status === 0 ||
        this.validator.active === false
      )
        return `Not elected`
      return `Elected`
    },
    rowClass: state => ({
      "li-validator": true
      // red:
      //   state.validator.total_stake >
      //   state.networkInfo.effective_median_stake,
      // green:
      //   state.validator.total_stake <=
      //   state.networkInfo.effective_median_stake
      // TODO: currently always green as sahil requested to change
      // green: true
    }),
    status_detailed() {
      if (this.validator.jailed) return `Temporarily banned from the network`
      if (this.validator.tombstoned) return `Banned from the network`
      if (this.validator.status === 0) return `Banned from the network`
      return false
    }
  },
  methods: {
    percent
  }
}
</script>
<style scoped lang="scss">
.data-table__row__info {
  height: 48px;
}

.li-validator {
  height: 48px;
  font-size: 1rem;
  padding: var(--unit) 0;
  border-bottom: 1px solid #ddd;
  color: var(--txt-black);

  &.red {
    background-color: #ff000018;
  }

  &.green {
    background-color: #00ff0010;
  }
}

.li-validator:last-child {
  border-bottom: none;
}

.validator-info {
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
  align-content: center;
  justify-content: center;
}

.li-validator h4,
.li-validator h5 {
  font-size: var(--sm);
  display: inline-block;
}

.li-validator h5 {
  padding-left: 0.5rem;
  color: var(--success);
}

.li-validator:hover {
  cursor: pointer;
  color: var(--txt);
}

.li-validator-name {
  font-size: 1rem;
  line-height: 18px;
  font-weight: 500;
  color: var(--txt);
  display: inline-block;
}

.li-validator-image {
  border-radius: 0.25rem;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid var(--bc-dim);
}

.status-container {
  margin-top: -2px;
}

.validator-status {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: normal;
  padding: var(--half) var(--half) 6px var(--half);
  border: 1px solid;
  border-radius: var(--unit);
}

.validator-status.inactive {
  color: red;
  border-color: red;
}

.validator-status.elected {
  color: var(--blue);
  border-color: var(--blue);
}

@media screen and (max-width: 414px) {
  .hide-xs {
    display: none;
  }
}
</style>
