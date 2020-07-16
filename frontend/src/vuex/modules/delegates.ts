// import BN from "bignumber.js"
// import b32 from "@/scripts/b32"
import Vue from "vue"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"
import { fetchDelegationsByAddress } from "@/mock-service"

const validator_sample = {
  operator_address: "onevaloper16ddmnhsxkjh6xt4n2xk36d56pndvjxcn6gffpm",
  consensus_pubkey:
    "onevalconspub1zcjduepqzygcsfu4qzqs6uzh97att2xmrq840gkv9tmg7vl60mh2l2tptuuszettz0",
  jailed: false,
  status: 1,
  tokens: "3000000",
  delegator_shares: "3000000.000000000000000000",
  description: {
    moniker: "one",
    identity: "",
    website: "",
    details: ""
  },
  unbonding_height: "2225401",
  unbonding_time: "2019-11-08T04:39:53.062405594Z",
  commission: {
    rate: "0.100000000000000000",
    max_rate: "0.500000000000000000",
    max_change_rate: "0.100000000000000000",
    update_time: "2019-10-17T19:12:23.174697733Z"
  },
  min_self_delegation: "1"
}

type TValidator = typeof validator_sample

const emptyState = {
  delegates: [] as TValidator[],
  loading: false,
  loaded: false,
  error: null,
  signingInfos: {},
  selfBond: {} as any
}

export default ({ node }: { node: TNode }): Module<typeof emptyState, any> => ({
  state: JSON.parse(JSON.stringify(emptyState)),
  mutations: {
    setDelegateLoading(state, loading) {
      state.loading = loading
    },
    setDelegates(state, delegates) {
      state.delegates = delegates
    },
    setSelfBond(state, { validator: { operator_address }, ratio }) {
      Vue.set(state.selfBond, operator_address, ratio)
    }
  },
  actions: {
    reconnected() {},
    async getDelegates({ commit, rootState }) {
      if (!rootState.session.address) return

      const data = await fetchDelegationsByAddress(
        rootState.connection.chainTitle,
        rootState.session.address
      )

      commit("setDelegates", data)

      return data
    },
    async getSelfBond() {}
  }
})
