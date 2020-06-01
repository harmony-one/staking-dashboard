<template>
  <div id="undelegations_table" class="table-container">
    <BaseGrid
      :sort="sort"
      :columns="columns"
      :data="data"
      :onRowClick="onClickValidator"
    />
    <!-- <PanelPagination :pagination="pagination" :total="totalFound" /> -->
  </div>
</template>

<script>

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
  name: `undelegations`,
  components: {
    BaseGrid
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

    columns() {
      let props = [
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
  methods: {
    onClickValidator(validator) {
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
