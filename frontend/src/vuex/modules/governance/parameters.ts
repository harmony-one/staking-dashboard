import { Module } from "vuex"
import { TNode } from "@/connectors/node"

const emptyState = {
  parameters: {
    deposit: {},
    tallying: {},
    voting: {}
  },
  loading: false,
  loaded: false,
  error: null
}

export default ({ node }: { node: TNode }): Module<typeof emptyState, any> => ({
  state: JSON.parse(JSON.stringify(emptyState)),
  mutations: {
    setGovParameters(state, parameters) {
      state.parameters = parameters
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    signIn({ dispatch }) {
      // needed for deposit denom for governance

      // dispatch(`getGovParameters`)
    },
    async getGovParameters({ state, commit, rootState }) {
      state.loading = true

      if (!rootState.connection.connected) return

      try {
        const deposit = await node.get.govDepositParameters()
        const tallying = await node.get.govTallyingParameters()
        const voting = await node.get.govVotingParameters()

        state.error = null
        state.loading = false
        state.loaded = true
        commit(`setGovParameters`, { deposit, tallying, voting })
      } catch (error) {
        commit(`notifyError`, {
          title: `Error fetching governance parameters`,
          body: (error instanceof Error ? error.message : String(error)),
        })
        commit('setError', error);
      }
      state.loading = false
    }
  }
})
