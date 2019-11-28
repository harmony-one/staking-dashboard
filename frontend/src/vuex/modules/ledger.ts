import config from "src/config"
import TransportWebUSB from "@ledgerhq/hw-transport-webusb"
import HarmonyApp from "./harmony-ledger"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"
import { ITransactionData } from "@/staking-client/Staking"

export default ({ node }: { node: TNode }): Module<any, any> => ({
  state: {
    externals: { config } // for
  },
  actions: {
    async connectLedgerApp() {
      const transport = await TransportWebUSB.create()
      const app = new HarmonyApp(transport)
      const response: any = await app.publicKey(false)
      return response.one_address.toString()
    },
    async signTransactionLeger(params, transactionData: ITransactionData) {
      const transport = await TransportWebUSB.create()
      const app = new HarmonyApp(transport)

      let txn,
        shardId = 0

      switch (transactionData.type) {
        case "MsgSend":
          txn = node.staking.createTransaction(transactionData)
          break
        case "MsgDelegate":
          txn = node.staking.createStakingTransaction(transactionData)
          break
        case "MsgUndelegate":
          txn = node.staking.createUnStakingTransaction(transactionData)
          break
      }

      const signedTxn = await app.signTransaction(
        txn,
        node.staking.harmony.chainId,
        shardId,
        node.staking.harmony.messenger
      )

      const rawTransaction = signedTxn.getRawTransaction()

      const included = async () =>
        await node.staking.sendTransaction(rawTransaction)

      return { included }
    }
  }
})
