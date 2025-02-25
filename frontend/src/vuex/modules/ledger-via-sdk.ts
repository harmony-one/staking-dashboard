import Eth, { ledgerService } from "@ledgerhq/hw-app-eth"
import { toBech32, fromBech32 } from "@harmony-js/crypto"
import Transport from "@ledgerhq/hw-transport"
import { ethers, UnsignedTransaction } from "ethers"
import { StakingTransaction as HarmonyStakingTransaction } from "@harmony-js/staking"
import { Messenger } from "@harmony-js/network"
import {
  Delegate,
  Directive,
  Undelegate
} from "@harmony-js/staking/src/stakingTransaction"
import { ChainType } from "@harmony-js/utils"
import {
  Transaction as HarmonyTransaction,
  TxStatus as HarmonyTxStatus
} from "@harmony-js/transaction"

const GAS_LIMIT = 1_000_000n
const GAS_PRICE = 200_000_000_000n

export const PrecompileAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatorAddress",
        type: "address"
      }
    ],
    name: "CollectRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatorAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "validatorAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "Migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatorAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "validatorAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Undelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
]

const PrecompileInterface = new ethers.utils.Interface(PrecompileAbi)

export const SW_ERR = 0x6985

function processErrorResponse(response: any) {
  return {
    signature: Buffer.from("0x0"),
    return_code: SW_ERR
  }
}

const SUCCESS = 0x9000
const HD_PATH = `44'/1023'/0'/0`
const CHAINID_SHARD0 = 1666600000
const PRECOMPILE_DEST = "0x00000000000000000000000000000000000000FC"

export interface HarmonyAppResponse {
  return_code: string
}

export default class HarmonyApp {
  transport: Transport

  constructor(transport: Transport) {
    if (typeof transport === "undefined") {
      throw new Error("Transport has not been defined")
    }
    this.transport = transport
  }

  async getVersion() {
    try {
      const eth = new Eth(this.transport)
      const { version } = await eth.getAppConfiguration()
      return {
        return_code: SUCCESS,
        version
      }
    } catch (err) {
      return processErrorResponse(err)
    }
  }

  async publicKey(silentMode: boolean) {
    try {
      const eth = new Eth(this.transport)
      const { address } = await eth.getAddress(`${HD_PATH}/0`, silentMode, true)
      return {
        one_address: toBech32(address),
        return_code: SUCCESS
      }
    } catch (err) {
      return processErrorResponse(err)
    }
  }

  static async getAccountShardNonce(
    address: string,
    shardID: number,
    messenger: Messenger
  ) {
    const nonce = await messenger.send(
      "hmy_getTransactionCount",
      [address, "latest"],
      messenger.chainPrefix,
      shardID
    )

    if (nonce.isError()) {
      throw nonce.error.message
    }
    return Number(BigInt(nonce.result))
  }

  async executeTransactionFlow(
    transaction: UnsignedTransaction,
    chainId: number,
    shardId: number,
    messenger: Messenger
  ): Promise<HarmonyTransaction> {
    const eth = new Eth(this.transport)
    const { address } = await eth.getAddress(`${HD_PATH}/0`, false, true)
    try {
      const nonce = await HarmonyApp.getAccountShardNonce(
        address,
        shardId,
        messenger
      )
      transaction = { ...transaction, nonce }
      // console.log("signTransaction nonce", nonce)
      const unsignedRawTransaction =
        ethers.utils.serializeTransaction(transaction)
      // console.log("unsignedTransaction", transaction)
      // console.log("unsignedRawTransaction", unsignedRawTransaction)
      const resolution = await ledgerService.resolveTransaction(
        unsignedRawTransaction.slice(2),
        {},
        {}
      )
      // console.log("resolution", resolution)
      const { r, s, v } = await eth.signTransaction(
        `${HD_PATH}/0`,
        unsignedRawTransaction.slice(2),
        resolution
      )
      // console.log({ r, s, v, transaction })
      const signedRawTransaction = ethers.utils.serializeTransaction(
        transaction,
        {
          r: "0x" + r,
          s: "0x" + s,
          v: Number(BigInt("0x" + v))
        }
      )
      messenger.setChainType(ChainType.Ethereum)
      return new HarmonyTransaction(
        {
          shardId,
          rawTransaction: signedRawTransaction
        },
        messenger,
        HarmonyTxStatus.INTIALIZED
      )
    } catch (ex: any) {
      console.trace(ex)
      throw ex
    }
  }

  async signTransaction(
    txn: HarmonyTransaction,
    chainId: number,
    shardId: number,
    messenger: Messenger
  ) {
    let value = BigInt(txn.txParams.value.toString())

    const transaction: UnsignedTransaction = {
      chainId: CHAINID_SHARD0,
      value,
      type: 0,
      to: txn.txParams.to,
      gasLimit: GAS_LIMIT,
      gasPrice: GAS_PRICE
    }
    return this.executeTransactionFlow(transaction, chainId, shardId, messenger)
  }

  async signStakingTransaction(
    stakingTxn: HarmonyStakingTransaction,
    chainId: number,
    shardId: number,
    messenger: Messenger
  ) {
    let data = ""
    const directive = (stakingTxn as any).directive as Directive
    if (directive === Directive.DirectiveDelegate) {
      const delegatorAddress = ((stakingTxn as any).stakeMsg as Delegate)
        .delegatorAddress
      const validatorAddress = ((stakingTxn as any).stakeMsg as Delegate)
        .validatorAddress
      const amount = ((stakingTxn as any).stakeMsg as Delegate).amount
      data = PrecompileInterface.encodeFunctionData("Delegate", [
        fromBech32(delegatorAddress),
        fromBech32(validatorAddress),
        amount
      ])
    } else if (directive === Directive.DirectiveUndelegate) {
      const delegatorAddress = ((stakingTxn as any).stakeMsg as Undelegate)
        .delegatorAddress
      const validatorAddress = ((stakingTxn as any).stakeMsg as Undelegate)
        .validatorAddress
      const amount = ((stakingTxn as any).stakeMsg as Undelegate).amount
      data = PrecompileInterface.encodeFunctionData("Undelegate", [
        fromBech32(delegatorAddress),
        fromBech32(validatorAddress),
        amount
      ])
    } else if (directive === Directive.DirectiveCollectRewards) {
      const delegatorAddress = ((stakingTxn as any).stakeMsg as Undelegate)
        .delegatorAddress
      data = PrecompileInterface.encodeFunctionData("CollectRewards", [
        fromBech32(delegatorAddress)
      ])
    }
    const transaction: UnsignedTransaction = {
      chainId: CHAINID_SHARD0,
      value: 0,
      type: 0,
      to: PRECOMPILE_DEST,
      gasLimit: GAS_LIMIT,
      data,
      gasPrice: GAS_PRICE
    }
    return this.executeTransactionFlow(transaction, chainId, shardId, messenger)
  }

  log(message: any) {
    console.log("### message", message)
  }
}
