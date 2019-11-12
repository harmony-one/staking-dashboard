/* eslint-env browser */

const GAS_ADJUSTMENT = 1.5

export type TMsgType =
  | "cosmos-sdk/MsgSend"
  | "cosmos-sdk/MsgDelegate"
  | "cosmos-sdk/MsgUndelegate"
  | "cosmos-sdk/MsgBeginRedelegate"
  | "cosmos-sdk/MsgSubmitProposal"
  | "cosmos-sdk/MsgVote"
  | "cosmos-sdk/MsgDeposit"
  | "cosmos-sdk/MsgWithdrawDelegationReward"

export type TMsg = {
  type: TMsgType;
  value: any;
}

export default async function simulate(
  cosmosRESTURL: string,
  senderAddress: string,
  chainId: any,
  msg: TMsg,
  memo: any,
  sequence: any,
  accountNumber: any
) {
  const type = msg.type

  const path: Record<TMsgType, () => void> = {
    "cosmos-sdk/MsgSend": () => `/bank/accounts/${senderAddress}/transfers`,
    "cosmos-sdk/MsgDelegate": () =>
      `/staking/delegators/${senderAddress}/delegations`,
    "cosmos-sdk/MsgUndelegate": () =>
      `/staking/delegators/${senderAddress}/unbonding_delegations`,
    "cosmos-sdk/MsgBeginRedelegate": () =>
      `/staking/delegators/${senderAddress}/redelegations`,
    "cosmos-sdk/MsgSubmitProposal": () => `/gov/proposals`,
    "cosmos-sdk/MsgVote": () => `/gov/proposals/${msg.value.proposal_id}/votes`,
    "cosmos-sdk/MsgDeposit": () =>
      `/gov/proposals/${msg.value.proposal_id}/deposits`,
    "cosmos-sdk/MsgWithdrawDelegationReward": () =>
      `/distribution/delegators/${senderAddress}/rewards`
  }

  path[type]()

  const url = `${cosmosRESTURL}${path}`

  const tx = createRESTPOSTObject(
    senderAddress,
    chainId,
    { sequence, accountNumber, memo },
    msg
  )

  const { gas_estimate: gasEstimate } = await fetch(url, {
    method: `POST`,
    body: JSON.stringify(tx)
  }).then(res => res.json())
  return Math.round(gasEstimate * GAS_ADJUSTMENT)
}

// attaches the request meta data to the message
function createRESTPOSTObject(
  senderAddress: string,
  chainId: string,
  { sequence, accountNumber, memo }: any,
  msg: any
) {
  const requestMetaData = {
    sequence,
    from: senderAddress,
    account_number: accountNumber,
    chain_id: chainId,
    simulate: true,
    memo
  }

  return { base_req: requestMetaData, ...msg.value }
}
