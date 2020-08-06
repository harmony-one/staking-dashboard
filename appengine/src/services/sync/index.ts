import axios from 'axios';
import { StakingNetworkInfoService } from './staking-network-info';
import { ValidatorsInfoService } from './validators-info';
import { IBaseServiceParams, IServices } from './interfaces';
import {ValidatorsAvatarCacheService} from './validators-avatars'

const SYNC_PERIOD = 60000;
const LONG_SYNC_PERIOD = 5 * 60000;

export class SyncService {
  networkInfoService: StakingNetworkInfoService;
  validatorsInfoService: ValidatorsInfoService;
  validatorsAvatarCacheService: ValidatorsAvatarCacheService

  constructor(
    BLOCKCHAIN_SERVER,
    chainTitle,
    updateDocument,
    getCollectionDataWithLimit,
    getGlobalDataWithLimit,
    validatorsAvatarCacheService
  ) {
    // Currently only work for OS network and testnet.
    if (
      !(
        BLOCKCHAIN_SERVER.includes('api.s0.t.hmny.io') ||
        BLOCKCHAIN_SERVER.includes('api.s0.b.hmny.io')
      )
    ) {
      return;
    }

    console.log('Blockchain server: ', BLOCKCHAIN_SERVER);

    const historyCollection = `${chainTitle}_history`;
    const globalHistory = `${chainTitle}_global`;

    const apiClient = axios.create({
      baseURL: BLOCKCHAIN_SERVER,
      // baseURL: process.env.SERVER,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const services: IServices = {};

    const baseParams: IBaseServiceParams = {
      BLOCKCHAIN_SERVER,
      apiClient,
      globalHistory,
      historyCollection,
      updateDocument,
      getGlobalDataWithLimit,
      getCollectionDataWithLimit,
      services,
    };

    this.networkInfoService = new StakingNetworkInfoService(baseParams);
    services.networkInfoService = this.networkInfoService;

    this.validatorsInfoService = new ValidatorsInfoService(baseParams);
    services.validatorsInfoService = this.validatorsInfoService;

    this.validatorsAvatarCacheService = validatorsAvatarCacheService
    services.validatorsAvatarCacheService = this.validatorsAvatarCacheService

    setInterval(async () => {
      console.log('--------- Updating ---------', BLOCKCHAIN_SERVER, new Date().toString());
      await this.update();
    }, SYNC_PERIOD);

    setInterval(async () => {
      await this.longUpdate();
    }, LONG_SYNC_PERIOD);

    this.update();
    this.longUpdate();
  }

  update = async () => {
    try {
      // Calculate voting power first.
      await this.networkInfoService.callSuperCommittees();
      await this.networkInfoService.callMedianRawStakeSnapshot();

      // Get global info first.
      await this.networkInfoService.syncStakingNetworkInfo();

      // Call to store active validator and all validators.

      // await getActiveValidatorAddressesData()
      await this.validatorsInfoService.getAllValidatorAddressesData();
      // Get  all delegations by validator first.
      await this.validatorsInfoService.getAllDelegationsInfo();
      // Then get validator info, each call gets 100 validatorinfo.
      await this.validatorsInfoService.getElectedValidators();
      await this.validatorsInfoService.getAllValidatorsInfo();

      this.validatorsInfoService.cacheAllValidators();

      // console.log('distro calculation starting.');
      await this.networkInfoService.calculateDistroTable();
      // console.log('distro calculation finished.');
    } catch (err) {
      console.log('main update Error: ', err.message);
    }
  };

  longUpdate = async () => {
    await this.networkInfoService.calculateSecondPerBlock();
  };

  getStakingNetworkInfo = () => this.networkInfoService.getStakingNetworkInfo();
  getNetworkInfoLite = () => this.networkInfoService.getNetworkInfoLite();

  getValidators = () => this.validatorsInfoService.getAllValidators();
  getValidatorsWithPage = params => this.validatorsInfoService.getValidatorsWithPage(params);
  getValidatorsSizes = () => this.validatorsInfoService.getValidatorsSizes();
  getActiveValidators = () => this.validatorsInfoService.getActiveValidators();
  getDelegationsByDelegator = async address =>
    await this.validatorsInfoService.getDelegationsByDelegator(address);
  getValidatorInfo = address => this.validatorsInfoService.getValidatorInfo(address);
  getValidatorHistory = address => this.validatorsInfoService.getValidatorHistory(address);
  getDelegationsByValidator = address =>
    this.validatorsInfoService.getDelegationsByValidator(address);
}
