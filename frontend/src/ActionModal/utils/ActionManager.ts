import config from "src/config"
import { getSigner } from "./signer"
// import transaction from "./transactionTypes"
import { uatoms } from "@/scripts/num"
import { mockTransfer } from "../../mock-service"
// import Staking from "@/staking-client"
import { waitTransactionConfirm } from "src/scripts/extension-utils"

import { MsgDelegate, MsgSend, MsgUndelegate } from "./messages"

type TMessage = "MsgDelegate" | "MsgSend" | "MsgUndelegate"

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
        `Currently not connected to a secure node. Please try again when Lunie has secured a connection.`
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
    }
  }

  async simulate(memo: any) {
    const rez = await mockTransfer(memo)

    return rez.gas_estimate

    // this.readyCheck()
    // const gasEstimate = await this.message.simulate({
    //   memo: memo
    // })
    // return gasEstimate
  }

  async send(memo: any, txMetaData: any) {
    // memo - "(Sent via Lunie)"
    // txtMetaData example
    // {
    //   gasEstimate: "24341",
    //     gasPrice: { amount: "0.000000001", denom: "uatom" },
    //   password: null,
    //     submitType: "extension"
    // }

    // const txtMetaData = {
    //   gasEstimate: "24341",
    //   gasPrice: { amount: "0.000000001", denom: "uatom" },
    //   password: null,
    //   submitType: "extension"
    // }

    this.readyCheck()

    const { gasEstimate, gasPrice, submitType, password } = txMetaData
    const signer: any = await getSigner(config, submitType, {
      address: this.context.userAddress,
      password
    })

    // if (this.messageType === transaction.WITHDRAW) {
    //   this.message = this.createWithdrawTransaction()
    // }

    // Send message to extension and wait to response
    try {
      // const { included, hash } = await this.message.send(
      //   {
      //     gas: String(gasEstimate),
      //     gasPrices: convertCurrencyData([gasPrice]),
      //     memo
      //   },
      //   signer
      // )

      const fullMessage = {
        msgs: [this.message],
        fee: {
          gas: String(gasEstimate),
          amount: convertCurrencyData([gasPrice])
        }
      }

      await signer(JSON.stringify(fullMessage))

      const included = waitTransactionConfirm

      return { included, hash: "" }
    } catch (err) {
      console.log("[ActionManager] send error", err)
    }
  }

  // createWithdrawTransaction() {
  //   const addresses = getTop5RewardsValidators(
  //     this.context.bondDenom,
  //     this.context.rewards
  //   )
  //   return this.createMultiMessage(
  //     "MsgWithdrawDelegationReward",
  //     this.context.userAddress,
  //     { validatorAddresses: addresses }
  //   )
  // }

  // Withdrawing is a multi message for all validators you have bonds with
  // createMultiMessage(
  //   type: MsgType,
  //   senderAddress: string,
  //   params: { validatorAddresses: string[] }
  // ) {
  //   const messages = params.validatorAddresses.map(
  //     validatorAddress =>
  //       this.staking && this.staking[type](senderAddress, { validatorAddress })
  //   )
  //   return this.staking && this.staking.MultiMessage(senderAddress, messages)
  // }
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

// // limitation of the block, so we pick the top 5 rewards and inform the user.
// function getTop5RewardsValidators(bondDenom: string, rewardsObject: object) {
//   // Compares the amount in a [address1, {denom: amount}] array
//   const byBalanceOfDenom = (denom: string) => (a: any[], b: any[]) =>
//     b[1][denom] - a[1][denom]
//   const validatorList = Object.entries(rewardsObject)
//     .sort(byBalanceOfDenom(bondDenom))
//     .slice(0, 5) // Just the top 5
//     .map(([address]) => address)
//
//   return validatorList
// }
