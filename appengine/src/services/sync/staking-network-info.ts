import { AxiosInstance } from 'axios';
import _ from 'lodash';

import { bodyParams, changePercentage, externalShardsByKeys } from './helpers';
import { IBaseServiceParams, IServices } from './interfaces';

const MAX_LENGTH = 30;
let SECOND_PER_BLOCK = 5.4;

export class StakingNetworkInfoService {
  apiClient: AxiosInstance;
  BLOCKCHAIN_SERVER: string;
  numOfShards = 0;
  updateDocument;
  getGlobalDataWithLimit;
  globalHistory;
  services: IServices;

  public cache = {
    STAKING_NETWORK_INFO: {} as any,
    STAKING_NETWORK_INFO_PREV_EPOCH: {} as any,
    VOTING_POWER: {},
    GLOBAL_SEATS: {} as any,
    ELECTED_KEYS: [],
    ELECTED_KEYS_SET: new Map(),
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
    VALIDATORS_TOTAL_STAKE: {},
    LIVE_VALIDATORS_CANDIDATE: [],
    EFFECTIVE_STAKE: {},
  };

  constructor(params: IBaseServiceParams) {
    this.BLOCKCHAIN_SERVER = params.BLOCKCHAIN_SERVER;
    this.updateDocument = params.updateDocument;
    this.globalHistory = params.globalHistory;
    this.apiClient = params.apiClient;
    this.getGlobalDataWithLimit = params.getGlobalDataWithLimit;
    this.services = params.services;

    this.init();
  }

  getValidatorInfo = address => this.services.validatorsInfoService.getValidatorInfo(address);

  init = async () => {
    const res = await this.getGlobalDataWithLimit(this.globalHistory, 'current_epoch', MAX_LENGTH);
    _.forEach(res, item => (this.cache.GLOBAL_VIEW[item.current_epoch] = item));
  };

  getNumberOfShards = async () => {
    try {
      const res = await this.apiClient.post('/', bodyParams('hmy_getShardingStructure'));

      if (Array.isArray(res.data.result)) {
        return res.data.result.length;
      } else {
        return 0;
      }
    } catch (err) {
      console.log(err);
      return 0;
    }
  };

  filterGlobalCache = async currentEpoch => {
    let epoch = parseInt(currentEpoch);
    const lastEpoch = epoch;
    while (this.cache.GLOBAL_VIEW[epoch]) {
      epoch -= 1;
    }
    // console.log(`latest ${epoch}`);
    _.keys(this.cache.GLOBAL_VIEW).forEach(k => {
      const key = parseInt(k);
      if (key < epoch || key > lastEpoch) {
        // console.log(`delete key ${key}`);
        delete this.cache.GLOBAL_VIEW[key];
      }
    });
    // console.log(`current ${lastEpoch}, last: ${epoch}`);
    // console.log(`array: ${_.keys(this.cache.GLOBAL_VIEW)}`);
  };

  getStakingNetworkInfo = () => {
    const stakingNetworkInfo = !this.cache.STAKING_NETWORK_INFO
      ? {}
      : {
          ...this.cache.STAKING_NETWORK_INFO,
          history: this.cache.GLOBAL_VIEW,
          raw_stake_distro: this.cache.ELECTED_KEYS.map(e => this.cache.RAW_STAKE[e]),
          effective_median_stake_distro: this.cache.ELECTED_KEYS.map(
            e => this.cache.EFFECTIVE_STAKE[e]
          ),
          table: this.cache.STAKING_DISTRO_TABLE,
          live_table: this.cache.LIVE_STAKING_DISTRO_TABLE,
          live_raw_stake_distro: this.cache.LIVE_ELECTED_KEYS.map(
            e => this.cache.LIVE_RAW_STAKES[e]
          ),
          live_effective_median_stake_distro: this.cache.LIVE_ELECTED_KEYS.map(
            e => this.cache.LIVE_EFFECTIVE_STAKES[e]
          ),
          ...this.cache.LAST_EPOCH_METRICS,
          ...this.cache.LIVE_EPOCH_METRICS,
        };

    return stakingNetworkInfo;
  };

