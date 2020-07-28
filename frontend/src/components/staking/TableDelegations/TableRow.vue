<template>
  <tr
    class="li-validator"
    :data-moniker="data.moniker"
    @click="
      $router.push({
        name: 'validator',
        params: { validator: data.operator_address }
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
        :name="data.moniker"
        :operator-address="data.operator_address"
        :logo-url="data.logo_url"
        :identity="data.identity"
      />
      <div class="validator-info">
        <h3 class="li-validator-name">{{ data.moniker }}</h3>
      </div>
    </td>
    <td class="hide-xs">{{ data.stake | ones | fourDecimals }} ONE</td>
    <td v-if="!isUndelegation" class="hide-xs">
      {{ data.rewards | ones | fourDecimals }} ONE
    </td>
    <td v-if="!isUndelegation">
      {{ data.apr | percent | notAvailable }}
    </td>
    <td v-if="data.remaining_epoch" class="hide-xs">
      {{ data.remaining_epoch + " epochs" }}
    </td>
  </tr>
</template>

<script>
import { percent, fourDecimals, ones } from "scripts/num"
import ValidatorLogo from "../components/ValidatorLogo"
import moment from "moment"

export default {
  name: `table-row`,
  components: {
    ValidatorLogo
  },
  filters: {
    ones,
    fourDecimals,
    percent,
    toLower: text => text.toLowerCase(),
    toClassName: text => text.toLowerCase().replace(/ /g, "_")
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    isUndelegation: {
      type: Boolean,
      default: () => false
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
    // undelegationTimeLeft() {
    //   const leftMin = this.data.remaining_time
    //
    //   const eventDate = moment(Date.now() + leftMin * 1000)
    //
    //   return new moment().to(eventDate)
    // },
    status() {
      if (
        this.data.jailed ||
        this.data.tombstoned ||
        this.data.status === 0 ||
        this.data.active === false
      )
        return `Not elected`
      return `Elected`
    },
    status_detailed() {
      if (
        this.data.jailed ||
        this.data.tombstoned ||
        this.data.status === 0 ||
        this.data.active === false
      )
        return "Validator is not elected in committees at current epoch"
      return "Validator is elected in committees at current epoch"
    }
  },
  methods: {
    percent
  }
}
</script>
<style scoped>
.li-validator {
  font-size: 1rem;
  padding: var(--unit) 0;
  border-bottom: 1px solid #ddd;
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
  padding: 2px 4px 1px 4px;
  border-radius: 8px;
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
