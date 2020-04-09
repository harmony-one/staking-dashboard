// const names = [
//   "Total ONE",
//   "Staked",
//   "Available",
//   "Rewards",
//   "Lifetime rewards",
//   "Portfolio allocation",
//   "Reward (up to date)",
//   "APR % (AVG)",
//   "Ending in",
//   "Effective Median Stake",
//   "Total Stake",
//   "All",
//   "Elected",
//   "Not Elected",
//   "APR %",
//   "Stake",
//   "Fees",
//   "Uptime",
//   "Total staked",
//   "Delegated",
//   "Self stake",
//   "Max delegation",
//   "Validator since",
//   "Commission",
//   "Max daily change",
//   "Uptime (AVG)",
//   "Slots",
//   "Elected slots",
//   "APR",
//   "Shards",
//   "Stake & delegation history",
//   "Reward rate history"
// ]
//
// const descriptions = [
//   "Current available balance for the account on Shard 0 + total amount staked in all validators + rewards available to collect",
//   "Total amount delegated to validators",
//   "Current available balance for the account on Shard 0",
//   "Unclaimed rewards for the account",
//   "Total rewards earned by the account (claimed + unclaimed)",
//   "Distribution of delegations by this account across different validators",
//   "Total rewards earned from each validator (claimed + unclaimed)",
//   "Average annual percentage return rate from each validator",
//   "Epochs left until undelegation, funds will not be accessible until then",
//   "Median of amount staked among the top elected slots",
//   "Total amount staked in the selected Harmony network",
//   "All validators that have been created & listed on the chain",
//   "Validator selected in the current committe that signs blocks & collects rewards (does not indicate that your node is actually signing blocks)",
//   "Validator information exists on chain, but has not been selected as part of the current committee (can be due to low stake, unavailibility, banned)",
//   "Expected annual percentage return rate for staked amount",
//   "Total stake of the validator",
//   "Commission rate that the validator charges on the rewards earned from delegations",
//   "Num blocks signed / Num blocks able to have signed (Lifetime stats)",
//   "Total amount staked on this validator",
//   "Total amount delegated to this validator",
//   "Amount of stake that the validator delegated to itself",
//   "Maximum amount of total stake allowed by the validator, including self-stake",
//   "Block number at which validator registered",
//   "Commission rate that the validator charges on the rewards earned from delegations",
//   "Maximum daily percent point change allowed for this validator",
//   "Num blocks signed / Num blocks able to have signed (Lifetime stats)",
//   "Number of BLS Keys associated with the Validator (Does not indicate number of nodes the Validator is running)",
//   "Number of BLS keys assigned a slot in the current committee by this validator",
//   "Average estimated annual percentage return rate by this validator",
//   "Shards in which validator's BLS keys belong, shown order is based on time to add (shards: 0, 1, 2, 3)",
//   "Stake and delegation amount by the validator at every epoch",
//   "Expected annual percentage return rate for staked amount at every epoch",
//   "List of accounts that delegated to this validator and delegation amount, including pending delegations"
// ]
//
// const tooltips = {}
//
// names.forEach((name, idx) => {
//   const id = name
//     .toLowerCase()
//     .replace(/[^\w\s]/gi, "")
//     .replace(/ /g, "_")
//     .replace(/__/g, "_")
//
//   tooltips[id] = descriptions[idx]
// })
//
// window.tooltips = tooltips

export default {
  portfolio: {
    total_one:
      "Current available balance for the account on Shard 0 + total amount staked in all validators + rewards available to collect",
    staked: "Total amount delegated to validators",
    available: "Current available balance for the account on Shard 0",
    rewards: "Unclaimed rewards for the account",
    lifetime_rewards:
      "Total rewards earned by the account (claimed + unclaimed)",
    portfolio_allocation:
      "Distribution of delegations by this account across different validators",

    // delegation table
    status: `The validator's status`,
    name: `The validator's moniker`,
    stake: `Stake of validator`,
    reward_up_to_date:
      "Total rewards earned from each validator (claimed + unclaimed)",
    apr_avg: "Average annual percentage return rate from each validator",
    ending_in:
      "Epochs left until undelegation, funds will not be accessible until then"
  },

  v_list: {
    effective_median_stake:
      "Median of amount staked among the top elected slots",
    total_stake: "Total amount staked in the selected Harmony network",
    all: "All validators that have been created & listed on the chain",

    // status cell
    elected:
      "Validator selected in the current committe that signs blocks & collects rewards (does not indicate that your node is actually signing blocks)",
    not_elected:
      "Validator information exists on chain, but has not been selected as part of the current committee (can be due to low stake, unavailibility, banned)",

    // table list
    status: `The validator's status`,
    name: `The validator's moniker`,
    apr: "Expected annual percentage return rate for staked amount",
    stake: "Total stake of the validator",
    fees:
      "Commission rate that the validator charges on the rewards earned from delegations",
    uptime:
      "Num blocks signed / Num blocks able to have signed (Lifetime stats)"
  },

  v_profile: {
    total_staked: "Total amount staked on this validator",
    delegated: "Total amount delegated to this validator",
    self_stake: "Amount of stake that the validator delegated to itself",
    max_delegation:
      "Maximum amount of total stake allowed by the validator, including self-stake",
    validator_since: "Block number at which validator registered",
    commission:
      "Commission rate that the validator charges on the rewards earned from delegations",
    max_daily_change:
      "Maximum daily percent point change allowed for this validator",
    uptime_avg:
      "Num blocks signed / Num blocks able to have signed (Lifetime stats)",
    slots:
      "Number of BLS Keys associated with the Validator (Does not indicate number of nodes the Validator is running)",
    elected_slots:
      "Number of BLS keys assigned a slot in the current committee by this validator",
    apr: "Average estimated annual percentage return rate by this validator",
    shards:
      "Shards in which validator's BLS keys belong, shown order is based on time to add (shards: 0, 1, 2, 3)",
    stake_delegation_history:
      "Stake and delegation amount by the validator at every epoch",
    reward_rate_history:
      "Expected annual percentage return rate for staked amount at every epoch"
  }
}
