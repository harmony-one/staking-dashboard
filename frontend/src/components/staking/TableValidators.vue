<template>
  <div>
    <PanelPagination
      :pagination="pagination"
      :total="activeOnly ? totalActive : total"
    />
    <table class="data-table card-white">
      <thead>
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
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import orderBy from "lodash.orderby"
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
    }
  }),
  computed: {
    ...mapState([`distribution`, `pool`, `session`, "delegates", "validators"]),
    ...mapState({
      annualProvision: state => state.minting.annualProvision
    }),
    ...mapState({
      total: state => state.validators.total,
      totalActive: state => state.validators.totalActive
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
          // my_delegations:
          //   session.signedIn && committedDelegations[v.operator_address] > 0
          //     ? committedDelegations[v.operator_address]
          //     : 0,
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
      return orderBy(
        this.enrichedValidators.slice(0),
        [this.sort.property],
        [this.sort.order]
      )
    },
    startIndex() {
      return this.pagination.pageIndex * this.pagination.pageSize
    },
    showingValidators() {
      return this.sortedEnrichedValidators

      //         .slice(
      //   this.startIndex,
      //   this.startIndex + this.pagination.pageSize
      // )
    },
    properties() {
      return [
        {
          title: `Name`,
          value: `small_moniker`,
          tooltip: `The validator's moniker`
        },
        {
          title: `Return %`,
          value: `return`,
          tooltip: `Rate of return per validator`
        },
        {
          title: `Fees`,
          value: `rate`,
          tooltip: `Commission fees`
        },
        {
          title: `Total ONE staked`,
          value: `total_stake`,
          tooltip: `Total ONE staked`
        },
        {
          title: `Voting Power`,
          value: `voting_power`,
          tooltip: `Percentage of voting shares`
        }
      ]
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
  watch: {
    "pagination.pageIndex": function() {
      this.getValidators()
    },
    activeOnly: function() {
      this.getValidators()
    }
  },
  methods: {
    getValidators() {
      this.$store.dispatch(`getValidatorsWithParams`, {
        page: this.pagination.pageIndex,
        size: this.pagination.pageSize,
        active: this.activeOnly
      })
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 550px) {
  .data-table td {
    overflow: hidden;
  }

  .data-table__row__info {
    max-width: 22rem;
  }
}

.flip-list-move {
  transition: transform 0.3s;
}
</style>
