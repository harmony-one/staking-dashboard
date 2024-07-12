<template>
  <PageContainer
    :managed="true"
    :data-empty="validators && validators.length === 0"
    :epoch="true"
    title="Analytics"
  >
    <template>
      <template slot="managed-body">
        <div class="tabsPlane">
          <AnalyticsToggle
            :value="isLiveMode"
            :on-change="value => (isLiveMode = value)"
          />
        </div>
        <div class="info_header">Top {{ slotsCount }} Slots</div>
        <div class="networkInfo">
          <div class="networkInfo-column">
            <div id="validators_median_stake" class="networkInfo-item">
              <h4 v-tooltip.top="tooltips.v_list.effective_median_stake">
                Effective Median Stake:
              </h4>
              <span v-if="networkInfo.effective_median_stake">
                {{ effectiveMedianStake | ones | zeroDecimals }}
                ONE
              </span>
              <span v-else>-</span>
            </div>
            <div id="validators_total_stake" class="networkInfo-item">
              <h4 v-tooltip.top="tooltips.v_list.total_stake">Total Stake:</h4>
              <span v-if="totalStake">
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

        <template v-if="!isLiveMode">
          <div>
            <div v-if="networkInfo.raw_stake_distro" class="chart-border">
              <AllStakesChart
                :raw="networkInfo.raw_stake_distro"
                :eff="networkInfo.effective_median_stake_distro"
                :median="networkInfo.effective_median_stake | ones"
              />

              <!--            <AllStakesChart-->
              <!--              :raw="networkInfo.live_raw_stake_distro"-->
              <!--              :eff="networkInfo.live_effective_median_stake_distro"-->
              <!--              :median="networkInfo.effective_median_stake | ones"-->
              <!--            />-->
            </div>

            <div class="table-border validatorTable">
              <TableRankedValidators :data="enrichedValidators" />
            </div>
          </div>

          <div class="widget-row">
            <LightWidget
              v-if="networkInfo.total_seats_used"
              :title="
                `Seats Elected ${networkInfo.total_seats_used} / ${networkInfo.total_seats}`
              "
            >
              <div class="chart">
                <SeatAllocation :data="networkInfo.externalShards" />
              </div>
            </LightWidget>

            <LightWidget v-if="networkInfo.history" title="Seat Allocation">
              <div class="chart">
                <SeatAllocationHistory :data="networkInfo.history" />
              </div>
            </LightWidget>
          </div>

          <div class="widget-row">
            <LightWidget v-if="networkInfo.history" title="Total Stake">
              <div class="chart">
                <TotalStakeHistory :data="networkInfo.history" />
              </div>
            </LightWidget>

            <LightWidget v-if="networkInfo.history" title="Effective Median">
              <div class="chart">
                <EffectiveMedianHistory :data="networkInfo.history" />
              </div>
            </LightWidget>
          </div>
        </template>

        <template v-else>
          <div>
            <div v-if="networkInfo.live_raw_stake_distro" class="chart-border">
              <AllStakesChart
                :raw="networkInfo.live_raw_stake_distro"
                :eff="networkInfo.live_effective_median_stake_distro"
                :median="networkInfo.effective_median_stake | ones"
              />
            </div>

            <div class="table-border validatorTable">
              <TableRankedValidators :data="enrichedLiveValidators" />
            </div>

            <div class="widget-row">
              <LightWidget
                v-if="networkInfo.liveExternalShards"
                :title="
                  `Seats Elected ${networkInfo.liveTotalSeatsUsed} / ${networkInfo.liveTotalSeats}`
                "
              >
                <div class="chart">
                  <SeatAllocation :data="networkInfo.liveExternalShards" />
                </div>
              </LightWidget>
            </div>
          </div>
        </template>

        <!-- <TmDataLoading v-if="isLoading" /> -->
        <TmDataLoading v-if="isNetworkFetching" />
      </template>
    </template>
  </PageContainer>
</template>

