<template>
  <div id="validators_table" class="table-container">
    <BaseGrid
      :sort="sort"
      :columns="columns"
      :data="showingValidators"
      :onRowClick="onClickValidator"
    />
    <PanelPagination :pagination="pagination" :total="totalFound" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import { expectedReturns } from "scripts/returns"
import BaseGrid from "src/components/ui/BaseGrid"
import PanelPagination from "./PanelPagination"

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
    PanelPagination
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    raw: {
      type: Array,
      default: () => []
    },
    eff: {
      type: Array,
      default: () => []
    },
    activeOnly: {
      type: Boolean,
      default: () => true
    },
    search: {
      type: String,
      default: () => ""
    }
  },
  data: () => ({
    query: ``,
    sort: {
      property: `apr`,
      order: `desc`
    },
    pagination: {
      pageIndex: 0,
      pageSize: 20
    },
    fetchTimeoutId: null
  }),
  computed: {
    ...mapState([`distribution`, `pool`, `session`, "delegates", "validators"]),
    ...mapState({
      annualProvision: state => state.minting.annualProvision
    }),
    ...mapState({
      totalFound: state => state.validators.totalFound
    }),
    ...mapGetters([`committedDelegations`, `bondDenom`, `lastHeader`]),
    enrichedValidators(
      {
        raw, eff,
        data,
        pool,
        annualProvision,
        committedDelegations,
        session,
        distribution
      } = this
    ) {

      return data.map(v => {

        const total_stake = zeroDecimals(ones(v.total_stake))
        const stakes = raw.map((raw, i) => ({ raw: zeroDecimals(ones(raw)), eff: eff[i] }))
        const stake = stakes.find((s, i) => {
          console.log(total_stake, s.raw)
          if (total_stake === s.raw) return true
        })
        
        const delegation = this.delegates.delegates.find(
          d => d.validator_address === v.operator_address
        )

        return Object.assign({}, v, {
          ...stake,
          small_moniker: v.moniker.toLowerCase(),
          my_delegations: delegation ? delegation.amount : 0,
          rewards:
            session.signedIn && distribution.rewards[v.operator_address]
              ? distribution.rewards[v.operator_address][this.bondDenom]
              : 0,
          expectedReturns: annualProvision
            ? expectedReturns(
                v,
                parseInt(pool.pool.bonded_tokens),
                parseFloat(annualProvision)
              )
            : undefined
        })
      })
    },
    sortedEnrichedValidators() {
      return this.enrichedValidators.slice(0)
    },
    startIndex() {
      return this.pagination.pageIndex * this.pagination.pageSize
    },
    showingValidators() {
      return this.sortedEnrichedValidators
    },
    columns() {
      let props = [
        {
          title: `Name`,
          value: `name`,
          tooltip: `The validator's moniker`,
          renderComponent: ValidatorName
        },
        {
          title: `EPOS`,
          value: `eff`,
          tooltip: `Effective Stake`,
          render: value => zeroDecimals(ones(value))
        },
        {
          title: `STAKE`,
          value: `total_stake`,
          tooltip: `Stake of validator`,
          width: "130px",
          align: 'right',
          render: value => zeroDecimals(ones(value))
        },
      ]

      if (this.$mq === "tab") {
        const keep = ["name", "apr", "total_stake"]
        props = props.filter(p => keep.includes(p.value))
      }
      if (this.$mq === "sm" || this.$mq === "md") {
        const keep = ["name", "apr"]
        props = props.filter(p => keep.includes(p.value))
      }

      return props
    }
  },
  watch: {
    activeOnly: function() {
      this.getValidators()
    },
    "sort.order": function() {
      this.getValidators()
    },
    "sort.property": function() {
      this.getValidators()
    },
    "pagination.pageIndex": function() {
      this.getValidators()
    },
    search: function() {
      clearTimeout(this.fetchTimeoutId)

      this.fetchTimeoutId = setTimeout(() => {
        this.pagination.pageIndex = 0
        this.getValidators()
      }, 300)
    }
  },
  mounted() {
    this.$store.dispatch(`getPool`)
    this.$store.dispatch(`getRewardsFromMyValidators`)
    this.$store.dispatch(`getMintingParameters`)

    this.getValidators()
  },
  methods: {
    onClickValidator(validator) {
      this.$router.push({
        name: "validator",
        params: { validator: validator.operator_address }
      })
    },
    getValidators() {
      this.$store.dispatch(`getValidatorsWithParams`, {
        active: this.activeOnly,
        page: this.pagination.pageIndex,
        size: this.pagination.pageSize,
        sortProperty: this.sort.property,
        sortOrder: this.sort.order,
        search: this.search
      })
    }
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
