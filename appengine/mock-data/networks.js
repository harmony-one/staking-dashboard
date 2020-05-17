module.exports = [
  {
    title: 'Harmony Partner Testnet',
    logo_url: 'https://harmony.one/logo',
    testnet: true,
    rpc_url: 'https://api.s0.dry.hmny.io',
    chain_title: 'partnernet',
    explorer_url: 'https://explorer.ps.hmny.io/#',
    chain_id: 1,
    id: 'harmony-partnernet',
    __typename: 'networks'
  },
  {
    logo_url: 'https://harmony.one/logo',
    testnet: true,
    rpc_url: 'https://api.s0.os.hmny.io',
    chain_title: 'Openstakingnet',
    explorer_url: 'https://explorer.os.hmny.io/#',
    chain_id: 3,
    id: 'harmony-open-staking',
    __typename: 'networks',
    title: 'Open Staking Testnet'
  },
  // {
  //   testnet: true,
  //   logo_url: 'https://harmony.one/logo',
  //   rpc_url: 'https://api.s0.stn.hmny.io',
  //   chain_title: 'stressnet',
  //   explorer_url: 'https://explorer.stn.hmny.io/#/staking-tx',
  //   chain_id: 5,
  //   id: 'harmony-stressnet',
  //   __typename: 'networks',
  //   title: 'Stress Testnet'
  // },
  {
    title: 'Harmony Mainnet',
    testnet: false,
    logo_url: 'https://harmony.one/logo',
    rpc_url: 'https://api.s0.t.hmny.io',
    chain_title: 'mainnet',
    explorer_url: 'https://explorer.harmony.one/#',
    id: 'harmony',
    chain_id: 1,
    __typename: 'networks'
  }
]
