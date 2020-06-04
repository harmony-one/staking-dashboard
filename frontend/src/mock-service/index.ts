import axios from "axios"
import BigNumber from "bignumber.js"

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

let last_query = ""
let last_time = Date.now()
let cache = {}

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

  const query = queryString.stringify(params)

  if (networkId + query === last_query && Date.now() - last_time < 1000 * 60) {
    return Promise.resolve(cache)
  }

  last_time = Date.now()
  last_query = networkId + query

  return axios
    .get(`${API_URL}/networks/${networkId}/validators_with_page?${query}`)
    .then(rez => {
      const validators: any[] = rez.data.validators.map((v: any) =>
        remapValidator(v, false)
      )

      cache = { ...rez.data, validators }

      return cache
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

const bodyParams = (method: string, params: string[]) => `{
      "jsonrpc": "2.0",
      "method": "${method}",
      "params": ${JSON.stringify(params)},
      "id": 1
    }`

export const getBalance = async (address: string, rpc_url: string) => {
  const res = await axios({
    method: "post",
    url: rpc_url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    data: bodyParams("hmy_getBalance", [address, "latest"])
  })

  let coins = 0

  try {
    coins = new BigNumber(Number(res.data.result)).div(1e12).toNumber()
  } catch (e) {
    console.error(e)
  }

  return coins
}
