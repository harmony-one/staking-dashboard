"use strict"

export default opts => ({
  // use Node
  blocks: require(`./blocks.ts`).default(opts),
  transactions: require(`./transactions.ts`).default(opts),
  distribution: require(`./distribution.ts`).default(opts),
  delegates: require(`./delegates.ts`).default(opts),
  delegation: require(`./delegation.ts`).default(opts),
  connection: require(`./connection.ts`).default(opts),
  proposals: require(`./governance/proposals.ts`).default(opts),
  votes: require(`./governance/votes.ts`).default(opts),
  deposits: require(`./governance/deposits.ts`).default(opts),
  governanceParameters: require(`./governance/parameters.ts`).default(opts),
  send: require(`./send.ts`).default(opts),
  wallet: require(`./wallet.ts`).default(opts),
  stakingParameters: require(`./parameters.ts`).default(opts),
  pool: require(`./pool.ts`).default(opts),
  minting: require(`./minting.ts`).default(opts),

  // not use Node
  extension: require(`./extension.js`).default(opts),
  onewallet: require(`./onewallet.js`).default(opts),
  session: require(`./session.js`).default(opts),
  keystore: require(`./keystore.js`).default(opts),
  notifications: require(`./notifications.js`).default(opts),
  validators: require(`./validators.js`).default(opts)
})
