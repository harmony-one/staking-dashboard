<template>
  <div>
    <TmPage
      :managed="true"
      :loading="wallet.loading && delegation.loading"
      :loaded="wallet.loaded && delegation.loaded"
      :error="wallet.error || delegation.error"
      :sign-in-required="true"
      title="Portfolio"
    >
      <template slot="managed-body">
        <div v-if="session.signedIn" class="portfolio-top-container">
          <LightWidget title="Summary" class="balance">
            <TmBalance />
          </LightWidget>
          <LightWidget
            :tooltip="tooltips.portfolio.portfolio_allocation"
            title="Portfolio allocation"
            class="delegations"
          >
            <div v-if="delegation.loading" class="delegation-body">
              Loading...
            </div>
            <div
              v-else-if="
                !delegations.length &&
                  !Object.keys(delegation.unbondingDelegations).length
              "
              class="delegation-body"
            >
              No delegations in your portfolio
            </div>
            <StakeAllocationBlock
              v-else
              :delegations="delegations"
              class="delegation-body"
            />
          </LightWidget>
        </div>
        <DelegationsOverview :undelegations="undelegations" />
        <!-- <template v-if="undelegations.length">
          <h3 class="tab-header">
            Pending Undelegations
          </h3>
          <Undelegations />
        </template>-->
      </template>
    </TmPage>
    <TmDataLoading v-if="isNetworkFetching" />
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex"
import TmPage from "common/TmPage"
import TmBalance from "./TmBalance"
import DelegationsOverview from "staking/DelegationsOverview"
import Undelegations from "staking/Undelegations"
import StakeAllocationBlock from "./StakeAllocationBlock"
import LightWidget from "./components/LightWidget"
import moment from "moment"
import tooltips from "src/components/tooltips"
import TmDataLoading from "common/TmDataLoading"
import bech32 from "bech32"

export default {
  name: `page-portfolio`,
  components: {
    StakeAllocationBlock,
    TmPage,
    Undelegations,
    DelegationsOverview,
    TmBalance,
    LightWidget,
    TmDataLoading
  },
  data: () => ({
    tooltips,
    lastUpdate: 0,
    lastEpochTime: moment()
      .add(-1, "day")
      .toDate()
  }),
  computed: {
    ...mapState({
      isNetworkFetching: state => state.connection.isNetworkFetching
    }),
    ...mapState({ networks: state => state.connection.networks }),
    ...mapState([`session`, `wallet`, `delegation`, `delegates`, "connection"]),
    ...mapGetters([`lastHeader`]),
    ...mapState({ networkInfo: state => state.connection.networkInfo }),
    ...mapState({
      isNetworkInfoLoading: state => state.connection.isNetworkInfoLoading,
      chainTitle: state => state.connection.chainTitle
    }),
    delegations() {
      return this.delegates.loading
        ? []
        : this.delegates.delegates
            .filter(d => d.amount > 0)
            .map(d => ({
              ...d,
              validator: d.validator_info.name
            }))
    },
    undelegations() {
      const epoch = this.connection.networkInfo.current_epoch
      const delegates = this.delegates.loading ? [] : this.delegates.delegates
      const undelegations = []
      for (let i = 0; i < delegates.length; i++) {
        const d = delegates[i]
        for (let j = 0; j < d.Undelegations.length; j++) {
          const ud = d.Undelegations[j]
          if (ud.Epoch + 7 < epoch) continue

          const lastEpochInCommit = d.validator_info["last-epoch-in-committee"]
          let remaining_epoch = 1

          if (epoch >= 290) {
            if (lastEpochInCommit > 0 && d.validator_info.active === true) {
              remaining_epoch =
                7 - (epoch - Math.min(lastEpochInCommit , ud.Epoch))
            } else {
              remaining_epoch = 7 - (epoch - ud.Epoch)
            }

            remaining_epoch = Math.max(0, remaining_epoch)
          }

           

          undelegations.push({
            ...d.validator_info,
            moniker: d.validator_info.name,
            operator_address: d.validator_info.address,
            ...d,
            stake: ud.Amount,
            remaining_epoch
          })
        }
      }
      // console.log(this.networkInfo, undelegations) 
      return undelegations
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
  mounted() {
    if(this.$route.query.explore) {
      try {
        bech32.decode(this.$route.query.explore)
        
        this.$store.dispatch(`signIn`, {
          sessionType: `explore`,
          address: this.$route.query.explore
        })

        localStorage.setItem(`prevAddress`, this.address)
      } catch (error) {}
    }

    if (
      !this.$store.dispatch(
        "setNetworkByChainTitle",
        this.$route.params.chaintitle
      )
    ) {
      this.$router.replace("/portfolio")
      this.$router.go(0)
      return
    }
  },
  methods: {
    update(height) {
      this.lastUpdate = height
      // this.$store.dispatch(`getRewardsFromMyValidators`)
    }
  }
}
</script>
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

  > div {
    margin-right: var(--unit);
    height: fit-content;
    border-radius: 5px;
    flex-grow: 1;
  }

  &.no-sign-in {
    margin: 1.5em auto;
    padding: 0 20px;

    > div {
      margin: 0;
    }
  }

  .delegation-body,
  .time-body {
    padding: 0 var(--unit);
    text-align: center;
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
