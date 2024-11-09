<template>
  <div id="validators_table" class="table-container" v-if="data.length">
    <BaseGrid
      :sort="sort"
      :columns="columns"
      :data="showingValidators"
      :on-row-click="onClickValidator"
    />
    <PanelPagination :pagination="pagination" :total="totalFound" />
  </div>
  <TmDataLoading v-else />
</template>

<script>
import { mapGetters, mapState } from "vuex"
import { expectedReturns } from "scripts/returns"
import BaseGrid from "src/components/ui/BaseGrid"
import PanelPagination from "src/components/ui/BaseGrid/PanelPagination"

import ValidatorSelect from "../components/ValidatorSelect"
import ValidatorStatus from "../components/ValidatorStatus"
import ValidatorName from "../components/ValidatorName"

import tooltips from "src/components/tooltips"

import {
  percent,
  shortDecimals,
  atoms,
  ones,
  zeroDecimals,
  twoDecimals
} from "scripts/num"
import { shuffle, sortByParams } from "./helpers"
import TmDataLoading from "../../common/TmDataLoading"

export default {
  name: `table-validators`,
  components: {
    TmDataLoading,
    BaseGrid,
    PanelPagination
  },
  props: {
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
      property: ``,
      order: `desc`
    },
    pagination: {
      pageIndex: 0,
      pageSize: 50
    },
    fetchTimeoutId: null,
    loading: false,
    data: []
  }),
  computed: {
    ...mapState([
      `distribution`,
      `pool`,
      `session`,
      "delegates",
      "connection",
      "validators"
    ]),
    ...mapState({
      annualProvision: state => state.minting.annualProvision,
      chainTitle: state => state.connection.chainTitle,
      isMultiDelegationSupport: state =>
        state.session.sessionType === "extension" &&
        state.session.extensionVersion >= 16
    }),
    ...mapState({
      totalFound: state => state.validators.totalFound
    }),
    ...mapGetters([`committedDelegations`, `bondDenom`, `lastHeader`]),
    enrichedValidators(
      {
        filteredData,
        pool,
        annualProvision,
        committedDelegations,
        session,
        distribution
      } = this
    ) {
      return filteredData.map(v => {
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
            : undefined,
          logoUrl: v.logoUrl
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
          title: `Status`,
          value: `status`,
          tooltip: tooltips.v_list.status,
          width: "110px",
          renderComponent: ValidatorStatus // render as Component - use custom Vue components
        },
        {
          title: `Name`,
          value: `name`,
          key: item => item.address,
          tooltip: tooltips.v_list.name,
          renderComponent: ValidatorName // render as Component - use custom Vue components
        },
        {
          title: `Average Return`,
          value: `apr`,
          tooltip: tooltips.v_list.average_apr,
          width: "200px",
          align: "right",
          render: value => percent(value)
        },
        {
          title: `Stake`,
          value: `total_stake`,
          tooltip: tooltips.v_list.stake,
          width: "130px",
          align: "right",
          render: value => zeroDecimals(ones(value))
        },
        {
          title: `Commission`,
          value: `rate`,
          tooltip: tooltips.v_list.fees,
          width: "150px",
          align: "right",
          render: value => percent(value) // render as function - do format value here
        },
        {
          title: `Uptime`,
          value: `uptime_percentage`,
          tooltip: tooltips.v_list.uptime,
          width: "110px",
          align: "right",
          render: value => percent(value)
        }
      ]

      if (this.isMultiDelegationSupport) {
        props.unshift({
          title: ``,
          value: `select`,
          key: item => item.address,
          tooltip: tooltips.v_list.select,
          width: "60px",
          renderComponent: ValidatorSelect // render as Component - use custom Vue components
        })
      }

      const aprColumn = props.find(p => p.value === "apr")

      if (this.$mq === "xlg") {
        aprColumn.width = "200px"
      } else {
        aprColumn.width = "130px"
      }

      if (this.$mq === "tab") {
        const keep = ["name", "apr", "uptime_percentage"]
        props = props.filter(p => keep.includes(p.value))
      }

      if (this.$mq === "sm" || this.$mq === "md") {
        const keep = ["name","apr"]
        props = props.filter(p => keep.includes(p.value))
      }

      return props
    },
    filteredData() {
      const { pagination, activeOnly, sort, search } = this
      const { property: sortProperty, order: sortOrder } = sort
      const { pageIndex, pageSize } = pagination
      let validators = this.data

      if (search) {
        validators = validators.filter(
          v =>
            v.name.toLowerCase().includes(search.toLowerCase()) ||
            v.address.toLowerCase().includes(search.toLowerCase())
        )
      }

      if (activeOnly) {
        validators = validators.filter(v => v.active)
      }

      this.$store.dispatch(`setTotalFound`, validators.length)

      if (sortProperty && sortOrder) {
        validators = sortByParams(validators.slice(0), sortProperty, sortOrder)
      }

      validators = validators.slice(
        pageIndex * pageSize,
        (pageIndex + 1) * pageSize
      )

      return validators
    }
  },
  watch: {
    // filteredData: function() {
    //   this.$store.dispatch(`setTotalFound`, this.filteredData.length)
    // },
    // "sort.order": function() {
    //   this.getValidators()
    // },
    // "sort.property": function() {
    //   this.getValidators()
    // },
    // "pagination.pageIndex": function() {
    //   this.getValidators()
    // },
    // search: function() {
    //   clearTimeout(this.fetchTimeoutId)
    //
    //   this.fetchTimeoutId = setTimeout(() => {
    //     this.pagination.pageIndex = 0
    //     this.getValidators()
    //   }, 300)
    // },
    chainTitle() {
      this.getValidators()
    }
    // loading() {
    //   if (this.loading) {
    //     this.loader = this.$loading.show({
    //       container: this.$refs.loadingContainer,
    //       canCancel: false
    //     })
    //   } else if (this.loader) {
    //     this.loader.hide()
    //   }
    // }
  },
  mounted() {
    this.getValidators()
  },
  methods: {
    onClickValidator(validator) {
      this.$router.push({
        name: "validator",
        params: {
          chaintitle: this.chainTitle,
          validator: validator.operator_address
        }
      })
    },
    getValidators() {
      this.loading = true

      this.$store.dispatch(`getValidators`, this.chainTitle).then(data => {
        this.data = shuffle(data)
        this.loading = false
      })
    }
  }
}
</script>
<style scoped lang="scss">
.table-container {
  margin-top: var(--unit);
}

@media screen and (max-width: 414px) {
}
</style>
