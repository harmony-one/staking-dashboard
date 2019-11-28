import config from "src/config"
import TransportWebUSB from "@ledgerhq/hw-transport-webusb"
import HarmonyApp from "./harmony-ledger"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"

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
    async signTransaction() {
      const transport = await TransportWebUSB.create()
      const app = new HarmonyApp(transport)

      return app;

      // const shardId = 0
      // const value = transactionData.amounts[0].amount
      //
      // const txn = this.harmony.transactions.newTx({
      //   to: transactionData.toAddress,
      //   value: new Unit(value).asSzabo().toWei(),
      //   gasLimit: fee.gasEstimate,
      //   gasPrice: new Unit(fee.gasPrice.amount).asGwei().toWei(),
      //   shardID: shardId,
      //   toShardID: 0
      //   //nonce: "0x"
      // })
      //
      // const signedTxn = await app.signTransaction(
      //   txn,
      //   this.harmony.chainId,
      //   shardId,
      //   this.harmony.messenger
      // )
      //
      // const rawTransaction = signedTxn.getRawTransaction();
    }
  }
})
