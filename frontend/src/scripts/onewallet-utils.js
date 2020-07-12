import { Harmony, HarmonyExtension } from "@harmony-js/core"
import { HarmonyAddress, BN } from "@harmony-js/crypto"
import { StakingFactory } from "@harmony-js/staking"
import { ChainType, Unit } from "@harmony-js/utils"
export const processOneWalletMessage = async (
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

      signedTxn = await window.onewallet.signTransaction(txn)
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

      signedTxn = await window.onewallet.signTransaction(stakingTxn)
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

      signedTxn = await window.onewallet.signTransaction(stakingTxn)
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

      signedTxn = await window.onewallet.signTransaction(stakingTxn)
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