  getNetworkInfoLite = () => {
    const networkInfoLite = !this.cache.STAKING_NETWORK_INFO
      ? {}
      : {
          ...this.cache.STAKING_NETWORK_INFO,
          history: this.cache.GLOBAL_VIEW,
          ...this.cache.LAST_EPOCH_METRICS,
          ...this.cache.LIVE_EPOCH_METRICS,
        };

    return networkInfoLite;
  };

  calculateDistroTable = async () => {
    let table = Object.keys(this.cache.ELECTED_KEYS_PER_NODE).map(nodeAddress => {
      const blsKeys = this.cache.ELECTED_KEYS_PER_NODE[nodeAddress];
      const total_stake = _.sumBy(blsKeys, k => this.cache.RAW_STAKE[k]);
      if (this.getValidatorInfo(nodeAddress) == undefined) {
        // console.log(`undefine is here: ${nodeAddress}`);
      }
      return {
        address: nodeAddress,
        name: this.getValidatorInfo(nodeAddress).name,
        effective_stake: this.cache.EFFECTIVE_STAKE[blsKeys[0]],
        bid: total_stake / blsKeys.length,
        total_stake,
        num: blsKeys.length,
      };
    });

    table = _.sortBy(table, e => -e.bid);
    let slot = 0;

    table = table.map(e => {
      slot += e.num;
      return {
        ...e,
        slot: e.num === 1 ? `${slot}` : `${slot - e.num + 1}-${slot}`,
      };
    });
    this.cache.STAKING_DISTRO_TABLE = table;

    // Live TABLE

    let liveTable = Object.keys(this.cache.LIVE_KEYS_PER_NODE).map(nodeAddress => {
      const blsKeys = this.cache.LIVE_KEYS_PER_NODE[nodeAddress];

      return {
        address: nodeAddress,
        name: this.getValidatorInfo(nodeAddress).name,
        effective_stake: this.cache.LIVE_EFFECTIVE_STAKES[blsKeys[0]],
        bid: _.sumBy(blsKeys, k => this.cache.LIVE_RAW_STAKES[k]) / blsKeys.length,
        total_stake: _.sumBy(blsKeys, k => this.cache.LIVE_RAW_STAKES[k]),
        num: blsKeys.length,
      };
    });

    liveTable = _.sortBy(liveTable, e => -e.bid);

    let candidateTable = this.cache.LIVE_VALIDATORS_CANDIDATE.filter(
      v => !liveTable.find(val => val.address === v.address)
    ).map(v => ({
      ...v,
      name: this.getValidatorInfo(v.address) ? this.getValidatorInfo(v.address).name : '',
    }));

    candidateTable = _.sortBy(candidateTable, e => -e.bid);

    liveTable = liveTable.concat(candidateTable);

    slot = 0;

    liveTable = liveTable.map(e => {
      slot += e.num;
      return {
        ...e,
        slot: e.num === 1 ? `${slot}` : `${slot - e.num + 1}-${slot}`,
      };
    });

    this.cache.LIVE_STAKING_DISTRO_TABLE = liveTable;
  };

