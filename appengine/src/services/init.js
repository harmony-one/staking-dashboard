const dbService = require('./database')
const SyncService = require('./sync')

module.exports = async function () {
  const syncServices = {}

  const networks = await dbService.getCollectionData('networks')

  networks.forEach(network => {
    syncServices[network.id] = new SyncService(network.rpc_url)
  })

  return {
    dbService,
    syncServices
  }
}
