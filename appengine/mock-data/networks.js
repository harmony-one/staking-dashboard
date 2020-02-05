const HmyMainnet = 1
const HmyTestnet = 2

module.exports = [
  {
    id: "harmony-testnet",
    chain_id: HmyTestnet,
    chain_title: "Testnet",
    logo_url: "https://harmony.one/logo",
    testnet: true,
    title: "Harmony Testnet",
    rpc_url: "https://api.s0.b.hmny.io",
    explorer_url: "https://explorer.testnet.harmony.one/#/tx/",
    __typename: "networks"
  },
  {
    id: "harmony",
    chain_id: HmyMainnet,
    chain_title: "Mainnet",
    logo_url: "https://harmony.one/logo",
    testnet: false,
    title: "Harmony Mainnet",
    rpc_url: "https://api.s0.t.hmny.io",
    explorer_url: "https://explorer.harmony.one/#/tx/",
    __typename: "networks"
  },
  {
    id: "harmony-testnet-local",
    chain_id: HmyTestnet,
    chain_title: "Localnet",
    logo_url: "https://harmony.one/logo",
    testnet: true,
    title: "Harmony Testnet Local",
    rpc_url: "http://localhost:9500",
    explorer_url: "http://localhost:9500/#/tx/",
    __typename: "networks"
  },
  {
    id: "harmony-open-staking",
    chain_id: HmyTestnet,
    chain_title: "Openstakingnet",
    logo_url: "https://harmony.one/logo",
    testnet: true,
    title: "Harmony Open Staking",
    rpc_url: "http://api.s0.os.hmny.io",
    explorer_url: "https://explorer.os.hmny.io/#/tx/",
    __typename: "networks"
  }
]
