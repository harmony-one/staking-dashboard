import config from "src/config"
import TransportWebUSB from "@ledgerhq/hw-transport-webusb"
// import HarmonyApp, { SW_ERR } from "./harmony-ledger"
import HarmonyApp, { SW_ERR } from "./ledger-via-sdk"

import { Module } from "vuex"
import Staking, { ITransactionData } from "@/staking-client/Staking"
import { Transaction } from "@harmony-js/transaction"
import { StakingTransaction } from "@harmony-js/staking"
// @ts-ignore
import TransportWebHID from "@ledgerhq/hw-transport-webhid"

const INTERACTION_TIMEOUT = 120 * 1000
var harmonyApp: any

const staking = new Staking()

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
      throw new Error(`BROWSER_HID_DISABLED`)
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
        (err as Error).message
          .trim()
          .startsWith("No WebUSB interface found for your Ledger device")
      ) {
        throw new Error(
          "Couldn't connect to a Ledger. Please upgrade the Ledger firmware to version 1.5.5 or later."
        )
      }
      /* istanbul ignore next: specific error rewrite */
      if ((err as Error).message.trim().startsWith("Unable to claim interface")) {
        // apparently can't use it in several tabs in parallel
        throw new Error(
          "Could not access Ledger device. Is it being used in another tab?"
        )
      }
      /* istanbul ignore next: specific error rewrite */
      if ((err as Error).message.trim().startsWith("Not supported")) {
        // apparently can't use it in several tabs in parallel
        throw new Error(
          "Your browser doesn't seem to support WebUSB yet. Try updating it to the latest version."
        )
      }
      /* istanbul ignore next: specific error rewrite */
      if ((err as Error).message.trim().startsWith("No device selected")) {
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

export default (): Module<any, any> => ({
  state: {
    externals: { config } // for
  },
  actions: {
    async connectLedgerApp() {
      const app = await getHarmonyApp()
      let response: any = await app.publicKey(false)
      if (response.return_code === SW_ERR) {
        throw new Error("Authorization request rejected")
      }

      if (!response.one_address) {
        throw new Error("Address Not Found")
      }

      if (response.one_address.indexOf(`1`) === -1) {
        throw new Error("Not A Valid Bech32 Address")
      }

      return response.one_address.toString()
    },

    async showLedgerAddress() {
      const app = await getHarmonyApp()
      let response: any = await app.publicKey(true)

      if (response.return_code === SW_ERR) {
        throw new Error("Address Rejected")
      }

      if (!response.one_address) {
        throw new Error("Address Not Found")
      }

      if (response.one_address.indexOf(`1`) === -1) {
        throw new Error("Not A Valid Bech32 Address")
      }

      return response.one_address.toString()
    },

    async signTransactionLeger(
      { commit, rootState },
      transactionData: ITransactionData
    ) {
      // console.log("signTransactionLeger", { transactionData })
      await staking.initHarmony(
        rootState.connection.networkConfig.rpc_url,
        rootState.connection.networkConfig.chain_id
      )
      const app = await getHarmonyApp()
      // console.log("getHarmonyApp", app)
      let signedTxn: Transaction | StakingTransaction,
        txn,
        shardId = 0

      const signTransaction = async (txn: Transaction) =>
        await app.signTransaction(
          txn,
          staking.harmony.chainId,
          shardId,
          staking.harmony.messenger
        )

      const signStakingTransaction = async (txn: StakingTransaction) =>
        await app.signStakingTransaction(
          txn,
          staking.harmony.chainId,
          shardId,
          staking.harmony.messenger
        )

      switch (transactionData.type) {
        case "MsgSend":
          txn = staking.createTransaction(transactionData)
          signedTxn = await signTransaction(txn)
          break
        case "MsgDelegate":
          // console.log("MsgDelegate branch")
          await staking.setSharding()
          // console.log("setSharding")
          txn = staking.createDelegateTransaction(transactionData)
          // console.log("createDelegateTransaction", txn)
          signedTxn = await signStakingTransaction(txn)
          signedTxn.setMessenger(staking.harmony.messenger)
          break
        case "MsgUndelegate":
          await staking.setSharding()

          txn = staking.createUndelegateTransaction(transactionData)
          signedTxn = await signStakingTransaction(txn)
          signedTxn.setMessenger(staking.harmony.messenger)
          break

        case "MsgWithdrawDelegationReward":
          await staking.setSharding()

          txn = staking.createRewards(transactionData)
          signedTxn = await signStakingTransaction(txn)
          signedTxn.setMessenger(staking.harmony.messenger)
          break
      }

      // const rawTransaction = signedTxn.getRawTransaction()
      //@ts-ignore
      // console.log("sending signed transaction", signedTxn)
      const included = async () => {
        const r = await staking.sendTransaction(signedTxn)
        // console.log("sent! res=", r)
        return r
      }
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
