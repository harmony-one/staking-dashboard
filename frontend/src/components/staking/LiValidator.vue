<template>
  <tr
    class="li-validator"
    :data-moniker="validator.moniker"
    @click="
      $router.push({
        name: 'validator',
        params: { validator: validator.operator_address }
      })
    "
  >
    <td>{{ index + 1 }}</td>
    <td class="hide-xs">
      <div class="status-container">
        <span
          :class="status | toClassName"
          class="validator-status"
          :title="status_detailed"
        >
          {{ status }}
        </span>
      </div>
    </td>
    <td class="data-table__row__info">
      <ValidatorLogo
        :name="validator.moniker"
        :operator-address="validator.operator_address"
        :logo-url="validator.logo_url"
      />
      <div class="validator-info">
        <h3 class="li-validator-name">
          {{ validator.moniker }}
        </h3>
      </div>
    </td>
    <td :class="{ 'hide-xs': showOnMobile !== 'expectedReturns' }">
      {{ 0.00005 | percent }}
    </td>
    <td :class="{ 'hide-xs': showOnMobile !== 'expectedReturns' }">
      {{ validator.rate | percent }}
    </td>
    <td>
      {{ validator.average_stake_by_bls | ones | zeroDecimals }}
    </td>
    <td :class="{ 'hide-xs': showOnMobile !== 'expectedReturns' }">
      {{ validator.voting_power | percent }}
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

export default {
  name: `li-validator`,
  components: { ValidatorLogo },
  filters: {
    atoms,
    ones,
    shortDecimals,
    percent,
    toLower: text => text.toLowerCase(),
    toClassName: text => text.toLowerCase().replace(/ /g, '_'),
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
    status_detailed() {
      if (this.validator.jailed) return `Temporally banned from the network`
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
<style scoped>
.li-validator {
  padding: 0.5rem 1rem;
  margin-bottom: 0.25rem;
  border-bottom: 1px solid var(--bc-dim);
  border-radius: 0.25rem;
  color: var(--txt-black);
}

.li-validator:last-child {
  border-bottom: none;
}

.validator-info {
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
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
  margin-top: -3px;
}

.validator-status {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  border: 2px solid;
  padding: 2px 4px;
  border-radius: 0.25rem;
}

.validator-status.inactive {
  color: red;
  border-color: red;
}

.validator-status.active {
  color: var(--success);
  border-color: var(--success);
}
</style>
