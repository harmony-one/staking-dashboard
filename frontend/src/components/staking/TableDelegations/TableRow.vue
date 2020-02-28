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
    <td>{{ index + 1 }}</td>
    <td class="hide-xs">
      <div class="status-container">
        <span
          :class="status | toLower"
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
      />
      <div class="validator-info">
        <h3 class="li-validator-name">{{ data.moniker }}</h3>
      </div>
    </td>
    <td>{{ data.stake | ones | fourDecimals }} ONE</td>
    <td>{{ data.rewards | ones | fourDecimals }} ONE</td>
    <td class="hide-xs">
      {{ (data.stake ? data.rewards / data.stake : 0) | percent }}
    </td>
    <td v-if="data.remainning_time" class="hide-xs">
      {{ undelegationTimeLeft }}
    </td>
  </tr>
</template>

<script>
import { percent, fourDecimals, ones } from "scripts/num"
import ValidatorLogo from '../components/ValidatorLogo'

export default {
  name: `table-row`,
  components: {
    ValidatorLogo
  },
  filters: {
    ones,
    fourDecimals,
    percent,
    toLower: text => text.toLowerCase()
  },
  props: {
    data: {
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
    undelegationTimeLeft() {
      const leftMin = data.remainning_time;

      return `${Math.floor(leftMin / 60)} hours ${Math.floor(
        leftMin % 60
      )} minutes`
    },
    status() {
      if (
        this.data.jailed ||
        this.data.tombstoned ||
        this.data.status === 0 ||
        this.data.active === false
      )
        return `Inactive`
      return `Active`
    },
    status_detailed() {
      if (this.data.jailed) return `Temporally banned from the network`
      if (this.data.tombstoned) return `Banned from the network`
      if (this.data.status === 0) return `Banned from the network`
      return false
    }
  },
  methods: {
    percent,
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
