import axios from "axios"
import {
  remapValidator,
  TBlockchainValidator
} from "@/mock-service/validator-helpers"

const API_URL = process.env.MOCK_API_URL

export function fetchProposals() {
  return axios.get(`${API_URL}/proposals`).then(rez => rez.data)
}
export function fetchNetworks() {
  return axios.get(`${API_URL}/networks`).then(rez => rez.data)
}

export function fetchValidators(networkId: string) {
  if (!networkId) {
    return []
  }

  return axios.get(`${API_URL}/networks/${networkId}/validators`).then(rez => {
    const validators: TBlockchainValidator[] = rez.data.validators

    return validators
      .filter(v => v.description)
      .map(v => remapValidator(v, false))
  })
}

export function fetchValidatorByAddress(networkId: string, address: string) {
  return axios
    .get(`${API_URL}/networks/${networkId}/validators/${address}`)
    .then(rez => remapValidator(rez.data, true))
}

export function fetchValidatorHistory(networkId: string, address: string) {
  return axios.get(
    `${API_URL}/networks/${networkId}/validator_history/${address}`
  ).then(rez => rez.data)
}

export function fetchDelegationsByAddress(networkId: string, address: string) {
  return axios
    .get(`${API_URL}/networks/${networkId}/delegations/${address}`)
    .then(rez => rez.data)
}

export function fetchNetworkInfo(networkId: string) {
  return axios
    .get(`${API_URL}/networks/${networkId}/staking_network_info`)
    .then(rez => rez.data)
}

// export function fetchAccount(address) {
//   console.log("Fetching account data for ", address)
//   return axios.get(`${API_URL}/account`).then(rez => rez.data)
// }

// This request is happening before we got to 2nd step (Fee) while making "Send" action
// Origin endpoint - POST https://lcd.nylira.net/bank/accounts/cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5/transfers

// Send data example
// {
//   base_req: {
//     sequence: "0",
//     from: "cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5",
//     account_number: "22147",
//     chain_id: "cosmoshub-2",
//     simulate: true,
//     memo: "(Sent via Lunie)"
//   },
//   from_address: "cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5",
//   to_address: "cosmos1gr2nqfwan6y9y89clr6cr8hnjmdxagm5rpdsgu",
//   amount: [{ amount: "100000", denom: "uatom" }]
// };

// Endpoint returns estimated fee?
// Example
// { gas_estimate: "24341" }
export function mockTransfer(data: any) {
  console.log("Data to send -> ", data)
  // return axios.get(`${API_URL}/accounts/${data.from_address}/transfers`).then(rez => rez.data)
  return { gas_estimate: "24341" }
}
