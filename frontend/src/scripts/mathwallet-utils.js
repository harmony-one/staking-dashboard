import { Harmony, HarmonyExtension } from "@harmony-js/core"
import { HarmonyAddress } from "@harmony-js/crypto"
import { StakingFactory } from "@harmony-js/staking"
import {
  ChainType,
  Unit
} from "@harmony-js/utils"
export const processMathWalletMessage = async (sendData, networkConfig, from) => {
  console.log("===========", JSON.stringify(sendData))
  const { type, fee, gasPrice } = sendData
  const { gasEstimate } = fee
  const { chain_id, rpc_url } = networkConfig

  const harmony = new Harmony(rpc_url, {
    chainType: ChainType.Harmony,
    chainId: chain_id
  })
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
      const signedTxn = await window.harmony.signTransaction(txn)
      const result = await signedTxn.sendTransaction()
      return {
        included: () => {
          return { txhash: result[1] }
        }
      }
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
          gasLimit: Unit.Wei("60000").toHex(),
          chainId: harmony.chainId
        })
        .build()
      stakingTxn.setFromAddress(new HarmonyAddress(from).checksum)

      const signedTxn = await window.harmony.signTransaction(stakingTxn)
      const result = await signedTxn.sendTransaction()
      return {
        included: () => {
          return { txhash: result[1] }
        }
      }
    }
    case "MsgUndelegate": {
      const { validatorAddress, delegatorAddress, amount } = sendData
      const stakingTxn = new StakingFactory(harmony.messenger)
        .undelegate({
          delegatorAddress: new HarmonyAddress(delegatorAddress).checksum,
          validatorAddress: new HarmonyAddress(validatorAddress).checksum,
          amount: Unit.Szabo(amount).toHex(),
        })
        .setTxParams({
          gasPrice: Unit.One(gasPrice).toHex(),
          gasLimit: Unit.Wei("60000").toHex(),
          chainId: harmony.chainId
        })
        .build()
      stakingTxn.setFromAddress(new HarmonyAddress(from).checksum)

      const signedTxn = await window.harmony.signTransaction(stakingTxn)
      const result = await signedTxn.sendTransaction()
      return {
        included: () => {
          return { txhash: result[1] }
        }
      }
    }
    case "MsgWithdrawDelegationReward": {
      const { delegatorAddress } = sendData
      const stakingTxn = new StakingFactory(harmony.messenger)
        .collectRewards({
          delegatorAddress: new HarmonyAddress(delegatorAddress).checksum
        })
        .setTxParams({
          gasPrice: Unit.One(gasPrice).toHex(),
          gasLimit: Unit.Wei("60000").toHex(),
          chainId: harmony.chainId
        })
        .build()
      stakingTxn.setFromAddress(new HarmonyAddress(from).checksum)

      const signedTxn = await window.harmony.signTransaction(stakingTxn)
      const result = await signedTxn.sendTransaction()
      return {
        included: () => {
          return { txhash: result[1] }
        }
      }
    }
    default:
      return
  }
}