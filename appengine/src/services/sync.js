const axios = require('axios')
const _ = require('lodash')
const { isNotEmpty, bodyParams } = require('./helpers')

const STAKING_NETWORK_INFO = 'STAKING_NETWORK_INFO'
const VALIDATORS = 'VALIDATORS'
const ACTIVE_VALIDATORS = 'ACTIVE_VALIDATORS'
const VALIDATOR_INFO = 'VALIDATOR_INFO'
const VALIDATOR_INFO_HISTORY = 'VALIDATOR_INFO_HISTORY'
const DELEGATIONS_BY_DELEGATOR = 'DELEGATIONS_BY_DELEGATOR'
const DELEGATIONS_BY_VALIDATOR = 'DELEGATIONS_BY_VALIDATOR'
const MAX_LENGTH = 30

module.exports = function(
  BLOCKCHAIN_SERVER,
  chainTitle,
  updateDocument,
  getCollectionDataWithLimit
) {
  const cache = {
    VALIDATORS: [],
    ACTIVE_VALIDATORS: [],
    VALIDATOR_INFO: {},
    VALIDATOR_INFO_HISTORY: {},
    DELEGATIONS_BY_DELEGATOR: {},
    DELEGATIONS_BY_VALIDATOR: {},
    STAKING_NETWORK_INFO: {}
  }

  console.log('Blockchain server: ', BLOCKCHAIN_SERVER)

  const historyCollection = `${chainTitle}_history`

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
      console.log('error when doing getAllValidatorAddressesData:', err)
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
        cache[STAKING_NETWORK_INFO].current_block_number =
          res2.data.result.blockNumber
        cache[STAKING_NETWORK_INFO].current_block_hash =
          res2.data.result.blockHash
      }

      const medianStakeRes = await apiClient.post(
        '/',
        bodyParams('hmy_getMedianRawStakeSnapshot')
      )
      if (medianStakeRes.data.result) {
        cache[STAKING_NETWORK_INFO].effective_median_stake =
          medianStakeRes.data.result
      }

      // console.log("getAllValidatorAddressesData", res.data)
      return cache[STAKING_NETWORK_INFO]
    } catch (err) {
      // console.log(err)
    }
  }

  const getDayIndex = utcDate =>
    Math.floor(utcDate.getTime() / (1000 * 60 * 60 * 24))

  const getRecentData = async address => {
    const res = new Map()
    try {
      const recent = await getCollectionDataWithLimit(
        historyCollection,
        address,
        'index',
        MAX_LENGTH
      )
      _.forEach(recent, item => {
        res[item.index] = item
      })
    } catch (err) {
      console.log(`error when getRecentData ${address}`, err)
    }
    return res
  }

  const getValidatorInfoData = async address => {
    try {
      const res = await apiClient.post(
        '/',
        bodyParams('hmy_getValidatorInformation', address)
      )

      if (isNotEmpty(res.data.result)) {
        let selfStake = 0
        let totalStake = 0
        if (cache[DELEGATIONS_BY_VALIDATOR][address]) {
          const elem = cache[DELEGATIONS_BY_VALIDATOR][address].find(
            e => e.validator_address === e.delegator_address
          )
          if (elem) {
            selfStake = elem.amount
          }
          totalStake = cache[DELEGATIONS_BY_VALIDATOR][address].reduce(
            (acc, val) => acc + val.amount,
            0
          )
        }

        // fields below are included in the validator.
        // * signed_blocks
        // * blocks_should_sign
        // * total_one_staked
        const utcDate = new Date(Date.now())
        const dayIndex = getDayIndex(utcDate)

        const validatorInfo = {
          active: !!cache[ACTIVE_VALIDATORS].includes(address),
          self_stake: selfStake,
          total_stake: totalStake,
          // TODO(minh) fix it.
          signed_blocks: 50,
          blocks_should_sign: 100,
          total_one_staked: 4,
          uctDate: utcDate,
          index: dayIndex,
          address: res.data.result['one-address'],
          ...res.data.result
        }

        // Calculating cache[VALIDATOR_INFO_HISTORY]
        if (!cache[VALIDATOR_INFO_HISTORY][address]) {
          cache[VALIDATOR_INFO_HISTORY][address] = await getRecentData(address)
        }
        // update the previous dayIndex if this is the first time dayIndex will be inserted.
        if (!cache[VALIDATOR_INFO_HISTORY][address][dayIndex]) {
          await updateDocument(
            historyCollection,
            `${address}_${dayIndex}`,
            validatorInfo
          )
          if (cache[VALIDATOR_INFO_HISTORY][address][dayIndex - 1]) {
            await updateDocument(
              historyCollection,
              `${address}_${dayIndex - 1}`,
              cache[VALIDATOR_INFO_HISTORY][address][dayIndex - 1]
            )
          }
        }
        if (
          cache[VALIDATOR_INFO][address] &&
          cache[VALIDATOR_INFO][address].commission &&
          validatorInfo.commission.rate !==
            cache[VALIDATOR_INFO][address].commission.rate
        ) {
          validatorInfo['commision-recent-change'] = utcDate
        } else if (
          cache[VALIDATOR_INFO][address] &&
          cache[VALIDATOR_INFO][address]['commision-recent-change']
        ) {
          validatorInfo['commision-recent-change'] =
            cache[VALIDATOR_INFO][address]['commision-recent-change']
        }
        cache[VALIDATOR_INFO][address] = validatorInfo
        cache[VALIDATOR_INFO_HISTORY][address][dayIndex] = validatorInfo
        if (cache[VALIDATOR_INFO_HISTORY][address][dayIndex - MAX_LENGTH]) {
          delete cache[VALIDATOR_INFO_HISTORY][address][dayIndex - MAX_LENGTH]
        }
      }
      // console.log("getAllValidatorInfoData ${address}", res.data);
      return res.data.result
    } catch (e) {
      console.log('error in getValidatorInfoData:', e)
    }
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

      console.log(
        'ActiveValidators: ',
        cache[ACTIVE_VALIDATORS] && cache[ACTIVE_VALIDATORS].length
      )
      cache[ACTIVE_VALIDATORS] = cache[ACTIVE_VALIDATORS].slice(0, 30)
      console.log(
        'ActiveValidators: ',
        cache[ACTIVE_VALIDATORS] && cache[ACTIVE_VALIDATORS].length
      )

      if (cache[ACTIVE_VALIDATORS]) {
        cache[ACTIVE_VALIDATORS].forEach(async address => {
          await getDelegationsByValidatorData(address)
          await getValidatorInfoData(address)
        })
      }

      // TODO: currently only fetch active validators.
      await getAllValidatorAddressesData()

      console.log(
        'ActiveValidators: ',
        cache[ACTIVE_VALIDATORS] && cache[ACTIVE_VALIDATORS].length
      )
      cache[VALIDATORS] = cache[VALIDATORS].slice(0, 30)
      console.log('Validators: ', cache[VALIDATORS] && cache[VALIDATORS].length)

      if (cache[VALIDATORS]) {
        cache[VALIDATORS].forEach(async address => {
          await getDelegationsByValidatorData(address)
          await getValidatorInfoData(address)
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
    getValidatorHistory: address =>
      _.values(cache[VALIDATOR_INFO_HISTORY][address]).sort(
        (a, b) => new Date(a.utcDate) - new Date(b.utcDate)
      ),
    getDelegationsByDelegator,
    getDelegationsByValidator: address =>
      cache[DELEGATIONS_BY_VALIDATOR][address]
  }
}
