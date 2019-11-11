/* eslint-env browser */

const GAS_ADJUSTMENT = 1.5

export default async function simulate (
  cosmosRESTURL,
  senderAddress,
  chainId,
  msg,
  memo,
  sequence,
  accountNumber
) {
  const type = msg.type
  const path = {
    'cosmos-sdk/MsgSend': () => `/bank/accounts/${senderAddress}/transfers`,
    'cosmos-sdk/MsgDelegate': () => `/staking/delegators/${senderAddress}/delegations`,
    'cosmos-sdk/MsgUndelegate': () => `/staking/delegators/${senderAddress}/unbonding_delegations`,
    'cosmos-sdk/MsgBeginRedelegate': () => `/staking/delegators/${senderAddress}/redelegations`,
    'cosmos-sdk/MsgSubmitProposal': () => `/gov/proposals`,
    'cosmos-sdk/MsgVote': () => `/gov/proposals/${msg.value.proposal_id}/votes`,
    'cosmos-sdk/MsgDeposit': () => `/gov/proposals/${msg.value.proposal_id}/deposits`,
    'cosmos-sdk/MsgWithdrawDelegationReward': () => `/distribution/delegators/${senderAddress}/rewards`
  }[type]()
  const url = `${cosmosRESTURL}${path}`

  const tx = createRESTPOSTObject(senderAddress, chainId, { sequence, accountNumber, memo }, msg)

  const { gas_estimate: gasEstimate } = await fetch(url, { method: `POST`, body: JSON.stringify(tx) }).then(res => res.json())
  return Math.round(gasEstimate * GAS_ADJUSTMENT)
}

// attaches the request meta data to the message
function createRESTPOSTObject (senderAddress, chainId, { sequence, accountNumber, memo }, msg) {
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
