import axios from 'axios'

const API_URL = process.env.MOCK_API_URL

export function fetchProposals() {
  return axios.get(`${API_URL}/proposals`).then(rez => rez.data)
}
export function fetchNetworks() {
  return axios.get(`${API_URL}/networks`).then(rez => rez.data)
}

export function fetchValidators() {
  return axios.get(`${API_URL}/validators`).then(rez => rez.data.validators)
}

export function fetchValidatorByAddress(address) {
  return axios.get(`${API_URL}/validators/${address}`).then(rez => rez.data)
}

export function fetchAccount(address) {
  console.log('Fetching account data for ', address)
  return axios.get(`${API_URL}/account`).then(rez => rez.data)
  // return Promise.resolve({
  //   type: 'auth/Account',
  //   value: {
  //     address: 'one18alpumnzqarg749ahwp627t0wyjs428u4a7uny',
  //     coins: [{ denom: 'one', amount: '7550000' }],
  //     public_key: {
  //       type: 'tendermint/PubKeySecp256k1',
  //       value: 'A3Au1T7dOrrui03yqIVtDGev+iWlDTwZ7dpx9M4LePk9'
  //     },
  //     account_number: '22147',
  //     sequence: '2'
  //   }
  // })
}

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
export function mockTransfer(data) {
  console.log('Data to send -> ', data)
  // return axios.get(`${API_URL}/accounts/${data.from_address}/transfers`).then(rez => rez.data)
  return { gas_estimate: '24341' }
}
