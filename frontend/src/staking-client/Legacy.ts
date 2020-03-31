const RETRIES = 4

export default class Legacy {
  url: string

  constructor(url: string) {
    this.url = url
  }

  // request and retry
  get = (path: string, tries: number = RETRIES): any => {
    while (tries) {
      try {
        return fetch(this.url + path).then(res => res.json())
      } catch (err) {
        if (--tries === 0) {
          throw err
        }
      }
    }
  }

  // meta
  connected = () => {
    return this.nodeVersion().then(
      () => true,
      () => false
    )
  }

  nodeVersion = () => fetch(this.url + `/node_version`).then(res => res.text())

  txs = (addr: string) => {
    return Promise.all([
      this.bankTxs(addr),
      this.governanceTxs(addr),
      this.distributionTxs(addr),
      this.stakingTxs(addr)
    ]).then(txs => [].concat(...txs))
  }

  bankTxs = (addr: string) => {
    return Promise.resolve([]);
  }

  txsByHeight = (height: string) => this.get(`/txs?tx.height=${height}`)

  // tx = (hash: string) => this.get(`/txs/${hash}`)

  /* ============ STAKE ============ */
  stakingTxs = async (address: string, valAddress: string = "") => {
    return Promise.resolve([])
  }
  // Get all delegations information from a delegator
  delegations = async (addr: string) => {
    // const delegatorAddressHex = crypto.getAddress(addr).basicHex

    // return await fetchDelegationsByAddress(delegatorAddressHex)
    return this.get(`/staking/delegators/${addr}/delegations`)
  }
  undelegations = (addr: string) => {
    return this.get(`/staking/delegators/${addr}/unbonding_delegations`, 1)
  }
  redelegations = (addr: string) => {
    return this.get(`/staking/redelegations?delegator=${addr}`)
  }
  // Query all validators that a delegator is bonded to
  // delegatorValidators = (delegatorAddr: string) => {
  //   return this.get(`/staking/delegators/${delegatorAddr}/validators`)
  // }
  // Get a list containing all the validator candidates
  validators = () =>
    Promise.all([
      this.get(`/staking/validators?status=unbonding`),
      this.get(`/staking/validators?status=bonded`),
      this.get(`/staking/validators?status=unbonded`)
    ]).then(validatorGroups => [].concat(...validatorGroups))
  // Get information from a validator
  validator = (addr: string) => {
    return this.get(`/staking/validators/${addr}`)
  }

  // Get the list of the validators in the latest validator set
  // validatorSet = () => this.get(`/validatorsets/latest`)

  // Query a delegation between a delegator and a validator
  delegation = (delegatorAddr: string, validatorAddr: string) => {
    return this.get(
      `/staking/delegators/${delegatorAddr}/delegations/${validatorAddr}`,
      1
    )
  }
  // unbondingDelegation = (delegatorAddr: string, validatorAddr: string) => {
  //   return this.get(
  //     `/staking/delegators/${delegatorAddr}/unbonding_delegations/${validatorAddr}`,
  //     1
  //   )
  // }

  pool = () => this.get(`/staking/pool`)

  stakingParameters = () => this.get(`/staking/parameters`)

  /* ============ Slashing ============ */

  // validatorSigningInfo = (pubKey: string) => {
  //   return this.get(`/slashing/validators/${pubKey}/signing_info`)
  // }

  /* ============ Governance ============ */

  proposals = () => this.get(`/gov/proposals`)
  proposal = (proposalId: string) => {
    return this.get(`/gov/proposals/${proposalId}`)
  }
  proposalVotes = (proposalId: string) => {
    return this.get(`/gov/proposals/${proposalId}/votes`)
  }
  // proposalVote = (proposalId: string, address: string) => {
  //   return this.get(`/gov/proposals/${proposalId}/votes/${address}`)
  // }
  proposalDeposits = (proposalId: string) => {
    return this.get(`/gov/proposals/${proposalId}/deposits`)
  }
  // proposalDeposit = (proposalId: string, address: string) => {
  //   return this.get(`/gov/proposals/${proposalId}/deposits/${address}`, 1)
  // }
  proposalTally = (proposalId: string) => {
    return this.get(`/gov/proposals/${proposalId}/tally`)
  }
  govDepositParameters = () => this.get(`/gov/parameters/deposit`)
  govTallyingParameters = () => this.get(`/gov/parameters/tallying`)
  govVotingParameters = () => this.get(`/gov/parameters/voting`)
  governanceTxs = async (address: string) => {
    return Promise.resolve([])
  }
  /* ============ Explorer ============ */
  block = (blockHeight: string) => {
    return this.get(`/blocks/${blockHeight}`)
  }
  /* ============ Distribution ============ */
  distributionTxs = async (address: string, valAddress: string = "") => {
    return Promise.resolve([])
  }
  delegatorRewardsFromValidator = async (
    delegatorAddr: string,
    validatorAddr: string
  ) => {
    return (
      (await this.get(
        `/distribution/delegators/${delegatorAddr}/rewards/${validatorAddr}`
      )) || []
    )
  }
  distributionParameters = () => {
    return this.get(`/distribution/parameters`)
  }
  distributionOutstandingRewards = () => {
    return this.get(`/distribution/outstanding_rewards`)
  }

  annualProvisionedTokens = () => {
    return this.get(`/minting/annual-provisions`)
  }
}
