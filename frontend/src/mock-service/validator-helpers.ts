import * as crypto from "@harmony-js/crypto"

const blockchainValidator = {
  address: "0x0b585f8daefbc68a311fbd4cb20d9174ad174016",
  slot_pub_keys: [
    "65f55eb3052f9e9f632b2923be594ba77c55543f5c58ee1454b9cfd658d25e06373b0f7d42a19c84768139ea294f6204"
  ],
  stake: 1000000000000000000,
  unbonding_height: 0,
  min_self_delegation: 1000000000000000000,
  max_total_delegation: 1e21,
  active: false,
  commission: {
    commission_rates: {
      rate: "0.200000000000000000",
      max_rate: "1.000000000000000000",
      max_change_rate: "0.050000000000000000"
    },
    update_height: 10
  },
  description: {
    name: "SuperHero",
    identity: "YouWouldNotKnow",
    website: "Secret Website",
    security_contact: "Mr.DoubleZeroSeven",
    details: "blah blah blah"
  },
  creation_height: 10,
  uptime: "1.000000000000000000"
}

const frontendValidator = {
  userName: "iqlusion",
  customized: false,
  moniker: "iqlusion",
  identity: "DCB176E79AE7D51F",
  operator_address: "cosmosvaloper1grgelyng2v6v3t8z87wu3sxgt9m5s03xfytvz7",
  update_time: "2019-03-13T23:00:00Z",
  unbonding_time: "1970-01-01T00:00:00Z",
  rate: "0.100000000000000000",
  status: 2,
  uptime_percentage: "0.997",
  jailed: false,
  max_rate: "1.000000000000000000",
  tombstoned: false,
  avatarUrl:
    "https://s3.amazonaws.com/keybase_processed_uploads/5dacfc1ad84eecdb4a01fd893d479805_360_360.jpeg",
  start_height: "0",
  voting_power: "0.0315",
  max_change_rate: "0.010000000000000000",
  website: "iqlusion.io",
  min_self_delegation: "100000000000",
  tokens: "5706991464569",
  unbonding_height: 0,
  consensus_pubkey:
    "cosmosvalconspub1zcjduepqdgvppnyr5c9pulsrmzr9e9rp7qpgm9jwp5yu8g3aumekgjugxacq8a9p2c",
  details: "",
  keybaseId: "DCB176E79AE7D51F",
  lastUpdated: "2019-08-15T16:03:35.144214+00:00",
  profileUrl: "https://keybase.io/iqlusion",
  id: "16a9a8ae-1568-42a5-b4a6-59735c655dca",
  delegator_shares: "5706991464569.000000000000000000"
}

export type TBlockchainValidator = typeof blockchainValidator
export type TFrontendValidator = typeof frontendValidator

export const remapValidator = (
  validator: TBlockchainValidator,
  converAddress = false
): TFrontendValidator => {
  return {
    userName: validator.description.name,

      operator_address: converAddress
      ? crypto.getAddress(validator.address).bech32
      : validator.address,

    rate: validator.commission.commission_rates.rate,
    max_rate: validator.commission.commission_rates.max_rate,
    max_change_rate: validator.commission.commission_rates.max_change_rate,
    uptime_percentage: validator.uptime,
    website: validator.description.website,
    consensus_pubkey: validator.slot_pub_keys[0],
    details: validator.description.details,
    moniker: validator.description.name,

    customized: false,
    identity: "DCB176E79AE7D51F",
    update_time: "2019-03-13T23:00:00Z",
    unbonding_time: "1970-01-01T00:00:00Z",
    status: 2,
    jailed: false,
    tombstoned: false,
    avatarUrl:
      "https://s3.amazonaws.com/keybase_processed_uploads/5dacfc1ad84eecdb4a01fd893d479805_360_360.jpeg",
    start_height: "0",
    voting_power: "0.0315",
    min_self_delegation: "100000000000",
    tokens: "5706991464569",
    unbonding_height: 0,
    keybaseId: "DCB176E79AE7D51F",
    lastUpdated: "2019-08-15T16:03:35.144214+00:00",
    profileUrl: "https://keybase.io/iqlusion",
    id: "16a9a8ae-1568-42a5-b4a6-59735c655dca",
    delegator_shares: "5706991464569.000000000000000000"
  }
}
