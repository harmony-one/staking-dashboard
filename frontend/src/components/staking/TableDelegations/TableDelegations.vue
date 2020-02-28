<template>
  <div>
    <table class="data-table card-white">
      <thead>
        <PanelSort
          :sort="sort"
          :properties="properties"
          :show-on-mobile="showOnMobile"
        />
      </thead>
      <tbody
        is="transition-group"
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="400"
        name="flip-list"
      >
        <TableRow
          v-for="(row, index) in showingValidators"
          :key="row.operator_address"
          :index="index"
          :data="row"
          :show-on-mobile="showOnMobile"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import orderBy from "lodash.orderby"
import PanelSort from "staking/PanelSort"
import TableRow from "./TableRow"

export default {
  name: `table-delegations`,
  components: {
    TableRow,
    PanelSort
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
      typye: Boolean,
      default: () => false
    }
  },
  data: () => ({
    query: ``,
    sort: {
      property: `stake`,
      order: `desc`
    },
    showing: 15,
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
      return this.sortedEnrichedValidators.slice(0, this.showing)
    },
    properties() {
      return this.isUndelegation
        ? [
            {
              title: `Name`,
              value: `small_moniker`,
              tooltip: `The validator's moniker`
            },
            {
              title: `Stake`,
              value: `stake`,
              tooltip: `Stake`
            },
            {
              title: `Reward (up to date)`,
              value: `rewards`,
              tooltip: `Reward (up to date)`
            },
            {
              title: `APR %`,
              value: `apr`,
              tooltip: `APR %`
            }
            // {
            //   title: `Staked since`,
            //   value: `staked_since`,
            //   tooltip: `Staked since`
            // }
          ]
        : [
            {
              title: `Name`,
              value: `small_moniker`,
              tooltip: `The validator's moniker`
            },
            {
              title: `Stake`,
              value: `stake`,
              tooltip: `Stake`
            },
            {
              title: `Reward (up to date)`,
              value: `rewards`,
              tooltip: `Reward (up to date)`
            },
            {
              title: `APR %`,
              value: `apr`,
              tooltip: `APR %`
            },
            {
              title: `Ending in`,
              value: `remainning_time`,
              tooltip: `Ending in`
            }
          ]
    }
  },
  watch: {
    "sort.property": function() {
      this.showing = 15
    },
    "sort.order": function() {
      this.showing = 15
    }
  },
  mounted() {
    this.$store.dispatch(`getPool`)
    this.$store.dispatch(`getRewardsFromMyValidators`)
    this.$store.dispatch(`getMintingParameters`)
  },
  methods: {
    loadMore() {
      this.showing += 10
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
