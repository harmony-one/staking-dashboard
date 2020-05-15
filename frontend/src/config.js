const dev = process.env.NODE_ENV === `development`

export default {
  name: `Harmony`,
  node_halted_timeout: 120000,
  block_timeout: 10000,
  default_gas_price: 1e-9, // Recommended

  // Ledger
  CosmosAppTestModeAllowed: false,
  mobileApp: Boolean(process.env.MOBILE_APP),

  e2e: process.env.VUE_APP_E2E
}
