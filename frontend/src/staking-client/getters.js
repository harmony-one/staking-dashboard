'use strict'

/* eslint-env browser */

const RETRIES = 4

export default function Getters (cosmosRESTURL) {
  // request and retry
  function get (path, tries = RETRIES) {
    while (tries) {
      try {
        return fetch(cosmosRESTURL + path).then(res => res.json())
      } catch (err) {
        if (--tries === 0) {
          throw err
        }
      }
    }
  }

  return {
    url: cosmosRESTURL,

    // meta
    connected: function () {
      return this.nodeVersion().then(() => true, () => false)
    },

    nodeVersion: () => fetch(cosmosRESTURL + `/node_version`).then(res => res.text()),

    // coins
    account: function (address) {
      const emptyAccount = {
        coins: [],
        sequence: `0`,
        account_number: `0`
      }
      return get(`/auth/accounts/${address}`)
        .then(res => {
          // HACK, hope for: https://github.com/cosmos/cosmos-sdk/issues/3885
          let account = res.value || emptyAccount
          if (res.type === `auth/DelayedVestingAccount`) {
            if (!account.BaseVestingAccount) {
              console.error(
                `SDK format of vesting accounts responses has changed`
              )
              return emptyAccount
            }
            account = Object.assign(
              {},
              account.BaseVestingAccount.BaseAccount,
              account.BaseVestingAccount
            )
            delete account.BaseAccount
            delete account.BaseVestingAccount
          }
          return account
        })
        .catch(err => {
          // if account not found, return null instead of throwing
          if (
            err.response &&
            (err.response.data.includes(`account bytes are empty`) ||
              err.response.data.includes(`failed to prove merkle proof`))
          ) {
            return emptyAccount
          }
          throw err
        })
    },
    txs: function (addr) {
      return Promise.all([
        this.bankTxs(addr),
        this.governanceTxs(addr),
        this.distributionTxs(addr),
        this.stakingTxs(addr)
      ]).then((txs) => [].concat(...txs))
    },
    bankTxs: function (addr) {
      return Promise.all([
        get(`/txs?sender=${addr}`),
        get(`/txs?recipient=${addr}`)
      ]).then(([senderTxs, recipientTxs]) => [].concat(senderTxs, recipientTxs))
    },
    txsByHeight: function (height) {
      return get(`/txs?tx.height=${height}`)
    },
    tx: hash => get(`/txs/${hash}`),

    /* ============ STAKE ============ */
    stakingTxs: async function (address, valAddress) {
      return Promise.all([
        get(
          `/txs?action=create_validator&destination-validator=${valAddress}`),
        get(
          `/txs?action=edit_validator&destination-validator=${valAddress}`),
        get(`/txs?action=delegate&delegator=${address}`),
        get(`/txs?action=begin_redelegate&delegator=${address}`),
        get(`/txs?action=begin_unbonding&delegator=${address}`),
        get(`/txs?action=unjail&source-validator=${valAddress}`)
      ]).then(([
        createValidatorTxs,
        editValidatorTxs,
        delegationTxs,
        redelegationTxs,
        undelegationTxs,
        unjailTxs
      ]) =>
        [].concat(
          createValidatorTxs,
          editValidatorTxs,
          delegationTxs,
          redelegationTxs,
          undelegationTxs,
          unjailTxs
        )
      )
    },
    // Get all delegations information from a delegator
    delegations: function (addr) {
      return get(`/staking/delegators/${addr}/delegations`)
    },
    undelegations: function (addr) {
      return get(

        `/staking/delegators/${addr}/unbonding_delegations`,
        true
      )
    },
    redelegations: function (addr) {
      return get(`/staking/redelegations?delegator=${addr}`)
    },
    // Query all validators that a delegator is bonded to
    delegatorValidators: function (delegatorAddr) {
      return get(`/staking/delegators/${delegatorAddr}/validators`)
    },
    // Get a list containing all the validator candidates
    validators: () => Promise.all([
      get(`/staking/validators?status=unbonding`),
      get(`/staking/validators?status=bonded`),
      get(`/staking/validators?status=unbonded`)
    ]).then((validatorGroups) =>
      [].concat(...validatorGroups)
    ),
    // Get information from a validator
    validator: function (addr) {
      return get(`/staking/validators/${addr}`)
    },

    // Get the list of the validators in the latest validator set
    validatorSet: () => get(`/validatorsets/latest`),

    // Query a delegation between a delegator and a validator
    delegation: function (delegatorAddr, validatorAddr) {
      return get(

        `/staking/delegators/${delegatorAddr}/delegations/${validatorAddr}`,
        true
      )
    },
    unbondingDelegation: function (delegatorAddr, validatorAddr) {
      return get(

        `/staking/delegators/${delegatorAddr}/unbonding_delegations/${validatorAddr}`,
        true
      )
    },
    pool: () => get(`/staking/pool`),
    stakingParameters: () => get(`/staking/parameters`),

    /* ============ Slashing ============ */

    validatorSigningInfo: function (pubKey) {
      return get(`/slashing/validators/${pubKey}/signing_info`)
    },

    /* ============ Governance ============ */

    proposals: () => get(`/gov/proposals`),
    proposal: function (proposalId) {
      return get(`/gov/proposals/${proposalId}`)
    },
    proposalVotes: function (proposalId) {
      return get(`/gov/proposals/${proposalId}/votes`)
    },
    proposalVote: function (proposalId, address) {
      return get(`/gov/proposals/${proposalId}/votes/${address}`)
    },
    proposalDeposits: function (proposalId) {
      return get(`/gov/proposals/${proposalId}/deposits`)
    },
    proposalDeposit: function (proposalId, address) {
      return get(

        `/gov/proposals/${proposalId}/deposits/${address}`,
        true
      )
    },
    proposalTally: function (proposalId) {
      return get(`/gov/proposals/${proposalId}/tally`)
    },
    govDepositParameters: () => get(`/gov/parameters/deposit`),
    govTallyingParameters: () => get(`/gov/parameters/tallying`),
    govVotingParameters: () => get(`/gov/parameters/voting`),
    governanceTxs: async function (address) {
      return Promise.all([
        get(`/txs?action=submit_proposal&proposer=${address}`),
        get(`/txs?action=deposit&depositor=${address}`),
        get(`/txs?action=vote&voter=${address}`)
      ]).then(([submitProposalTxs, depositTxs, voteTxs]) =>
        [].concat(submitProposalTxs, depositTxs, voteTxs)
      )
    },
    /* ============ Explorer ============ */
    block: function (blockHeight) {
      return get(`/blocks/${blockHeight}`)
    },
    /* ============ Distribution ============ */
    distributionTxs: async function (address, valAddress) {
      return Promise.all([
        get(`/txs?action=set_withdraw_address&delegator=${address}`),
        get(`/txs?action=withdraw_delegator_reward&delegator=${address}`),
        get(`/txs?action=withdraw_validator_rewards_all&source-validator=${valAddress}`)
      ]).then(([
        updateWithdrawAddressTxs,
        withdrawDelegationRewardsTxs,
        withdrawValidatorCommissionTxs
      ]) =>
        [].concat(
          updateWithdrawAddressTxs,
          withdrawDelegationRewardsTxs,
          withdrawValidatorCommissionTxs
        )
      )
    },
    delegatorRewards: function (delegatorAddr) {
      return get(`/distribution/delegators/${delegatorAddr}/rewards`)
    },
    delegatorRewardsFromValidator: async function (delegatorAddr, validatorAddr) {
      return (await get(
        `/distribution/delegators/${delegatorAddr}/rewards/${validatorAddr}`
      )) || []
    },
    validatorDistributionInformation: function (validatorAddr) {
      return get(`/distribution/validators/${validatorAddr}`)
    },
    validatorRewards: function (validatorAddr) {
      return get(`/distribution/validators/${validatorAddr}/rewards`)
    },
    distributionParameters: function () {
      return get(`/distribution/parameters`)
    },
    distributionOutstandingRewards: function () {
      return get(`/distribution/outstanding_rewards`)
    },

    annualProvisionedTokens: function () {
      return get(`/minting/annual-provisions`)
    },
    inflation: function () {
      return get(`/minting/inflation`)
    },
    mintingParameters: function () {
      return get(`/minting/parameters`)
    }
  }
}
