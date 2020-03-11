const BigNumber = require('bignumber.js')

const isNotEmpty = obj => (obj ? !!Object.keys(obj).length : false)

const bodyParams = (method, params) => `{
      "jsonrpc": "2.0",
      "method": "${method}",
      "params": ["${params}"],
      "id": 1
    }`

const bodyParams2 = (method, params) => `{
      "jsonrpc": "2.0",
      "method": "${method}",
      "params": [${params}],
      "id": 1
    }`

const ones = (number = 0) => {
  return BigNumber(number)
    .div(1e18)
    .toNumber()
}

const changePercentage = (current, prev) => {
  // ( current - prev ) / current * 100.0

  const diff = BigNumber(current).minus(prev).toNumber()
  const prc = BigNumber(current).times(100.0).toNumber()

  return BigNumber(diff).div(prc).toNumber()
}

module.exports = {
  isNotEmpty,
  bodyParams,
  bodyParams2,
  changePercentage,
  ones
}
