import Vue from "vue"
import config from "src/config"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

const defaultNetworkConfig = {
  id: "harmony",
  chain_id: "mainnet-1",
  testnet: false,
  title: "Harmony Mainnet",
  rpc_url: "https://api.s0.t.hmny.io",
  __typename: "networks"
}

const state = {
  stopConnecting: false,
  connected: false,
  lastHeader: {
    height: 0,
    chain_id: `mainnet-1`
  },
  networkConfig: defaultNetworkConfig,
  network: defaultNetworkConfig.id,
  connectionAttempts: 0,
  nodeUrl: config.stargate,
  rpcUrl: config.rpc,
  externals: {} as { config: typeof config; node: TNode }
}

export default ({ node }: { node: TNode }): Module<typeof state, any> => ({
  // get tendermint RPC client from basecoin client

  state: {
    ...state,
    externals: {
      config,
      node
    }
  },

  // mutations: {
  //   stopConnecting(state, stop = true) {
  //     Vue.set(state, `stopConnecting`, stop)
  //   },
  //   setConnected(state, connected) {
  //     if (connected) {
  //       state.connectionAttempts = 0
  //     }
  //     Vue.set(state, `connected`, connected)
  //   },
  //   increaseConnectionAttempts(state) {
  //     state.connectionAttempts = state.connectionAttempts + 1
  //   },
  //   resetConnectionAttempts(state) {
  //     state.connectionAttempts = 0
  //   },
  //   setRpcUrl(state, rpcUrl) {
  //     console.log(state.rpcUrl, rpcUrl)
  //     state.rpcUrl = rpcUrl
  //   },
  //   setNetworkId(state, networkId) {
  //     state.network = networkId
  //   }
  // },

  mutations: {
    setNetwork(state, networkConfig: typeof defaultNetworkConfig) {
      state.networkConfig = networkConfig
      state.network = networkConfig.id
      state.lastHeader = { height: 0, chain_id: networkConfig.chain_id }
    },
    setConnected(state, connected) {
      Vue.set(state, `connected`, connected)
    }
  },

  actions: {
    async setLastHeader() {},

    async reconnect({ commit, state }) {
      await node.get.initHarmony(state.networkConfig.rpc_url)

      commit("setConnected", true)
    },

    async connect({ commit, state }) {
      await node.get.initHarmony(state.networkConfig.rpc_url)

      commit("setConnected", true)
    },

    async rpcSubscribe() {},
    checkNodeHalted() {},

    async setNetwork({ state, commit, dispatch }, network) {
      commit("setNetwork", network)
      dispatch("reconnect")
    }
  }
})

// const NODE_HALTED_TIMEOUT = config.node_halted_timeout
// const MAX_CONNECTION_ATTEMPTS = 5

// actions: {
//   async setLastHeader({ state }, header) {
//     state.lastHeader = header
//   },
//   reconnect({ commit, dispatch }) {
//     commit("resetConnectionAttempts")
//     commit("stopConnecting", false)
//     dispatch("connect")
//   },
//   async connect({ state, commit, dispatch }) {
//     const {
//       externals: { node },
//       rpcUrl,
//       connectionAttempts,
//       stopConnecting
//     } = state
//
//     if (connectionAttempts >= MAX_CONNECTION_ATTEMPTS) {
//       commit("stopConnecting")
//       return
//     }
//     if (stopConnecting) return
//
//     commit(`setConnected`, false)
//     try {
//       await node.tendermint.connect(rpcUrl)
//       node.tendermint.ondisconnect = () => {
//         commit(`setConnected`, false)
//         dispatch(`connect`)
//       }
//       commit(`setConnected`, true)
//       dispatch(`reconnected`)
//       dispatch(`rpcSubscribe`)
//       dispatch(`subscribeToBlocks`)
//     } catch (err) {
//       console.log(`Failed reconnect attempt`)
//       commit("increaseConnectionAttempts")
//       setTimeout(() => {
//         dispatch(`connect`)
//       }, 1000)
//     }
//   },
//   async rpcSubscribe({ commit, dispatch, rootState }) {
//     const { node } = state.externals
//     if (state.stopConnecting) return
//
//     node.tendermint.status().then(status => {
//       dispatch(`setLastHeader`, {
//         height: status.sync_info.latest_block_height,
//         chain_id: status.node_info.network
//       })
//
//       if (status.node_info.network === `testnet`) {
//         commit(`setInsecureMode`)
//       }
//     })
//
//     node.tendermint.subscribe(
//       {
//         query: `tm.event = 'NewBlockHeader'`
//       },
//       ({ header }) => {
//         dispatch(`setLastHeader`, header)
//       }
//     )
//     if (rootState.session.signedIn) {
//       dispatch(`walletSubscribe`)
//     }
//     dispatch(`checkNodeHalted`)
//   },
//   checkNodeHalted(
//     { state, dispatch },
//     nodeHaltedTimeout = NODE_HALTED_TIMEOUT
//   ) {
//     state.nodeHaltedTimeout = setTimeout(() => {
//       if (!state.lastHeader.height) {
//         dispatch(`nodeHasHalted`)
//       }
//     }, nodeHaltedTimeout) // default 30s
//   },
//   async setNetwork({ commit, dispatch }, network) {
//     commit("setNetworkId", network.id)
//     commit("setRpcUrl", network.rpc_url)
//     dispatch("reconnect")
//     console.info(
//       `Connecting to: ${network.title} (${network.chain_id}) – ${network.rpc_url}`
//     )
//   }
// },
