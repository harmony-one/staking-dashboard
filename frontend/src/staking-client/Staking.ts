import { IAccount } from "@/staking-client/interfaces"
import { Harmony } from "@harmony-js/core"
import { ChainID, ChainType } from "@harmony-js/utils"
import { Unit } from "@harmony-js/utils"
import { Transaction } from "@harmony-js/transaction"
import { StakingFactory, StakingTransaction } from "@harmony-js/staking"

const URL_MAINNET = `https://api.s0.t.hmny.io`

const GAS_PRICE = new Unit('1').asGwei().toHex();
const GAS_LIMIT = new Unit('25000').asWei().toHex();

const MAX_ATTEMPTS = process.env.MAX_ATTEMPTS
const maxAttempts = Number(MAX_ATTEMPTS)

export interface ITransactionData {
  type:
    | "MsgDelegate"
    | "MsgSend"
    | "MsgUndelegate"
    | "MsgWithdrawDelegationReward"
  toAddress: string
  delegatorAddress: string
  validatorAddress: string
  amount: number
  amounts: Array<{ amount: number }>
  fee: {
    gasEstimate: string
  }
  gasPrice: number
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

  createTransaction(transactionData: ITransactionData): Transaction {
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

  async setSharding() {
    const res = await this.harmony.blockchain.getShardingStructure()
    this.harmony.shardingStructures(res.result)
  }

  createDelegateTransaction(
    transactionData: ITransactionData
  ): StakingTransaction {
    const value = transactionData.amount

    const stakingTxn = new StakingFactory(this.harmony.messenger)
      .delegate({
        delegatorAddress: transactionData.delegatorAddress,
        validatorAddress: transactionData.validatorAddress,
        amount: new Unit(value).asSzabo().toHex() as any
      })
      .setTxParams({
        gasPrice: GAS_PRICE,
        gasLimit: GAS_LIMIT,
        chainId: this.harmony.chainId
      } as any)
      .build()

    return stakingTxn
  }

  createUndelegateTransaction(
    transactionData: ITransactionData
  ): StakingTransaction {
    const value = transactionData.amount

    const stakingTxn = new StakingFactory(this.harmony.messenger)
      .undelegate({
        delegatorAddress: transactionData.delegatorAddress,
        validatorAddress: transactionData.validatorAddress,
        amount: new Unit(value).asSzabo().toHex() as any
      })
      .setTxParams({
        gasPrice: GAS_PRICE,
        gasLimit: GAS_LIMIT,
        chainId: this.harmony.chainId
      } as any)
      .build()

    return stakingTxn
  }

  createRewards(transactionData: ITransactionData) {
    const stakingTx = this.harmony.stakings
      .collectRewards({
        delegatorAddress: transactionData.delegatorAddress
      })
      .setTxParams({
        // nonce: "0x2",
        gasPrice: GAS_PRICE,
        gasLimit: GAS_LIMIT,
        // gasPrice: new Unit(this.transactionDetails.fee).asMwei().toWei(),
        // gasLimit: this.transactionDetails.gas,
        chainId: this.harmony.chainId
      } as any)
      .build()

    return stakingTx
  }

  async sendTransaction(signedTransaction: Transaction | StakingTransaction) {
    // const signedTransaction = this.harmony.transactions.recover(rawTransaction)

    signedTransaction.observed().on("error", error => {
      console.log(error)
    })

    const [sentTxn, txnHash] = await signedTransaction.sendTransaction()

    // to confirm the result if it is already there

    await sentTxn.confirm(txnHash, maxAttempts)

    return { txhash: txnHash }
  }
}
