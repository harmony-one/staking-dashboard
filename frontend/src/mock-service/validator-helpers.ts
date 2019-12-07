import * as crypto from "@harmony-js/crypto"

const blockchainValidator = {
  address: "0x7c41e0668b551f4f902cfaec05b5bdca68b124ce",
  slot_pub_keys: [
    "678ec9670899bf6af85b877058bea4fc1301a5a3a376987e826e3ca150b80e3eaadffedad0fedfa111576fa76ded980c"
  ],
  slot_shard_ids: [0],
  unbonding_height: 0,
  min_self_delegation: 1000000000000000000,
  max_total_delegation: 1000000000000000000000,
  active: false,
  commission: {
    commission_rates: {
      rate: "0.200000000000000000",
      max_rate: "1.000000000000000000",
      max_change_rate: "0.050000000000000000"
    },
    update_height: 1251
  },
  description: {
    name: "SuperHero",
    identity: "YouWouldNotKnow",
    website: "Secret Website",
    security_contact: "Mr.DoubleZeroSeven",
    details: "blah blah blah"
  },
  creation_height: 1251,
  self_stake: 1251,
  total_stake: 0,
  uptime: "0.000000000000000000",
  avg_voting_power: "0.500000000000000000",
  total_effective_stake: "171000000000000000000.000000000000000000"
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
  delegator_shares: "5706991464569.000000000000000000",
  update_height: 121,
  creation_height: 212,
  avg_voting_power: "0.500000000000000000",
  total_effective_stake: "171000000000000000000.000000000000000000",
  active: false,
  max_total_delegation: 11,
  self_stake: 11,
  total_stake: 0
}

export type TBlockchainValidator = typeof blockchainValidator
export type TFrontendValidator = typeof frontendValidator

export const remapValidator = (
  validator: TBlockchainValidator,
  convertAddress = false
): TFrontendValidator => {
  return {
    userName: validator.description.name,

    operator_address: convertAddress
      ? crypto.getAddress(validator.address).bech32
      : validator.address,

    rate: validator.commission.commission_rates.rate,
    max_rate: validator.commission.commission_rates.max_rate,
    max_change_rate: validator.commission.commission_rates.max_change_rate,
    max_total_delegation: validator.max_total_delegation,
    min_self_delegation: String(validator.min_self_delegation),
    uptime_percentage: validator.uptime,
    website: validator.description.website,
    consensus_pubkey: validator.slot_pub_keys[0],
    details: validator.description.details,
    moniker: validator.description.name,

    update_height: validator.commission.update_height,
    creation_height: validator.creation_height,

    avg_voting_power: validator.avg_voting_power,
    total_effective_stake: validator.total_effective_stake,

    active: validator.active,
    self_stake: validator.self_stake,
    total_stake: validator.total_stake,

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
    tokens: "5706991464569",
    unbonding_height: 0,
    keybaseId: "DCB176E79AE7D51F",
    lastUpdated: "2019-08-15T16:03:35.144214+00:00",
    profileUrl: "https://keybase.io/iqlusion",
    id: "16a9a8ae-1568-42a5-b4a6-59735c655dca",
    delegator_shares: "5706991464569.000000000000000000"
  }
}
