const DBService = require('./database')
const SyncService = require('./sync')

module.exports = async function() {
  const dbService = new DBService()

  const syncServices = {}

  const networks = await dbService.getCollectionData('networks')

  networks.forEach(network => {
    syncServices[network.id] = new SyncService(
      network.rpc_url,
      network.chain_title,
      dbService.updateDocument,
      dbService.getCollectionDataWithLimit
    )
  })

  return {
    dbService,
    syncServices
  }
}
