import { fetchValidators, fetchValidatorsWithParams } from "../../mock-service"

export default () => {
  const state = {
    loading: true,
    loaded: false,
    validators: [],
    total: 0,
    totalActive: 0,
    totalFound: 0
  }

  const actions = {
    async getValidatorsWithParams({ commit, rootState }, params) {
      // commit("setLoading", true)
      let data
      if (params.size > 100) {
        const pages = Math.ceil(params.size / 100)
        data = []
        for (let i = 0; i < pages; i++) {
          data.push(await fetchValidatorsWithParams(rootState.connection.networkConfig.id, {
            ...params, page: i, size: 100
          }))
        }
        const validators = data.reduce((a, c) => a.concat(...c.validators), [])
        data = data[0]
        data.validators = validators
      } else {
        data = await fetchValidatorsWithParams(rootState.connection.networkConfig.id, params)
      }

      commit("setLoaded", true)

      commit("setValidators", data.validators)
      commit("setTotal", data.total)
      commit("setTotalActive", data.total_active)
      commit("setTotalFound", data.totalFound)


      return data.validators
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
    setTotal(state, total) {
      state.total = total
    },
    setTotalActive(state, total) {
      state.totalActive = total
    },
    setTotalFound(state, total) {
      state.totalFound = total
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
