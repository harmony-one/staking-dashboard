import { asyncHandler, createError } from './helpers';
import { DBService } from '../services/database';
import { SyncService } from '../services/sync';

export interface INetwork {
  chain_id: number;
  chain_title: string;
  explorer_url: string;
  id: string;
  logo_url: string;
  rpc_url: string;
  testnet: boolean;
  title: string;
}

let NETWORKS_CACHE: INetwork[] = [];
let lastNetworksCacheUpdate = Date.now();

export const routes = (app, db: DBService, syncServices: Record<string, SyncService>) => {
  const getSyncService = networkId => {
    if (syncServices[networkId]) {
      return syncServices[networkId];
    }

    const networkConfig = NETWORKS_CACHE.find(n => n.chain_title === networkId);

    if (!networkConfig || !syncServices[networkConfig.id]) {
      throw new Error('network not found');
    }

    return syncServices[networkConfig.id];
  };

  app.get(
    '/networks/:networkId/validators',
    asyncHandler(async (req, res) => {
      const data = getSyncService(req.params.networkId).getValidators();

      res.json(data);
    })
  );

  app.get(
    '/networks/:networkId/validators_with_page',
    asyncHandler(async (req, res) => {
      const data = await getSyncService(req.params.networkId).getValidatorsWithPage(req.query);

      res.json(data);
    })
  );

  app.get(
    '/networks/:networkId/activeValidators',
    asyncHandler(async (req, res) => {
      const data = getSyncService(req.params.networkId).getActiveValidators();

      res.json({ validators: data });
    })
  );
  app.get(
    '/networks/:networkId/validators/:address',
    asyncHandler(async (req, res) => {
      const validator = getSyncService(req.params.networkId).getValidatorInfo(req.params.address);

      if (!validator) {
        throw createError(400, 'Not found');
      }

      res.json(validator);
    })
  );

    app.get(
        '/networks/:networkId/validators/:address/avatar',
        asyncHandler(async (req, res) => {
            const avatar = getSyncService(req.params.networkId).validatorsAvatarCacheService
                .getValidatorCachedAvatarByValidatorAddress(req.params.address)

            if (!avatar) {
                throw createError(404, 'Not found');
            }

            res.type('image/jpg');
            res.end(avatar);
        })
    );

  app.get(
    '/networks/:networkId/validator_history/:address',
    asyncHandler(async (req, res) => {
      const history = getSyncService(req.params.networkId).getValidatorHistory(req.params.address);

      if (!history) {
        throw createError(400, 'Not found');
      }

      res.json(history);
    })
  );

  app.get(
    '/networks/:networkId/delegations/:address',
    asyncHandler(async (req, res) => {
      const data = await getSyncService(req.params.networkId).getDelegationsByDelegator(
        req.params.address
      );

      res.json(data);
    })
  );

  app.get(
    '/networks/:networkId/staking_network_info',
    asyncHandler(async (req, res) => {
      const data = {
        effective_median_stake: 100,
        total_one_staked: 10,
        current_block_number: 10,
        current_block_hash: '0xaa7c3439771d5a329c2ee6407ba6dbdc6d88b43c0c2e5669c9c260fec62ff185',
        ...getSyncService(req.params.networkId).getStakingNetworkInfo(),
      };
      res.json(data);
    })
  );

  app.get(
    '/networks/:networkId/network_info_lite',
    asyncHandler(async (req, res) => {
      const data = getSyncService(req.params.networkId).getNetworkInfoLite();

      res.json(data);
    })
  );

  app.get(
    '/proposals',
    asyncHandler(async (req, res) => {
      const data = await db.getCollectionData('proposals');

      if (!data) {
        throw createError(400, 'Not found');
      }

      res.json(data);
    })
  );

  app.get(
    '/networks',
    asyncHandler(async (req, res) => {
      if (NETWORKS_CACHE.length && Date.now() - lastNetworksCacheUpdate > 5 * 60 * 1000) {
        res.json(NETWORKS_CACHE);
      }

      const data: INetwork[] = await db.getCollectionData('networks');

      if (!data) {
        throw createError(400, 'Not found');
      }

      NETWORKS_CACHE = data;
      lastNetworksCacheUpdate = Date.now();

      res.json(data);
    })
  );

  app.get(
    '/liveness',
    asyncHandler(async (req, res) => {
      res.json(true);
    })
  );

  app.get(
    '/auth/accounts/:accountId',
    asyncHandler(async (req, res) => {
      const data = await db.getCollectionData('accounts');

      const account = data.find(item => item.value.address === req.params.accountId);

      if (!account) {
        throw createError(400, 'Not found');
      }

      res.json(account);
    })
  );

  app.get(
    '/staking/parameters',
    asyncHandler(async (req, res) => {
      const allData = await db.getCollectionData('staking.parameters');
      const data = allData[0];

      if (!data) {
        throw createError(400, 'Not found');
      }

      res.json(data);
    })
  );

  app.get(
    '/account',
    asyncHandler(async (req, res) => {
      const allData = await db.getCollectionData('accounts');
      const data = allData[0];

      if (!data) {
        throw createError(400, 'Not found');
      }

      res.json(data);
    })
  );

  // // These endpoints below are used by "cosmos" api
  app.get(
    '/staking/pool',
    asyncHandler(async (req, res) => {
      const allData = await db.getCollectionData('staking.pool');
      const data = allData[0];

      if (!data) {
        throw createError(400, 'Not found');
      }

      res.json(data);
    })
  );

  app.get(
    '/minting/annual-provisions',
    asyncHandler(async (req, res) => {
      res.json('18240689989533.703492076078609840');
    })
  );

  // For "/activity" page
  app.get(
    '/txs',
    asyncHandler(async (req, res) => {
      if (req.query && Object.keys(req.query).length) {
        // by sender
        if (req.query.sender) {
          const data = await db.getCollectionData('txs.BySender');

          return res.json(data);
        }
        if (req.query.recipient) {
          const data = await db.getCollectionData('txs.ByRecipient');

          return res.json(data);
        }
      }

      res.json([]);
    })
  );

  // Final step of transaction
  app.post('/txs', (req, res) => {
    res.json({
      height: '0',
      txhash: 'CD68C99E83A8453E71A67F20DB7BF3057B85BDFA57D24D156C44A968F9D4E5D8',
    });
  });

  // Mocks for https://lcd.nylira.net/blocks/2369584
  app.get(
    '/blocks/:blockId',
    asyncHandler(async (req, res) => {
      const { blockId } = req.params;

      const allData = await db.getCollectionData('blocks');

      const data = allData.find(block => block.header.height === blockId);

      if (!data) {
        throw createError(400, 'Not found');
      }

      res.json(data);
    })
  );

  app.get(
    '/txs/:txId',
    asyncHandler(async (req, res) => {
      const { txId } = req.params;

      const allData = await db.getCollectionData('transactions');

      const data = allData.find(tx => tx.txhash === txId);

      if (!data) {
        throw createError(400, 'Not found');
      }

      res.json(data);
    })
  );
};
