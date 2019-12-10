module.exports = [
  {
    testnet: true,
    logo_url: 'https://harmony.one/logo',
    rpc_url: 'https://api.s0.pga.hmny.io',
    chain_title: 'Devnet',
    explorer_url: 'https://explorer.testnet.harmony.one/#/tx/',
    id: 'harmony-devnet',
    chain_id: 3,
    __typename: 'networks',
    title: 'Harmony Devnet'
  },
  {
    id: 'harmony-testnet',
    chain_id: 2,
    __typename: 'networks',
    title: 'Harmony Testnet',
    testnet: true,
    logo_url: 'https://harmony.one/logo',
    rpc_url: 'https://api.s0.b.hmny.io',
    chain_title: 'Testnet',
    explorer_url: 'https://explorer.testnet.harmony.one/#/tx/'
  },
  // {
  //   testnet: true,
  //   logo_url: 'https://harmony.one/logo',
  //   rpc_url: 'http://localhost:9500',
  //   chain_title: 'Localnet',
  //   explorer_url: 'http://localhost:9500/#/tx/',
  //   id: 'harmony-testnet-local',
  //   chain_id: 2,
  //   __typename: 'networks',
  //   title: 'Harmony Testnet Local'
  // },
  {
    testnet: false,
    logo_url: 'https://harmony.one/logo',
    rpc_url: 'https://api.s0.t.hmny.io',
    chain_title: 'Mainnet',
    explorer_url: 'https://explorer.harmony.one/#/tx/',
    id: 'harmony',
    chain_id: 1,
    __typename: 'networks',
    title: 'Harmony Mainnet'
  }
]
