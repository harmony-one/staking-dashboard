import BigNumber from 'bignumber.js';
import { AxiosInstance } from 'axios';
import _ from 'lodash';
import { isNotEmpty, bodyParams, bodyParams2, sortByParams, shuffle } from './helpers';
import { IBaseServiceParams, IServices } from './interfaces';

BigNumber.config({
  FORMAT: {
    groupSeparator: '',
  },
});

const MAX_LENGTH = 30;
const VALIDATOR_PAGE_SIZE = 100;
const SLEEP_TIME = 5;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class ValidatorsInfoService {
  apiClient: AxiosInstance;
  BLOCKCHAIN_SERVER: string;
  updateDocument;
  getGlobalDataWithLimit;
  globalHistory;
  getCollectionDataWithLimit;
  historyCollection;
  services: IServices;

  cache = {
    VALIDATORS: [],
    ALL_VALIDATORS: [],
    ACTIVE_VALIDATORS: [],
    VALIDATOR_INFO: {},
    VALIDATOR_INFO_HISTORY: {},
    DELEGATIONS_BY_DELEGATOR: {},
    DELEGATIONS_BY_VALIDATOR: {},
  };

  constructor(params: IBaseServiceParams) {
    this.BLOCKCHAIN_SERVER = params.BLOCKCHAIN_SERVER;
    this.updateDocument = params.updateDocument;
    this.globalHistory = params.globalHistory;
    this.apiClient = params.apiClient;
    this.getGlobalDataWithLimit = params.getGlobalDataWithLimit;
    this.getCollectionDataWithLimit = params.getCollectionDataWithLimit;
    this.historyCollection = params.historyCollection;
    this.services = params.services;
  }

  getAllValidatorAddressesData = async () => {
    try {
      const res = await this.apiClient.post('/', bodyParams('hmy_getAllValidatorAddresses'));

      if (Array.isArray(res.data.result)) {
        this.cache.VALIDATORS = res.data.result;
        // console.log('# of validators', this.cache.VALIDATORS.length);
      }
      return res.data.result;
    } catch (err) {
      console.log('error when doing getAllValidatorAddressesData:', err);
    }
  };

  getRecentData = async address => {
    const res = new Map();
    try {
      const recent = await this.getCollectionDataWithLimit(
        this.historyCollection,
        address,
        'index',
        MAX_LENGTH
      );
      if (!Array.isArray(recent)) {
        return;
      }
      _.forEach(recent, item => {
        res[item.index] = item;
      });
    } catch (err) {
      console.log(`error when getRecentData ${address}`, err);
    }
    return res;
  };

  processValidatorWithPage = async page => {
    try {
      const res = await this.apiClient.post(
        '/',
        bodyParams2('hmy_getAllValidatorInformation', page)
      );
      if (res && res.data && res.data.result && Array.isArray(res.data.result)) {
        // console.log(`hmy_getAllValidatorInformation with page ${page}: `, res.data.result.length);

        res.data.result.forEach(async elem => {
          if (elem && elem.validator && elem.validator.address) {
            await this.processValidatorInfoData(elem.validator.address, elem);
          }
        });
        return res.data.result.length;
      } else {
        return 0;
      }
    } catch (err) {
      console.log('error when processValidatorWithPage: ', err);
      return 0;
    }
  };

  processValidatorInfoData = async (address, result) => {
    try {
      if (isNotEmpty(result)) {
        const res = result.validator;
        let selfStake = 0;
        let totalStake = 0;
        let averageStake = '0';
        let remainder = res['max-total-delegation'];

        if (
          this.cache.DELEGATIONS_BY_VALIDATOR[address] &&
          this.cache.DELEGATIONS_BY_VALIDATOR[address].length
        ) {
          const elem = this.cache.DELEGATIONS_BY_VALIDATOR[address].find(
            e => e.validator_address === e.delegator_address
          );
          if (elem) {
            selfStake = elem.amount;
          }
          totalStake = this.cache.DELEGATIONS_BY_VALIDATOR[address].reduce(
            (acc, val) => new BigNumber(acc).plus(val.amount).toFormat(),
            0
          );

          averageStake = new BigNumber(totalStake)
            .div(this.cache.DELEGATIONS_BY_VALIDATOR[address].length)
            .toFormat();

          remainder = new BigNumber(remainder).minus(totalStake).toFormat();
        }

        const utcDate = new Date(Date.now());
        const epochIndex = parseInt(res['last-epoch-in-committee']);

        const validatorInfo = {
          ...res,
          self_stake: selfStake,
          total_stake: totalStake,
          average_stake: averageStake,
          average_stake_by_bls:
            Array.isArray(res['bls-public-keys']) && res['bls-public-keys'].length > 0
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
          active_nodes: Array.isArray(res['bls-public-keys']) ? res['bls-public-keys'].length : 1,
          elected_nodes: Array.isArray(res['bls-public-keys'])
            ? res['bls-public-keys'].filter(item =>
                this.services.networkInfoService.cache.ELECTED_KEYS_SET.has(item)
              ).length
            : 0,
          active: this.cache.ACTIVE_VALIDATORS.includes(res.address),
          uptime_percentage:
            _.get(result, 'lifetime.blocks.signed') && _.get(result, 'lifetime.blocks.to-sign')
              ? parseFloat(_.get(result, 'lifetime.blocks.signed')) /
                parseFloat(_.get(result, 'lifetime.blocks.to-sign'))
              : null,
          last_apr: _.get(result, 'lifetime.apr', null),
          epoch_apr: _.get(result, 'lifetime.epoch-apr', null),
          lifetime_reward_accumulated: _.get(result, 'lifetime.reward-accumulated', null),
        };

        // if (validatorInfo.active) {
        if (Array.isArray(validatorInfo.epoch_apr)) {
          const { epoch_apr } = validatorInfo;

          validatorInfo.apr =
            epoch_apr.reduce((acc, v) => acc + parseFloat(v.apr), 0) / epoch_apr.length;
        }

        // if (!this.cache.VALIDATORS_TOTAL_STAKE[validatorInfo.address]) {
        //   console.log('Total stake - NOT FOUND ' + validatorInfo.address);
        // }

        // Calculating this.cache.VALIDATOR_INFO_HISTORY]
        if (!this.cache.VALIDATOR_INFO_HISTORY[address]) {
          this.cache.VALIDATOR_INFO_HISTORY[address] = await this.getRecentData(address);
        }

        // update the previous epochIndex if this is the first time epochIndex will be inserted.
        if (!this.cache.VALIDATOR_INFO_HISTORY[address][epochIndex]) {
          await this.updateDocument(
            this.historyCollection,
            `${address}_${epochIndex}`,
            validatorInfo
          );
          // We store the last data of the previous epoch.
          if (this.cache.VALIDATOR_INFO_HISTORY[address][epochIndex - 1]) {
            await this.updateDocument(
              this.historyCollection,
              `${address}_${epochIndex - 1}`,
              this.cache.VALIDATOR_INFO_HISTORY[address][epochIndex - 1]
            );
          }
        }
        if (
          this.cache.VALIDATOR_INFO[address] &&
          validatorInfo.rate !== this.cache.VALIDATOR_INFO[address].rate
        ) {
          validatorInfo['commision-recent-change'] = utcDate;
        } else if (
          this.cache.VALIDATOR_INFO[address] &&
          this.cache.VALIDATOR_INFO[address]['commision-recent-change']
        ) {
          validatorInfo['commision-recent-change'] = this.cache.VALIDATOR_INFO[address][
            'commision-recent-change'
          ];
        }

        this.cache.VALIDATOR_INFO[address] = validatorInfo;

        this.cache.VALIDATOR_INFO_HISTORY[address][epochIndex] = validatorInfo;
        if (this.cache.VALIDATOR_INFO_HISTORY[address][epochIndex - MAX_LENGTH]) {
          delete this.cache.VALIDATOR_INFO_HISTORY[address][epochIndex - MAX_LENGTH];
        }
      }
    } catch (e) {
      console.log('error in processValidatorInfoData:', e);
    }
  };

  getDelegationsByDelegatorData = async address => {
    const res = await this.apiClient.post(
      '/',
      bodyParams('hmy_getDelegationsByDelegator', address)
    );

    let result = res.data.result;
    result = _.forEach(result, elem => {
      elem.validator_info = this.cache.VALIDATOR_INFO[elem.validator_address];
    });
    if (isNotEmpty(result)) {
      this.cache.DELEGATIONS_BY_DELEGATOR[address] = result;
    }
    return result;
  };

  getAllDelegationsInfo = async () => {
    try {
      let page = 0;
      while (true) {
        const res = await this.apiClient.post(
          '/',
          bodyParams2('hmy_getAllDelegationInformation', page)
        );

        if (res && res.data && Array.isArray(res.data.result) && isNotEmpty(res.data.result)) {
          // console.log(
          //   `hmy_getAllDelegationInformation with page ${page}: `,
          //   res.data.result.length
          // );
          res.data.result.forEach(elem => {
            if (Array.isArray(elem) && elem[0] && elem[0].validator_address) {
              this.cache.DELEGATIONS_BY_VALIDATOR[elem[0].validator_address] = elem;
            }
          });
          page += 1;
        } else {
          break;
        }
      }
    } catch (err) {
      console.log('error when getDelegationsFirst', err);
    }
    await sleep(SLEEP_TIME);
  };

  getAllValidatorsInfo = async () => {
    let totalValidators = 0;
    let page = 0;
    while (totalValidators < this.cache.VALIDATORS.length) {
      const count = await this.processValidatorWithPage(page);
      totalValidators += count;
      // console.log('get validator', count);
      if (count === 0) {
        break;
      }
      page += 1;
    }
    await sleep(SLEEP_TIME);
  };

  getDelegationsByValidatorData = async address => {
    const res = await this.apiClient.post(
      '/',
      bodyParams('hmy_getDelegationsByValidator', address)
    );

    if (isNotEmpty(res.data.result)) {
      this.cache.DELEGATIONS_BY_VALIDATOR[address] = res.data.result;
    }
    // console.log("getDelegationsByValidatorData ${address}", res.data.result);
    return res.data.result;
  };

  getElectedValidators = async () => {
    let res = null;
    try {
      this.cache.ACTIVE_VALIDATORS = [];

      res = await this.apiClient.post('/', bodyParams('hmy_getElectedValidatorAddresses'));

      if (res.data && res.data.result) {
        this.cache.ACTIVE_VALIDATORS = res.data.result;
      } else {
        console.log(`error when getElectedValidators for ${this.BLOCKCHAIN_SERVER}`);
      }
    } catch (err) {
      console.log(
        `error when callMedianRawStakeSnapshot for ${this.BLOCKCHAIN_SERVER}`,
        err,
        res.result
      );
    }
  };

  getValidators = () => {
    const validators = !this.cache.VALIDATORS ? [] : this.cache.VALIDATORS;

    return validators
      .map(address => {
        return { ...this.cache.VALIDATOR_INFO[address] };
      })
      .filter(isNotEmpty);
  };

  getValidatorsWithPage = params => {
    const { page, size, active, sortProperty, sortOrder, search } = params;

    const pageInt = parseInt(page, 10);
    const sizeInt = parseInt(size, 10);
    let validators;

    if (active === 'true') {
      validators = !this.cache.ACTIVE_VALIDATORS ? [] : this.cache.ACTIVE_VALIDATORS;
    } else {
      validators = !this.cache.VALIDATORS ? [] : this.cache.VALIDATORS;
    }

    validators = validators
      .map(address => {
        return { ...this.cache.VALIDATOR_INFO[address] };
      })
      .filter(isNotEmpty);

    if (search) {
      validators = validators.filter(
        v =>
          v.name.toLowerCase().includes(search.toLowerCase()) ||
          v.address.toLowerCase().includes(search.toLowerCase())
      );
    }

    const totalFound = validators.length;

    if (sortProperty && sortOrder) {
      validators = sortByParams(validators.slice(0), sortProperty, sortOrder);
    }

    if (pageInt && sizeInt && pageInt > 0 && sizeInt > 0) {
      validators = validators.slice(pageInt * sizeInt, (pageInt + 1) * sizeInt);
    }

    return {
      validators,
      totalFound,
      total: this.cache.VALIDATORS.length,
      total_active: this.cache.ACTIVE_VALIDATORS.length,
    };
  };

  generateAllValidators = () => {
    let validators = !this.cache.VALIDATORS ? [] : this.cache.VALIDATORS;

    validators = validators
      .map(address => {
        const validator = this.cache.VALIDATOR_INFO[address];

        if (!validator) {
          return null;
        }

        return {
          active: validator.active,
          apr: validator.apr,
          address: validator.address,
          name: validator.name,
          rate: validator.rate,
          total_stake: validator.total_stake,
          uptime_percentage: validator.uptime_percentage,
          //identity: validator.identity,
          logoUrl: 'https://i01.fotocdn.net/s123/e1958e718063c678/user_xl/2804839805.jpg'
        };
      })
      .filter(isNotEmpty);

    return validators;
  };

  cacheAllValidators = () => {
    this.cache.ALL_VALIDATORS = this.generateAllValidators();
  }

  getAllValidators = () => ({
    validators: this.cache.ALL_VALIDATORS,
    totalFound: this.cache.ALL_VALIDATORS.length,
    total: this.cache.VALIDATORS.length,
    total_active: this.cache.ACTIVE_VALIDATORS.length,
  });

  getValidatorsSizes = () => {
    return {
      total: this.cache.VALIDATORS.length,
      total_active: this.cache.ACTIVE_VALIDATORS.length,
    };
  };

  // deprecated
  getActiveValidators = () => {
    if (!this.cache.ACTIVE_VALIDATORS) {
      return [];
    }

    return this.cache.ACTIVE_VALIDATORS.map(address => {
      return this.cache.VALIDATOR_INFO[address];
    }).filter(isNotEmpty);
  };

  getDelegationsByDelegator = async address => await this.getDelegationsByDelegatorData(address);

  getValidatorInfo = address => this.cache.VALIDATOR_INFO[address];

  getValidatorHistory = address => _.values(this.cache.VALIDATOR_INFO_HISTORY[address]);

  getDelegationsByValidator = address => this.cache.DELEGATIONS_BY_VALIDATOR[address];
}
