<template>
  <div>
    <div v-if="!loading && validators.delegations.length > 0">
      <h2 class="table-title">Delegations</h2>
      <TableDelegations
        :data="validators.delegations"
        show-on-mobile="expectedReturns"
      />
    </div>

    <div
      v-if="!loading && validators.undelegations.length > 0"
      style="margin-top: 20px;"
    >
      <h2 class="table-title">Pending undelegations</h2>
      <TableDelegations
        :data="validators.undelegations"
        :is-undelegation="true"
        show-on-mobile="expectedReturns"
      />
    </div>

    <TmDataMsg
      v-else-if="validators.delegations.length === 0"
      icon="sentiment_dissatisfied"
    >
      <div slot="title">
        No validators in your portfolio
      </div>
      <div slot="subtitle">
        Head over to the
        <router-link to="/validators"> validator list </router-link>&nbsp;to get
        staking!
      </div>
    </TmDataMsg>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import TmDataMsg from "common/TmDataMsg"
import TableDelegations from "staking/TableDelegations/TableDelegations"
import { remapValidator } from "../../mock-service/validator-helpers"
import { SECONDS_PER_EPOCH } from "@/constants/time-constants"

export default {
  name: `delegations-overview`,
  components: {
    TableDelegations,
    TmDataMsg
  },
  data: () => ({
    loading: false
    // validators: []
  }),
  computed: {
    ...mapState(["delegates"]),
    ...mapState({ network: state => state.connection.network }),
    ...mapGetters([`committedDelegations`]),
    ...mapState({ networkInfo: state => state.connection.networkInfo }),
    delegationsAddressList() {
      return Object.keys(this.committedDelegations)
    },
    ...mapState({
      allDelegations: state => state.delegates.delegates
    }),
    validators: state => {
      const delegations = []
      const undelegations = []

      state.allDelegations.forEach(delegates => {
        if (delegates) {
          delegations.push({
            ...remapValidator(delegates.validator_info, true),
            stake: delegates.amount,
            rewards: delegates.reward,
            apr: delegates.reward / delegates.amount
          })
        }

        if (
          delegates &&
          delegates.Undelegations &&
          delegates.Undelegations.length
        ) {
          delegates.Undelegations.forEach(un => {
            undelegations.push({
              ...remapValidator(delegates.validator_info, true),
              stake: un.Amount,
              rewards: delegates.reward,
              apr: delegates.reward / un.Amount,
              remaining_time:
                state.networkInfo.current_epoch &&
                un.Epoch &&
                state.networkInfo.time_next_epoch
                  ? state.networkInfo.time_next_epoch +
                    (parseInt(un.Epoch) +
                      7 -
                      parseInt(state.networkInfo.current_epoch)) *
                      SECONDS_PER_EPOCH
                  : undefined
            })
          })
        }
      })

      return { delegations, undelegations }
    }
  },
  async mounted() {
    // this.$store.dispatch(`getValidators`)
    this.$store.dispatch("getDelegates")
  }
}
</script>
<style scoped>
.table-title {
  font-size: 20px;
  font-weight: bold;
  padding: var(--unit) 0;
}
</style>