  syncStakingNetworkInfo = async () => {
    try {
      const res = await this.apiClient.post('/', bodyParams('hmy_getStakingNetworkInfo'));

      const prevNetworkInfo = { ...this.cache.STAKING_NETWORK_INFO };

      if (res.data.result) {
        this.cache.STAKING_NETWORK_INFO = res.data.result;
      }
      let currentEpoch = null;
      const res2 = await this.apiClient.post('/', bodyParams('hmy_latestHeader'));
      if (res2.data.result) {
        this.cache.STAKING_NETWORK_INFO.current_block_number = res2.data.result.blockNumber;
        this.cache.STAKING_NETWORK_INFO.current_block_hash = res2.data.result.blockHash;
        this.cache.STAKING_NETWORK_INFO.current_epoch = res2.data.result.epoch;
        currentEpoch = res2.data.result.epoch;
      }

      // console.log(`getting current Epoch ${currentEpoch} at `, currentEpoch);

      if (
        this.cache.STAKING_NETWORK_INFO['epoch-last-block'] &&
        this.cache.STAKING_NETWORK_INFO.current_block_number
      ) {
        this.cache.STAKING_NETWORK_INFO.time_next_epoch =
          SECOND_PER_BLOCK *
          (this.cache.STAKING_NETWORK_INFO['epoch-last-block'] -
            this.cache.STAKING_NETWORK_INFO.current_block_number);
      }

      if (!this.cache.STAKING_NETWORK_INFO.effective_median_stake) {
        const medianStakeRes = await this.apiClient.post(
          '/',
          bodyParams('hmy_getMedianRawStakeSnapshot')
        );
        if (medianStakeRes.data.result) {
          this.cache.STAKING_NETWORK_INFO.effective_median_stake = _.get(
            medianStakeRes,
            'data.result.epos-median-stake'
          );
        }
      }

      if (this.cache.GLOBAL_SEATS) {
        this.cache.STAKING_NETWORK_INFO.total_seats = this.cache.GLOBAL_SEATS.total_seats
          ? this.cache.GLOBAL_SEATS.total_seats
          : 0;
        this.cache.STAKING_NETWORK_INFO.total_seats_used = this.cache.GLOBAL_SEATS.total_seats_used
          ? this.cache.GLOBAL_SEATS.total_seats_used
          : 0;
        this.cache.STAKING_NETWORK_INFO.externalShards = this.cache.GLOBAL_SEATS.externalShards
          ? this.cache.GLOBAL_SEATS.externalShards
          : [];
      }

      if (this.cache.STAKING_NETWORK_INFO.current_epoch > prevNetworkInfo.current_epoch) {
        this.cache.STAKING_NETWORK_INFO_PREV_EPOCH = prevNetworkInfo;
      }

      if (!_.isEmpty(this.cache.STAKING_NETWORK_INFO_PREV_EPOCH)) {
        const currentMS = this.cache.STAKING_NETWORK_INFO.effective_median_stake;
        const prevMS = this.cache.STAKING_NETWORK_INFO_PREV_EPOCH.effective_median_stake;

        this.cache.STAKING_NETWORK_INFO.effective_median_stake_changed = changePercentage(
          currentMS,
          prevMS
        );

        const currentTS = this.cache.STAKING_NETWORK_INFO['total-staking'];
        const prevTS = this.cache.STAKING_NETWORK_INFO_PREV_EPOCH['total-staking'];

        this.cache.STAKING_NETWORK_INFO['total-staking-changed'] = changePercentage(
          currentTS,
          prevTS
        );
      }

      // Store to firestore the previous global view.
      if (!this.cache.GLOBAL_VIEW[currentEpoch]) {
        if (this.cache.GLOBAL_VIEW[currentEpoch - 1]) {
          await this.updateDocument(
            this.globalHistory,
            `${currentEpoch - 1}`,
            this.cache.GLOBAL_VIEW[currentEpoch - 1]
          );
        }
        await this.updateDocument(
          this.globalHistory,
          `${currentEpoch}`,
          this.cache.STAKING_NETWORK_INFO
        );
      }

      this.cache.GLOBAL_VIEW[currentEpoch] = this.cache.STAKING_NETWORK_INFO;
      if (this.cache.GLOBAL_VIEW[currentEpoch - MAX_LENGTH]) {
        delete this.cache.GLOBAL_VIEW[currentEpoch - MAX_LENGTH];
      }
      await this.filterGlobalCache(currentEpoch);
      return {
        ...this.cache.STAKING_NETWORK_INFO,
        history: this.cache.GLOBAL_VIEW,
      };
    } catch (err) {
      console.log(err);
    }
  };

