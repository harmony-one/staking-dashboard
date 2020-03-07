<template>
  <div>
    <div v-if="!session.signedIn" class="portfolio-top-container no-sign-in">
      <LightWidget
        v-if="isNetworkInfoLoading"
        title="Time until next epoch"
        style="flex-grow: 1; height: 340px; box-shadow: none;"
      >
        <TimePieBlock :time-next-epoch="networkInfo.time_next_epoch" />
      </LightWidget>
    </div>
    <TmPage
      :managed="true"
      :loading="wallet.loading && delegation.loading"
      :loaded="wallet.loaded && delegation.loaded"
      :error="wallet.error || delegation.error"
      :sign-in-required="true"
    >
      <template slot="managed-body">
        <div v-if="session.signedIn" class="portfolio-top-container">
          <Widget title="" class="balance">
            <TmBalance />
          </Widget>
          <LightWidget title="Stake allocation" class="delegations">
            <div v-if="delegation.loading">
              Loading...
            </div>
            <div v-else-if="!delegations.length">
              No delegations in your portfolio
            </div>
            <StakeAllocationBlock v-else :delegations="delegations" />
          </LightWidget>
          <LightWidget
            v-if="isNetworkInfoLoading"
            title="Time until next epoch"
            class="time_next_epoch"
          >
            <TimePieBlock :time-next-epoch="networkInfo.time_next_epoch" />
          </LightWidget>
        </div>
        <DelegationsOverview />
        <template v-if="Object.keys(delegation.unbondingDelegations).length">
          <h3 class="tab-header">
            Pending Undelegations
          </h3>
          <Undelegations />
        </template>
      </template>
    </TmPage>
  </div>
</template>

<style scoped lang="scss">
.tab-header {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.portfolio-top-container {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: var(--unit);

  > div {
    margin-right: var(--unit);
    height: fit-content;
    border-radius: 5px;
    flex-grow: 1;

    &:last-child {
      margin-right: 0;
    }
  }

  &.no-sign-in {
    margin: 1.5em auto;
    padding: 0 20px;

    > div {
      margin: 0;
    }
  }

  @media screen and (min-width: 1300px) and (max-width: 1400px) {
    > div {
      margin-right: 10px;
    }

    .balance {
      max-width: 380px;
    }

    .delegations {
      max-width: 310px;
    }

    .time_next_epoch {
      max-width: 280px;
    }
  }
}
</style>
<script>
import { mapState, mapGetters } from "vuex"
import TmPage from "common/TmPage"
import TmBalance from "./TmBalance"
import DelegationsOverview from "staking/DelegationsOverview"
import Undelegations from "staking/Undelegations"
import TimePieBlock from "./TimePieBlock"
import StakeAllocationBlock from "./StakeAllocationBlock"
import Widget from "./components/Widget"
import LightWidget from "./components/LightWidget"
import moment from "moment"

export default {
  name: `page-portfolio`,
  components: {
    StakeAllocationBlock,
    TmPage,
    Undelegations,
    DelegationsOverview,
    TmBalance,
    Widget,
    LightWidget,
    TimePieBlock
  },
  data: () => ({
    lastUpdate: 0,
    lastEpochTime: moment()
      .add(-1, "day")
      .toDate()
  }),
  computed: {
    ...mapState([`session`, `wallet`, `delegation`, `delegates`, "connection"]),
    ...mapGetters([`lastHeader`]),
    ...mapState({ networkInfo: state => state.connection.networkInfo }),
    ...mapState({
      isNetworkInfoLoading: state => state.connection.isNetworkInfoLoading
    }),
    delegations() {
      if (this.delegates.loading) {
        return []
      }

      const delegates = this.delegates.delegates

      return delegates
        ? delegates.map(d => ({
            ...d,
            validator: d.validator_info.name
          }))
        : []
    }
  },
  watch: {
    lastHeader: {
      immediate: true,
      handler: function(newHeader) {
        const height = Number(newHeader.height)
        // run the update queries the first time and after every 10 blocks
        const waitedTenBlocks = height - this.lastUpdate >= 10
        if (
          this.session.signedIn &&
          (this.lastUpdate === 0 || waitedTenBlocks)
        ) {
          this.update(height)
        }
      }
    }
  },
  methods: {
    update(height) {
      this.lastUpdate = height
      this.$store.dispatch(`getRewardsFromMyValidators`)
    }
  }
}
</script>
