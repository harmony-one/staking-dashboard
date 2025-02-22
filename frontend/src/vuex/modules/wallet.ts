import Vue from "vue"
import config from "src/config"
import axios from "axios"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"
import { getBalance } from "@/mock-service"

const emptyState = {
  balances: Array<any>(),
  loading: true,
  loaded: false,
  error: null,
  accountNumber: null,
  address: "",
  externals: { config, axios },
}

export default ({ node }: { node: TNode }): Module<typeof emptyState, any> => ({
  state: JSON.parse(JSON.stringify(emptyState)),
  mutations: {
    setWalletBalances(state, balances) {
      Vue.set(state, `balances`, balances)
      Vue.set(state, `loading`, false)
    },
    updateWalletBalance(state, balance) {
      const findBalanceIndex = state.balances.findIndex(
        ({ denom }) => balance.denom === denom
      )
      if (findBalanceIndex === -1) {
        state.balances.push(balance)
        return
      }
      Vue.set(state.balances, findBalanceIndex, balance)
    },
    setWalletAddress(state, address) {
      state.address = address
    },
    setAccountNumber(state, accountNumber) {
      state.accountNumber = accountNumber
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async reconnected({ rootState, state, dispatch }) {
      if (state.loading && state.address && rootState.session.signedIn) {
        await dispatch(`queryWalletBalances`)
      }
    },
    async initializeWallet({ commit, dispatch }, { address }) {
      commit(`setWalletAddress`, address)

      dispatch(`queryWalletBalances`)

      // dispatch(`walletSubscribe`)

      // await dispatch(`getBondedDelegates`) // TODO move away
      // dispatch(`getRewardsFromMyValidators`) // TODO move away
    },
    resetSessionData({ rootState }) {
      // clear previous account state
      rootState.wallet = JSON.parse(JSON.stringify(emptyState))
      rootState.wallet.externals.axios = axios
    },
    async queryWalletBalances({ state, rootState, commit }) {
      if (!state.address) return

      state.loading = true
      if (!rootState.connection.connected) return

      try {
        const amount = await getBalance(
          state.address,
          rootState.connection.networkConfig.rpc_url
        )

        state.error = null

        commit(`setWalletBalances`, [{ denom: "one", amount: amount || 0 }])
        state.loading = false
        state.loaded = true
      } catch (error) {
        commit(`notifyError`, {
          title: `Error fetching balances`,
          body: (error instanceof Error ? error.message : String(error)),
        })
        commit('setError', error);
      }
    },
    queryWalletStateAfterHeight({ rootState, dispatch }, height) {
      return new Promise((resolve) => {
        // wait until height is >= `height`
        const interval = setInterval(() => {
          if (rootState.connection.lastHeader.height < height) return
          clearInterval(interval)
          dispatch(`queryWalletBalances`)
          dispatch(`getBondedDelegates`) // TODO move away
          dispatch(`getRewardsFromMyValidators`) // TODO move away
          resolve(true)
        }, 1000)
      })
    },
    async walletSubscribe({ state, rootState, dispatch }) {
      if (!rootState.session.address) return
    },
  },
})
