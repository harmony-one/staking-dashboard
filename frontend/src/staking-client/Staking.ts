import { IAccount } from "@/staking-client/interfaces"
import { Harmony } from "@harmony-js/core"
import { ChainID, ChainType } from "@harmony-js/utils"
const { Delegate, StakingTransaction } = require("@harmony-js/staking")
import { Unit } from "@harmony-js/utils"
// import * as crypto from "@harmony-js/crypto"

const URL_MAINNET = `https://api.s0.t.hmny.io`

export interface ITransactionData {
  type: "MsgDelegate" | "MsgSend" | "MsgUndelegate"
  toAddress: string
  fromAddress: string
  amount: number
  amounts: Array<{ amount: number }>
  fee: {
    gasEstimate: string
  };
  gasPrice: number;
}

export default class Staking {
  harmony: Harmony = new Harmony(URL_MAINNET, {
    chainType: ChainType.Harmony,
    chainId: ChainID.HmyMainnet
  })

  initHarmony = (rpc_url: string, chainId: string) => {
    // 1. initialize the Harmony instance
    this.harmony = new Harmony(
      // rpc url
      rpc_url,
      {
        chainType: ChainType.Harmony,
        chainId
      } as any // HarmonyConfig
    )
  }
  // coins
  account = (address: string): Promise<IAccount> => {
    const emptyAccount: IAccount = {
      coins: [],
      sequence: `0`,
      account_number: `0`,
      address
    }

    if (!this.harmony) {
      console.error(`Harmony client is not initialize`)

      return Promise.resolve(emptyAccount)
    }

    return this.harmony.blockchain
      .getBalance({ address })
      .then((res: any) => {
        if (this.harmony) {
          const amount = new this.harmony.utils.Unit(res.result)
            .asWei()
            .toSzabo()

          emptyAccount.coins.push({ denom: "one", amount })
        }

        return emptyAccount
      })
      .catch((err: any) => {
        console.log(err)

        return emptyAccount
      })
  }

  createTransaction(transactionData: ITransactionData) {
    const shardId = 0
    const value = transactionData.amounts[0].amount

    return this.harmony.transactions.newTx({
      to: transactionData.toAddress,
      value: new Unit(value).asSzabo().toWei(),
      gasLimit: transactionData.fee.gasEstimate,
      gasPrice: new Unit(transactionData.gasPrice).asGwei().toWei(),
      shardID: shardId,
      toShardID: 0
      //nonce: "0x"
    })
  }

  createStakingTransaction(
    transactionData: ITransactionData,
    magicHex = "0x2"
  ) {
    const value = transactionData.amount

    const delegateMsg = new Delegate(
      transactionData.fromAddress,
      transactionData.toAddress,
      new Unit(value).asSzabo().toHex()
    )

    // console.log(1, new Unit(this.transactionDetails.gas).toHex()) // private gasLimit;
    // console.log(2, new Unit(this.transactionDetails.fee).asMwei().toHex()) // private gasPrice)

    // return new StakingTransaction(
    //   '0x', // private directive;
    //   delegateMsg, // private stakeMsg;
    //   '0x2', // private nonce;
    //   new Unit(this.transactionDetails.gas).toHex(), // private gasLimit;
    //   new Unit(this.transactionDetails.fee).asMwei().toHex(), // private gasPrice
    //   this.networkConfig.chain_id, // private chainId;
    //   2, // private rawTransaction;
    //   '', // private unsignedRawTransaction;
    //   ''// private signature;
    // );

    return new StakingTransaction(
      magicHex,
      delegateMsg,
      "0x2",
      "0x",
      "0x0927c0",
      2,
      2,
      "",
      ""
    )
  }

  createUnStakingTransaction(transactionData: ITransactionData) {
    return this.createStakingTransaction(transactionData, "0x3")
  }

  async sendTransaction(rawTransaction: string) {
    const signedTransaction = this.harmony.transactions.recover(rawTransaction)

    signedTransaction.observed().on("error", error => {
      console.log(error)
    })

    const [sentTxn, txnHash] = await signedTransaction.sendTransaction()

    // to confirm the result if it is already there

    const confiremdTxn: any = await sentTxn.confirm(txnHash)

    if (!confiremdTxn.isCrossShard()) {
      if (confiremdTxn.isConfirmed()) {
        console.log("Normal transaction")
        console.log(`${txnHash} is confirmed`)
      }
    }
    if (confiremdTxn.isConfirmed() && confiremdTxn.isCxConfirmed()) {
      console.log("Cross-Shard transaction")
      console.log(`${txnHash} is confirmed`)
    }

    return { txhash: txnHash }
  }
}
