const axios = require('axios')
const _ = require('lodash')
const { isNotEmpty, bodyParams, bodyParams2 } = require('./helpers')

const STAKING_NETWORK_INFO = 'STAKING_NETWORK_INFO'
const VALIDATORS = 'VALIDATORS'
const ACTIVE_VALIDATORS = 'ACTIVE_VALIDATORS'
const VALIDATOR_INFO = 'VALIDATOR_INFO'
const VALIDATOR_INFO_HISTORY = 'VALIDATOR_INFO_HISTORY'
const DELEGATIONS_BY_DELEGATOR = 'DELEGATIONS_BY_DELEGATOR'
const DELEGATIONS_BY_VALIDATOR = 'DELEGATIONS_BY_VALIDATOR'
const MAX_LENGTH = 30
const SECOND_PER_BLOCK = 8
const SYNC_PERIOD = 60000
const BLOCK_NUM_PER_EPOCH = 86400 / SECOND_PER_BLOCK
const VALIDATOR_PAGE_SIZE = 100
const SLEEP_TIME = 5

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = function(
  BLOCKCHAIN_SERVER,
  chainTitle,
  updateDocument,
  getCollectionDataWithLimit
) {
  // Currently only work for OS network.
  if (!BLOCKCHAIN_SERVER.includes('api.s0.os.hmny.io')) {
    return
  }
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
        console.log('# of active validators', cache[ACTIVE_VALIDATORS].length)
      }
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
        console.log('# of validators', cache[VALIDATORS].length)
      }
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
        cache[STAKING_NETWORK_INFO].current_epoch = res2.data.result.epoch
      }
      if (
        cache[STAKING_NETWORK_INFO]['epoch-last-block'] &&
        cache[STAKING_NETWORK_INFO].current_block_number
      ) {
        cache[STAKING_NETWORK_INFO].time_next_epoch =
          SECOND_PER_BLOCK *
          (cache[STAKING_NETWORK_INFO]['epoch-last-block'] -
            cache[STAKING_NETWORK_INFO].current_block_number)
      }

      if (!cache[STAKING_NETWORK_INFO].effective_median_stake) {
        const medianStakeRes = await apiClient.post(
          '/',
          bodyParams('hmy_getMedianRawStakeSnapshot')
        )
        if (medianStakeRes.data.result) {
          cache[STAKING_NETWORK_INFO].effective_median_stake =
            medianStakeRes.data.result
        }
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
      if (!Array.isArray(recent)) {
        return
      }
      _.forEach(recent, item => {
        res[item.index] = item
      })
    } catch (err) {
      console.log(`error when getRecentData ${address}`, err)
    }
    return res
  }

  const processValidatorWithPage = async page => {
    try {
      const res = await apiClient.post(
        '/',
        bodyParams2('hmy_getAllValidatorInformation', page)
      )
      if (
        res &&
        res.data &&
        res.data.result &&
        Array.isArray(res.data.result)
      ) {
        console.log(
          `hmy_getAllValidatorInformation with page ${page}: `,
          res.data.result.length
        )
        res.data.result.forEach(elem =>
          processValidatorInfoData(elem.address, elem)
        )
        return res.data.result.length
      } else {
        return 0
      }
    } catch (err) {
      console.log('error when processValidatorWithPage: ', err)
    }
  }

  const getValidatorInfoData = async address => {
    try {
      const res = await apiClient.post(
        '/',
        bodyParams('hmy_getValidatorInformation', address)
      )
      processValidatorInfoData(address, res)
    } catch (err) {
      console.log('error when getValidatorInfoData: ', err)
    }
  }

  const processValidatorInfoData = async (address, res) => {
    try {
      if (isNotEmpty(res)) {
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
          self_stake: selfStake,
          total_stake: totalStake,
          voting_power:
            cache[STAKING_NETWORK_INFO]['total-staking'] &&
            cache[STAKING_NETWORK_INFO]['total-staking'] > 0
              ? totalStake / cache[STAKING_NETWORK_INFO]['total-staking']
              : null,
          // TODO(minh) fix it.
          signed_blocks: 50,
          blocks_should_sign: 100,
          uctDate: utcDate,
          index: dayIndex,
          address: res.address,
          ...res,
          active_nodes: Array.isArray(res['bls-public-keys'])
            ? res['bls-public-keys'].length
            : 1,
          active:
            Array.isArray(cache[ACTIVE_VALIDATORS]) &&
            cache[ACTIVE_VALIDATORS].includes(address)

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
          // We pick the last data of the previous day.
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
          validatorInfo.rate !== cache[VALIDATOR_INFO][address].rate
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
    } catch (e) {
      console.log('error in getValidatorInfoData:', e)
    }
  }

  const getDelegationsByDelegatorData = async address => {
    const res = await apiClient.post(
      '/',
      bodyParams('hmy_getDelegationsByDelegator', address)
    )

    let result = res.data.result
    result = _.forEach(result, elem => {
      elem.validator_info = cache[VALIDATOR_INFO][elem.validator_address]
      console.log(`address : ${elem.validator_address}`)
      console.log(`info : ${cache[VALIDATOR_INFO][elem.validator_address]}`)
      // if (elem.Undelegations && )

    })
    if (isNotEmpty(result)) {
      cache[DELEGATIONS_BY_DELEGATOR][address] = result
    }
    return result
  }

  const getAllDelegationsInfo = async () => {
    try {
      let page = 0
      while (true) {
        const res = await apiClient.post(
          '/',
          bodyParams2('hmy_getAllDelegationInformation', page)
        )

        if (
          res &&
          res.data &&
          Array.isArray(res.data.result) &&
          isNotEmpty(res.data.result)
        ) {
          console.log(
            `hmy_getAllDelegationInformation with page ${page}: `,
            res.data.result.length
          )
          res.data.result.forEach(elem => {
            if (Array.isArray(elem) && elem[0] && elem[0].validator_address) {
              cache[DELEGATIONS_BY_VALIDATOR][elem[0].validator_address] = elem
            }
          })
          page += 1
          await sleep(SLEEP_TIME)
        } else {
          break
        }
      }
    } catch (err) {
      console.log('error when getDelegationsFirst', err)
    }
  }

  const getAllValidatorsInfo = async () => {
    let totalValidators = 0
    let page = 0
    while (totalValidators < cache[VALIDATORS].length) {
      totalValidators += await processValidatorWithPage(page)
      page += 1
      await sleep(SLEEP_TIME)
    }
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
      // Get global info first.
      await syncStakingNetworkInfo()

      // Call to store active validator and all validators.
      await getActiveValidatorAddressesData()
      await getAllValidatorAddressesData()

      // Get  all delegations by validator first.
      await getAllDelegationsInfo()

      // Then get validator info, each call gets 100 validatorinfo.
      await getAllValidatorsInfo()

      if (cache[ACTIVE_VALIDATORS]) {
        cache[ACTIVE_VALIDATORS].forEach(async address => {
          if (!cache[VALIDATORS][address]) {
            return
          }
          await getDelegationsByValidatorData(address)
          await sleep(SLEEP_TIME)
          await getValidatorInfoData(address)
          await sleep(SLEEP_TIME)
        })
      }
    } catch (err) {
      console.log('Error: ', err.message)
    }
  }

  setInterval(async () => {
    console.log('--------- Updating ---------', BLOCKCHAIN_SERVER)
    await update()
  }, SYNC_PERIOD)

  update()

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

  const getValidatorsWithPage = async params => {
    const { page, size, active, sortProperty, sortOrder, search } = params

    const pageInt = parseInt(page, 10)
    const sizeInt = parseInt(size, 10)
    let validators

    if (active === 'true') {
      validators = !cache[ACTIVE_VALIDATORS] ? [] : cache[ACTIVE_VALIDATORS]
    } else {
      validators = !cache[VALIDATORS] ? [] : cache[VALIDATORS]
    }

    if (
      pageInt < 0 ||
      sizeInt < 0 ||
      sizeInt > VALIDATOR_PAGE_SIZE ||
      pageInt * sizeInt >= validators.length
    ) {
      return {
        validators: [],
        totalFound: 0,
        total: cache[VALIDATORS].length,
        total_active: cache[ACTIVE_VALIDATORS].length
      }
    } else {
      validators = validators
        .map(address => {
          return { ...cache[VALIDATOR_INFO][address] }
        })
        .filter(isNotEmpty)
        .filter(
          v => !search || v.name.toLowerCase().includes(search.toLowerCase())
        )

      const totalFound = validators.length

      validators = _.orderBy(
        validators.slice(0),
        [sortProperty],
        [sortOrder]
      )

      validators = validators.slice(pageInt * sizeInt, (pageInt + 1) * sizeInt)

      return {
        validators,
        totalFound,
        total: cache[VALIDATORS].length,
        total_active: cache[ACTIVE_VALIDATORS].length
      }
    }
  }

  const getValidatorsSizes = async () => {
    return {
      total: cache[VALIDATORS].length,
      total_active: cache[ACTIVE_VALIDATORS].length
    }
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
    getValidatorsWithPage,
    getValidatorsSizes,
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
