const axios = require('axios')
const { isNotEmpty, bodyParams } = require('./helpers')

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
    DELEGATIONS_BY_VALIDATOR: {}
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

  const getValidatorInfoData = async address => {
    const res = await apiClient.post(
      '/',
      bodyParams('hmy_getValidatorInformation', address)
    )

    if (isNotEmpty(res.data.result)) {
      cache[VALIDATOR_INFO][address] = res.data.result
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
    } catch (err) {
      console.log('Error: ', err.message)
    }
  }

  setInterval(async () => {
    console.log('--------- Updating ---------', BLOCKCHAIN_SERVER)
    await update()
  }, 4000)

  const getValidators = () => {
    const validators = !cache[VALIDATORS] ? [] : cache[VALIDATORS]
    const activeValidators = !cache[ACTIVE_VALIDATORS]
      ? []
      : cache[ACTIVE_VALIDATORS]

    return validators
      .map(address => {
        let self_stake = 0
        if (cache[DELEGATIONS_BY_VALIDATOR][address]) {
          const elem = cache[DELEGATIONS_BY_VALIDATOR][address].find(
            e => e.validator_address === e.delegator_address
          )
          if (elem) {
            self_stake = elem.amount
          }
        }

        return {
          ...cache[VALIDATOR_INFO][address],
          active: !!activeValidators.includes(address),
          self_stake: self_stake / 1e18
        }
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
    getValidators,
    getActiveValidators,
    getValidatorInfo: address => cache[VALIDATOR_INFO][address],
    getDelegationsByDelegator,
    getDelegationsByValidator: address =>
      cache[DELEGATIONS_BY_VALIDATOR][address]
  }
}
