const isNotEmpty = (obj) => obj ? !!Object.keys(obj).length : false

const bodyParams = (method, params) => `{
      "jsonrpc": "2.0",
      "method": "${method}",
      "params": ["${params}"],
      "id": 1
    }`

module.exports = {
  isNotEmpty,
  bodyParams
}
