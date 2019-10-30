import { fetchValidators } from "../../mock-service"

export default () => {
  const state = {
    loading: true,
    loaded: false,
    validators: []
  }

  const actions = {
    async getValidators({ commit }) {
      const validators = await fetchValidators()
      commit("setLoaded", true)
      commit("setValidators", validators)
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
