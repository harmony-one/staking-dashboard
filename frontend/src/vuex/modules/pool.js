const mockState = {
  pool: {
    not_bonded_tokens: "65706862715402",
    bonded_tokens: "180782006808966"
  },
  loading: false,
  loaded: true,
  error: null
}

export default ({ node }) => {
  const emptyState = {
    pool: {},
    loading: false,
    loaded: false,
    error: null
  }
  const state = JSON.parse(JSON.stringify(emptyState))

  // TODO Temp
  Object.assign(state, mockState)

  const mutations = {
    setPool(state, pool) {
      state.pool = pool
    }
  }

  const actions = {
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

  return {
    state,
    mutations,
    actions
  }
}