<script>
import { mapState } from "vuex"
import TableRankedValidators from "staking/TableRankedValidators"
import PageContainer from "common/PageContainer"
import { ones, shortDecimals, zeroDecimals, twoDecimals } from "scripts/num"
import LightWidget from "./../wallet/components/LightWidget"
import AllStakesChart from "staking/AllStakesChart"
import SeatAllocation from "staking/SeatAllocation"
import SeatAllocationHistory from "staking/SeatAllocationHistory"
import TotalStakeHistory from "staking/TotalStakeHistory"
import EffectiveMedianHistory from "staking/EffectiveMedianHistory"
import tooltips from "src/components/tooltips"
import AnalyticsToggle from "./components/AnalyticsToggle"
import TmDataLoading from "common/TmDataLoading"
import { POLLING_TIMEOUT_SEC } from "../../constants/time-constants"

export default {
  name: `tab-analytics`,
  components: {
    AnalyticsToggle,
    PageContainer,
    TableRankedValidators,

    //charts
    LightWidget,
    AllStakesChart,
    SeatAllocation,
    SeatAllocationHistory,
    TotalStakeHistory,
    EffectiveMedianHistory,
    TmDataLoading
  },
  filters: {
    ones,
    shortDecimals,
    zeroDecimals,
    twoDecimals
  },
  data: () => ({
    tooltips,
    isLiveMode: false,
    interval: null
  }),
  computed: {
    ...mapState({
      isNetworkFetching: state => state.connection.isNetworkFetching
    }),
    ...mapState({ networks: state => state.connection.networks }),
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

    //computed

    totalStake: state => {
      if (!state.networkInfo) {
        return null
      }

      return state.isLiveMode
        ? state.networkInfo.liveEpochTotalStake
        : state.networkInfo.lastEpochTotalStake
    },

    slotsCount: state => {
      if (state.isLiveMode) {
        return state.networkInfo.live_effective_median_stake_distro
          ? state.networkInfo.live_effective_median_stake_distro.length
          : 0
      } else {
        return state.networkInfo.effective_median_stake_distro
          ? state.networkInfo.effective_median_stake_distro.length
          : 0
      }
    },

    effectiveMedianStake: state => {
      if (!state.networkInfo) {
        return null
      }

      return state.isLiveMode
        ? state.networkInfo.effective_median_stake
        : state.networkInfo.lastEpochEffectiveStake
    },

    activeValidators: state =>
      state.allValidators.filter(v => v.active === true),
    validators: state => state.allValidators,
    enrichedValidators: function() {
      const { table } = this.networkInfo
      if (!table) return []

      const data = table.map(t => ({
        ...t,
        moniker: t.name,
        small_moniker: t.name.toLowerCase(),
        operator_address: t.address
      }))
      return data
    },
    enrichedLiveValidators: function() {
      const { live_table } = this.networkInfo
      if (!live_table) return []

      const data = live_table.map(t => ({
        ...t,
        moniker: t.name,
        small_moniker: t.name.toLowerCase(),
        operator_address: t.address
      }))

      return data
    },
    linkToTransaction() {
      const blocksUrl = this.networkConfig.explorer_url + "/block/"
      return blocksUrl + this.networkInfo.current_block_number + "?shard=0"
    }
  },
  // watch: {
  //   isLiveMode: function() {
  //     // this.networkInfo.live_raw_stake_distro.forEach((num, idx) => {
  //     //   console.log(num / 10e18, Number(this.networkInfo.raw_stake_distro[idx]) / 10e18)
  //     // })
  //
  //     // this.networkInfo.live_effective_median_stake_distro.forEach((num, idx) => {
  //     //   console.log((num / 10e20).toFixed(0), (Number(this.networkInfo.effective_median_stake_distro[idx]) / 10e20).toFixed(0))
  //     // })
  //   }
  // },
  mounted() {
    // console.log(this.networkInfo.table.length)
    // this.$store.dispatch("getDelegates")
    if (
      !this.$store.dispatch(
        "setNetworkByChainTitle",
        this.$route.params.chaintitle
      )
    ) {
      this.$router.replace("/analytics")
      this.$router.go(0)
      return
    }

    if (!this.interval) {
      this.interval = setInterval(
        () =>
          this.$store.dispatch(
            "loadNetworkInfoFull",
            this.$route.params.chaintitle
          ),
        POLLING_TIMEOUT_SEC * 6000
      )
    }

    this.$store.dispatch(`loadNetworkInfoFull`, this.$route.params.chaintitle)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped lang="scss">
@import "./page-global.scss";
</style>
