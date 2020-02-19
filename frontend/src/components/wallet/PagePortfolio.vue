<template>
  <div>
    <TmPage
      :managed="true"
      :loading="wallet.loading && delegation.loading"
      :loaded="wallet.loaded && delegation.loaded"
      :error="wallet.error || delegation.error"
      :sign-in-required="true"
    >
      <template slot="managed-body">
        <div v-if="session.signedIn" class="portfolio-top-container">
          <Widget title="" style="width: 450px; height: 320px;">
            <TmBalance />
          </Widget>
          <LightWidget
            title="Stake allocation"
            style="width: 340px; height: 380px;"
          >
            <div v-if="delegation.loading || validators.loading">
              Loading...
            </div>
            <div v-else-if="!delegations.length">
              No delegations in your portfolio
            </div>
            <StakeAllocationBlock :delegations="delegations" v-else />
          </LightWidget>
          <LightWidget
            title="Time until next epoch"
            style="width: 300px; height: 340px;"
          >
            <TimePieBlock :last-epoch-time="lastEpochTime" />
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
    ...mapState([`session`, `wallet`, `delegation`, `delegates`, "validators"]),
    ...mapGetters([`lastHeader`]),
    delegations() {
      if (this.delegates.loading || this.validators.loading) {
        return []
      }

      const delegates = this.delegates.delegates
      const validators = this.validators.validators

      return delegates
        ? delegates.map(d => {
            const validator = validators.find(
              v => v.address === d.validator_address
            )

            return {
              ...d,
              validator: validator && validator.description.name
            }
          })
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
<style scoped>
.tab-header {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.portfolio-top-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0px;
}
</style>
