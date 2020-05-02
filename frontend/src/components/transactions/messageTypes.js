const messageType = {
  SEND: "harmony-sdk/MsgSend",
  CREATE_VALIDATOR: "harmony-sdk/MsgCreateValidator",
  EDIT_VALIDATOR: "harmony-sdk/MsgEditValidator",
  DELEGATE: "harmony-sdk/MsgDelegate",
  MULTIDELEGATE: "harmony-sdk/MsgMultiDelegate",
  UNDELEGATE: "harmony-sdk/MsgUndelegate",
  BEGIN_REDELEGATE: "harmony-sdk/MsgBeginRedelegate",
  UNJAIL: "harmony-sdk/MsgUnjail",
  SUBMIT_PROPOSAL: "harmony-sdk/MsgSubmitProposal",
  DEPOSIT: "harmony-sdk/MsgDeposit",
  VOTE: "harmony-sdk/MsgVote",
  SET_WITHDRAW_ADDRESS: "harmony-sdk/MsgSetWithdrawAddress",
  WITHDRAW_DELEGATION_REWARD: "harmony-sdk/MsgWithdrawDelegationReward",
  WITHDRAW_VALIDATOR_COMMISSION: "harmony-sdk/MsgWithdrawValidatorCommission"
}

const transactionGroup = {
  [messageType.SEND]: "banking",
  [messageType.CREATE_VALIDATOR]: "staking",
  [messageType.EDIT_VALIDATOR]: "staking",
  [messageType.DELEGATE]: "staking",
  [messageType.UNDELEGATE]: "staking",
  [messageType.BEGIN_REDELEGATE]: "staking",
  [messageType.UNJAIL]: "staking",
  [messageType.SUBMIT_PROPOSAL]: "governance",
  [messageType.DEPOSIT]: "governance",
  [messageType.VOTE]: "governance",
  [messageType.SET_WITHDRAW_ADDRESS]: "distribution",
  [messageType.WITHDRAW_DELEGATION_REWARD]: "distribution",
  [messageType.WITHDRAW_VALIDATOR_COMMISSION]: "distribution"
}

export { messageType, transactionGroup }
