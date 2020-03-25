<template>
  <div id="validators_table">
    <table class="data-table card-white">
      <thead class="table-header">
        <PanelSort
          :sort="sort"
          :properties="properties"
          :show-on-mobile="showOnMobile"
        />
      </thead>
      <tbody>
        <LiValidator
          v-for="(validator, index) in showingValidators"
          :key="validator.operator_address"
          :index="startIndex + index"
          :validator="validator"
          :show-on-mobile="showOnMobile"
        />
      </tbody>
    </table>
    <PanelPagination :pagination="pagination" :total="totalFound" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import LiValidator from "staking/LiValidator"
import PanelSort from "staking/PanelSort"
import PanelPagination from "staking/PanelPagination"
import { expectedReturns } from "scripts/returns"
export default {
  name: `table-validators`,
  components: {
    LiValidator,
    PanelSort,
    PanelPagination
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
      property: `expectedReturns`,
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
        data,
        pool,
        annualProvision,
        committedDelegations,
        session,
        distribution
      } = this
    ) {
      return data.map(v => {
        const delegation = this.delegates.delegates.find(
          d => d.validator_address === v.operator_address
        )

        return Object.assign({}, v, {
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
      console.log(this.enrichedValidators)
      return this.enrichedValidators.slice(0)
    },
    startIndex() {
      return this.pagination.pageIndex * this.pagination.pageSize
    },
    showingValidators() {
      return this.sortedEnrichedValidators
    },
    properties() {
      let props = [
        {
          title: `Name`,
          value: `name`,
          tooltip: `The validator's moniker`
        },
        {
          title: `Fees`,
          value: `rate`,
          tooltip: `Commission fees`
        },
        {
          title: `APR %`,
          value: `apr`,
          tooltip: `APR %`
        },
        {
          title: `Stake`,
          value: `total_stake`,
          tooltip: `Total ONE staked`
        },
        {
          title: `Uptime`,
          value: `uptime_percentage`,
          tooltip: `Percentage validator has been elected vs. not`
        }
      ]
      if (this.$mq === "sm") {
        const keep = ["name", "apr"]
        props = props.filter(p => keep.includes(p.name))
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
  // watch: {
  //   "sort.property": function() {
  //     this.showing = 15
  //   },
  //   "sort.order": function() {
  //     this.showing = 15
  //   }
  // },
  mounted() {
    this.$store.dispatch(`getPool`)
    this.$store.dispatch(`getRewardsFromMyValidators`)
    this.$store.dispatch(`getMintingParameters`)

    this.getValidators()
  },
  methods: {
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
table {
  margin-top: var(--unit);
  thead {
    text-transform: uppercase;
    font-weight: bold;
  }
}

@media screen and (max-width: 411px) {
}
</style>
