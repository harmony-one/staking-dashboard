<template>
  <div >
    <BaseGrid
      :sort="sort"
      :columns="columns"
      :data="showingValidators"
      :on-row-click="onClickValidator"
      style="max-height:150px;overflow:scroll"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import orderBy from "lodash.orderby"
import tooltips from "src/components/tooltips"

import {
  percent,
  shortDecimals,
  atoms,
  ones,
  zeroDecimals,
  fourDecimals,
  twoDecimals
} from "scripts/num"
import config from "src/config"
import BaseGrid from "src/components/ui/BaseGrid"
import ValidatorStatus from "../components/ValidatorStatus"
import ValidatorName from "../components/ValidatorName"
import ValidatorAddress from "../components/ValidatorAddress"
import ValidatorInvoice from "../components/ValidatorInvoice"

export default {
  name: `table-delegations`,
  components: {
    BaseGrid
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    showOnMobile: {
      type: String,
      default: () => "returns"
    },
    isUndelegation: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => ({
    query: ``,
    gasPrice: config.default_gas_price.toFixed(9),
    sort: {
      property: `stake`,
      order: `desc`
    },
    rollingWindow: 10000 // param of slashing period
  }),
  computed: {
    ...mapState([`distribution`, `pool`, `session`, "delegates"]),
    ...mapState({
      annualProvision: state => state.minting.annualProvision
    }),
    ...mapGetters([`committedDelegations`, `bondDenom`, `lastHeader`]),
    sortedEnrichedValidators() {
      return orderBy(
        this.data.slice(0),
        [this.sort.property],
        [this.sort.order]
      )
    },
    showingValidators() {
      return this.sortedEnrichedValidators
    },
    columns() {
      let columns = [
       
        {
          title: `Name`,
          value: `name`,
          width: "300px",

          tooltip: tooltips.portfolio.name,
          renderComponent: ValidatorName // render as Component - use custom Vue components
        },
        {
          title: `Address`,
          value: `address`,
          tooltip: `Address of validator`,
          width: "200px",
          align: "right",
          renderComponent: ValidatorAddress
        }
        
      ]
      return columns
    }
  },
  mounted() {
    this.$store.dispatch(`getPool`)
    this.$store.dispatch(`getRewardsFromMyValidators`)
    this.$store.dispatch(`getMintingParameters`)
  },
  methods: {
    onClickValidator(validator) {
      this.$router.push({
        name: "validator",
        params: { validator: validator.operator_address }
      })
    }
  }
}
</script>
<style scoped lang="scss">
table {
  margin-top: var(--unit);
  thead {
    text-transform: uppercase;
    font-weight: bold;
  }
}

@media screen and (max-width: 414px) {
}
</style>
