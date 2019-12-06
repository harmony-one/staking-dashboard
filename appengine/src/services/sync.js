const axios = require('axios')
const { isNotEmpty, bodyParams } = require('./helpers')

const STAKING_NETWORK_INFO = 'STAKING_NETWORK_INFO'
const VALIDATORS = 'VALIDATORS'
const ACTIVE_VALIDATORS = 'ACTIVE_VALIDATORS'
const VALIDATOR_INFO = 'VALIDATOR_INFO'
const DELEGATIONS_BY_DELEGATOR = 'DELEGATIONS_BY_DELEGATOR'
const DELEGATIONS_BY_VALIDATOR = 'DELEGATIONS_BY_VALIDATOR'

module.exports = function (BLOCKCHAIN_SERVER) {
  const cache = {
    VALIDATORS: [],
    ACTIVE_VALIDATORS: [],
    VALIDATOR_INFO: {},
    DELEGATIONS_BY_DELEGATOR: {},
    DELEGATIONS_BY_VALIDATOR: {},
    STAKING_NETWORK_INFO: {}
  }

  console.log('Blockchain server: ', BLOCKCHAIN_SERVER)

  const apiClient = axios.create({
    baseURL: BLOCKCHAIN_SERVER,
    // baseURL: process.env.SERVER,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const getActiveValidatorAddressesData = async () => {
    try {
      const res = await apiClient.post(
        '/',
        bodyParams('hmy_getActiveValidatorAddresses')
      )

      if (Array.isArray(res.data.result)) {
        cache[ACTIVE_VALIDATORS] = res.data.result
      }
      // console.log("hmy_getActiveValidatorAddresses", res.data)
      return res.data.result
    } catch (err) {
      // console.log(err)
    }
  }

  const getAllValidatorAddressesData = async () => {
    try {
      const res = await apiClient.post(
        '/',
        bodyParams('hmy_getAllValidatorAddresses')
      )

      if (Array.isArray(res.data.result)) {
        cache[VALIDATORS] = res.data.result
      }
      // console.log("getAllValidatorAddressesData", res.data)
      return res.data.result
    } catch (err) {
      // console.log(err)
    }
  }

  const syncStakingNetworkInfo = async () => {
    try {
      const res = await apiClient.post(
        '/',
        bodyParams('hmy_getStakingNetworkInfo')
      )

      if (res.data.result) {
        cache[STAKING_NETWORK_INFO] = res.data.result
      }

      const res2 = await apiClient.post('/', bodyParams('hmy_latestHeader'))
      if (res2.data.result) {
        cache[STAKING_NETWORK_INFO].blockNumber = res2.data.result.blockNumber
        cache[STAKING_NETWORK_INFO].blockHash = res2.data.result.blockHash
      }
      // console.log("getAllValidatorAddressesData", res.data)
      return cache[STAKING_NETWORK_INFO]
    } catch (err) {
      // console.log(err)
    }
  }
  const getValidatorInfoData = async address => {
    const res = await apiClient.post(
      '/',
      bodyParams('hmy_getValidatorInformation', address)
    )

    if (isNotEmpty(res.data.result)) {
      let selfStake = 0
      if (cache[DELEGATIONS_BY_VALIDATOR][address]) {
        const elem = cache[DELEGATIONS_BY_VALIDATOR][address].find(
          e => e.validator_address === e.delegator_address
        )
        if (elem) {
          selfStake = elem.amount
        }
      }

      // fields below are included in the validator.
      // * signed_blocks
      // * blocks_should_sign
      // * total_one_staked

      const validatorInfo = {
        ...res.data.result,
        active: !!cache[ACTIVE_VALIDATORS].includes(address),
        self_stake: selfStake,
        // TODO(minh) fix it.
        total_one_staked: 4
      }

      cache[VALIDATOR_INFO][address] = validatorInfo
    }
    // console.log("getAllValidatorInfoData ${address}", res.data);
    return res.data.result
  }

  const getDelegationsByDelegatorData = async address => {
    const res = await apiClient.post(
      '/',
      bodyParams('hmy_getDelegationsByDelegator', address)
    )

    if (isNotEmpty(res.data.result)) {
      cache[DELEGATIONS_BY_DELEGATOR][address] = res.data.result
    }
    // console.log("getDelegationsByDelegatorData ${address}", res.data.result);
    return res.data.result
  }

  const getDelegationsByValidatorData = async address => {
    const res = await apiClient.post(
      '/',
      bodyParams('hmy_getDelegationsByValidator', address)
    )

    if (isNotEmpty(res.data.result)) {
      cache[DELEGATIONS_BY_VALIDATOR][address] = res.data.result
    }
    // console.log("getDelegationsByValidatorData ${address}", res.data.result);
    return res.data.result
  }

  const update = async () => {
    try {
      await getActiveValidatorAddressesData()

      if (cache[ACTIVE_VALIDATORS]) {
        cache[ACTIVE_VALIDATORS].forEach(async address => {
          await getValidatorInfoData(address)
          await getDelegationsByValidatorData(address)
        })
      }

      // TODO: currently only fetch active validators.
      await getAllValidatorAddressesData()

      if (cache[VALIDATORS]) {
        cache[VALIDATORS].forEach(async address => {
          await getValidatorInfoData(address)
          await getDelegationsByValidatorData(address)
        })
      }

      await syncStakingNetworkInfo()
    } catch (err) {
      console.log('Error: ', err.message)
    }
  }

  setInterval(async () => {
    console.log('--------- Updating ---------', BLOCKCHAIN_SERVER)
    await update()
  }, 4000)

  const getStakingNetworkInfo = () => {
    const stakingNetworkInfo = !cache[STAKING_NETWORK_INFO]
      ? {}
      : cache[STAKING_NETWORK_INFO]

    return stakingNetworkInfo
  }

  const getValidators = () => {
    const validators = !cache[VALIDATORS] ? [] : cache[VALIDATORS]

    return validators
      .map(address => {
        return { ...cache[VALIDATOR_INFO][address] }
      })
      .filter(isNotEmpty)
  }

  const getActiveValidators = () => {
    if (!cache[ACTIVE_VALIDATORS]) {
      return []
    }

    return cache[ACTIVE_VALIDATORS].map(address => {
      return cache[VALIDATOR_INFO][address]
    }).filter(isNotEmpty)
  }

  const getDelegationsByDelegator = async address =>
    await getDelegationsByDelegatorData(address)

  return {
    getStakingNetworkInfo,
    getValidators,
    getActiveValidators,
    getValidatorInfo: address => cache[VALIDATOR_INFO][address],
    getDelegationsByDelegator,
    getDelegationsByValidator: address =>
      cache[DELEGATIONS_BY_VALIDATOR][address]
  }
}
// current_block_number: 10,
// current_block_hash: '0xaa7c3439771d5a329c2ee6407ba6dbdc6d88b43c0c2e5669c9c260fec62ff185',
// total_one_staked: 4
