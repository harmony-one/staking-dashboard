import Vue from "vue"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

const state = {
  loading: false,
  error: null,
  loaded: false,
  deposits: {}
}

export default ({ node }: { node: TNode }): Module<typeof state, any> => ({
  state,
  mutations: {
    setProposalDeposits(state, { proposalId, deposits }: any) {
      Vue.set(state.deposits, proposalId, deposits)
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async getProposalDeposits({ state, commit, rootState }, proposalId) {
      state.loading = true

      if (!rootState.connection.connected) return

      try {
        const deposits = await node.get.proposalDeposits(proposalId)
        state.error = null
        state.loading = false
        state.loaded = true
        commit(`setProposalDeposits`, { proposalId, deposits })
      } catch (error) {
        commit('setError', error);
      }
    },
    async postMsgDeposit(
      { rootState: { wallet }, dispatch, commit },
      { txProps: { proposalId, amounts } }
    ) {
      // optimistic update
      amounts.forEach(({ amount, denom }: any) => {
        const oldBalance = wallet.balances.find(
          (balance: any) => balance.denom === denom
        )
        commit(`updateWalletBalance`, {
          denom,
          amount: oldBalance.amount - amount
        })
      })

      await dispatch(`getProposalDeposits`, proposalId)
      await dispatch(`getProposal`, proposalId)
      await dispatch(`getAllTxs`)
    }
  }
})