  callSuperCommittees = async () => {
    try {
      const res = await this.apiClient.post('/', bodyParams('hmy_getSuperCommittees'));
      if (this.numOfShards === 0) {
        this.numOfShards = await this.getNumberOfShards();
        // console.log(`this.numOfShards ${this.numOfShards}`);
      }
      const externalShardKeys = _.range(this.numOfShards).map(e => {
        const total = _.get(
          res,
          `data.result.current.quorum-deciders.shard-${e}.committee-members`
        );
        if (!total) {
          return [];
        }

        return total.filter(item => !item['is-harmony-slot']).map(e => e['bls-public-key']);
      });

      const rawStakes = {};
      const electedKeys = [];
      const effectiveStakes = {};
      const electedKeysPerNode = {};
      const externalShards = _.range(this.numOfShards).map(e => {
        const total = _.get(
          res,
          `data.result.current.quorum-deciders.shard-${e}.committee-members`
        );
        if (total) {
          // console.log(`total: ${total.length}`);
          total.forEach(item => {
            if (!item['is-harmony-slot']) {
              const blsKey = item['bls-public-key'];
              const address = item['earning-account'];
              rawStakes[blsKey] = parseFloat(item['raw-stake']);
              effectiveStakes[blsKey] = parseFloat(item['effective-stake']);
              electedKeys.push(blsKey);
              if (electedKeysPerNode[address]) {
                electedKeysPerNode[address].push(blsKey);
              } else {
                electedKeysPerNode[address] = [blsKey];
              }
            }
          });

          return {
            total: total.length,
            external: total.filter(item => !item['is-harmony-slot']).length,
          };
        } else {
          console.log('error when getting elected bls keys');
        }
      });
      // TODO: add mutex to avoid requests return empty data.
      this.cache.RAW_STAKE = null;
      this.cache.RAW_STAKE = rawStakes;
      this.cache.ELECTED_KEYS = null;
      this.cache.ELECTED_KEYS = electedKeys;
      this.cache.EFFECTIVE_STAKE = null;
      this.cache.EFFECTIVE_STAKE = effectiveStakes;
      this.cache.ELECTED_KEYS_PER_NODE = null;
      this.cache.ELECTED_KEYS_PER_NODE = electedKeysPerNode;
      this.cache.LAST_EPOCH_METRICS = null;

      const calculateTotalStakeByShard = (shard, type, address?) => {
        const committeeMembers = _.get(
          res,
          `data.result.${type}.quorum-deciders.shard-${shard}.committee-members`
        );

        if (!committeeMembers) {
          console.log('Error: not found committeeMembers');

          return 0;
        }

        return committeeMembers
          .filter(cm => (address ? cm['earning-account'] === address : true))
          .reduce((acc, e) => {
            if (e['is-harmony-slot']) {
              return acc;
            }

            return acc + (e['raw-stake'] ? parseFloat(e['raw-stake']) : 0);
          }, 0);
      };

      // for apr calculating
      this.cache.VALIDATORS_TOTAL_STAKE = {};

      if (this.services.validatorsInfoService.cache.VALIDATORS) {
        this.services.validatorsInfoService.cache.VALIDATORS.forEach(address => {
          const currentTotalStake = _.sumBy(_.range(this.numOfShards), shard =>
            calculateTotalStakeByShard(shard, 'current', address)
          );

          const previousTotalStake = _.sumBy(_.range(this.numOfShards), shard =>
            calculateTotalStakeByShard(shard, 'previous', address)
          );

          this.cache.VALIDATORS_TOTAL_STAKE[address] = {
            currentTotalStake,
            previousTotalStake,
          };
        });
      }

      this.cache.LAST_EPOCH_METRICS = {
        lastEpochTotalStake: _.sumBy(_.range(this.numOfShards), shard =>
          calculateTotalStakeByShard(shard, 'current')
        ),
        // currentEpochTotalStake: _.sumBy(_.range(this.numOfShards), shard =>
        //   calculateTotalStakeByShard(shard, 'current')
        // ),
        lastEpochEffectiveStake: parseFloat(_.get(res, 'data.result.current.epos-median-stake', 0)),
      };

      this.cache.GLOBAL_SEATS.total_seats = _.get(res, 'data.result.current.external-slot-count')
        ? _.get(res, 'data.result.current.external-slot-count')
        : 0;
      // console.log('externalShards', externalShards);
      this.cache.GLOBAL_SEATS.total_seats_used = _.sumBy(externalShards, e => (e ? e.external : 0));
      this.cache.GLOBAL_SEATS.externalShards = externalShards.filter(x => x);
      this.cache.ELECTED_KEYS_SET = null;

      this.cache.ELECTED_KEYS_SET = externalShardKeys.reduce((cur, elem) => {
        elem.forEach(key => cur.add(key));
        return cur;
      }, new Set());
    } catch (err) {
      console.log(`error when updatingVotingPower for ${this.BLOCKCHAIN_SERVER}`, err);
    }
  };

