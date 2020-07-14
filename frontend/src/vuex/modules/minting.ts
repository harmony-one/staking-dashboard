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
      return
    }
  }
})
