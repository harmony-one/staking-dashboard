import { TNode } from "@/connectors/node"
import { Module } from "vuex"

const state = {
  parameters: {},
  loading: false,
  loaded: false,
  error: null
}

export default ({ node }: { node: TNode }): Module<typeof state, any> => ({
  state: JSON.parse(JSON.stringify(state)),
  mutations: {
    setStakingParameters(state, parameters) {
      state.parameters = parameters
    }
  },
  actions: {
    signIn({ dispatch }) {
      // needed for bond denom for gas calculation
      dispatch(`getStakingParameters`)
    },
    async getStakingParameters({ state, commit, rootState }) {
      state.loading = true

      if (!rootState.connection.connected) return

      try {
        const parameters = await node.get.stakingParameters()
        commit(`setStakingParameters`, parameters)
        state.error = null
        state.loading = false
        state.loaded = true
      } catch (error) {
        commit(`notifyError`, {
          title: `Error fetching staking parameters`,
          body: error.message
        })
        state.error = error
      }
    }
  }
})