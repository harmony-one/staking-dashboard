import _Getters from './getters'
import send from './send'
import simulate from './simulate'
import * as MessageConstructors from './messages'

/*
* Sender object to build and send transactions
* Example:
* const cosmos = Cosmos("https://stargate.lunie.io", "cosmos1abcd1234")
* const msg = cosmos
* .MsgSend({toAddress: 'cosmos1abcd09876', amounts: [{ denom: 'stake', amount: 10 }})
* const gasEstimate = await msg.simulate()
* const ledgerSigner = ... // async (signMessage: string) => { signature: Buffer, publicKey: Buffer }
* const { included }= await msg.send({ gas: gasEstimate }, ledgerSigner)
* await included()
*/

export default class Cosmos {
  constructor (cosmosRESTURL, chainId = undefined) {
    this.url = cosmosRESTURL
    this.get = {}
    this.accounts = {} // storing sequence numbers to not send two transactions with the same sequence number
    this.chainId = chainId

    const getters = _Getters(cosmosRESTURL)
    Object.keys(getters).forEach(getter => {
      this.get[getter] = getters[getter]
    })

    // add message constructors to the Sender to provide a simple API
    Object.entries(MessageConstructors)
      .forEach(([name, messageConstructor]) => {
        this[name] = function (senderAddress, args) {
          const message = messageConstructor(senderAddress, args)

          return {
            message,
            simulate: ({ memo = undefined }) => this.simulate(senderAddress, { message, memo }),
            send: ({ gas, gasPrices, memo = undefined }, signer) => this.send(senderAddress, { gas, gasPrices, memo }, message, signer)
          }
        }
      })

    this.MultiMessage = function (senderAddress, ...messageObjects) {
      const allMessageObjects = [].concat(...messageObjects)
      const messages = allMessageObjects.map(({ message }) => message)
      return {
        messages,
        simulate: ({ memo = undefined }) => this.simulate(senderAddress, { message: messages[0], memo }), // TODO include actual mutli message simulation
        send: ({ gas, gasPrices, memo = undefined }, signer) => this.send(senderAddress, { gas, gasPrices, memo }, messages, signer)
      }
    }
  }

  async setChainId (chainId = this.chainId) {
    if (!chainId) {
      const { block_meta: { header: { chain_id: latestChainId } } } = await this.get.block('latest')
      chainId = latestChainId
    }
    this.chainId = chainId

    return chainId
  }

  async getAccount (senderAddress) {
    const { sequence, account_number: accountNumber } = await this.get.account(senderAddress)
    this.accounts[senderAddress] = {
      // prevent downgrading a sequence number as we assume we send a transaction that hasn't affected the remote sequence number yet
      sequence: this.accounts[senderAddress] && sequence < this.accounts[senderAddress].sequence
        ? this.accounts[senderAddress].sequence
        : sequence,
      accountNumber
    }

    return this.accounts[senderAddress]
  }

  /*
  * message: object
  * signer: async (signMessage: string) => { signature: Buffer, publicKey: Buffer }
  */
  async send (senderAddress, { gas, gasPrices, memo }, messages, signer) {
    const chainId = await this.setChainId()
    const { sequence, accountNumber } = await this.getAccount(senderAddress)

    const {
      hash,
      included
    } = await send({ gas, gasPrices, memo }, messages, signer, this.url, chainId, accountNumber, sequence)
    this.accounts[senderAddress].sequence = (parseInt(this.accounts[senderAddress].sequence) + 1).toString();

    return {
      hash,
      sequence,
      included
    }
  }

  async simulate (senderAddress, { message, memo = undefined }) {
    const chainId = await this.setChainId()
    const { sequence, accountNumber } = await this.getAccount(senderAddress)

    return simulate(this.url, senderAddress, chainId, message, memo, sequence, accountNumber)
  }
}

export { createSignedTransaction } from './send'
export { createSignMessage } from './signature'
