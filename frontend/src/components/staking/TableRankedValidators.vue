<template>
  <div id="validators_table" class="table-container">
    <BaseGrid
      :sort="sort"
      :columns="columns"
      :data="enrichedValidators"
      :onRowClick="onClickValidator"
      :scrollable="true"
    />
    <!-- <PanelPagination :pagination="pagination" :total="totalFound" /> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import { expectedReturns } from "scripts/returns"
import BaseGrid from "src/components/ui/BaseGrid"

import ValidatorStatus from "./components/ValidatorStatus"
import ValidatorName from "./components/ValidatorName"

import {
  percent,
  shortDecimals,
  atoms,
  ones,
  zeroDecimals,
  twoDecimals
} from "scripts/num"

export default {
  name: `table-validators`,
  components: {
    BaseGrid,
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
  },
  data: () => ({
    sort: {
      property: `slot`,
      order: `asc`
    },
  }),
  watch: {
    "sort.order": function() {
      return this.enrichedValidators
    },
    "sort.property": function() {
      return this.enrichedValidators
    },
  },
  computed: {
    enrichedValidators(
      {
        data,
        sort: { property, order },
      } = this
    ) {

      //slice it just in case
      data = data.slice()
      if (property === 'name') {
        console.log('name sort')
        data.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
        if (order === 'desc') data.reverse()
        return data
      }
      data = data.sort((a, b) => {
        a = a[property]
        b = b[property]
        try {
          if (property === 'slot') {
            a = parseInt(a.split('-')[0])
            b = parseInt(b.split('-')[0])
          }
        } catch(e) {} //don't interfere if slot data isn't perfect
        return order === 'asc' ? a - b : b - a
      })
      return data
    },
    columns() {
      let props = [
        {
          title: `Slots`,
          value: `slot`,
          tooltip: `The slots occupied by this Validator (in chart above)`,
          align: 'right',
          width: "96px",
        },
        {
          title: `Name`,
          value: `name`,
          key: item => item.address,
          tooltip: `The validator's moniker`,
          renderComponent: ValidatorName
        },
        {
          title: `Bid`,
          value: `bid`,
          tooltip: `Bid per BLS key`,
          width: "130px",
          align: 'right',
          render: value => zeroDecimals(ones(value))
        },
        {
          title: `Effective`,
          value: `effective_stake`,
          tooltip: `Validator's effective ONE staked`,
          width: "130px",
          align: 'right',
          render: value => zeroDecimals(ones(value))
        },
        {
          title: `Total`,
          value: `total_stake`,
          tooltip: `Validator's total ONE staked`,
          width: "130px",
          align: 'right',
          render: value => zeroDecimals(ones(value))
        },
      ]

      if (this.$mq === "tab") {
        const keep = ["slot", "name", "effective_stake", "total_stake"]
        props = props.filter(p => keep.includes(p.value))
      }
      if (this.$mq === "sm" || this.$mq === "md") {
        const keep = ["name", "total_stake"]
        props = props.filter(p => keep.includes(p.value))
      }

      return props
    }
  },
  mounted() {
    this.$store.dispatch(`getPool`)
    this.$store.dispatch(`getRewardsFromMyValidators`)
    this.$store.dispatch(`getMintingParameters`)
  },
  methods: {
    onClickValidator(validator, newTab = false) {
      if (newTab) {
        window.open(window.location.origin + '/validators/' + validator.operator_address, '_blank')
        return
      }
      this.$router.push({
        name: "validator",
        params: { validator: validator.operator_address }
      })
    },
  }
}
</script>
<style scoped lang="scss">
.table-container {
  margin-top: var(--unit);
}

@media screen and (max-width: 411px) {
}
</style>
