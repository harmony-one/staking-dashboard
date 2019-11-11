const mockState = {
  parameters: {
    unbonding_time: "1814400000000000",
    max_validators: 100,
    max_entries: 7,
    bond_denom: "one"
  },
  loading: false,
  loaded: true,
  error: null
}

export default ({ node }) => {
  const emptyState = {
    parameters: {},
    loading: false,
    loaded: false,
    error: null
  }
  const state = JSON.parse(JSON.stringify(emptyState))

  Object.assign(state, mockState)

  const mutations = {
    setStakingParameters(state, parameters) {
      state.parameters = parameters
    }
  }

  const actions = {
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

  // TODO TEMP Mock actions to empty functions
  const mockedActions = Object.keys(actions).reduce((acc, key) => {
    acc[key] = () => {}
    return acc
  }, {})

  return {
    state,
    mutations,
    actions: mockedActions
  }
}
