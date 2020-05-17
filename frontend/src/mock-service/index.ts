import axios from "axios"
import {
  remapValidator,
  TBlockchainValidator
} from "@/mock-service/validator-helpers"

const queryString = require("query-string")

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

    return validators.map(v => remapValidator(v, false))
  })
}

export function fetchValidatorsWithParams(
  networkId: string,
  params: {
    page: number
    size: number
    active: boolean
    search?: string
    sortProperty?: string
    sortOrder?: string
  }
) {
  if (!networkId) {
    return []
  }

  return axios
    .get(
      `${API_URL}/networks/${networkId}/validators_with_page?${queryString.stringify(
        params
      )}`
    )
    .then(rez => {
      const validators: any[] = rez.data.validators.map((v: any) =>
        remapValidator(v, false)
      )

      return { ...rez.data, validators }
    })
    .catch(() => {
      return { validators: [], totalActive: 0, total: 0 }
    })
}

export function fetchValidatorByAddress(networkId: string, address: string) {
  return axios
    .get(`${API_URL}/networks/${networkId}/validators/${address}`)
    .then(rez => remapValidator(rez.data, true))
}

export function fetchValidatorHistory(networkId: string, address: string) {
  return axios
    .get(`${API_URL}/networks/${networkId}/validator_history/${address}`)
    .then(rez =>
      rez.data.map((v: TBlockchainValidator) => remapValidator(v, false))
    )
}

export function fetchDelegationsByAddress(networkId: string, address: string) {
  return axios
    .get(`${API_URL}/networks/${networkId}/delegations/${address}`)
    .then(rez => rez.data)
    .catch(() => [])
}

export function fetchNetworkInfo(networkId: string) {
  return axios
    .get(`${API_URL}/networks/${networkId}/staking_network_info`)
    .then(rez => rez.data)
}

export function mockTransfer(data: any) {
  console.log("Data to send -> ", data)
  // return axios.get(`${API_URL}/accounts/${data.from_address}/transfers`).then(rez => rez.data)
  return { gas_estimate: "21000" }
}
