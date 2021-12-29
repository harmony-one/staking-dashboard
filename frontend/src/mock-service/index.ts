import axios from "axios"
import BigNumber from "bignumber.js"

import {
  remapValidator,
  TBlockchainValidator
} from "@/mock-service/validator-helpers"

const queryString = require("query-string")

const urls = process.env.MOCK_API_URL
  ? [process.env.MOCK_API_URL]
  : [
      "https://api.stake.hmny.io",
      "https://hmny-t.co",
      "https://staking-us-west.hmny.io",
      "https://staking-explorer-test.appspot.com"
    ]

let urlIndex = 0
let API_URL = urls[urlIndex]

const getLiveness = (): Promise<any> =>
  axios
    .get(`${API_URL}/liveness`, { timeout: 3000 })
    .then((res: any) => {
      return res.data === true ? Promise.resolve() : Promise.reject()
    })
    .catch(e => {
      console.error(e)

      if (urlIndex >= urls.length - 1) {
        urlIndex = 0
      } else {
        urlIndex++
      }

      API_URL = urls[urlIndex]

      return getLiveness()
    })

getLiveness()

export function fetchProposals() {
  return axios.get(`${API_URL}/proposals`).then(rez => rez.data)
}
export function fetchNetworks() {
  return axios.get(`${API_URL}/networks`).then(rez => rez.data)
}

let validatorsCache: any = null
let lastNetwork = ""
let last_time_v = Date.now()

export function fetchValidators(networkId: string) {
  if (!networkId) {
    return []
  }

  if (
    !!validatorsCache &&
    Date.now() - last_time_v < 1000 * 60 &&
    lastNetwork === networkId
  ) {
    return Promise.resolve(validatorsCache)
  }

  lastNetwork = networkId
  last_time_v = Date.now()

  return axios.get(`${API_URL}/networks/${networkId}/validators`).then(rez => {
    const validators: any[] = rez.data.validators.map((v: any) =>
      remapValidator(v, false)
    )

    cache = { ...rez.data, validators }

    validatorsCache = cache

    return cache
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

export function fetchValidatorAvatarSrcByAddress(networkId: string, address: string) {
  return `${API_URL}/networks/${networkId}/validators/${address}/avatar`
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

export function fetchNetworkInfoLite(networkId: string) {
  return axios
    .get(`${API_URL}/networks/${networkId}/network_info_lite`)
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
