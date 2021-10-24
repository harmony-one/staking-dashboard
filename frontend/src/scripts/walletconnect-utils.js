import { Harmony } from "@harmony-js/core"
import { HarmonyAddress, BN } from "@harmony-js/crypto"
import { StakingFactory } from "@harmony-js/staking"
import { ChainType, Unit } from "@harmony-js/utils"
import { getAddress } from "../../src/utils"

import Web3 from "web3"
import WalletConnectProvider from "@walletconnect/web3-provider"


const rpc = {
  1: "https://api.harmony.one",
  2: "https://api.s0.b.hmny.io"
}

const provider = new WalletConnectProvider({
  rpc: rpc,
  bridge: "https://bridge.walletconnect.org",
  qrcodeModalOptions: {
    mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar"]
  },
  supportedChainIds: [
    1, // harmony
    2 // harmony testnet
  ]
})

export const web3WalletConnect = new Web3(provider)

export const getWalletAccount = async () => {
  let accounts = null
  let addressOne = null
  
  if (web3WalletConnect) {
    try {
      if (await provider.enable()) {
        accounts = await web3WalletConnect.eth.getAccounts()
        addressOne = await getAddress(accounts[0]).bech32
        return addressOne
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const walletConnectDisconnet = async () => {
  if (web3WalletConnect) {
    await provider.disconnect()
  }
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

      signedTxn = await web3WalletConnect.eth.signTransaction(txn)
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

      signedTxn = await web3WalletConnect.eth.signTransaction(stakingTxn)
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

      signedTxn = await web3WalletConnect.eth.signTransaction(stakingTxn)
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

      signedTxn = await web3WalletConnect.eth.signTransaction(stakingTxn)
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
