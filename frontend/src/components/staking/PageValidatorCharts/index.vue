<template>
  <TmPage
    :managed="true"
    :loading="loading"
    :loaded="!loading"
    :error="validator.error"
    :data-empty="!validator.operator_address"
    :hide-header="true"
    data-title="Validator"
  >
    <template v-if="validator.operator_address" slot="managed-body">
      <div class="validator-layout">
        <Widget style="width: 450px; height: 258px;">
          <MainBlock :validator="validator" />
        </Widget>
        <Widget title="General info" style="width: 250px; height: 258px;">
          <GeneralInfoBlock :validator="validator" />
        </Widget>
        <Widget title="Performance" style="width: 250px;">
          <PerfomanceBlock :validator="validator" />
        </Widget>

        <Widget
          title="Stake & Delegation history"
          style="width: 500px; height: 400px;"
        >
          <StakeHistoryBlock
            :history="validatorHistory"
            :validator="validator"
          />
        </Widget>
        <Widget
          title="Reward rate history"
          style="width: 500px; height: 400px;"
        >
          <RewardHistoryBlock
            :history="validatorHistory"
            :validator="validator"
          />
        </Widget>
        <Widget title="Commission" style="width: 500px; height: 490px;">
          <CommissionHistoryBlock
            :history="validatorHistory"
            :validator="validator"
          />
        </Widget>
        <Widget
          v-if="allHistory.length"
          title="Event history"
          style="width: 500px; height: 400px;"
        >
          <EventHistoryBlock :events="eventsHistory" />
        </Widget>
      </div>
    </template>
    <template v-else>
      <div slot="title">Validator Not Found</div>
      <div slot="subtitle">
        Please visit the
        <router-link to="/validators/">Validators</router-link>page to view all
        validators
      </div>
    </template>
  </TmPage>
</template>

<script>
import { mapState } from "vuex"
import Widget from "./components/Widget"
import GeneralInfoBlock from "./GeneralInfoBlock"
import PerfomanceBlock from "./PerfomanceBlock"
import MainBlock from "./MainBlock"
import StakeHistoryBlock from "./StakeHistoryBlock"
import RewardHistoryBlock from "./RewardHistoryBlock"
import CommissionHistoryBlock from "./CommissionHistoryBlock"
import EventHistoryBlock from "./EventHistoryBlock"
import TmPage from "common/TmPage"
import {
  fetchValidatorByAddress,
  fetchValidatorHistory
} from "../../../mock-service"
import { formatByStep, generateEventHistory } from "./helpers"
import { SECONDS_PER_EPOCH } from "@/constants/time-constants"

export default {
  name: `page-validator-charts`,
  components: {
    PerfomanceBlock,
    MainBlock,
    GeneralInfoBlock,
    StakeHistoryBlock,
    RewardHistoryBlock,
    CommissionHistoryBlock,
    EventHistoryBlock,
    TmPage,
    Widget
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
    allHistory: []
  }),
  computed: {
    ...mapState([`connection`]),
    networkId() {
      return this.connection.networkConfig.id
    },
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
    return await this.fetchValidator()
  },
  methods: {
    fetchValidator: async function() {
      this.loading = true

      if (this.connection.networkConfig.id) {
        this.validator = await fetchValidatorByAddress(
          this.connection.networkConfig.id,
          this.$route.params.validator
        )

        let history = await fetchValidatorHistory(
          this.connection.networkConfig.id,
          this.$route.params.validator
        )

        history = history.sort((a, b) => a.index < b.index ? -1 : 1)

        this.allHistory = history
        this.validatorHistory = history

        // don't need to use
        // this.validatorHistory = formatByStep(history, SECONDS_PER_EPOCH * 1000)
      }

      this.loading = false
    }
  }
}
</script>

<style>
.validator-layout {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: calc(var(--unit) * -1);
}

.validator-layout > div {
  flex-grow: 1;
}
</style>
