import config from "src/config"
import { getSigner } from "./signer"
import { uatoms } from "@/scripts/num"
import { mockTransfer } from "../../mock-service"
import { waitTransactionConfirm } from "src/scripts/extension-utils"

import {
  MsgDelegate,
  MsgSend,
  MsgUndelegate,
  MsgWithdrawDelegationReward
} from "./messages"
import { INetworkConfig } from "@/vuex/modules/connection"

type TMessage =
  | "MsgDelegate"
  | "MsgSend"
  | "MsgUndelegate"
  | "MsgWithdrawDelegationReward"

export default class ActionManager {
  context: any
  // staking?: Staking
  message: any
  messageType?: TMessage

  setContext(context = null) {
    if (!context) {
      throw Error("Context cannot be empty")
    }
    this.context = context
    // this.staking = new Staking(
    //   this.context.url || "",
    //   this.context.chainId || ""
    // )
  }

  readyCheck() {
    if (!this.context) {
      throw Error("This modal has no context.")
    }

    if (!this.context.connected) {
      throw Error(
        `Currently not connected to a secure node. Please try again when Harmony Staking has secured a connection.`
      )
    }

    if (!this.message) {
      throw Error(`No message to send.`)
    }
  }

  setMessage(type: TMessage, transactionProperties: any) {
    if (!this.context) {
      throw Error("This modal has no context.")
    }

    this.messageType = type

    switch (type) {
      case "MsgSend":
        this.message = MsgSend(this.context.userAddress, transactionProperties)
        break

      case "MsgDelegate":
        this.message = MsgDelegate(
          this.context.userAddress,
          transactionProperties
        )
        break

      case "MsgUndelegate":
        this.message = MsgUndelegate(
          this.context.userAddress,
          transactionProperties
        )
        break

      case "MsgWithdrawDelegationReward":
        this.message = MsgWithdrawDelegationReward(
          this.context.userAddress,
          transactionProperties
        )
        break
    }
  }

  async simulate(memo: any) {
    const rez = await mockTransfer(memo)

    return rez.gas_estimate
  }

  async send(memo: any, txMetaData: any, networkConfig: INetworkConfig) {
    this.readyCheck()

    const { gasEstimate, gasPrice, submitType } = txMetaData
    const signer: any = await getSigner(config, submitType, {
      address: this.context.userAddress
    })

    try {
      const fullMessage = {
        msgs: [this.message],
        fee: {
          gas: String(gasEstimate),
          amount: convertCurrencyData([gasPrice])
        },
        network: networkConfig
      }

      const { txHash } = await signer(JSON.stringify(fullMessage))

      const included = waitTransactionConfirm

      return { included, hash: txHash }
    } catch (err) {
      console.log("[ActionManager] send error", err)
    }
  }
}

function convertCurrencyData(amounts: any[]) {
  return amounts.map(({ amount, denom }: any) => ({
    amount: toMicroAtomString(amount),
    denom
  }))
}

function toMicroAtomString(amount: number) {
  return String(uatoms(amount))
}
