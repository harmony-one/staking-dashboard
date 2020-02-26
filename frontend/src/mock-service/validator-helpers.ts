import * as crypto from "@harmony-js/crypto"

const blockchainValidator = {
  active: true,
  index: 1,
  self_stake: 10000000000000000000,
  total_stake: 10000000000000000000,
  signed_blocks: 50,
  blocks_should_sign: 100,
  voting_power: 100,
  total_one_staked: 4,
  "one-address": "one1pdv9lrdwl0rg5vglh4xtyrv3wjk3wsqket7zxy",
  "bls-public-keys": [
    "65f55eb3052f9e9f632b2923be594ba77c55543f5c58ee1454b9cfd658d25e06373b0f7d42a19c84768139ea294f6204"
  ],
  "min-self-delegation": 2000000000000000000,
  "max-total-delegation": 3106511852580897000,
  address: "one16ugr8apt45js6yfuyknet433fuylf6kkuwfq24",
  commission: {
    rate: "0.150000000000000000",
    "max-rate": "0.900000000000000000",
    "max-change-rate": "0.050000000000000000"
  },
  description: {
    name: "Ganesh",
    identity: "ganesh",
    website: "ganesha@harmony.one",
    security_contact: "Leo",
    details: "This is Ganesha@harmony.one"
  },
  "creation-height": 394472,

  uptime: 'didnt response!',
  total_effective_stake: 'didnt response!',
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
  voting_power: 0.0315,
  max_change_rate: "0.010000000000000000",
  website: "iqlusion.io",
  min_self_delegation: "100000000000",
  tokens: "5706991464569",
  unbonding_height: 0,
  details: "",
  keybaseId: "DCB176E79AE7D51F",
  lastUpdated: "2019-08-15T16:03:35.144214+00:00",
  profileUrl: "https://keybase.io/iqlusion",
  id: "16a9a8ae-1568-42a5-b4a6-59735c655dca",
  delegator_shares: "5706991464569.000000000000000000",
  creation_height: 212,
  total_effective_stake: "171000000000000000000.000000000000000000",
  active: false,
  max_total_delegation: 11,
  self_stake: 11,
  total_stake: 0,
  total_one_staked: 0,
  address: "one16ugr8apt45js6yfuyknet433fuylf6kkuwfq24",
}

export type TBlockchainValidator = typeof blockchainValidator
export type TFrontendValidator = typeof frontendValidator

export const remapValidator = (
  validator: TBlockchainValidator,
  convertAddress = false
): TFrontendValidator => {
  return {
    ...validator,
    userName: validator.description.name,

    operator_address: convertAddress
      ? crypto.getAddress(validator["one-address"]).bech32
      : validator["one-address"],

    rate: validator.commission.rate,
    max_rate: validator.commission["max-rate"],
    max_change_rate: validator.commission["max-change-rate"],
    max_total_delegation: validator["max-total-delegation"],
    min_self_delegation: String(validator["min-self-delegation"]),
    website: validator.description.website,
    // consensus_pubkey: validator.slot_pub_keys[0],
    details: validator.description.details,
    moniker: validator.description.name,

    creation_height: validator["creation-height"],

    uptime_percentage: validator.uptime,
    voting_power: validator.voting_power,
    total_effective_stake: validator.total_effective_stake,

    active: validator.active,
    self_stake: validator.self_stake,
    total_stake: validator.total_stake,
    total_one_staked: validator.total_one_staked,
    address: validator.address,

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
    tokens: "5706991464569",
    unbonding_height: 0,
    keybaseId: "DCB176E79AE7D51F",
    lastUpdated: "2019-08-15T16:03:35.144214+00:00",
    profileUrl: "https://keybase.io/iqlusion",
    id: "16a9a8ae-1568-42a5-b4a6-59735c655dca",
    delegator_shares: "5706991464569.000000000000000000"
  }
}
