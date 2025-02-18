import Eth from "@ledgerhq/hw-app-eth"
import { toBech32 } from "@harmony-js/crypto"
import Transport from "@ledgerhq/hw-transport"
import ethers, { UnsignedTransaction } from "ethers"
import { StakingTransaction } from "@harmony-js/staking"
import { Messenger } from "@harmony-js/network"
import {
  Delegate,
  Directive,
  Undelegate
} from "@harmony-js/staking/src/stakingTransaction"
import { ChainType } from "@harmony-js/utils"

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

const PrecompileInterface = new ethers.utils.Interface(PrecompileAbi);

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
      const { address } = await eth.getAddress(`${HD_PATH}/0`, false, true)
      return {
        one_address: toBech32(address),
        return_code: SUCCESS
      }
    } catch (err) {
      return processErrorResponse(err)
    }
  }

  //
  // async signTx(message) {
  //   let resp
  //   const p = hexToBytes(message)
  //   const buffer = Buffer.from(p)
  //   const chunks = []
  //   for (let i = 0; i < buffer.length; i += CHUNK_SIZE) {
  //     let end = i + CHUNK_SIZE
  //     if (i > buffer.length) {
  //       end = buffer.length
  //     }
  //     chunks.push(buffer.slice(i, end))
  //   }
  //   try {
  //     for (let i = 0; i < chunks.length; i += 1) {
  //       const p1 = i === 0 ? CMDS.P1_FIRST : CMDS.P1_MORE
  //       const p2 = i === chunks.length - 1 ? CMDS.P2_FINISH : CMDS.P2_SIGNHASH
  //       resp = await this.transport.send(CLA, INS.SIGN_TX, p1, p2, chunks[i])
  //     }
  //   } catch (err) {
  //     return processErrorResponse(resp)
  //   }
  //   const errorCodeData = resp.slice(-2)
  //   const returnCode = errorCodeData[0] * 256 + errorCodeData[1]
  //   return {
  //     signature: Buffer.from(resp.slice(0, 65)),
  //     return_code: returnCode
  //   }
  // }
  //
  // async signStake(message) {
  //   let resp = null
  //   const p = hexToBytes(message)
  //   const buffer = Buffer.from(p)
  //   const chunks = []
  //   for (let i = 0; i < buffer.length; i += CHUNK_SIZE) {
  //     let end = i + CHUNK_SIZE
  //     if (i > buffer.length) {
  //       end = buffer.length
  //     }
  //     chunks.push(buffer.slice(i, end))
  //   }
  //
  //   try {
  //     for (let i = 0; i < chunks.length; i += 1) {
  //       const p1 = i === 0 ? CMDS.P1_FIRST : CMDS.P1_MORE
  //       const p2 = i === chunks.length - 1 ? CMDS.P2_FINISH : CMDS.P2_SIGNHASH
  //       // eslint-disable-next-line
  //       resp = await this.transport.send(
  //         CLA,
  //         INS.SIGN_STAKING,
  //         p1,
  //         p2,
  //         chunks[i]
  //       )
  //     }
  //   } catch (err) {
  //     return processErrorResponse(resp)
  //   }
  //   const errorCodeData = resp.slice(-2)
  //   const returnCode = errorCodeData[0] * 256 + errorCodeData[1]
  //   return {
  //     signature: Buffer.from(resp.slice(0, 65)),
  //     return_code: returnCode
  //   }
  // }
  //
  static async getAccountShardNonce(address: string, shardID: number, messenger: Messenger) {
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

  //
  // async signTransaction(txn, chainId, shardId, messenger) {
  //   // get public address of ledger account
  //   let response = await this.publicKey(true)
  //   if (response.return_code !== 0x9000) {
  //     this.log(`Error [${response.return_code}] ${response.error_message}`)
  //     return
  //   }
  //
  //   // get nonce for the current account/shardID and set the transaction nonce
  //   const address = response.one_address.toString()
  //   const accountNonce = await HarmonyApp.getAccountShardNonce(
  //     address,
  //     shardId,
  //     messenger
  //   )
  //   txn.setParams({ ...txn.txParams, nonce: accountNonce })
  //
  //   // sign RLP encoded raw transaction using ledger private key
  //   const [unsignedRawTransaction, raw] = txn.getRLPUnsigned()
  //   response = await this.signTx(unsignedRawTransaction)
  //
  //   if (response.return_code == SW_ERR) {
  //     throw new Error("Reject by Leger")
  //   }
  //
  //   // update the signature r,s,v field in transaction
  //   const bytes = response.signature
  //   const r = hexlify(bytes.slice(0, 32))
  //   const s = hexlify(bytes.slice(32, 64))
  //   let v = bytes[64]
  //   if (v !== 27 && v !== 28) {
  //     v = 27 + (v % 2)
  //   }
  //
  //   // replace empty r,s,v with signature r,s,v
  //   raw.pop()
  //   raw.pop()
  //   raw.pop()
  //
  //   v += chainId * 2 + 8
  //   raw.push(hexlify(v))
  //   raw.push(stripZeros(arrayify(r) || []))
  //   raw.push(stripZeros(arrayify(s) || []))
  //
  //   const encodedRaw = encode(raw)
  //   txn.setParams({ ...txn.txParams, rawTransaction: encodedRaw })
  //
  //   return txn
  // }
  //
  async signStakingTransaction(
    stakingTxn: StakingTransaction,
    chainId: number,
    shardId: number,
    messenger: Messenger
  ) {
    try {
      const eth = new Eth(this.transport)
      const gas = 1000000n
      const gasPrice = 100n
      let data = ""
      const directive = (stakingTxn as any).directive as Directive

      if (directive === Directive.DirectiveDelegate) {
        const delegatorAddress = ((stakingTxn as any).stakeMsg as Delegate)
          .delegatorAddress
        const validatorAddress = ((stakingTxn as any).stakeMsg as Delegate)
          .validatorAddress
        const amount = ((stakingTxn as any).stakeMsg as Delegate).amount
        data = PrecompileInterface.encodeFunctionData('Delegate', [delegatorAddress, validatorAddress, amount])
      } else if (directive === Directive.DirectiveUndelegate) {
        const delegatorAddress = ((stakingTxn as any).stakeMsg as Undelegate)
          .delegatorAddress
        const validatorAddress = ((stakingTxn as any).stakeMsg as Undelegate)
          .validatorAddress
        const amount = ((stakingTxn as any).stakeMsg as Undelegate).amount
        data = PrecompileInterface.encodeFunctionData('Undelegate', [delegatorAddress, validatorAddress, amount])
      }
      const { address } = await eth.getAddress(`${HD_PATH}/0`, false, true)
      const nonce = await HarmonyApp.getAccountShardNonce(
        address,
        shardId,
        messenger
      )
      const transaction: UnsignedTransaction = {
        chainId: CHAINID_SHARD0,
        type: 0,
        // from: address,
        to: PRECOMPILE_DEST,
        gasLimit: gas,
        nonce,
        data,
        gasPrice
      }
      const unsignedRawTransaction = ethers.utils.serializeTransaction(transaction)
      const { r, s, v } = await eth.signTransaction(
        `${HD_PATH}/0`,
        unsignedRawTransaction
      )
      console.log({ r, s, v, transaction })
      const signedRawTransaction = ethers.utils.serializeTransaction(transaction, {
        r,
        s,
        v: Number(v)
      })
      messenger.setChainType(ChainType.Ethereum)
      stakingTxn.setRawTransaction(signedRawTransaction)
      return stakingTxn
    } catch (err) {
      return processErrorResponse(err)
    }
  }

  log(message: any) {
    console.log("### message", message)
  }
}
