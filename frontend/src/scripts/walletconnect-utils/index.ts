import { writeContract, getAccount } from '@wagmi/core'
import { parseUnits } from 'viem'
import { config } from './config'
import { abi } from '../metamask-utils/staking-abi'

const CONTRACT_ADDRESS = '0x00000000000000000000000000000000000000FC'

interface SendData {
  type: string
  fee: { gasEstimate: number }
  gasPrice: number
  validatorAddress: string
  amount?: number
}

interface NetworkConfig {
  id: string
  title: string
}

export const processWalletConnectMessage = async (
  sendData: SendData,
  networkConfig: NetworkConfig,
  from: string
) => {
  const { type, fee, gasPrice: gasPriceData, validatorAddress, amount: amountData = 0 } = sendData
  const { gasEstimate } = fee

  try {
    const { address } = getAccount(config)
    
    switch (type) {
      case "MsgDelegate": {
        if (!amountData) throw new Error('Amount is required for delegation')
        const hash = await writeContract(config, {
          abi,
          address: CONTRACT_ADDRESS,
          functionName: 'Delegate',
          args: [address, validatorAddress, amount],
          gas: BigInt(100000),
          gasPrice: BigInt(Math.max(gasEstimate, gasPriceData)),
        })
        return { included: async () => ({ txhash: hash }) }
      }
      case "MsgUndelegate": {
        if (!amountData) throw new Error('Amount is required for undelegation')
        const hash = await writeContract(config, {
          abi,
          address: CONTRACT_ADDRESS,
          functionName: 'Undelegate',
          args: [address, validatorAddress, amount],
          gas: BigInt(100000),
          gasPrice: BigInt(Math.max(gasEstimate, gasPriceData)),
        })
        return { included: async () => ({ txhash: hash }) }
      }
      case "MsgWithdrawDelegationReward": {
        const hash = await writeContract(config, {
          abi,
          address: CONTRACT_ADDRESS,
          functionName: 'CollectRewards',
          args: [address],
          gas: BigInt(100000),
          gasPrice: BigInt(Math.max(gasEstimate, gasPriceData)),
        })
        return { included: async () => ({ txhash: hash }) }
      }
      default:
        throw new Error(`Unsupported message type: ${type}`)
    }
  } catch (error: unknown) {
    return {
      included: async () => ({
        error: true,
        txhash: '',
        message: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }
}
