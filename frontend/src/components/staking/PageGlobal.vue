<template>
  <PageContainer
    :managed="true"
    :data-empty="validators && validators.length === 0"
    :epoch="true"
    title="Analytics"
  >
    <template slot="managed-body">
      <div class="networkInfo">
        <div class="networkInfo-column">
          <div id="validators_median_stake" class="networkInfo-item">
            <h4 v-tooltip.top="tooltips.v_list.effective_median_stake">
              Effective Median Stake:
            </h4>
            <span v-if=networkInfo.effective_median_stake>
              {{ networkInfo.effective_median_stake | ones | zeroDecimals }} ONE
            </span>
            <span v-else>-</span>
          </div>
          <div id="validators_total_stake" class="networkInfo-item">
            <h4 v-tooltip.top="tooltips.v_list.total_stake">Total Stake:</h4>
            <span v-if=totalStake>
              {{ totalStake | ones | zeroDecimals }} ONE
            </span>
            <span v-else>-</span>
          </div>
          <div class="networkInfo-item">
            <h4 v-tooltip.top="tooltips.v_list.current_block_number">
              Current Block Height:
            </h4>
            <a :href="linkToTransaction" target="_blank">
              #{{ networkInfo.current_block_number }}
            </a>
          </div>
        </div>
      </div>

      <div>
        <div v-if="networkInfo.raw_stake_distro" class="chart-border">
          <AllStakesChart
            :raw="networkInfo.raw_stake_distro"
            :eff="networkInfo.effective_median_stake_distro"
            :median="networkInfo.effective_median_stake | ones"
            :networkInfo="networkInfo"
            :validators="validators"
          />
        </div>

        <div class="table-border validatorTable">
          <TableRankedValidators
            :data="enrichedValidators"
          />
        </div>
      </div>

      <div class="widget-row">
        <LightWidget
          v-if="networkInfo.total_seats_used" 
          :title="`Seats Elected ${networkInfo.total_seats_used} / ${networkInfo.total_seats}`"
        >
          <div class="chart">
            <SeatAllocation
              :data="networkInfo"
            />
          </div>
        </LightWidget>

        <LightWidget 
          v-if="networkInfo.history" 
          title="Seat Allocation History"
        >
          <div class="chart">
            <SeatAllocationHistory
              :data="networkInfo.history"
            />
          </div>
        </LightWidget>
      </div>


      <div class="widget-row">
        <LightWidget 
          v-if="networkInfo.history" 
          title="Total Stake History"
        >
          <div class="chart">
            <TotalStakeHistory
              :data="networkInfo.history"
            />
          </div>
        </LightWidget>



        <LightWidget 
          v-if="networkInfo.history" 
          title="Effective Median History"
        >
          <div class="chart">
            <EffectiveMedianHistory
              :data="networkInfo.history"
            />
          </div>
        </LightWidget>
      </div>
      
      <!-- <TmDataLoading v-if="isLoading" /> -->
    </template>
  </PageContainer>
</template>

<script>
import { mapState } from "vuex"
import TableRankedValidators from "staking/TableRankedValidators"
import PageContainer from "common/PageContainer"
import TmField from "common/TmField"
import TmBtn from "common/TmBtn"
import TmDataLoading from "common/TmDataLoading"
import { transactionToShortString } from "src/scripts/transaction-utils"
import { ones, shortDecimals, zeroDecimals, twoDecimals } from "scripts/num"
import PercentageChange from "./components/PercentageChange"
import LightWidget from "./../wallet/components/LightWidget"
import AllStakesChart from "staking/AllStakesChart"
import SeatAllocation from "staking/SeatAllocation"
import SeatAllocationHistory from "staking/SeatAllocationHistory"
import TotalStakeHistory from "staking/TotalStakeHistory"
import EffectiveMedianHistory from "staking/EffectiveMedianHistory"
import tooltips from "src/components/tooltips"

export default {
  name: `tab-validators`,
  components: {
    PageContainer,
    TableRankedValidators,

    //charts
    LightWidget,
    AllStakesChart,
    SeatAllocation,
    SeatAllocationHistory,
    TotalStakeHistory,
    EffectiveMedianHistory,
  },data: () => ({
    tooltips,
  }),
  filters: {
    ones,
    shortDecimals,
    zeroDecimals,
    twoDecimals
  },
  computed: {
    ...mapState({ network: state => state.connection.network }),
    ...mapState({ networkConfig: state => state.connection.networkConfig }),
    ...mapState({ networkInfo: state => state.connection.networkInfo }),
    ...mapState({
      isNetworkInfoLoading: state => state.connection.isNetworkInfoLoading
    }),
    ...mapState({
      allValidators: state =>
        state.validators.loaded ? state.validators.validators : [],
      total: state => state.validators.total,
      totalActive: state => {
        console.log(state.validators.totalActive)
        return state.validators.totalActive
      }
    }),
    ...mapState({ isLoading: state => state.validators.loading }),
    ...mapState({ totalStake: 
      state => state.connection.networkInfo ? state.connection.networkInfo['total-staking'] : null
    }),

    //computed

    activeValidators: state => state.allValidators.filter(v => v.active === true),
    validators: state => state.allValidators,
    enrichedValidators: function() {
      const { table } = this.networkInfo
      if (!table) return []

      const data = table.map((t) => ({
        ...t,
        moniker: t.name,
        small_moniker: t.name.toLowerCase(),
        operator_address: t.address,
      }))
      return data
    },
    linkToTransaction() {
      // const blocksUrl = this.networkConfig.explorer_url
      //   ? this.networkConfig.explorer_url.replace("tx", "block")
      //   : ""
      const blocksUrl = `https://explorer.os.hmny.io/#/block/`
      return blocksUrl + this.networkInfo.current_block_hash
    },
  },
  // watch: {
  //   totalActive: function() {
  //     console.log(this.totalActive)
  //   },
  // },
  async mounted() {
    console.log(this.networkInfo.table.length)
    this.$store.dispatch("getDelegates")
    // this.$store.dispatch(`getValidatorsWithParams`, {
    //   active: true,
    //   page: 0,
    //   size: 200,
    //   sortProperty: "slot",
    //   sortOrder: "asc",
    //   search: "",
    // })
  }
}
</script>

<style scoped lang="scss">

@mixin border {
  border-radius: var(--unit);
  border: 1px solid var(--light2);
  background: white;
}
.chart-border {
  margin-bottom: var(--double);
}

.table-border {
  @include border;
  padding: var(--unit);
  margin-bottom: var(--double);
}


.validatorTable, .networkInfo {
  background: white;
  margin: var(--double) 0;
  border-radius: var(--unit);
  border: 1px solid var(--light2);
}
.validatorTable {
  padding: var(--unit);
}

.networkInfo {
  
  &-column {
    display: flex;
  }

  &-item {
    padding: var(--unit);
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
  &-item:not(:last-child) {
    border-right: 1px solid var(--light2);
  }

  h4 {
    color: var(--gray);
    font-size: 16px;
  }
}


.no-results {
  text-align: center;
  margin: 3rem;
  color: var(--dim);
}



.widget-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: var(--unit) 0;
  > div {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
  > div:last-child {
    margin-right: 0 !important;
  }
}
.widget-row:not(:first-child) {
  margin-top: calc(-1 * var(--unit));
}

@media screen and (max-width: 414px) {
  .widget-row {
    > div {
      margin-right: 0 !important;
    }
    > .widget-container:nth-child(odd) {
      margin-right: 0;
    }
  }
  .validatorTable {
    margin-left: calc(-2 * var(--unit)) !important;
    width: calc(100vw - 1px);
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
  }
}


</style>
