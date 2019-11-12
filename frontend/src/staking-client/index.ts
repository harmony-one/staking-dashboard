import _Getters from "./getters"
import send from "./send"
import simulate, { TMsg } from "./simulate"
import {
  MsgDelegate,
  MsgDeposit,
  MsgRedelegate,
  MsgSend,
  MsgSubmitProposal,
  MsgUndelegate,
  MsgVote,
  MsgWithdrawDelegationReward,
  TMsgFuncConstructor
} from "./messages"

type TMsgFunc = (senderAddress: string, args: any) => {message: any, simulate: (params: { memo?: any }) => any, send: any};

export default class Staking {
  url: string
  get: _Getters
  accounts: any
  chainId?: string

  createMessageFunc = (func: TMsgFuncConstructor): TMsgFunc => {
    return (senderAddress: string, args: any) => {
      const message = func(senderAddress, args)

      return {
        message,
        simulate: ({ memo = undefined }) =>
          this.simulate(senderAddress, { message, memo } as any),
        send: ({ gas, gasPrices, memo = undefined }: any, signer: string) =>
          this.send(senderAddress, { gas, gasPrices, memo }, message, signer)
      }
    }
  }

  MsgSend: TMsgFunc = this.createMessageFunc(MsgSend);
  MsgDelegate: TMsgFunc = this.createMessageFunc(MsgDelegate);
  MsgUndelegate: TMsgFunc = this.createMessageFunc(MsgUndelegate);
  MsgRedelegate: TMsgFunc = this.createMessageFunc(MsgRedelegate);
  MsgSubmitProposal: TMsgFunc = this.createMessageFunc(
    MsgSubmitProposal
  );
  MsgVote: TMsgFunc = this.createMessageFunc(MsgVote);
  MsgDeposit: TMsgFunc = this.createMessageFunc(MsgDeposit);
  MsgWithdrawDelegationReward: TMsgFunc = this.createMessageFunc(
    MsgWithdrawDelegationReward
  );

  constructor(cosmosRESTURL: string, chainId?: string) {
    this.url = cosmosRESTURL
    this.accounts = {} // storing sequence numbers to not send two transactions with the same sequence number
    this.chainId = chainId

    this.get = new _Getters(cosmosRESTURL)
  }

  MultiMessage = (senderAddress: string, ...messageObjects: any) => {
    const allMessageObjects = [].concat(...messageObjects)
    const messages = allMessageObjects.map(({ message }) => message)
    return {
      messages,
      simulate: ({ memo = undefined }) =>
        this.simulate(senderAddress, { message: messages[0], memo }), // TODO include actual mutli message simulation
      send: (params: any, signer: string) =>
        this.send(senderAddress, params, messages, signer)
    }
  }

  async setChainId(chainId = this.chainId) {
    if (!chainId) {
      const {
        block_meta: {
          header: { chain_id: latestChainId }
        }
      } = await this.get.block("latest")
      chainId = latestChainId
    }
    this.chainId = chainId

    return chainId
  }

  async getAccount(senderAddress: string) {
    const { sequence, account_number: accountNumber } = await this.get.account(
      senderAddress
    )
    this.accounts[senderAddress] = {
      // prevent downgrading a sequence number as we assume we send a transaction that hasn't affected the remote sequence number yet
      sequence:
        this.accounts[senderAddress] &&
        sequence < this.accounts[senderAddress].sequence
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
  async send(
    senderAddress: string,
    sendParams: any,
    messages: any,
    signer: string
  ) {
    const chainId = await this.setChainId()
    const { sequence, accountNumber } = await this.getAccount(senderAddress)

    const { hash, included } = await send(
      sendParams,
      messages,
      signer,
      this.url,
      chainId,
      accountNumber,
      sequence
    )
    this.accounts[senderAddress].sequence = (
      parseInt(this.accounts[senderAddress].sequence) + 1
    ).toString()

    return {
      hash,
      sequence,
      included
    }
  }

  async simulate(
    senderAddress: string,
    params: { message: TMsg; memo?: string }
  ) {
    const chainId = await this.setChainId()
    const { sequence, accountNumber } = await this.getAccount(senderAddress)

    return simulate(
      this.url,
      senderAddress,
      chainId,
      params.message,
      params.memo,
      sequence,
      accountNumber
    )
  }
}
