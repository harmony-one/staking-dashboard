import Vue from "vue"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

// TODO simplify with one call

const emptyState = {
  loading: false,
  loaded: false,
  error: null,
  bank: [], // {height, result: { gas, tags }, tx: { type, value: { fee: { amount: [{denom, amount}], gas}, msg: {type, inputs, outputs}}, signatures} }}
  staking: [],
  governance: [],
  distribution: [],
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
    async getAllTxs({ commit, dispatch, state, rootState }) {
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
