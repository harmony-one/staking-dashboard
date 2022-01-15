import { Harmony } from "@harmony-js/core"
import { HarmonyAddress, BN, hexlify } from "@harmony-js/crypto"
import { StakingFactory } from "@harmony-js/staking"
import { ChainType, Unit } from "@harmony-js/utils"

import WalletConnectProvider from "@walletconnect/web3-provider"

const wcProvider = new WalletConnectProvider({
  rpc: {
    1: "https://api.harmony.one",
    2: "https://api.s0.b.hmny.io",
    3: "http://localhost:9500"
  }
})

export const getWalletConnectProvider = async () => {
  return wcProvider
}

export const disconnectWalletConnectProvider = async () => {
  return wcProvider.disconnect()
}

export const processWalletConnectMessage = async (
  sendData,
  networkConfig,
  from
) => {
  const { type, fee, gasPrice } = sendData
  const { gasEstimate } = fee
  const { chain_id, rpc_url } = networkConfig

  const harmony = await new Harmony(rpc_url, {
    chainType: ChainType.Harmony,
    chainId: chain_id
  })

  var wcSign = null
  var signedTxn = null
  switch (type) {
    case "MsgSend": {
      const { toAddress, amounts } = sendData
      const txn = harmony.transactions.newTx({
        from: new HarmonyAddress(from).checksum,
        to: new HarmonyAddress(toAddress).checksum,
        value: Unit.Szabo(amounts[0].amount).toWei(),
        shardID: 0,
        toShardID: 0,
        gasLimit: gasEstimate,
        gasPrice: Unit.One(gasPrice).toHex()
      })

      const txnRaw = {
        from: txn.from,
        to: txn.to,
        data: "0x"
      }

      wcSign = await wcProvider.connector.signTransaction(txnRaw)
      wcSign = wcSign.replace("0x", "")
      var bytes = []
      for (var c = 0; c < wcSign.length; c += 2)
        bytes.push(parseInt(wcSign.substr(c, 2), 16))
      const r = hexlify(bytes.slice(0, 32))
      const s = hexlify(bytes.slice(32, 64))
      let v = bytes[64]
      if (v !== 27 && v !== 28) {
        v = 27 + (v % 2)
      }
      v += chain_id * 2 + 8
      txn.signature = {
        r: r,
        s: s,
        v: v
      }

      signedTxn = txn
      break
    }
    case "MsgDelegate": {
      const { delegatorAddress, validatorAddress, amount } = sendData
      const stakingTxn = new StakingFactory(harmony.messenger)
        .delegate({
          delegatorAddress: new HarmonyAddress(delegatorAddress).checksum,
          validatorAddress: new HarmonyAddress(validatorAddress).checksum,
          amount: Unit.Szabo(amount).toHex()
        })
        .setTxParams({
          gasPrice: Unit.One(gasPrice).toHex(),
          gasLimit: Unit.Wei(new BN(gasEstimate).add(new BN("20000"))).toHex(),
          chainId: harmony.chainId
        })
        .build()
      stakingTxn.setFromAddress(new HarmonyAddress(from).checksum)

      const stakingTxnRaw = {
        from: stakingTxn.from,
        to: stakingTxn.stakeMsg.delegatorAddress,
        data: "0x"
      }
      wcSign = await wcProvider.connector.signTransaction(stakingTxnRaw)
      wcSign = wcSign.replace("0x", "")
      var bytes = []
      for (var c = 0; c < wcSign.length; c += 2)
        bytes.push(parseInt(wcSign.substr(c, 2), 16))
      const r = hexlify(bytes.slice(0, 32))
      const s = hexlify(bytes.slice(32, 64))
      let v = bytes[64]
      if (v !== 27 && v !== 28) {
        v = 27 + (v % 2)
      }
      v += chain_id * 2 + 8
      stakingTxn.signature = {
        r: r,
        s: s,
        v: v
      }

      signedTxn = stakingTxn
      break
    }
    case "MsgUndelegate": {
      const { validatorAddress, delegatorAddress, amount } = sendData
      const stakingTxn = new StakingFactory(harmony.messenger)
        .undelegate({
          delegatorAddress: new HarmonyAddress(delegatorAddress).checksum,
          validatorAddress: new HarmonyAddress(validatorAddress).checksum,
          amount: Unit.Szabo(amount).toHex()
        })
        .setTxParams({
          gasPrice: Unit.One(gasPrice).toHex(),
          gasLimit: Unit.Wei(new BN(gasEstimate).add(new BN("20000"))).toHex(),
          chainId: harmony.chainId
        })
        .build()
      stakingTxn.setFromAddress(new HarmonyAddress(from).checksum)

      const stakingTxnRaw = {
        from: stakingTxn.from,
        to: stakingTxn.stakeMsg.delegatorAddress,
        data: "0x"
      }
      wcSign = await wcProvider.connector.signTransaction(stakingTxnRaw)
      wcSign = wcSign.replace("0x", "")
      var bytes = []
      for (var c = 0; c < wcSign.length; c += 2)
        bytes.push(parseInt(wcSign.substr(c, 2), 16))
      const r = hexlify(bytes.slice(0, 32))
      const s = hexlify(bytes.slice(32, 64))
      let v = bytes[64]
      if (v !== 27 && v !== 28) {
        v = 27 + (v % 2)
      }
      v += chain_id * 2 + 8
      stakingTxn.signature = {
        r: r,
        s: s,
        v: v
      }

      signedTxn = stakingTxn
      break
    }
    case "MsgWithdrawDelegationReward": {
      const { delegatorAddress } = sendData
      const stakingTxn = new StakingFactory(harmony.messenger)
        .collectRewards({
          delegatorAddress: new HarmonyAddress(delegatorAddress).checksum
        })
        .setTxParams({
          gasPrice: Unit.One(gasPrice).toHex(),
          gasLimit: Unit.Wei(new BN(gasEstimate).add(new BN("20000"))).toHex(),
          chainId: harmony.chainId
        })
        .build()
      stakingTxn.setFromAddress(new HarmonyAddress(from).checksum)

      const stakingTxnRaw = {
        from: stakingTxn.from,
        to: stakingTxn.stakeMsg.delegatorAddress,
        data: "0x"
      }
      wcSign = await wcProvider.connector.signTransaction(stakingTxnRaw)
      wcSign = wcSign.replace("0x", "")
      var bytes = []
      for (var c = 0; c < wcSign.length; c += 2)
        bytes.push(parseInt(wcSign.substr(c, 2), 16))
      const r = hexlify(bytes.slice(0, 32))
      const s = hexlify(bytes.slice(32, 64))
      let v = bytes[64]
      if (v !== 27 && v !== 28) {
        v = 27 + (v % 2)
      }
      v += chain_id * 2 + 8
      stakingTxn.signature = {
        r: r,
        s: s,
        v: v
      }

      signedTxn = stakingTxn
      break
    }
    default:
      break
  }
  if (!signedTxn) {
    return {
      error: true,
      txhash: "",
      message: "Unknow message type"
    }
  }

  const [sentTxn, txnHash] = await signedTxn.sendTransaction()
  return {
    included: async () => {
      try {
        const confiremdTxn = await sentTxn.confirm(txnHash, 5)
        if (confiremdTxn.isConfirmed()) {
          return { txhash: txnHash }
        } else {
          return {
            error: true,
            txhash: txnHash,
            message: "The transaction is still not confirmed after 5 attempts."
          }
        }
      } catch (error) {
        return {
          error: true,
          txhash: txnHash,
          message: "The transaction is still not confirmed after 5 attempts."
        }
      }
    }
  }
}
