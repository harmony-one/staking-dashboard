// import BN from "bignumber.js"
// import b32 from "@/scripts/b32"
import Vue from "vue"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"
import { fetchDelegationsByAddress } from "@/mock-service"
import * as crypto from "@harmony-js/crypto"
import { TFrontendValidator } from "@/mock-service/validator-helpers"

const emptyState = {
  delegates: [] as TFrontendValidator[],
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
      if(!rootState.session.address) return;

      const delegatorAddressHex = crypto.getAddress(rootState.session.address).basicHex;

      const data = await fetchDelegationsByAddress(rootState.connection.networkConfig.id, delegatorAddressHex);

      commit("setDelegates", data)

      return data;
    },
    async getSelfBond() {}
  }
})
