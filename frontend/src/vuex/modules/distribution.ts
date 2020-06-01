import Vue from "vue"
import { coinsToObject } from "@/scripts/common"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

const emptyState = {
  loading: false,
  loaded: false,
  error: null,
  /* rewards use the following format:
      {
          validatorAddr1: {
              denom1: amount1,
              ... ,
              denomN: amountN
          },
          ... ,
          validatorAddrN: {
              denom1: amount1,
              ... ,
              denomN: amountN
          }
      }
  */
  rewards: {},
  parameters: {},
  /* outstandingRewards use the following format:
      {
          denom1: amount1,
          ... ,
          denomN: amountN
      }
  */
  outstandingRewards: {}
}

export default ({ node }: { node: TNode }): Module<typeof emptyState, any> => ({
  state: JSON.parse(JSON.stringify(emptyState)),
  mutations: {
    setDelegationRewards(state, { validatorAddr, rewards }) {
      Vue.set(state.rewards, validatorAddr, rewards)
    },
    setAllDelegationRewards(state, { rewards }) {
      state.rewards = rewards;
    },
    resetDelegationRewards(state) {
      state.rewards = {}
    },
    setDistributionParameters(state, parameters) {
      state.parameters = parameters
    },
    setOutstandingRewards(state, outstandingRewards) {
      state.outstandingRewards = outstandingRewards
    },
    setDistributionError(state, error) {
      state.error = error
    }
  },
  actions: {
    async reconnected({ rootState, state, dispatch }) {
      if (state.loading && rootState.session.signedIn) {
        await dispatch(`getRewardsFromMyValidators`)
      }
    },
    resetSessionData({ rootState }) {
      rootState.distribution = JSON.parse(JSON.stringify(emptyState))
    },
    async initializeWallet({ dispatch }) {
      dispatch(`getRewardsFromMyValidators`)
    },
    async postMsgWithdrawDelegationReward({ dispatch }) {
      return Promise.all([
        dispatch(`getRewardsFromMyValidators`),
        dispatch(`queryWalletBalances`),
        dispatch(`getAllTxs`)
      ])
    },
    resetRewards({ commit }) {
      commit(`resetDelegationRewards`)
    },
    async getRewardsFromMyValidators({ state, commit, rootState }) {
      state.loading = true

      commit(`resetDelegationRewards`)

      const rewards: any = {}

      if (Array.isArray(rootState.delegates.delegates)) {
        rootState.delegates.delegates.forEach(
          (d: any) => (rewards[d.validator_address] = { one: Number(d.reward) })
        )
      }

      commit(`setAllDelegationRewards`, { rewards })

      // await Promise.all(
      //   yourValidators.map((validator: any) =>
      //     dispatch(`getRewardsFromValidator`, validator.operator_address)
      //   )
      // )
      state.loading = false
      state.loaded = true
    },

    // TODO: move to a common parameters module
    async getDistributionParameters({ commit, state }) {
      state.loading = true
      try {
        const parameters = await node.get.distributionParameters()
        commit(`setDistributionParameters`, parameters)
        commit(`setDistributionError`, null)
        state.loaded = true
      } catch (error) {
        commit(`setDistributionError`, error)
      }
      state.loading = false
    },
    async getOutstandingRewards({ commit, state }) {
      state.loading = true
      try {
        const oustandingRewardsArray = await node.get.distributionOutstandingRewards()
        const oustandingRewards = coinsToObject(oustandingRewardsArray)
        commit(`setOutstandingRewards`, oustandingRewards)
        commit(`setDistributionError`, null)
        state.loaded = true
      } catch (error) {
        commit(`setDistributionError`, error)
      }
      state.loading = false
    }
  }
})
