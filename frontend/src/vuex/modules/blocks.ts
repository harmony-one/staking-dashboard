import Vue from "vue"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

export const cache = (list: any[], element: object, maxSize = 100) => {
  if (list.length >= maxSize) list.splice(-1, 1)
  list.unshift(element)
  return list
}

interface IState {
  blockMetas: any
  blocks: any[]
  subscription: boolean
  subscribedRPC: any
  syncing: boolean
  loading: boolean
  loaded: boolean
  error: any
  blockHeight: any
}

export default ({ node }: { node: TNode }): Module<IState, any> => ({
  state: {
    blockMetas: {},
    blocks: [],
    subscription: false,
    subscribedRPC: null,
    syncing: true,
    loading: false,
    loaded: false,
    error: null,
    blockHeight: null
  },

  mutations: {
    setBlockHeight: (state, height) => (state.blockHeight = height),
    setSyncing: (state, syncing) => (state.syncing = syncing),
    setBlockMetas: (state, blockMetas) => (state.blockMetas = blockMetas),
    setBlocks: (state, blocks) => (state.blocks = blocks),
    addBlock: (state, block) =>
      Vue.set(state, `blocks`, cache(state.blocks, block)),
    setSubscribedRPC: (state, subscribedRPC) =>
      (state.subscribedRPC = subscribedRPC),
    setSubscription: (state, subscription) =>
      (state.subscription = subscription),
    setBlocksLoading: (state, loading) => (state.loading = loading),
    setBlocksLoaded: (state, loaded) => (state.loaded = loaded),
    setBlocksError: (state, error) => (state.error = error)
  },

  actions: {
    reconnected({ commit }) {
      //on a reconnect we assume, that the rpc connector changed, so we can safely resubscribe to blocks
      commit(`setSubscription`, false)
    },
    async getBlockTxs({ dispatch }, height) {
      let txs = await node.get.txsByHeight(height)
      const time = (await dispatch("queryBlockInfo", height)).header.time
      txs = txs.map((tx: any) =>
        Object.assign({}, tx, {
          height,
          time
        })
      )
      return txs
    },
    async queryBlockInfo({ state, commit }, height) {
      try {
        let blockMetaInfo = state.blockMetas[height]
        if (blockMetaInfo) {
          return blockMetaInfo
        }
        commit(`setBlocksLoading`, true)
        const block = await node.get.block(height)

        blockMetaInfo = block.block_meta

        commit(`setBlockMetas`, {
          ...state.blockMetas,
          [height]: blockMetaInfo
        })
        commit(`setBlocksLoading`, false)
        commit(`setBlocksLoaded`, true)
        return blockMetaInfo
      } catch (error) {
        commit(`setBlocksLoading`, false)
        commit(`setBlocksError`, error)
        return null
      }
    }
  }
})
