import { DBService } from './database';
import { SyncService } from './sync';

export const InitServices = async function () {
  const dbService = new DBService();

  const syncServices: Record<string, SyncService> = {};

  const networks = await dbService.getCollectionData('networks');

  networks.forEach(network => {
    syncServices[network.id] = new SyncService(
      network.rpc_url,
      network.chain_title,
      dbService.updateDocument,
      dbService.getCollectionDataWithLimit,
      dbService.getGlobalDataWithLimit
    );
  });

  return {
    dbService,
    syncServices,
  };
};
