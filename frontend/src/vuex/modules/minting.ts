import { TNode } from "@/connectors/node"
import { Module } from "vuex"

const state = {
  pool: {},
  annualProvision: null,
  loading: false,
  loaded: false,
  error: null
}

export default ({ node }: { node: TNode }): Module<typeof state, any> => ({
  state: JSON.parse(JSON.stringify(state)),
  mutations: {
    setAnnualProvision(state, annualProvision) {
      state.annualProvision = annualProvision
    }
  },
  actions: {
    async getMintingParameters({ state, commit, rootState }) {
      if (!rootState.connection.connected || state.loaded) return

      state.loading = true
      try {
        await Promise.all([
          node.get
            .annualProvisionedTokens()
            .then(parseFloat)
            .then((provision: any) => commit("setAnnualProvision", provision))
        ])
        state.loaded = true
      } catch (error) {
        state.error = error.message
      }
      state.loading = false
    }
  }
});
