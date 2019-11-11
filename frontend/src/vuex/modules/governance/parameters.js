const mockState = {
  parameters: {
    deposit: {
      min_deposit: [
        {
          denom: "one",
          amount: "512000000"
        }
      ],
      max_deposit_period: "1209600000000000"
    },
    tallying: {
      quorum: "0.400000000000000000",
      threshold: "0.500000000000000000",
      veto: "0.334000000000000000"
    },
    voting: {
      voting_period: "1209600000000000"
    },
  },
  loading: false,
  loaded: true,
  error: null
}



export default ({ node }) => {
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
  const state = JSON.parse(JSON.stringify(emptyState))

  // Todo temp
  Object.assign(state, mockState)

  const mutations = {
    setGovParameters(state, parameters) {
      state.parameters = parameters
    }
  }

  const actions = {
    signIn({ dispatch }) {
      // needed for deposit denom for governance
      dispatch(`getGovParameters`)
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
          body: error.message
        })
        state.error = error
      }
      state.loading = false
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
