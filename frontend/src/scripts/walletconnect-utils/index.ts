import { writeContract, getAccount } from '@wagmi/core'
import { parseUnits } from 'viem'
import { config } from './config'
import { abi } from '../metamask-utils/staking-abi'

const CONTRACT_ADDRESS = '0x00000000000000000000000000000000000000FC'

export const processWalletConnectMessage = async (
  sendData,
  networkConfig,
  from
) => {
  const { type, fee, gasPrice: gasPriceData, validatorAddress, amount: amountData } = sendData
  const { gasEstimate } = fee

  try {
    const { address } = getAccount(config)
    
    switch (type) {
      case "MsgDelegate": {
        const amount = parseUnits(amountData.toString(), 'szabo')
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
        const amount = parseUnits(amountData.toString(), 'szabo')
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
  } catch (error) {
    return {
      included: async () => ({
        error: true,
        txhash: '',
        message: error.message,
      })
    }
  }
}
