import axios from "axios"

const API_URL = process.env.MOCK_API_URL

console.log("MOCK API URL -> ", API_URL)

export function fetchProposals() {
  return axios.get(`${API_URL}/proposals`).then(rez => rez.data)
}
export function fetchNetworks() {
  return axios.get(`${API_URL}/networks`).then(rez => rez.data)
}

export function fetchValidators() {
  return axios.get(`${API_URL}/validators`).then(rez => rez.data.validators)
}
