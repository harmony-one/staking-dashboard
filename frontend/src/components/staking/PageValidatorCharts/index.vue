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
        <Widget title="Main" style="width: 450px; height: 258px;">
          <MainBlock v-bind:validator="validator" />
        </Widget>
        <Widget title="General info" style="width: 250px; height: 258px;">
          <GeneralInfoBlock v-bind:validator="validator" />
        </Widget>
        <Widget title="Perfomance" style="width: 250px; height: 258px;">
          <PerfomanceBlock v-bind:validator="validator" />
        </Widget>

        <Widget
          title="Stake & Delegation history"
          style="width: 450px; height: 400px;"
        >
          <StakeHistoryBlock v-bind:validator="validator" />
        </Widget>
        <Widget
          title="Reward rate history"
          style="width: 450px; height: 400px;"
        >
          <RewardHistoryBlock v-bind:validator="validator" />
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
import TmPage from "common/TmPage"
import { fetchValidatorByAddress } from "../../../mock-service"

export default {
  name: `page-validator-charts`,
  components: {
    PerfomanceBlock,
    MainBlock,
    GeneralInfoBlock,
    StakeHistoryBlock,
    RewardHistoryBlock,
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
    validator: {}
  }),
  computed: {
    ...mapState([`connection`]),
    networkId() {
      return this.connection.networkConfig.id
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

      if (this.connection.networkConfig.id || true) {
        this.validator = await fetchValidatorByAddress(
          this.connection.networkConfig.id,
          this.$route.params.validator
        )
      }

      this.loading = false
    }
  }
}
</script>

<style>
.validator-layout {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
