<template>
  <TmPage
    :managed="true"
    :loading="loading"
    :loaded="!loading"
    :error="validator.error"
    :data-empty="!validator.operator_address"
    :hide-header="true"
    :title="validator.moniker"
  >
    <template v-if="validator.operator_address" slot="managed-body">
      <div class="validator-layout">
        <div class="validator-top">
          <div>
            <!-- <div class="title">Profile</div> -->
            <MainBlock :validator="validator" />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div slot="title">Validator Not Found</div>
      <div slot="subtitle">
        Please visit the
        <router-link to="/validators/"> Validators </router-link>page to view
        all validators
      </div>
    </template>
  </TmPage>
</template>

<script>
import { mapState } from "vuex"
import LightWidget from "./../../wallet/components/LightWidget"
import GeneralInfoBlock from "./GeneralInfoBlock"
import PerfomanceBlock from "./PerfomanceBlock"
import MainBlock from "./MainBlock"
import StakeHistoryBlock from "./StakeHistoryBlock"
import RewardHistoryBlock from "./RewardHistoryBlock"
import DelegatorBlock from "./DelegatorBlock"
import EventHistoryBlock from "./EventHistoryBlock"
import TmPage from "common/TmPage"
import {
  fetchValidatorByAddress,
  fetchValidatorHistory
} from "../../../mock-service"
import { formatByStep, generateEventHistory } from "./helpers"
import { SECONDS_PER_EPOCH } from "@/constants/time-constants"
import tooltips from "src/components/tooltips"

export default {
  name: `page-validator-charts`,
  components: {
    PerfomanceBlock,
    MainBlock,
    GeneralInfoBlock,
    StakeHistoryBlock,
    RewardHistoryBlock,
    DelegatorBlock,
    EventHistoryBlock,
    TmPage,
    LightWidget
  },
  props: {
    showOnMobile: {
      type: String,
      default: () => "returns"
    }
  },
  data: () => ({
    loading: true,
    validator: {},
    validatorHistory: [],
    allHistory: [],
    tooltips
  }),
  computed: {
    ...mapState({
      chainTitle: state => state.connection.chainTitle
    }),
    ...mapState({ network: state => state.connection.network }),
    ...mapState({ networks: state => state.connection.networks }),
    ...mapState([`connection`]),
    eventsHistory() {
      return this.allHistory.length ? generateEventHistory(this.allHistory) : {}
    }
  },
  watch: {
    networkId: async function() {
      return await this.fetchValidator()
    },
    "validator.operator_address": {
      immediate: true,
      handler(operator_address) {
        if (!operator_address) return
        this.$store.dispatch(`getSelfBond`, this.validator)
      }
    }
  },
  async mounted() {
    if (
      !this.$store.dispatch(
        "setNetworkByChainTitle",
        this.$route.params.chaintitle
      )
    ) {
      // this.$router.replace("/validators")
      // this.$router.go(0)
      return;
    }

    return await this.fetchValidator()
  },
  methods: {
    fetchValidator: async function() {
      this.loading = true
      const network = this.chainTitle
      try {
        if (network) {
          this.validator = await fetchValidatorByAddress(
            network,
            this.$route.params.validator
          )
        }
      } catch (err) {
        console.error(err)
      }

      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.widget-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 0 var(--unit) 0;
  padding-right: var(--unit);
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
      min-width: 300px;
      margin-right: 0 !important;
    }
    > .widget-container:nth-child(odd) {
      margin-right: 0;
    }
  }
}

.validator-layout {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: calc(var(--unit) * -1);
  > div {
    flex-grow: 1;
  }
}

.validator-top {
  width: 100%;
  display: flex;
  background: white;
  border: 1px solid var(--light2);
  border-radius: var(--unit);
  margin-right: var(--unit);
  margin-bottom: var(--unit);
  > div {
    //min-width: 350px;
    flex-grow: 1;
    padding: var(--unit);
    border-right: 1px solid var(--light2);
  }
  > div:last-child {
    min-width: 250px;
    border-right: none;
  }
  .title {
    font-size: 16px;
    color: var(--blue);
    padding-bottom: 0;
    text-transform: uppercase;
  }
}

@media screen and (max-width: 414px) {
  .validator-top {
    max-width: calc(100vw - 2 * var(--double));
  }
}
@media screen and (max-width: 1200px) {
  .validator-top {
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    margin-bottom: var(--unit);
    > div {
      flex-grow: 1;
      width: 100%;
      background: white;
      border-radius: var(--unit);
      border: 1px solid var(--light2);
      margin-bottom: var(--unit);
      padding: var(--unit);
    }
    > div:last-child {
      border-right: 1px solid var(--light2);
    }
    .title {
      font-size: 16px;
      color: var(--blue);
      padding-bottom: 0;
      text-transform: uppercase;
    }
  }
}
</style>
