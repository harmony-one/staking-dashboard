const HmyMainnet = 1;
const HmyTestnet = 2;

module.exports = [
  {
    id: "harmony-testnet",
    chain_id: HmyTestnet,
    logo_url: "https://harmony.one/logo",
    testnet: true,
    title: "Harmony Testnet",
    rpc_url: "https://api.s0.b.hmny.io",
    __typename: "networks"
  },
  {
    id: "harmony",
    chain_id: HmyMainnet,
    logo_url: "https://harmony.one/logo",
    testnet: false,
    title: "Harmony Mainnet",
    rpc_url: "https://api.s0.t.hmny.io",
    __typename: "networks"
  },
  {
    id: "harmony-testnet-local",
    chain_id: HmyTestnet,
    logo_url: "https://harmony.one/logo",
    testnet: true,
    title: "Harmony Testnet Local",
    rpc_url: 'http://localhost:9500',
    __typename: "networks"
  }
];