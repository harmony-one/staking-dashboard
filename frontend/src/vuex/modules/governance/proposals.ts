import Vue from "vue"
import BigNumber from "bignumber.js"
import { fetchProposals } from "../../../mock-service"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

export const setProposalTally = (commit: any, node: TNode) => async (
  proposal: any
) => {
  commit(`setProposal`, proposal)
  const final_tally_result =
    proposal.proposal_status === `VotingPeriod`
      ? await node.get.proposalTally(proposal.proposal_id)
      : { ...proposal.final_tally_result }
  commit(`setProposalTally`, {
    proposal_id: proposal.proposal_id,
    final_tally_result
  })
}

const emptyState = {
  loading: false,
  loaded: false,
  error: null,
  proposals: {},
  tallies: {}
}

export default ({ node }: { node: TNode }): Module<typeof emptyState, any> => ({
  state: JSON.parse(JSON.stringify(emptyState)),
  mutations: {
    setProposal(state, proposal) {
      Vue.set(state.proposals, proposal.proposal_id, proposal)
    },
    setProposalTally(state, { proposal_id, final_tally_result }) {
      Vue.set(state.tallies, proposal_id, final_tally_result)
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async reconnected({ state, dispatch }) {
      if (state.loading) {
        await dispatch(`getProposals`)
      }
    },
    async getProposals({ state, commit, rootState }) {
      state.loading = true

      console.log(rootState)
      // if (!rootState.connection.connected) return

      try {
        // const proposals = await node.get.proposals()

        const proposals = await fetchProposals()

        if (proposals.length > 0) {
          await Promise.all(proposals.map(setProposalTally(commit, node)))
        }

        state.error = null
        state.loaded = true
        state.loading = false
      } catch (error) {
        commit('setError', error);
      }
    },
    async getProposal({ state, commit }, proposal_id) {
      state.loading = true
      try {
        const proposal = await node.get.proposal(proposal_id)
        await setProposalTally(commit, node)(proposal)
        state.error = null
        state.loaded = true
        state.loading = false
        return proposal
      } catch (error) {
        commit('setError', error);
      }
      return undefined
    },
    async postMsgSubmitProposal(
      { state, rootState: { wallet }, dispatch, commit },
      { txProps: { initialDeposits, title, description } }
    ) {
      // optimistic updates
      initialDeposits.forEach(({ amount, denom }: any) => {
        const oldBalance = wallet.balances.find(
          (balance: any) => balance.denom === denom
        )

        const BigNumberC = BigNumber as any

        commit(`updateWalletBalance`, {
          denom,
          amount: BigNumberC(oldBalance.amount)
            .minus(amount)
            .toNumber()
        })
      })

      const latestId = Object.keys(state.proposals).reduce((latest, id) => {
        return latest > Number(id) ? latest : Number(id)
      }, 0)

      commit(`setProposal`, {
        proposal_id: String(latestId + 1),
        proposal_content: {
          value: { title, description }
        },
        initial_deposit: initialDeposits
      })

      await dispatch(`getProposals`)
      await dispatch(`getAllTxs`)
    }
  }
})
