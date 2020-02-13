import config from "src/config"
import HarmonyApp from "./harmony-ledger"
import { TNode } from "@/connectors/node"
import { Module } from "vuex"
import { ITransactionData } from "@/staking-client/Staking"
import { Transaction } from "@harmony-js/transaction"
import { StakingTransaction } from "@harmony-js/staking"
import TransportWebUSB from "@ledgerhq/hw-transport-webusb"
// @ts-ignore
import TransportWebHID from "@ledgerhq/hw-transport-webhid"

const INTERACTION_TIMEOUT = 120 * 1000
var harmonyApp: any

declare global {
  interface Navigator {
    hid: Object
  }
}

async function getHarmonyApp() {
  if (harmonyApp) {
    return harmonyApp
  }

  // check if browser is supported
  getBrowser(navigator.userAgent)

  let transport
  if (isWindows(navigator.platform)) {
    if (!navigator.hid) {
      throw new Error(
        `Your browser doesn't have HID enabled. Please enable this feature by visiting: chrome://flags/#enable-experimental-web-platform-features`
      )
    }

    try {
      transport = await TransportWebHID.create(INTERACTION_TIMEOUT)
    } catch (err) {
      // throw unknown error
      throw err
    }
  }
  // OSX / Linux
  else {
    try {
      transport = await TransportWebUSB.create(INTERACTION_TIMEOUT)
    } catch (err) {
      /* istanbul ignore next: specific error rewrite */
      if (
        err.message
          .trim()
          .startsWith("No WebUSB interface found for your Ledger device")
      ) {
        throw new Error(
          "Couldn't connect to a Ledger. Please upgrade the Ledger firmware to version 1.5.5 or later."
        )
      }
      /* istanbul ignore next: specific error rewrite */
      if (err.message.trim().startsWith("Unable to claim interface")) {
        // apparently can't use it in several tabs in parallel
        throw new Error(
          "Could not access Ledger device. Is it being used in another tab?"
        )
      }
      /* istanbul ignore next: specific error rewrite */
      if (err.message.trim().startsWith("Not supported")) {
        // apparently can't use it in several tabs in parallel
        throw new Error(
          "Your browser doesn't seem to support WebUSB yet. Try updating it to the latest version."
        )
      }
      /* istanbul ignore next: specific error rewrite */
      if (err.message.trim().startsWith("No device selected")) {
        // apparently can't use it in several tabs in parallel
        throw new Error(
          "You did not select a Ledger device. Check if the Ledger is plugged in and unlocked."
        )
      }

      // throw unknown error
      throw err
    }
  }

  harmonyApp = new HarmonyApp(transport)
  return harmonyApp
}

export default ({ node }: { node: TNode }): Module<any, any> => ({
  state: {
    externals: { config } // for
  },
  actions: {
    async connectLedgerApp() {
      const app = await getHarmonyApp()
      const response: any = await app.publicKey(false)
      return response.one_address.toString()
    },

    async signTransactionLeger(params, transactionData: ITransactionData) {
      const app = await getHarmonyApp()
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

function isWindows(platform: string) {
  return platform.indexOf("Win") > -1
}

function getBrowser(userAgent: string) {
  const ua = userAgent.toLowerCase()
  const isChrome = /chrome|crios/.test(ua) && !/edge|opr\//.test(ua)

  if (!isChrome) {
    throw new Error("Your browser doesn't support Ledger devices.")
  }

  if (isChrome) return '"chrome"'
}
