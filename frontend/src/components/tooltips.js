export default {
  portfolio: {
    total_one: "Total ONE tokens",
    staked: "Amount of ONE delegated",
    available: "Amount of ONE that available to delegate",
    rewards: "Rewards yet to be claimed",
    lifetime_rewards: "Total lifetime rewards earned",
    portfolio_allocation: "Delegation amount across different validators",

    // delegation table
    status: `The validator's status`,
    name: `The validator's moniker`,
    stake: `Stake of validator`,
    reward_up_to_date: "Unclaimed rewards",
    apr_avg: "Average annual percentage return rate from each validator",
    ending_in: "Epochs left until undelegation funds will be accessible"
  },

  v_list: {
    effective_median_stake: "Median of ONE staked among the top elected slots ",
    total_stake: "Total ONE staked in the Harmony network",
    current_block_number: "Current block height of Harmony blockchain",

    all: "All validators that have been created & listed on the chain",

    // status cell
    select: "Check the validators to send multiple delegation",
    multi_delegate: "Click this button to send multiple delgation",
    elected:
      "Validator currently selected & eligible to sign blocks & earn rewards",
    not_elected:
      "Validator currently not-selected to sign blocks due to low stake or insufficient uptime",

    // table list
    status: `Election status of validator in current epoch`,

    name: `Validator name`,
    apr: "Expected annual percentage return rate",
    stake: "Total ONE staked by the validator",
    fees: "Commission on rewards charged by validator",
    uptime: "Signing percentage for this validator's nodes"
  },

  v_profile: {
    total_staked: "Total ONE staked on this validator",
    delegated: "Total ONE delegated to this validator",
    self_stake: "Amount of ONE staked by validator ",
    max_delegation:
      "Maximum ONE stake allowed by the validator, including self-stake",
    validator_since: "Block number at which validator registered",
    commission: "Commission on rewards charged by validator",
    max_daily_change:
      "Maximum daily change in commission allowed for this validator",
    uptime_avg: "Signing percentage for this validator's nodes",
    slots: "Number of seats (bls keys) associated with the Validator",
    elected_slots:
      "Number of seats (bls keys) elected in the current committee",
    apr: "Average estimated annual percentage return rate by this validator",
    shards:
      "Shards in which validator's BLS keys belong, shown order is based on time to add",
    stake_delegation_history:
      "Stake and delegation amount for the validator at every epoch",
    reward_rate_history:
      "Expected annual percentage return rate for validator at every epoch",
    delegators:
      "List of accounts that delegated to this validator and delegation amount",

    rewards: `All rewards earned by the validator`
  },

  v_global: {
    committee_allocation: ``,
    next_epoch: ``,
    slots: ``,
    bid: ``,
    effective_stake: ``,
    total_stake: ``,
    seats_elected: ``,
    seat_allocation_history: ``,
    total_stake_history: ``,
    effective_median_history: ``
  }
}
