<template>
  <TmPage
    :managed="true"
    :loading="loading"
    :loaded="!loading"
    :error="validator.error"
    :data-empty="!validator.operator_address"
    :hide-header="false"
    :title="validator.moniker"
  >
    <template v-if="validator.operator_address" slot="managed-body">
      <div class="validator-layout">
        <div class="validator-top">
          <div>
            <div class="title">Profile</div>
            <MainBlock :validator="validator" />
          </div>
          <div>
            <div class="title">General Info</div>
            <GeneralInfoBlock :validator="validator" />
          </div>
          <div>
            <div class="title">Performance</div>
            <PerfomanceBlock :validator="validator" />
          </div>
        </div>

        <LightWidget
          title="Stake & Delegation history"
          style="width: 500px; height: 400px;"
        >
          <StakeHistoryBlock
            :history="validatorHistory"
            :validator="validator"
          />
        </LightWidget>
        <LightWidget
          title="Reward rate history"
          style="width: 500px; height: 400px;"
        >
          <RewardHistoryBlock
            :history="validatorHistory"
            :validator="validator"
          />
        </LightWidget>
        <LightWidget title="Commission" style="width: 500px; height: 490px;">
          <CommissionHistoryBlock
            :history="validatorHistory"
            :validator="validator"
          />
        </LightWidget>
        <LightWidget
          v-if="allHistory.length"
          title="Event history"
          style="width: 500px; height: 400px;"
        >
          <EventHistoryBlock :events="eventsHistory" />
        </LightWidget>
      </div>
    </template>
    <template v-else>
      <div slot="title">Validator Not Found</div>
      <div slot="subtitle">
        Please visit the
        <router-link to="/validators/"> Validators </router-link>page to view all
        validators
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

      try {
        if (this.connection.networkConfig.id) {
          this.validator = await fetchValidatorByAddress(
            this.connection.networkConfig.id,
            this.$route.params.validator
          )

          let history = await fetchValidatorHistory(
            this.connection.networkConfig.id,
            this.$route.params.validator
          )

          history = history.sort((a, b) => (a.index < b.index ? -1 : 1))

          this.allHistory = history
          this.validatorHistory = history

          // don't need to use
          // this.validatorHistory = formatByStep(history, SECONDS_PER_EPOCH * 1000)
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
    flex-grow: 1;
    padding: var(--unit);
    border-right: 1px solid var(--light2);
  }
  > div:last-child {
    border-right: none;
  }
  .title {
    font-size: 16px;
    color: var(--blue);
    padding-bottom: 0;
    text-transform: uppercase;
  }
}

</style>
