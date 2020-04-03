<template>
  <PageContainer
    :managed="true"
    :data-empty="validators && validators.length === 0"
    title="Global View"
  >
    <template slot="managed-body">
      <div class="networkInfo">
        <div class="networkInfo-column">
          <div id="validators_median_stake" class="networkInfo-item">
            <h4>Effective median stake:</h4>
            {{ networkInfo.effective_median_stake | ones | zeroDecimals }} ONE
          </div>
          <div id="validators_total_stake" class="networkInfo-item">
            <h4>Total stake:</h4>
            {{ networkInfo["total-staking"] | ones | zeroDecimals }} ONE
          </div>
          <div class="networkInfo-item">
            <h4>Current block number:</h4>
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
          />
        </div>

        <div v-if="false" class="table-border">
          <TableRankedValidators
            :raw="networkInfo.raw_stake_distro"
            :eff="networkInfo.effective_median_stake_distro"
            :data="validators"
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

export default {
  name: `tab-validators`,
  components: {
    PageContainer,
    TmField,
    TmBtn,
    TmDataLoading,
    TableRankedValidators,

    //charts
    LightWidget,
    AllStakesChart,
    SeatAllocation,
    SeatAllocationHistory,
    TotalStakeHistory,
    EffectiveMedianHistory,
  },
  filters: {
    ones,
    shortDecimals,
    zeroDecimals,
    twoDecimals
  },
  data: () => ({
    searchTerm: "",
    activeOnly: true
  }),
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
      totalActive: state => state.validators.totalActive
    }),
    ...mapState({ isLoading: state => state.validators.loading }),
    activeValidators: state =>
      state.allValidators.filter(v => v.active === true),
    validators: state => {
      return state.allValidators
    },
    prettyTransactionHash() {
      return this.networkInfo.current_block_hash
        ? transactionToShortString(this.networkInfo.current_block_hash)
        : ""
    },
    linkToTransaction() {
      const blocksUrl = this.networkConfig.explorer_url
        ? this.networkConfig.explorer_url.replace("tx", "block")
        : ""

      return blocksUrl + this.networkInfo.current_block_hash
    }
  },
  async mounted() {
    // this.$store.dispatch(`getValidators`)
    this.$store.dispatch("getDelegates")
  }
}
</script>

<style lang="scss">

@mixin border {
  padding: var(--unit);
  border-radius: var(--unit);
  border: 1px solid var(--light2);
  background: white;
}
.chart-border {
  .chart-container {
    @include border;
    margin-bottom: var(--double);
  }
}

.table-border {
  @include border;
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

@media screen and (max-width: 411px) {
  .widget-row {
    > div {
      margin-right: 0 !important;
    }
    > .widget-container:nth-child(odd) {
      margin-right: 0;
    }
  }
}


</style>
