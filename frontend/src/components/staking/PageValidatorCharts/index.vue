<template>
  <TmPage
    :managed="true"
    :loading="loading"
    :loaded="!loading"
    :error="validator.error"
    :data-empty="!validator.operator_address"
    :hide-header="true"
    data-title="Validator"
    class="small"
  >
    <template v-if="validator.operator_address" slot="managed-body">
      <MainBlock v-bind:validator="validator" />
      <GeneralInfoBlock v-bind:validator="validator" />
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
import MainBlock from "./MainBlock"
import GeneralInfoBlock from "./GeneralInfoBlock"
import TmPage from "common/TmPage"
import { fetchValidatorByAddress } from "../../../mock-service"

export default {
  name: `page-validator-charts`,
  components: {
    MainBlock,
    GeneralInfoBlock,
    TmPage
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

      if (this.connection.networkConfig.id) {
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
