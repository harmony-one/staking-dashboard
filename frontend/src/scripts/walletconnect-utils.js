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


const CHAIN_ID_TESTNET = 1666700000
const CHAIN_ID_MAINNET = 1666600000

const isNetworkEqual = (networkConfig, metamaskChainId) => {
    if (networkConfig.id === 'harmony-testnet' && metamaskChainId === CHAIN_ID_TESTNET) {
        return true
    }

    if (networkConfig.id === 'harmony' && metamaskChainId === CHAIN_ID_MAINNET) {
        return true
    }

    return false
}


export const processWalletConnectMessage = async (
  sendData,
  networkConfig,
  from
) => {
  const { type, fee, gasPrice: gasPriceData } = sendData
  const { gasEstimate } = fee
  // const { chain_id, rpc_url } = networkConfig

  // const harmony = await new Harmony(rpc_url, {
  //   chainType: ChainType.Harmony,
  //   chainId: chain_id
  // })

  const web3URL = web3WalletConnect ? web3WalletConnect : process.env.HMY_NODE_URL;
  const hmyWeb3 = web3WalletConnect

  const web3Contract = new hmyWeb3.eth.Contract(abi, "0x00000000000000000000000000000000000000FC");

  const accounts = await web3WalletConnect.eth.getAccounts()

  const gas = 6721900;
  const gasPrice = Math.max(new BN(await hmyWeb3.eth.getGasPrice()).mul(new BN(1)).toNumber(), gasPriceData);


  try {
    const walletConnectChainId = await hmyWeb3.eth.net.getId();
    if(!isNetworkEqual(networkConfig, walletConnectChainId)) {
      throw new Error(`You are currently not on the ${networkConfig.title} network in Metamask. 
                Please choose ${networkConfig.title} to continue.`);
    }

    switch (type) {
      case "MsgSend": {
          amount = Unit.Szabo(amountData || 0).toHex();
          result = await hmyWeb3.eth
              .sendTransaction({
                  from: accounts[0],
                  to: new HarmonyAddress(toAddress).checksum,
                  value: Unit.Szabo(amounts[0].amount).toWei(),
                  gasPrice,
                  gas,
              })
              .on('error', console.error)
              .on('transactionHash', transactionHash => {
                  console.log(`Transaction is sending: ${transactionHash}`);
              });
          break
      }
      case "MsgDelegate": {
          amount = Unit.Szabo(amountData || 0).toHex();
          result = await web3Contract.methods.Delegate(accounts[0], new HarmonyAddress(validatorAddress).checksum, amount).send({
              from: accounts[0],
              // value: amount,
              gasPrice,
              gas,
          });
          break
      }
      case "MsgUndelegate": {
          amount = Unit.Szabo(amountData || 0).toHex();
          result = await web3Contract.methods.Undelegate(accounts[0], new HarmonyAddress(validatorAddress).checksum, amount).send({
              from: accounts[0],
              // value: amount,
              gasPrice,
              gas,
          });

          break
      }
      case "MsgWithdrawDelegationReward": {
          result = await web3Contract.methods.CollectRewards(accounts[0]).send({
              from: accounts[0],
              gasPrice,
              gas,
          });
          break
      }
      default:
          break
  }
} catch (e) {
  error = e;
}

return {
  included: async () => {
      if(!error && result && result.status === true) {
          return {txhash: result.transactionHash}
      } else {
          return {
              error: true,
              txhash: '',
              message: error && error.message,
          }
      }
  }
}
}