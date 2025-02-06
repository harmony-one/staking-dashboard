import { createAppKit } from '@reown/appkit/vue'
import { mainnet } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { toBech32 } from "@harmony-js/crypto"

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
  const { chain_id, rpc_url } = networkConfig

  const harmony = new Harmony(rpc_url, {
    chainType: ChainType.Harmony,
    chainId: chain_id
  })

  const txnParams = {
    gasLimit: Unit.Wei(new BN(gasEstimate).add(new BN("20000"))).toHex(),
    gasPrice: Unit.Wei(new BN(1000000000)).toHex(),
    chainId: harmony.chainId
  }

  switch (transactionData.type) {
    case "MsgSend":
      return harmony.transactions.signTransaction({
        ...txnParams,
        to: transactionData.to,
        value: Unit.Wei(transactionData.amount).toHex(),
        data: "0x"
      })

    case "MsgDelegate":
      return harmony.stakings.delegate({
        ...txnParams,
        delegatorAddress: transactionData.delegatorAddress,
        validatorAddress: transactionData.validatorAddress,
        amount: Unit.Wei(transactionData.amount).toHex()
      })

    case "MsgUndelegate":
      return harmony.stakings.undelegate({
        ...txnParams,
        delegatorAddress: transactionData.delegatorAddress,
        validatorAddress: transactionData.validatorAddress,
        amount: Unit.Wei(transactionData.amount).toHex()
      })

    case "MsgWithdrawDelegationReward":
      return harmony.stakings.collectRewards({
        ...txnParams,
        delegatorAddress: transactionData.delegatorAddress
      })

    default:
      throw new Error(`Unknown transaction type: ${transactionData.type}`)
  }
}
