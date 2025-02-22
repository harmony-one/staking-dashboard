import Vue from "vue"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

const mockState = {
  loaded: true,
}

const emptyState = {
  loading: false,
  error: null,

  // our delegations which are already on the blockchain
  committedDelegates: {} as any,
  unbondingDelegations: {} as any,
  ...mockState,
}

export default ({ node }: { node: TNode }): Module<typeof emptyState, any> => ({
  state: JSON.parse(JSON.stringify(emptyState)),
  mutations: {
    setCommittedDelegation(state, { candidateId, value }) {
      Vue.set(state.committedDelegates, candidateId, value)
      if (value === 0) {
        delete state.committedDelegates[candidateId]
      }
    },
    setUnbondingDelegations(state, unbondingDelegations) {
      state.unbondingDelegations = unbondingDelegations
        ? unbondingDelegations
            // building a dict from the array and taking out the validators with no undelegations
            .reduce(
              (dict: any, { validator_address, entries }: any) => ({
                ...dict,
                [validator_address]: entries.length > 0 ? entries : undefined,
              }),
              {}
            )
        : {}
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    reconnected({ state, dispatch, rootState }) {
      if (state.loading && rootState.session.signedIn) {
        dispatch(`getBondedDelegates`)
      }
    },
    resetSessionData({ rootState }) {
      rootState.delegation = JSON.parse(JSON.stringify(emptyState))
    },
    async initializeWallet({ dispatch }) {
      // await dispatch(`getBondedDelegates`)
    },
    // load committed delegations from LCD
    async getBondedDelegates({ state, rootState, commit, dispatch }) {
      state.loading = true

      if (!rootState.connection.connected) return

      const address = rootState.session.address

      try {
        const delegations = await node.get.delegations(address)
        const unbondingDelegations = await node.get.undelegations(address)
        const redelegations = await node.get.redelegations(address)
        const delegator = {
          delegations,
          unbondingDelegations: [],
          redelegations,
        }
        state.error = null
        state.loading = false
        state.loaded = true

        // the request runs that long, that the user might sign out and back in again
        // the result is, that the new users state gets updated by the old users request
        // here we check if the user is still the same
        if (rootState.session.address !== address) return

        if (!rootState.delegates.loaded) {
          await dispatch("getDelegates")
        }

        if (delegator.delegations) {
          delegator.delegations.forEach(
            ({ validator_address, shares }: any) => {
              commit(`setCommittedDelegation`, {
                candidateId: validator_address,
                value: parseFloat(shares),
              })
            }
          )
        }
        // delete delegations not present anymore
        Object.keys(state.committedDelegates).forEach((validatorAddr) => {
          if (
            !delegator.delegations ||
            !delegator.delegations.find(
              ({ validator_address }: any) =>
                validator_address === validatorAddr
            )
          )
            commit(`setCommittedDelegation`, {
              candidateId: validatorAddr,
              value: 0,
            })
        })

        commit(`setUnbondingDelegations`, unbondingDelegations)
      } catch (error) {
        commit(`notifyError`, {
          title: `Error fetching delegations`,
          body: (error instanceof Error ? error.message : String(error)),
        })
        commit('setError', error);
      }

      state.loading = false
    },
  },
})
