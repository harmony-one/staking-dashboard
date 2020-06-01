// Bank
export function MsgSend(
  senderAddress: string,
  {
    toAddress,
    amounts // [{ denom, amount}]
  }: any
) {
  return {
    type: `harmony-sdk/MsgSend`,
    value: {
      from_address: senderAddress,
      to_address: toAddress,
      amount: amounts.map(Coin)
    }
  }
}

// Staking
export function MsgDelegate(
  senderAddress: string,
  { validatorAddress, amount, denom }: any
) {
  return {
    type: `harmony-sdk/MsgDelegate`,
    value: {
      delegator_address: senderAddress,
      validator_address: validatorAddress,
      amount: Coin({ amount, denom })
    }
  }
}
export function MsgMultiDelegate(
  senderAddress: string,
  { validatorAddress, amount, denom }: any
) {
  return {
    type: `harmony-sdk/MsgMultiDelegate`,
    value: {
      delegator_address: senderAddress,
      validator_address: validatorAddress,
      amount: Coin({ amount, denom })
    }
  }
}

export function MsgUndelegate(
  senderAddress: string,
  { validatorAddress, amount, denom }: any
) {
  return {
    type: `harmony-sdk/MsgUndelegate`,
    value: {
      validator_address: validatorAddress,
      delegator_address: senderAddress,
      amount: Coin({ amount, denom })
    }
  }
}

export function MsgRedelegate(
  senderAddress: string,
  { validatorSourceAddress, validatorDestinationAddress, amount, denom }: any
) {
  return {
    type: `harmony-sdk/MsgBeginRedelegate`,
    value: {
      delegator_address: senderAddress,
      validator_src_address: validatorSourceAddress,
      validator_dst_address: validatorDestinationAddress,
      amount: Coin({ amount, denom })
    }
  }
}

// Governance

export function MsgSubmitProposal(
  senderAddress: string,
  {
    proposalType,
    title,
    description,
    initialDeposits // [{ denom, amount }]
  }: any
) {
  return {
    type: `harmony-sdk/MsgSubmitProposal`,
    value: {
      proposer: senderAddress,
      proposal_type: proposalType,
      title,
      description,
      initial_deposit: initialDeposits.map(Coin)
    }
  }
}

export function MsgVote(senderAddress: string, { proposalId, option }: any) {
  return {
    type: `harmony-sdk/MsgVote`,
    value: {
      voter: senderAddress,
      proposal_id: proposalId,
      option
    }
  }
}

export function MsgDeposit(
  senderAddress: string,
  {
    proposalId,
    amounts // [{ denom, amount }]
  }: any
) {
  return {
    type: `harmony-sdk/MsgDeposit`,
    value: {
      depositor: senderAddress,
      proposal_id: proposalId,
      amount: amounts.map(Coin)
    }
  }
}

export function MsgWithdrawDelegationReward(
  senderAddress: string,
  { validatorAddress, amount }: any
) {
  return {
    type: `harmony-sdk/MsgWithdrawDelegationReward`,
    value: {
      delegator_address: senderAddress,
      validator_address: validatorAddress,
      amount: amount
    }
  }
}

function Coin({ amount, denom }: any) {
  return {
    amount: String(amount),
    denom
  }
}

export type TMsgFuncConstructor = (
  senderAddress: string,
  params: any
) => { type: string; value: any }

export default {
  MsgSend: MsgSend,
  MsgMultiDelegate: MsgMultiDelegate,
  MsgDelegate: MsgDelegate,
  MsgUndelegate: MsgUndelegate,
  MsgRedelegate: MsgRedelegate,
  MsgSubmitProposal: MsgSubmitProposal,
  MsgVote: MsgVote,
  MsgDeposit: MsgDeposit,
  MsgWithdrawDelegationReward: MsgWithdrawDelegationReward
}
