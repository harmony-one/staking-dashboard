<template>
  <div class="table-delegations">
    <BaseGrid
      :sort="sort"
      :columns="columns"
      :data="showingValidators"
      :on-row-click="onClickValidator"
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

import BaseGrid from "src/components/ui/BaseGrid"
import ValidatorStatus from "../components/ValidatorStatus"
import ValidatorName from "../components/ValidatorName"

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
          title: `Status`,
          value: `status`,
          tooltip: tooltips.portfolio.status,
          width: "110px",
          renderComponent: ValidatorStatus // render as Component - use custom Vue components
        },
        {
          title: `Name`,
          value: `name`,
          key: item => item.address,
          tooltip: tooltips.portfolio.name,
          renderComponent: ValidatorName // render as Component - use custom Vue components
        },
        {
          title: `Stake`,
          value: `stake`,
          tooltip: `Stake of validator`,
          width: "150px",
          align: "right",
          render: value => zeroDecimals(ones(value)) + " ONE"
        }
      ]

      if (this.isUndelegation) {
        columns = columns.concat([
          {
            title: `Returned in`,
            value: `remaining_epoch`,
            tooltip: tooltips.portfolio.ending_in,
            width: "190px",
            align: "right",
            render: value => {
              if (value) {
                return `${value} epoch${value > 1 ? "s" : ""}`
              } else {
                return "end of current epoch"
              }
            }
          }
        ])
      } else {
        columns = columns.concat([
          {
            title: `Reward (to date)`,
            value: `rewards`,
            tooltip: tooltips.portfolio.reward_up_to_date,
            width: "200px",
            align: "right",
            render: value => zeroDecimals(ones(value)) + " ONE"
          },
          {
            title: `Expected Return`,
            value: `apr`,
            tooltip: tooltips.portfolio.apr_avg,
            width: "200px",
            align: "right",
            render: value => percent(value)
          }
        ])
      }

      if (this.$mq === "tab") {
        const keep = ["name", "apr", "stake", "remaining_epoch", "apr"]
        columns = columns.filter(p => keep.includes(p.value))
      }
      if (this.$mq === "sm" || this.$mq === "md") {
        const keep = ["name", "remaining_epoch", "apr", "stake"]
        columns = columns.filter(p => keep.includes(p.value))
      }

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
<style lang="scss">
.table-delegations {
  .table-headings-wrap {
    width: 100%;
  }
}
@media screen and (max-width: 414px) {
}
</style>
