import { fetchValidators } from "../../mock-service"

export default () => {
  const state = {
    loading: true,
    loaded: false,
    validators: []
  }

  const actions = {
    async getValidators({ commit, rootState }) {
      let validators = await fetchValidators(rootState.connection.networkConfig.id)

      const { delegates } = rootState.delegates

      // if (validators) {
      //   validators = validators.map(validator => {
      //     const delegation = delegates.find(
      //       d => d.validator_address === validator.operator_address
      //     )
      //
      //     return {
      //       ...validator,
      //       my_delegations: delegation ? delegation.amount : 0
      //     }
      //   })
      // }

      commit("setLoaded", true)

      commit("setValidators", validators)

      return validators;
    }
  }

  const mutations = {
    setValidators(state, validators) {
      state.validators = validators
    },
    setLoaded(state, loaded) {
      state.loading = false
      state.loaded = loaded
    }
  }

  return {
    state,
    mutations,
    actions
  }
}
