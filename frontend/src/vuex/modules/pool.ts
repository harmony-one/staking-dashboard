import { TNode } from "@/connectors/node"
import { Module } from "vuex"

const emptyState = {
  pool: {
    not_bonded_tokens: "0",
    bonded_tokens: "0"
  },
  loading: false,
  loaded: false,
  error: null
}

export default ({ node }: { node: TNode }): Module<typeof emptyState, any> => ({
  state: JSON.parse(JSON.stringify(emptyState)),
  mutations: {
    setPool(state, pool) {
      state.pool = pool
    }
  },
  actions: {
    reconnected({ state, dispatch }) {
      if (state.loading) {
        dispatch(`getPool`)
      }
    },
    async getPool({ state, commit, rootState }) {
      state.loading = true

      if (!rootState.connection.connected) return

      try {
        const pool = await node.get.pool()
        commit(`setPool`, pool)

        state.error = null
        state.loading = false
        state.loaded = true
      } catch (error) {
        state.error = error
        state.loading = false
        state.loaded = false
      }
    }
  }
});
