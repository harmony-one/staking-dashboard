import { fetchValidators, fetchValidatorsWithParams } from "../../mock-service"
import { ones } from "../../scripts/num"

export default () => {
  const state = {
    loading: true,
    loaded: false,
    validators: [],
    total: 0,
    totalActive: 0,
    totalFound: 0,
    selected: []
  }

  const actions = {
    async getValidatorsWithParams({ commit, rootState }, params) {
      // commit("setLoading", true)
      let data
      // API has hard cap, this will split requests and concat results after all requests are back
      if (params.size > 100) {
        const pages = Math.ceil(params.size / 100)
        data = []
        for (let i = 0; i < pages; i++) {
          data.push(
            await fetchValidatorsWithParams(
              rootState.connection.networkConfig.id,
              {
                ...params,
                page: i,
                size: 100
              }
            )
          )
        }
        const validators = data.reduce((a, c) => a.concat(...c.validators), [])
        data = data[0]
        data.validators = validators
      } else {
        data = await fetchValidatorsWithParams(
          rootState.connection.networkConfig.id,
          params
        )
      }

      commit("setLoaded", true)

      commit("setTotal", data.total)
      commit("setTotalActive", data.total_active)
      commit("setTotalFound", data.totalFound)

      return data.validators
    },

    async getValidators({ commit, rootState }) {
      commit("setLoading", true)

      let data = await fetchValidators(rootState.connection.networkConfig.id)
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

      const validators = data.validators.filter(
        v => ones(v.total_stake) >= 10000
      )

      commit("setLoaded", true)

      commit("setTotalActive", data.total_active)
      commit("setTotal", validators.length)

      commit("setTotalFound", data.total_active)

      // commit("setValidators", validators)

      return validators
    },

    async setTotalFound({ commit, state, rootState }, total) {
      if (state.totalFound !== total) {
        commit("setTotalFound", total)
      }
    },

    selectValidator({ commit, rootState }, select_validator) {
      const validator = state.selected.find(
        v => v.address === select_validator.address
      )

      if (validator) {
        commit("deselectValidator", select_validator.address)
      } else {
        commit("selectValidator", select_validator.address)
      }
    },
    resetSelectedValidators({ commit }) {
      commit("resetSelectedValidators")
    }
  }

  const mutations = {
    setValidators(state, validators) {
      // state.validators = validators
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
    },
    selectValidator(state, address) {
      state.selected.push({ address })
    },
    deselectValidator(state, address) {
      state.selected = state.selected.filter(v => v.address !== address)
    },
    resetSelectedValidators(state) {
      state.selected = []
    }
  }

  return {
    state,
    mutations,
    actions
  }
}
