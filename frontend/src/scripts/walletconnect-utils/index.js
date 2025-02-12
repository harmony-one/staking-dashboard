import { createAppKit } from '@reown/appkit/vue'
import { mainnet } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { toBech32 } from "@harmony-js/crypto"
import { writeContract, simulateContract } from '@wagmi/core'
import { parseEther } from 'viem'
import { abi } from '../metamask-utils/staking-abi'

const STAKING_CONTRACT = '0x00000000000000000000000000000000000000FC'

const HARMONY_MAINNET = {
  id: 1666600000,
  name: 'Harmony Mainnet',
  network: 'harmony',
  nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.harmony.one'] },
    public: { http: ['https://api.harmony.one'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.harmony.one/' },
  },
}

export const initWalletConnect = (projectId) => {
  const metadata = {
    name: 'Harmony Staking',
    description: 'Harmony Staking Dashboard',
    url: window.location.origin,
    icons: ['https://staking.harmony.one/icons/icon-512x512.png']
  }

  const wagmiAdapter = new WagmiAdapter({
    networks: [HARMONY_MAINNET],
    projectId
  })

  return createAppKit({
    adapters: [wagmiAdapter],
    networks: [HARMONY_MAINNET],
    projectId,
    metadata,
    features: {
      analytics: true
    }
  })
}

export const processWalletConnectMessage = async (transactionData, fee, networkConfig) => {
  const { gasEstimate } = fee

  const baseRequest = {
    address: STAKING_CONTRACT,
    abi,
    chainId: networkConfig.chain_id,
    gas: BigInt(gasEstimate) + BigInt(20000),
  }

  switch (transactionData.type) {
    case "MsgSend":
      return writeContract({
        ...baseRequest,
        functionName: 'Delegate',
        args: [
          transactionData.delegatorAddress,
          transactionData.validatorAddress,
          parseEther(transactionData.amount.toString())
        ]
      })

    case "MsgDelegate":
      return writeContract({
        ...baseRequest,
        functionName: 'Delegate',
        args: [
          transactionData.delegatorAddress,
          transactionData.validatorAddress,
          parseEther(transactionData.amount.toString())
        ]
      })

    case "MsgUndelegate":
      return writeContract({
        ...baseRequest,
        functionName: 'Undelegate',
        args: [
          transactionData.delegatorAddress,
          transactionData.validatorAddress,
          parseEther(transactionData.amount.toString())
        ]
      })

    case "MsgWithdrawDelegationReward":
      return writeContract({
        ...baseRequest,
        functionName: 'CollectRewards',
        args: [transactionData.delegatorAddress]
      })

    default:
      throw new Error(`Unknown transaction type: ${transactionData.type}`)
  }
}
