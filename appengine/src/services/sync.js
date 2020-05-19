const { externalShardsByKeys } = require('./special-helpers')

const BigNumber = require('bignumber.js')

BigNumber.config({
  FORMAT: {
    groupSeparator: ''
  }
})

const axios = require('axios')
const _ = require('lodash')
const {
  isNotEmpty,
  bodyParams,
  bodyParams2,
  changePercentage,
  sortByParams
} = require('./helpers')

const STAKING_NETWORK_INFO = 'STAKING_NETWORK_INFO'
const STAKING_NETWORK_INFO_PREV_EPOCH = 'STAKING_NETWORK_INFO_PREV_EPOCH'
const VALIDATORS = 'VALIDATORS'
const ACTIVE_VALIDATORS = 'ACTIVE_VALIDATORS'
const VALIDATOR_INFO = 'VALIDATOR_INFO'
const VALIDATOR_INFO_HISTORY = 'VALIDATOR_INFO_HISTORY'
const DELEGATIONS_BY_DELEGATOR = 'DELEGATIONS_BY_DELEGATOR'
const DELEGATIONS_BY_VALIDATOR = 'DELEGATIONS_BY_VALIDATOR'
const STAKING_DISTRO_TABLE = 'STAKING_DISTRO_TABLE'
const LIVE_STAKING_DISTRO_TABLE = 'LIVE_STAKING_DISTRO_TABLE'
const LIVE_KEYS_PER_NODE = 'LIVE_KEYS_PER_NODE'
const LIVE_ELECTED_KEYS = 'LIVE_ELECTED_KEYS'
const LIVE_EFFECTIVE_STAKES = 'LIVE_EFFECTIVE_STAKES'
const LIVE_RAW_STAKES = 'LIVE_RAW_STAKES'
const GLOBAL_SEATS = 'GLOBAL_SEATS'
const EFFECTIVE_STAKE = 'EFFECTIVE_STAKE'
const RAW_STAKE = 'RAW_STAKE'
const MAX_LENGTH = 30
const GLOBAL_VIEW = 'GLOBAL_VIEW'
const ELECTED_KEYS = 'ELECTED_KEYS'
const ELECTED_KEYS_SET = 'ELECTED_KEYS_SET'
const ELECTED_KEYS_PER_NODE = 'ELECTED_KEYS_PER_NODE'
const LAST_EPOCH_METRICS = 'LAST_EPOCH_METRICS'
const LIVE_EPOCH_METRICS = 'LIVE_EPOCH_METRICS'
const VALIDATORS_TOTAL_STAKE = 'VALIDATORS_TOTAL_STAKE'
const SECOND_PER_BLOCK = 8
const SYNC_PERIOD = 60000
const VALIDATOR_PAGE_SIZE = 100
const SLEEP_TIME = 5

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = function(
  BLOCKCHAIN_SERVER,
  chainTitle,
  updateDocument,
  getCollectionDataWithLimit,
  getGlobalDataWithLimit
) {
  // Currently only work for OS network and testnet.
  if (
    !(
      (
        BLOCKCHAIN_SERVER.includes('api.s0.t.hmny.io') ||
        BLOCKCHAIN_SERVER.includes('api.s0.os.hmny.io') ||
        BLOCKCHAIN_SERVER.includes('api.s0.ps.hmny.io') ||
        BLOCKCHAIN_SERVER.includes('api.s0.dry.hmny.io')
      ) // ||
      // BLOCKCHAIN_SERVER.includes('api.s0.stn.hmny.io')
    )
  ) {
    return
  }
  const cache = {
    VALIDATORS: [],
    ACTIVE_VALIDATORS: [],
    VALIDATOR_INFO: {},
    VALIDATOR_INFO_HISTORY: {},
    DELEGATIONS_BY_DELEGATOR: {},
    DELEGATIONS_BY_VALIDATOR: {},
    STAKING_NETWORK_INFO: {},
    STAKING_NETWORK_INFO_PREV_EPOCH: {},
    VOTING_POWER: {},
    GLOBAL_SEATS: {},
    ELECTED_KEYS: {},
    ELECTED_KEYS_SET: {},
    GLOBAL_VIEW: {},
    RAW_STAKE: {},
    LIVE_ELECTED_KEYS: [],
    LIVE_RAW_STAKES: {},
    LIVE_EFFECTIVE_STAKES: {},
    LIVE_KEYS_PER_NODE: {},
    STAKING_DISTRO_TABLE: {},
    LIVE_STAKING_DISTRO_TABLE: {},
    ELECTED_KEYS_PER_NODE: {},
    LAST_EPOCH_METRICS: {},
    LIVE_EPOCH_METRICS: {},
    VALIDATORS_TOTAL_STAKE: {}
  }

  console.log('Blockchain server: ', BLOCKCHAIN_SERVER)

  const historyCollection = `${chainTitle}_history`
  const globalHistory = `${chainTitle}_global`

  const apiClient = axios.create({
    baseURL: BLOCKCHAIN_SERVER,
    // baseURL: process.env.SERVER,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const getNumberOfShards = async () => {
    try {
      const res = await apiClient.post(
        '/',
        bodyParams('hmy_getShardingStructure')
      )

      if (Array.isArray(res.data.result)) {
        return res.data.result.length
      } else {
        return 0
      }
    } catch (err) {
      console.log(err)
      return 0
    }
  }

  let numOfShards = 0

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

  const filterGlobalCache = async currentEpoch => {
    let epoch = parseInt(currentEpoch)
    const lastEpoch = epoch
    while (cache[GLOBAL_VIEW][epoch]) {
      epoch -= 1
    }
    console.log(`latest ${epoch}`)
    _.keys(cache[GLOBAL_VIEW]).forEach(k => {
      const key = parseInt(k)
      if (key < epoch || key > lastEpoch) {
        console.log(`delete key ${key}`)
        delete cache[GLOBAL_VIEW][key]
      }
    })
    console.log(`current ${lastEpoch}, last: ${epoch}`)
    console.log(`array: ${_.keys(cache[GLOBAL_VIEW])}`)
  }

  const syncStakingNetworkInfo = async () => {
    try {
      const res = await apiClient.post(
        '/',
        bodyParams('hmy_getStakingNetworkInfo')
      )

      const prevNetworkInfo = { ...cache[STAKING_NETWORK_INFO] }

      if (res.data.result) {
        cache[STAKING_NETWORK_INFO] = res.data.result
      }
      let currentEpoch = null
      const res2 = await apiClient.post('/', bodyParams('hmy_latestHeader'))
      if (res2.data.result) {
        cache[STAKING_NETWORK_INFO].current_block_number =
          res2.data.result.blockNumber
        cache[STAKING_NETWORK_INFO].current_block_hash =
          res2.data.result.blockHash
        cache[STAKING_NETWORK_INFO].current_epoch = res2.data.result.epoch
        currentEpoch = res2.data.result.epoch
      }

      console.log(`getting current Epoch ${currentEpoch} at `, currentEpoch)

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
          cache[STAKING_NETWORK_INFO].effective_median_stake = _.get(
            medianStakeRes,
            'data.result.epos-median-stake'
          )
        }
      }

      if (cache[GLOBAL_SEATS]) {
        cache[STAKING_NETWORK_INFO].total_seats = cache[GLOBAL_SEATS]
          .total_seats
          ? cache[GLOBAL_SEATS].total_seats
          : 0
        cache[STAKING_NETWORK_INFO].total_seats_used = cache[GLOBAL_SEATS]
          .total_seats_used
          ? cache[GLOBAL_SEATS].total_seats_used
          : 0
        cache[STAKING_NETWORK_INFO].externalShards = cache[GLOBAL_SEATS]
          .externalShards
          ? cache[GLOBAL_SEATS].externalShards
          : []
      }

      if (
        cache[STAKING_NETWORK_INFO].current_epoch >
        prevNetworkInfo.current_epoch
      ) {
        cache[STAKING_NETWORK_INFO_PREV_EPOCH] = prevNetworkInfo
      }

      if (!_.isEmpty(cache[STAKING_NETWORK_INFO_PREV_EPOCH])) {
        const currentMS = cache[STAKING_NETWORK_INFO].effective_median_stake
        const prevMS =
          cache[STAKING_NETWORK_INFO_PREV_EPOCH].effective_median_stake

        cache[
          STAKING_NETWORK_INFO
        ].effective_median_stake_changed = changePercentage(currentMS, prevMS)

        const currentTS = cache[STAKING_NETWORK_INFO]['total-staking']
        const prevTS = cache[STAKING_NETWORK_INFO_PREV_EPOCH]['total-staking']

        cache[STAKING_NETWORK_INFO]['total-staking-changed'] = changePercentage(
          currentTS,
          prevTS
        )
      }

      // Store to firestore the previous global view.
      if (!cache[GLOBAL_VIEW][currentEpoch]) {
        if (cache[GLOBAL_VIEW][currentEpoch - 1]) {
          await updateDocument(
            globalHistory,
            `${currentEpoch - 1}`,
            cache[GLOBAL_VIEW][currentEpoch - 1]
          )
        }
        await updateDocument(
          globalHistory,
          `${currentEpoch}`,
          cache[STAKING_NETWORK_INFO]
        )
      }

      cache[GLOBAL_VIEW][currentEpoch] = cache[STAKING_NETWORK_INFO]
      if (cache[GLOBAL_VIEW][currentEpoch - MAX_LENGTH]) {
        delete cache[GLOBAL_VIEW][currentEpoch - MAX_LENGTH]
      }
      await filterGlobalCache(currentEpoch)
      return {
        ...cache[STAKING_NETWORK_INFO],
        history: cache[GLOBAL_VIEW]
      }
    } catch (err) {
      console.log(err)
    }
  }

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

  const getRecentGlobalData = async () => {
    const res = new Map()
    try {
      const recent = await getCollectionDataWithLimit(
        globalHistory,
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

        res.data.result.forEach(async elem => {
          if (elem && elem.validator && elem.validator.address) {
            await processValidatorInfoData(elem.validator.address, elem)
          }
        })
        return res.data.result.length
      } else {
        return 0
      }
    } catch (err) {
      console.log('error when processValidatorWithPage: ', err)
      return 0
    }
  }

  const processValidatorInfoData = async (address, result) => {
    try {
      if (isNotEmpty(result)) {
        const res = result.validator
        let selfStake = 0
        let totalStake = 0
        let averageStake = 0
        let remainder = res['max-total-delegation']

        if (
          cache[DELEGATIONS_BY_VALIDATOR][address] &&
          cache[DELEGATIONS_BY_VALIDATOR][address].length
        ) {
          const elem = cache[DELEGATIONS_BY_VALIDATOR][address].find(
            e => e.validator_address === e.delegator_address
          )
          if (elem) {
            selfStake = elem.amount
          }
          totalStake = cache[DELEGATIONS_BY_VALIDATOR][address].reduce(
            (acc, val) =>
              BigNumber(acc)
                .plus(val.amount)
                .toFormat(),
            0
          )

          averageStake = BigNumber(totalStake)
            .div(cache[DELEGATIONS_BY_VALIDATOR][address].length)
            .toFormat()

          remainder = BigNumber(remainder)
            .minus(totalStake)
            .toFormat()
        }

        const utcDate = new Date(Date.now())
        const epochIndex = parseInt(res['last-epoch-in-committee'])

        const validatorInfo = {
          ...res,
          self_stake: selfStake,
          total_stake: totalStake,
          average_stake: averageStake,
          average_stake_by_bls:
            Array.isArray(res['bls-public-keys']) &&
            res['bls-public-keys'].length > 0
              ? totalStake / (1.0 * res['bls-public-keys'].length)
              : 0,
          remainder,
          voting_power: _.get(result, 'metrics.by-shard')
            ? _.sumBy(
                _.get(result, 'metrics.by-shard'),
                item => parseFloat(item['group-percent']) / 4.0
              )
            : null,
          signed_blocks: 50,
          blocks_should_sign: 100,
          uctDate: utcDate,
          index: epochIndex,
          address: res['one-address'] || res.address,
          active_nodes: Array.isArray(res['bls-public-keys'])
            ? res['bls-public-keys'].length
            : 1,
          elected_nodes: Array.isArray(res['bls-public-keys'])
            ? res['bls-public-keys'].filter(item =>
                cache[ELECTED_KEYS_SET].has(item)
              ).length
            : 0,
          active: cache[ACTIVE_VALIDATORS].includes(res.address),
          uptime_percentage:
            _.get(result, 'lifetime.blocks.signed') &&
            _.get(result, 'lifetime.blocks.to-sign')
              ? parseFloat(_.get(result, 'lifetime.blocks.signed')) /
                parseFloat(_.get(result, 'lifetime.blocks.to-sign'))
              : null,
          apr: _.get(result, 'lifetime.apr', null),
          lifetime_reward_accumulated: _.get(
            result,
            'lifetime.reward-accumulated',
            null
          )
        }

        if (!cache[VALIDATORS_TOTAL_STAKE][validatorInfo.address]) {
          console.log('Total stake - NOT FOUND ' + validatorInfo.address)
        }

        if (
          cache[VALIDATORS_TOTAL_STAKE] &&
          cache[VALIDATORS_TOTAL_STAKE][validatorInfo.address]
        ) {
          const { currentTotalStake, previousTotalStake } = cache[
            VALIDATORS_TOTAL_STAKE
          ][validatorInfo.address]

          if (previousTotalStake) {
            // console.log('--------------------------')
            // console.log('Address ' + validatorInfo.address)
            // console.log('currentTotalStake ' + currentTotalStake)
            // console.log('previousTotalStake ' + previousTotalStake)
            // console.log('validatorInfo.apr ' + validatorInfo.apr)

            validatorInfo.apr =
              (validatorInfo.apr * currentTotalStake) / previousTotalStake

            // console.log('Result ' + validatorInfo.apr)
          }
        }

        // Calculating cache[VALIDATOR_INFO_HISTORY]
        if (!cache[VALIDATOR_INFO_HISTORY][address]) {
          cache[VALIDATOR_INFO_HISTORY][address] = await getRecentData(address)
        }

        // update the previous epochIndex if this is the first time epochIndex will be inserted.
        if (!cache[VALIDATOR_INFO_HISTORY][address][epochIndex]) {
          await updateDocument(
            historyCollection,
            `${address}_${epochIndex}`,
            validatorInfo
          )
          // We store the last data of the previous epoch.
          if (cache[VALIDATOR_INFO_HISTORY][address][epochIndex - 1]) {
            await updateDocument(
              historyCollection,
              `${address}_${epochIndex - 1}`,
              cache[VALIDATOR_INFO_HISTORY][address][epochIndex - 1]
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

        cache[VALIDATOR_INFO_HISTORY][address][epochIndex] = validatorInfo
        if (cache[VALIDATOR_INFO_HISTORY][address][epochIndex - MAX_LENGTH]) {
          delete cache[VALIDATOR_INFO_HISTORY][address][epochIndex - MAX_LENGTH]
        }
      }
    } catch (e) {
      console.log('error in processValidatorInfoData:', e)
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
        } else {
          break
        }
      }
    } catch (err) {
      console.log('error when getDelegationsFirst', err)
    }
    await sleep(SLEEP_TIME)
  }

  const getAllValidatorsInfo = async () => {
    let totalValidators = 0
    let page = 0
    while (totalValidators < cache[VALIDATORS].length) {
      const count = await processValidatorWithPage(page)
      totalValidators += count
      console.log('get validator', count)
      if (count === 0) {
        break
      }
      page += 1
    }
    await sleep(SLEEP_TIME)
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

  const callSuperCommittees = async () => {
    try {
      const res = await apiClient.post(
        '/',
        bodyParams('hmy_getSuperCommittees')
      )
      if (numOfShards === 0) {
        numOfShards = await getNumberOfShards()
        console.log(`numOfShards ${numOfShards}`)
      }
      const externalShardKeys = _.range(numOfShards).map(e => {
        const total = _.get(
          res,
          `data.result.current.quorum-deciders.shard-${e}.committee-members`
        )
        if (!total) {
          return []
        }

        return total
          .filter(item => !item['is-harmony-slot'])
          .map(e => e['bls-public-key'])
      })

      const rawStakes = {}
      const electedKeys = []
      const effectiveStakes = {}
      const electedKeysPerNode = {}
      const externalShards = _.range(numOfShards).map(e => {
        const total = _.get(
          res,
          `data.result.current.quorum-deciders.shard-${e}.committee-members`
        )
        if (total) {
          console.log(`total: ${total.length}`)
          total.forEach(item => {
            if (!item['is-harmony-slot']) {
              const blsKey = item['bls-public-key']
              const address = item['earning-account']
              rawStakes[blsKey] = parseFloat(item['raw-stake'])
              effectiveStakes[blsKey] = parseFloat(item['effective-stake'])
              electedKeys.push(blsKey)
              if (electedKeysPerNode[address]) {
                electedKeysPerNode[address].push(blsKey)
              } else {
                electedKeysPerNode[address] = [blsKey]
              }
            }
          })

          return {
            total: total.length,
            external: total.filter(item => !item['is-harmony-slot']).length
          }
        } else {
          console.log('error when getting elected bls keys')
        }
      })
      // TODO: add mutex to avoid requests return empty data.
      cache[RAW_STAKE] = null
      cache[RAW_STAKE] = rawStakes
      cache[ELECTED_KEYS] = null
      cache[ELECTED_KEYS] = electedKeys
      cache[EFFECTIVE_STAKE] = null
      cache[EFFECTIVE_STAKE] = effectiveStakes
      cache[ELECTED_KEYS_PER_NODE] = null
      cache[ELECTED_KEYS_PER_NODE] = electedKeysPerNode
      cache[LAST_EPOCH_METRICS] = null

      const calculateTotalStakeByShard = (shard, type, address) => {
        const committeeMembers = _.get(
          res,
          `data.result.${type}.quorum-deciders.shard-${shard}.committee-members`
        )

        if (!committeeMembers) {
          console.log('Error: not found committeeMembers')

          return 0
        }

        return committeeMembers
          .filter(cm => (address ? cm['earning-account'] === address : true))
          .reduce((acc, e) => {
            if (e['is-harmony-slot']) {
              return acc
            }

            return acc + (e['raw-stake'] ? parseFloat(e['raw-stake']) : 0)
          }, 0)
      }

      // for apr calculating
      cache[VALIDATORS_TOTAL_STAKE] = {}

      if (cache[VALIDATORS]) {
        cache[VALIDATORS].forEach(address => {
          const currentTotalStake = _.sumBy(_.range(numOfShards), shard =>
            calculateTotalStakeByShard(shard, 'current', address)
          )

          const previousTotalStake = _.sumBy(_.range(numOfShards), shard =>
            calculateTotalStakeByShard(shard, 'previous', address)
          )

          cache[VALIDATORS_TOTAL_STAKE][address] = {
            currentTotalStake,
            previousTotalStake
          }
        })
      }

      cache[LAST_EPOCH_METRICS] = {
        lastEpochTotalStake: _.sumBy(_.range(numOfShards), shard =>
          calculateTotalStakeByShard(shard, 'current')
        ),
        // currentEpochTotalStake: _.sumBy(_.range(numOfShards), shard =>
        //   calculateTotalStakeByShard(shard, 'current')
        // ),
        lastEpochEffectiveStake: parseFloat(
          _.get(res, 'data.result.current.epos-median-stake', 0)
        )
      }

      cache[GLOBAL_SEATS].total_seats = _.get(
        res,
        'data.result.current.external-slot-count'
      )
        ? _.get(res, 'data.result.current.external-slot-count')
        : 0
      console.log('externalShards', externalShards)
      cache[GLOBAL_SEATS].total_seats_used = _.sumBy(externalShards, e =>
        e ? e.external : 0
      )
      cache[GLOBAL_SEATS].externalShards = externalShards.filter(x => x)
      cache[ELECTED_KEYS_SET] = null

      cache[ELECTED_KEYS_SET] = externalShardKeys.reduce((cur, elem) => {
        elem.forEach(key => cur.add(key))
        return cur
      }, new Set())
    } catch (err) {
      console.log(
        `error when updatingVotingPower for ${BLOCKCHAIN_SERVER}`,
        err
      )
    }
  }

  const callMedianRawStakeSnapshot = async () => {
    let res = null
    try {
      res = await apiClient.post(
        '/',
        bodyParams('hmy_getMedianRawStakeSnapshot')
      )

      const liveRawStakes = {}
      const liveElectedKeys = []
      const liveEffectiveStakes = {}
      const liveKeysPerNode = {}

      let liveEpochTotalStake = 0

      res.data.result['epos-slot-winners'].forEach(e => {
        liveEpochTotalStake += parseFloat(e['raw-stake'])

        if (e['slot-owner']) {
          const nodeAddress = e['slot-owner']
          const key = e['bls-public-key']
          liveElectedKeys.push(key)
          liveRawStakes[key] = parseFloat(e['raw-stake'])
          liveEffectiveStakes[key] = parseFloat(e['eposed-stake'])
          if (liveKeysPerNode[nodeAddress]) {
            liveKeysPerNode[nodeAddress].push(key)
          } else {
            liveKeysPerNode[nodeAddress] = [key]
          }
        }
      })

      const liveExternalShards = externalShardsByKeys(liveElectedKeys)

      const liveTotalSeatsUsed = _.sumBy(liveExternalShards, e => e ? e.external : 0)

      const liveTotalSeats = _.sumBy(liveExternalShards, e => e ? e.external : 0)

      cache[LIVE_EPOCH_METRICS] = {
        liveEpochTotalStake,
        liveExternalShards,
        liveTotalSeatsUsed,
        liveTotalSeats
      }

      cache[LIVE_ELECTED_KEYS] = null
      cache[LIVE_EFFECTIVE_STAKES] = null
      cache[LIVE_RAW_STAKES] = null
      cache[LIVE_RAW_STAKES] = liveRawStakes
      cache[LIVE_EFFECTIVE_STAKES] = liveEffectiveStakes
      cache[LIVE_ELECTED_KEYS] = liveElectedKeys
      cache[LIVE_KEYS_PER_NODE] = liveKeysPerNode
    } catch (err) {
      console.log(
        `error when callMedianRawStakeSnapshot for ${BLOCKCHAIN_SERVER}`,
        err,
        res.result
      )
    }
  }

  const calculateDistroTable = async () => {
    let table = Object.keys(cache[ELECTED_KEYS_PER_NODE]).map(nodeAddress => {
      const blsKeys = cache[ELECTED_KEYS_PER_NODE][nodeAddress]
      const total_stake = _.sumBy(blsKeys, k => cache[RAW_STAKE][k])
      if (cache[VALIDATOR_INFO][nodeAddress] == undefined) {
        console.log(`undefine is here: ${nodeAddress}`)
      }
      return {
        address: nodeAddress,
        name: cache[VALIDATOR_INFO][nodeAddress].name,
        effective_stake: cache[EFFECTIVE_STAKE][blsKeys[0]],
        bid: total_stake / blsKeys.length,
        total_stake,
        num: blsKeys.length
      }
    })

    table = _.sortBy(table, e => -e.bid)
    let slot = 0

    table = table.map(e => {
      slot += e.num
      return {
        ...e,
        slot: e.num === 1 ? `${slot}` : `${slot - e.num + 1}-${slot}`
      }
    })
    cache[STAKING_DISTRO_TABLE] = table

    // Live TABLE

    let liveTable = Object.keys(cache[LIVE_KEYS_PER_NODE]).map(nodeAddress => {
      const blsKeys = cache[LIVE_KEYS_PER_NODE][nodeAddress]

      return {
        address: nodeAddress,
        name: cache[VALIDATOR_INFO][nodeAddress].name,
        effective_stake: cache[LIVE_EFFECTIVE_STAKES][blsKeys[0]],
        bid: _.sumBy(blsKeys, k => cache[LIVE_RAW_STAKES][k]) / blsKeys.length,
        total_stake: _.sumBy(blsKeys, k => cache[LIVE_RAW_STAKES][k]),
        num: blsKeys.length
      }
    })

    liveTable = _.sortBy(liveTable, e => -e.bid)
    slot = 0

    liveTable = liveTable.map(e => {
      slot += e.num
      return {
        ...e,
        slot: e.num === 1 ? `${slot}` : `${slot - e.num + 1}-${slot}`
      }
    })

    cache[LIVE_STAKING_DISTRO_TABLE] = liveTable
  }

  const update = async () => {
    try {
      // Calculate voting power first.
      await callSuperCommittees()
      await callMedianRawStakeSnapshot()

      // Get global info first.
      await syncStakingNetworkInfo()

      // Call to store active validator and all validators.
      // await getActiveValidatorAddressesData()
      await getAllValidatorAddressesData()

      // Get  all delegations by validator first.
      await getAllDelegationsInfo()

      // Then get validator info, each call gets 100 validatorinfo.

      await getElectedValidators()

      await getAllValidatorsInfo()
      console.log('distro calculation starting.')
      await calculateDistroTable()
      console.log('distro calculation finished.')
    } catch (err) {
      console.log('here Error: ', err.message)
    }
  }

  const getElectedValidators = async () => {
    let res = null
    try {
      cache[ACTIVE_VALIDATORS] = []

      res = await apiClient.post(
        '/',
        bodyParams('hmy_getElectedValidatorAddresses')
      )

      if (res.data && res.data.result) {
        cache[ACTIVE_VALIDATORS] = res.data.result
      } else {
        console.log(`error when getElectedValidators for ${BLOCKCHAIN_SERVER}`)
      }
    } catch (err) {
      console.log(
        `error when callMedianRawStakeSnapshot for ${BLOCKCHAIN_SERVER}`,
        err,
        res.result
      )
    }
  }

  const init = async () => {
    const res = await getGlobalDataWithLimit(
      globalHistory,
      'current_epoch',
      MAX_LENGTH
    )
    _.forEach(res, item => (cache[GLOBAL_VIEW][item.current_epoch] = item))
  }
  init()
  setInterval(async () => {
    console.log('--------- Updating ---------', BLOCKCHAIN_SERVER)
    await update()
  }, SYNC_PERIOD)

  update()

  const getStakingNetworkInfo = () => {
    const stakingNetworkInfo = !cache[STAKING_NETWORK_INFO]
      ? {}
      : {
          ...cache[STAKING_NETWORK_INFO],
          history: cache[GLOBAL_VIEW],
          raw_stake_distro: cache[ELECTED_KEYS].map(e => cache[RAW_STAKE][e]),
          effective_median_stake_distro: cache[ELECTED_KEYS].map(
            e => cache[EFFECTIVE_STAKE][e]
          ),
          table: cache[STAKING_DISTRO_TABLE],
          live_table: cache[LIVE_STAKING_DISTRO_TABLE],
          live_raw_stake_distro: cache[LIVE_ELECTED_KEYS].map(
            e => cache[LIVE_RAW_STAKES][e]
          ),
          live_effective_median_stake_distro: cache[LIVE_ELECTED_KEYS].map(
            e => cache[LIVE_EFFECTIVE_STAKES][e]
          ),
          ...cache[LAST_EPOCH_METRICS],
          ...cache[LIVE_EPOCH_METRICS]
        }

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
          v =>
            !search ||
            v.name.toLowerCase().includes(search.toLowerCase()) ||
            v.address.toLowerCase().includes(search.toLowerCase())
        )

      const totalFound = validators.length

      if (sortProperty && sortOrder) {
        validators = sortByParams(validators.slice(0), sortProperty, sortOrder)
      }

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

  // deprecated
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
        (a, b) => a.index - b.index
      ),
    getDelegationsByDelegator,
    getDelegationsByValidator: address =>
      cache[DELEGATIONS_BY_VALIDATOR][address]
  }
}
