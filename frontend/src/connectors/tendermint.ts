/* istanbuld ignore file: mostly websocket logic */
import { convertWsArgs, getHost } from "@/connectors/helpers"

const connectionTimeoutInterval = 5000

type TSubscription = {
  id: string
  method: string
  parameters: any
  callback?: (value: any) => void
  resolve: (value: any) => void
  reject: (value: any) => void
}

export default class Tendermint {
  socket?: WebSocket
  subscriptions: Array<TSubscription> = []
  ondisconnect?: () => void
  url: string

  constructor(url: string) {
    this.url = url
  }

  isConnected = () => {
    return this.socket && this.socket.readyState === WebSocket.OPEN
  }

  disconnect = async () => {
    try {
      await this.unsubscribeAll()
    } catch (error) {
      // ignore error because throws if nothing to unsubscribe
    }

    this.subscriptions = []

    this.socket && this.socket.close()
  }

  connect = async (websocketEndpoint: string) => {
    console.log("TENDERMINT WEBSOCKET ENDPOINT -> ", websocketEndpoint)
    // if we have an existing connection, first disconnect that one
    if (this.isConnected()) {
      await this.disconnect()
    }

    try {
      const socket = await this.createWebsocket(websocketEndpoint)
      this.socket = socket

      console.log("SOCKET HERE -> ", socket)
    } catch (error) {
      throw error
    }

    const handler = (event: any) => {
      let { id: eventId, error, result } = JSON.parse(event.data)
      const isSubscriptionEvent = eventId.indexOf("#event") !== -1
      if (isSubscriptionEvent) {
        eventId = eventId.replace("#event", "")
      }

      const subscription = this.subscriptions.find(({ id }) => eventId === id)
      if (subscription) {
        if (isSubscriptionEvent) {
          if (subscription.callback) {
            subscription.callback(result.data.value)
          }
          return
        }

        if (error) {
          subscription.reject(error)
        } else {
          subscription.resolve(result)
        }

        // remove single subscription
        if (subscription.method !== "subscribe") {
          this.subscriptions = this.subscriptions.filter(
            ({ id }) => eventId !== id
          )
        }
      }
    }

    this.socket.onmessage = handler
    this.socket.onerror = handler

    // poll websocket connection
    setInterval(() => this.pollConnection(), connectionTimeoutInterval * 6)

    this.subscriptions.forEach(subscription =>
      this.startSubscription(subscription)
    )
  }

  pollConnection = () => {
    let connectionTimeout = setTimeout(() => {
      if (this.ondisconnect) this.ondisconnect()
    }, connectionTimeoutInterval)
    this.health().then(() => clearTimeout(connectionTimeout))
  }

  subscribe = (args?: any, callback?: (value: any) => void, method = "subscribe"): Promise<any> => {
    const id = Math.random().toString(36)
    const parameters = convertWsArgs(args)

    return new Promise((resolve, reject) => {
      const subscription: TSubscription = {
        id,
        method,
        parameters,
        callback,
        resolve,
        reject
      }
      this.subscriptions.push(subscription)

      if (this.isConnected()) {
        this.startSubscription(subscription)
      }
    })
  }

  startSubscription = ({ id, method, parameters }: TSubscription) => {
    return (
      this.socket &&
      this.socket.send(
        JSON.stringify({
          jsonrpc: `2.0`,
          id,
          method,
          params: parameters
        })
      )
    )
  }

  unsubscribe = (args?: any) => this.subscribe(args, undefined, "unsubscribe")
  unsubscribeAll = (args?: any) =>
    this.subscribe(args, undefined, "unsubscribe_all")
  status = (args?: any) => this.subscribe(args, undefined, "status")
  net_info = (args?: any) => this.subscribe(args, undefined, "net_info")
  dial_peers = (args?: any) => this.subscribe(args, undefined, "dial_peers")
  dial_seeds = (args?: any) => this.subscribe(args, undefined, "dial_seeds")
  blockchain = (args?: any) => this.subscribe(args, undefined, "blockchain")
  genesis = (args?: any) => this.subscribe(args, undefined, "genesis")
  health = (args?: any) => this.subscribe(args, undefined, "health")
  block = (args?: any) => this.subscribe(args, undefined, "block")
  blockResults = (args?: any) =>
    this.subscribe(args, undefined, "block_results")

  validators = (args?: any) => this.subscribe(args, undefined, "validators")
  consensus_state = (args?: any) =>
    this.subscribe(args, undefined, "consensus_state")
  dump_consensus_state = (args?: any) =>
    this.subscribe(args, undefined, "dump_consensus_state")
  broadcast_tx_commit = (args?: any) =>
    this.subscribe(args, undefined, "broadcast_tx_commit")
  broadcast_tx_sync = (args?: any) =>
    this.subscribe(args, undefined, "broadcast_tx_sync")
  broadcast_tx_async = (args?: any) =>
    this.subscribe(args, undefined, "broadcast_tx_async")
  unconfirmed_txs = (args?: any) =>
    this.subscribe(args, undefined, "unconfirmed_txs")
  numUnconfirmedTxs = (args?: any) =>
    this.subscribe(args, undefined, "num_unconfirmed_txs")
  commit = (args?: any) => this.subscribe(args, undefined, "commit")
  tx = (args?: any) => this.subscribe(args, undefined, "tx")
  txSearch = (args?: any) => this.subscribe(args, undefined, "tx_search")

  abciQuery = (args?: any) => this.subscribe(args, undefined, "abci_query")
  abciInfo = (args?: any) => this.subscribe(args, undefined, "abci_info")

  unsafeFlushMempool = (args?: any) =>
    this.subscribe(args, undefined, "unsafe_flush_mempool")
  unsafeStartCpu_profiler = (args?: any) =>
    this.subscribe(args, undefined, "unsafe_start_cpu_profiler")
  unsafeStopCpuProfiler = (args?: any) =>
    this.subscribe(args, undefined, "unsafe_stop_cpu_profiler")
  unsafeWriteHeapProfile = (args?: any) =>
    this.subscribe(args, undefined, "unsafe_write_heap_profile")

  private createWebsocket = async (websocketEndpoint: string) => {
    const websocketHost = getHost(websocketEndpoint)
    const https = websocketEndpoint.startsWith(`https`)

    const socket = new WebSocket(
      `${https ? `wss` : `ws`}://${websocketHost}/websocket`
    )

    await new Promise((resolve, reject) => {
      socket.onopen = resolve
      socket.onclose = reject
    })

    return socket
  }
}
