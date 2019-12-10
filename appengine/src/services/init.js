const dbService = require('./database')
const SyncService = require('./sync')

const networks = require('./networks')

module.exports = function () {
  const syncServices = {}

  // dbService.getCollectionData('networks').then(networks => {
  //   networks.forEach(network => {
  //     syncServices[network.id] = new SyncService(network.rpc_url)
  //   })
  // })

  networks.forEach(network => {
    syncServices[network.id] = new SyncService(network.rpc_url)
  })

  return {
    dbService,
    syncServices
  }
}
