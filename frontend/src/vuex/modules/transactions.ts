import uniqBy from "lodash.uniqby"
import Vue from "vue"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

// TODO simplify with one call

const mockState = {
  loading: false,
  loaded: true
}

const emptyState = {
  loading: false,
  loaded: false,
  error: null,
  bank: [], // {height, result: { gas, tags }, tx: { type, value: { fee: { amount: [{denom, amount}], gas}, msg: {type, inputs, outputs}}, signatures} }}
  staking: [],
  governance: [],
  distribution: [],
  mockState,
  TypeBank: [],
  TypeStaking: [],
  TypeGovernance: [],
  TypeDistribution: []
}

const TX_TYPES: Record<TxTypes, string> = {
  TypeBank: `bank`,
  TypeStaking: `staking`,
  TypeGovernance: `governance`,
  TypeDistribution: `distribution`
}

type TxTypes =
  | "TypeBank"
  | "TypeStaking"
  | "TypeGovernance"
  | "TypeDistribution"

export default ({ node }: { node: TNode }): Module<typeof emptyState, any> => ({
  state: JSON.parse(JSON.stringify(emptyState)),
  mutations: {
    setBankTxs(state, txs) {
      Vue.set(state, TX_TYPES.TypeBank, txs)
    },
    setStakingTxs(state, txs) {
      Vue.set(state, TX_TYPES.TypeStaking, txs)
    },
    setGovernanceTxs(state, txs) {
      Vue.set(state, TX_TYPES.TypeGovernance, txs)
    },
    setDistributionTxs(state, txs) {
      Vue.set(state, TX_TYPES.TypeDistribution, txs)
    },
    setHistoryLoading(state, loading) {
      Vue.set(state, `loading`, loading)
    }
  },
  actions: {
    resetSessionData({ rootState }) {
      // clear previous account state
      rootState.transactions = JSON.parse(JSON.stringify(emptyState))
    },
    async reconnected({ state, dispatch, rootState }) {
      // TODO: remove signedIn check when we support the option for setting a custom address for txs page
      if (state.loading && rootState.session.signedIn) {
        await dispatch(`getAllTxs`)
      }
    },
    async initializeWallet({ dispatch }) {
      await dispatch(`getAllTxs`)
    },
    async parseAndSetTxs(
      { commit, dispatch, state },
      { txType }: { txType: TxTypes }
    ) {
      const txs = await dispatch(`getTx`, txType)
      if (state[txType] && txs.length > state[txType].length) {
        let newTxs = uniqBy(txs.concat(state[txType]), `txhash`)
        newTxs = await dispatch(`enrichTransactions`, {
          transactions: newTxs,
          txType
        })
        switch (txType) {
          case TX_TYPES.TypeBank:
            commit(`setBankTxs`, newTxs)
            break
          case TX_TYPES.TypeStaking:
            commit(`setStakingTxs`, newTxs)
            break
          case TX_TYPES.TypeGovernance:
            commit(`setGovernanceTxs`, newTxs)
            break
          case TX_TYPES.TypeDistribution:
            commit(`setDistributionTxs`, newTxs)
            break
        }
      }
    },
    async getAllTxs({ commit, dispatch, state, rootState }) {
      try {
        commit(`setHistoryLoading`, true)

        if (!rootState.connection.connected) {
          return
        }

        await Promise.all(
          Object.keys(TX_TYPES).map(txType =>
            dispatch(`parseAndSetTxs`, { txType })
          )
        )

        state.error = null
        commit(`setHistoryLoading`, false)
        state.loaded = true
      } catch (error) {
        state.error = error
      }
    },
    async getTx(
      {
        rootState: {
          session: { address }
        }
      },
      type
    ) {
      let response
      const validatorAddress = address.replace(`cosmos`, `cosmosvaloper`)
      switch (type) {
        case TX_TYPES.TypeBank:
          response = await node.get.bankTxs(address)
          break
        case TX_TYPES.TypeStaking:
          response = await node.get.stakingTxs(address, validatorAddress)
          break
        case TX_TYPES.TypeGovernance:
          response = await node.get.governanceTxs(address)
          break
        case TX_TYPES.TypeDistribution:
          response = await node.get.distributionTxs(address, validatorAddress)
          break
        default:
          throw new Error(`Unknown transaction type: ${type}`)
      }
      if (!response) {
        return []
      }
      return response
    },
    async enrichTransactions({ dispatch }, { transactions, txType }) {
      const enrichedTransactions = await Promise.all(
        transactions.map(async (tx: any) => {
          const blockMetaInfo = await dispatch(`queryBlockInfo`, tx.height)

          const enrichedTx = Object.assign({}, tx, {
            type: txType,
            time: new Date(blockMetaInfo.header.time).toISOString()
          })
          return enrichedTx
        })
      )
      return enrichedTransactions
    }
  }
})

// actions: mockedActions
// TODO TEMP Mock actions to empty functions
// const mockedActions = Object.keys(actions).reduce((acc, key) => {
//   acc[key] = () => {}
//   return acc
// }, {})