  callMedianRawStakeSnapshot = async () => {
    let res = null;
    try {
      res = await this.apiClient.post('/', bodyParams('hmy_getMedianRawStakeSnapshot'));

      const liveRawStakes = {};
      const liveElectedKeys = [];
      const liveEffectiveStakes = {};
      const liveKeysPerNode = {};

      let liveEpochTotalStake = 0;

      res.data.result['epos-slot-winners'].forEach(e => {
        liveEpochTotalStake += parseFloat(e['raw-stake']);

        if (e['slot-owner']) {
          const nodeAddress = e['slot-owner'];
          const key = e['bls-public-key'];
          liveElectedKeys.push(key);
          liveRawStakes[key] = parseFloat(e['raw-stake']);
          liveEffectiveStakes[key] = parseFloat(e['eposed-stake']);
          if (liveKeysPerNode[nodeAddress]) {
            liveKeysPerNode[nodeAddress].push(key);
          } else {
            liveKeysPerNode[nodeAddress] = [key];
          }
        }
      });

      const candidates = [];

      res.data.result['epos-slot-candidates'].forEach(e => {
        if (e['validator']) {
          const nodeAddress = e['validator'];

          if (!candidates.find(v => v.address === nodeAddress)) {
            candidates.push({
              address: nodeAddress,
              bid: e['stake-per-key'],
              total_stake: e['stake'],
              keys: e['keys-at-auction'],
              num: e['keys-at-auction'].length,
            });
          }
        }
      });

      const liveExternalShards = externalShardsByKeys(liveElectedKeys);

      const liveTotalSeatsUsed = _.sumBy(liveExternalShards, e => (e ? e.external : 0));

      const liveTotalSeats = _.sumBy(liveExternalShards, e => (e ? e.external : 0));

      this.cache.LIVE_EPOCH_METRICS = {
        liveEpochTotalStake,
        liveExternalShards,
        liveTotalSeatsUsed,
        liveTotalSeats,
      };

      this.cache.LIVE_ELECTED_KEYS = null;
      this.cache.LIVE_EFFECTIVE_STAKES = null;
      this.cache.LIVE_RAW_STAKES = null;
      this.cache.LIVE_RAW_STAKES = liveRawStakes;
      this.cache.LIVE_EFFECTIVE_STAKES = liveEffectiveStakes;
      this.cache.LIVE_ELECTED_KEYS = liveElectedKeys;
      this.cache.LIVE_KEYS_PER_NODE = liveKeysPerNode;
      this.cache.LIVE_VALIDATORS_CANDIDATE = candidates;
    } catch (err) {
      console.log(
        `error when callMedianRawStakeSnapshot for ${this.BLOCKCHAIN_SERVER}`,
        err,
        res.result
      );
    }
  };

  calculateSecondPerBlock = async () => {
    try {
      let res: { result } = await this.apiClient.post('/', bodyParams('hmyv2_latestHeader'));

      const lastBlockNumber = res.result.blockNumber;
      const txCount = 1000;

      res = await this.apiClient.post(
        '/',
        bodyParams(
          'hmy_getBlocks',
          [
            '0x' + Number(lastBlockNumber - txCount).toString(16),
            '0x' + Number(lastBlockNumber).toString(16),
            JSON.stringify({
              withSigners: false,
              fullTx: false,
              inclStaking: true,
            }),
          ].join(',')
        )
      );

      const blocksTimestamp = res.result.map(b => Number(b.timestamp));

      const diffs = [];

      for (let i = blocksTimestamp.length - 1; i > 0; i--) {
        diffs.push(blocksTimestamp[i] - blocksTimestamp[i - 1]);
      }

      // console.log(JSON.stringify(diffs));

      const average = diffs.reduce((acc, t) => acc + t, 0) / diffs.length;

      SECOND_PER_BLOCK = average;

      console.log('SECOND_PER_BLOCK: ', SECOND_PER_BLOCK);
    } catch (e) {
      console.log('Error calculateSecondPerBlock ', e.message);
    }
  };
}
