import * as crypto from "@harmony-js/crypto"

const blockchainValidator = {
  self_stake: 1.11111e23,
  total_stake: 1.11111e23,
  voting_power: 1,
  signed_blocks: 50,
  blocks_should_sign: 100,
  uctDate: "2020-02-28T11:11:57.250Z",
  index: 18320,
  address: "one1337twjy8nfcwxzjqrc6lgqxxhs0zeult242ttw",
  "bls-public-keys": [
    "426739d753d36fbe34f8782c01faf0c224e6fbb764fb08339010195b8e657893b8ae4f9bcdad451060518e07a87b418e"
  ],
  "last-epoch-in-committee": 9,
  "min-self-delegation": 1e23,
  "max-total-delegation": 1e24,
  active: false,
  rate: "0.100000000000000000",
  "max-rate": "0.750000000000000000",
  "max-change-rate": "0.155456293704318700",
  "update-height": 638,
  name: "BBQ",
  identity: "Harmony",
  website: "harmony.one",
  "security-contact": "Daniel-VDM",
  details: "Yo",
  "creation-height": 638,
  banned: false,
  delegations: [
    {
      "delegator-address": "one1337twjy8nfcwxzjqrc6lgqxxhs0zeult242ttw",
      amount: 1.11111e23,
      reward: 383989285550398050000,
      undelegations: []
    }
  ],
  availability: {
    "num-blocks-to-sign": 0,
    "num-blocks-signed": 0
  },
  active_nodes: 1,

  uptime_percentage: "0",
  reminder: 11,
  average_stake: 11,
}

const frontendValidator = {
  userName: "iqlusion",
  customized: false,
  moniker: "iqlusion",
  identity: "DCB176E79AE7D51F",
  operator_address: "onevaloper1grgelyng2v6v3t8z87wu3sxgt9m5s03xfytvz7",
  update_time: "2019-03-13T23:00:00Z",
  unbonding_time: "1970-01-01T00:00:00Z",
  rate: "0.100000000000000000",
  status: 2,
  uptime_percentage: "0.997",
  jailed: false,
  max_rate: "1.000000000000000000",
  tombstoned: false,
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
  address: "one16ugr8apt45js6yfuyknet433fuylf6kkuwfq24",
  reminder: 11,
  average_stake: 11,
  epoch: 11,
}

export type TBlockchainValidator = typeof blockchainValidator
export type TFrontendValidator = typeof frontendValidator

export const remapValidator = (
  validator: TBlockchainValidator,
  convertAddress = false
): TFrontendValidator => {
  return {
    ...validator,
    userName: validator.name,

    operator_address: convertAddress
      ? crypto.getAddress(validator["address"]).bech32
      : validator["address"],

    rate: validator.rate,
    max_rate: validator["max-rate"],
    max_change_rate: validator["max-change-rate"],
    max_total_delegation: validator["max-total-delegation"],
    min_self_delegation: String(validator["min-self-delegation"]),
    website: validator.website,
    // consensus_pubkey: validator.slot_pub_keys[0],
    details: validator.details,
    moniker: validator.name,

    average_stake: validator.average_stake,
    reminder: validator.reminder,

    creation_height: validator["creation-height"],

    uptime_percentage: validator.uptime_percentage,
    voting_power: validator.voting_power,
    total_effective_stake: "0",

    active: validator.active,
    self_stake: validator.self_stake,
    total_stake: validator.total_stake,
    address: validator.address,
    epoch: validator["last-epoch-in-committee"],

    customized: false,
    identity: "DCB176E79AE7D51F",
    update_time: "2019-03-13T23:00:00Z",
    unbonding_time: "1970-01-01T00:00:00Z",
    status: 2,
    jailed: false,
    tombstoned: false,
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
