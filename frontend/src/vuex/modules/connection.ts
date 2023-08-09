import Vue from "vue"
import config from "src/config"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"
import {
  fetchNetworkInfo,
  fetchNetworkInfoLite,
  fetchNetworks
} from "../../mock-service"
// import { setNetwork as setNetworkToExtension } from "@/scripts/extension-utils"
import { POLLING_TIMEOUT_SEC } from "@/constants/time-constants"
import { TFrontendValidator } from "@/mock-service/validator-helpers"

const DEFAULT_NETWORK = process.env.DEFAULT_NETWORK

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export interface INetworkConfig {
  id: string
  chain_id: string
  chain_title: string
  testnet: boolean
  title: string
  rpc_url: string
  explorer_url: string
  __typename: string
}

export interface INetworkInfo {
  effective_median_stake: number
  total_one_staked: number
  current_block_number: number
  current_block_hash: string
  "total-supply": string
  "circulating-supply": string
  "epoch-last-block": string
  "total-staking": string
  "median-raw-stake": string
  time_next_epoch: string

  current_epoch: number
  total_seats: number
  total_seats_used: number
  effective_median_stake_changed: number
  externalShards: Array<{ total: number; external: number }>
  history: any
  raw_stake_distro: number[]
  effective_median_stake_distro: string[]
  table: Array<TFrontendValidator>
  live_table: Array<TFrontendValidator>
  live_raw_stake_distro: Array<number>
  live_effective_median_stake_distro: Array<number>

  lastEpochTotalStake: number
  liveEpochTotalStake: number
  lastEpochEffectiveStake: number
  liveExternalShards: Array<{ total: number; external: number }>
  liveTotalSeatsUsed: number
  liveTotalSeats: number
}

const state = {
  stopConnecting: false,
  connected: false,
  lastHeader: {
    height: 0,
    chain_id: `1`
  },
  networkConfig: {} as INetworkConfig,
  network: DEFAULT_NETWORK,
  connectionAttempts: 0,
  externals: {} as { config: typeof config; node: TNode },
  networks: Array<INetworkConfig>(),
  networkInfo: {} as INetworkInfo,
  isNetworkInfoLoading: false,
  isNetworkFetching: true,
  chainTitle: ""
}

let interval: any

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
    setNetwork(state, networkConfig: INetworkConfig) {
      state.networkConfig = {
        ...networkConfig,
        explorer_url:
            networkConfig.chain_title === 'testnet' ?
                "https://explorer.testnet.harmony.one":
                networkConfig.explorer_url
      }
      state.network = networkConfig.id
      state.chainTitle = networkConfig.chain_title
      state.lastHeader = { height: 0, ...networkConfig }
    },
    setChainTitle(state, payload) {
      state.chainTitle = payload
    },
    setConnected(state, connected) {
      Vue.set(state, `connected`, connected)
    },
    setNetworkFetching(state, fetching) {
      state.isNetworkFetching = fetching
    },
    setNetworks(state, networks: INetworkConfig[]) {
      state.networks = networks
    },
    setNetworkInfo(state, networkInfo: INetworkInfo) {
      state.networkInfo = { ...state.networkInfo, ...networkInfo }
      state.isNetworkInfoLoading = true

      // console.log(
      //   "time_next_epoch: ",
      //   networkInfo.time_next_epoch,
      //   (networkInfo.time_next_epoch / 3600).toFixed(3)
      // )
    }
  },

  actions: {
    async setLastHeader() {},

    async init({ state, dispatch, commit, rootState }) {
      commit("setNetworkFetching", true)
      let networks: INetworkConfig[] | null = null

      while (!networks) {
        try {
          networks = await fetchNetworks()
        } catch (e) {
          console.error(e)
          await sleep(500)
        }
      }

      let network = networks.find(
        network => network.chain_title === state.chainTitle
      )

      if (!network) {
        network = networks.find(network => network.id === state.network)
      }

      if (!interval) {
        interval = setInterval(
          () => dispatch("loadNetworkInfoLite"),
          POLLING_TIMEOUT_SEC * 3000
        )
      }

      commit("setNetworks", networks)
      dispatch("setNetwork", network || networks[0])
      dispatch("loadNetworkInfoLite")
      commit("setNetworkFetching", false)
    },

    async reconnect({ commit }) {
      // setNetworkToExtension(state.networkConfig)

      commit("setConnected", true)

      // store.dispatch("getDelegates");
    },
    setNetworkByChainTitle({ commit, state }, payload) {
      const whiteList = ["mainnet", "testnet"]

      if (
        state.chainTitle === payload &&
        state.networkConfig.chain_title === payload
      ) {
        return true
      }

      const networkConfig = state.networks.find(n => n.chain_title === payload)

      if (networkConfig || whiteList.includes(payload)) {
        commit("setChainTitle", payload)
        if (networkConfig) {
          commit("setNetwork", networkConfig)
        }
        return true
      } else {
        return false
      }
    },

    async loadNetworkInfoLite({ commit, state }) {
      let networkInfo = {}

      try {
        networkInfo = await fetchNetworkInfoLite(state.networkConfig.id)
      } catch (err) {
        networkInfo = {}
      }

      commit("setNetworkInfo", networkInfo)
    },

    async loadNetworkInfoFull({ commit, state }, chainTitle) {
      let networkInfo = {}

      try {
        networkInfo = await fetchNetworkInfo(chainTitle)
      } catch (err) {
        networkInfo = {}
      }

      commit("setNetworkInfo", networkInfo)
    },

    // async connect({ commit, state }) {
    //   await node.get.initHarmony(
    //     state.networkConfig.rpc_url,
    //     state.networkConfig.chain_id
    //   )
    //
    //   commit("setConnected", true)
    // },

    async rpcSubscribe() {},
    checkNodeHalted() {},

    async setNetwork({ state, commit, dispatch }, network) {
      commit("setNetwork", network)
      dispatch("reconnect")
    }
  }
})
