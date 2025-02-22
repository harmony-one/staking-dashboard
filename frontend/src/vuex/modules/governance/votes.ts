import Vue from "vue"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

const state = {
  loading: false,
  loaded: false,
  error: null,
  votes: {}
}

export default ({ node }: { node: TNode }): Module<typeof state, any> => ({
  state,
  mutations: {
    setProposalVotes(state, { proposalId, votes }) {
      Vue.set(state.votes, proposalId, votes)
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async getProposalVotes({ state, commit, rootState }, proposalId) {
      state.loading = true

      if (!rootState.connection.connected) return

      try {
        const votes = await node.get.proposalVotes(proposalId)
        commit(`setProposalVotes`, { proposalId, votes })
        state.error = null
        state.loading = false
        state.loaded = true
      } catch (error) {
        commit('setError', error);
      }
    },
    async postMsgVote({ dispatch }, { txProps: { proposalId } }) {
      await dispatch(`getProposalVotes`, proposalId)
      await dispatch(`getProposal`, proposalId)
      await dispatch(`getAllTxs`)
    }
  }
})
