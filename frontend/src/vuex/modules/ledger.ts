import config from "src/config"
import TransportWebUSB from "@ledgerhq/hw-transport-webusb"
import HarmonyApp from "./harmony-ledger"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"
import { ITransactionData } from "@/staking-client/Staking"
import { Transaction } from "@harmony-js/transaction"
import { StakingTransaction } from "@harmony-js/staking"

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

      let signedTxn: Transaction | StakingTransaction,
        txn,
        shardId = 0

      const signTransaction = async (txn: Transaction) =>
        await app.signTransaction(
          txn,
          node.staking.harmony.chainId,
          shardId,
          node.staking.harmony.messenger
        )

      const signStakingTransaction = async (txn: StakingTransaction) =>
        await app.signStakingTransaction(
          txn,
          node.staking.harmony.chainId,
          shardId,
          node.staking.harmony.messenger
        )

      switch (transactionData.type) {
        case "MsgSend":
          txn = node.staking.createTransaction(transactionData)
          signedTxn = await signTransaction(txn)
          break
        case "MsgDelegate":
          await node.staking.setSharding()

          txn = node.staking.createDelegateTransaction(transactionData)
          signedTxn = await signStakingTransaction(txn)
          signedTxn.setMessenger(node.staking.harmony.messenger)
          break
        case "MsgUndelegate":
          await node.staking.setSharding()

          txn = node.staking.createUndelegateTransaction(transactionData)
          signedTxn = await signStakingTransaction(txn)
          signedTxn.setMessenger(node.staking.harmony.messenger)
          break

        case "MsgWithdrawDelegationReward":
          await node.staking.setSharding()

          txn = node.staking.createRewards(transactionData)
          signedTxn = await signStakingTransaction(txn)
          signedTxn.setMessenger(node.staking.harmony.messenger)
          break
      }

      // const rawTransaction = signedTxn.getRawTransaction()

      const included = async () => await node.staking.sendTransaction(signedTxn)

      return { included }
    }
  }
})
