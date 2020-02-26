import { fetchValidators, fetchValidatorsWithParams } from "../../mock-service"

export default () => {
  const state = {
    loading: true,
    loaded: false,
    validators: []
  }

  const actions = {
    async getValidatorsWithParams({ commit, rootState }, params) {
      // commit("setLoading", true)

      let validators = await fetchValidatorsWithParams(
        rootState.connection.networkConfig.id,
        params
      )

      commit("setLoaded", true)

      commit("setValidators", validators)

      return validators
    },

    async getValidators({ commit, rootState }) {
      commit("setLoading", true)

      let validators = await fetchValidators(
        rootState.connection.networkConfig.id
      )

      // @ts-ignore
      // window.validators = validators

      // const { delegates } = rootState.delegates

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

      // commit("setValidators", validators)

      return validators
    }
  }

  const mutations = {
    setValidators(state, validators) {
      state.validators = validators
    },
    setLoading(state, loading) {
      state.loading = loading
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
