export const getNetworkID = param => {
  let networkID = "harmony"
  if (param === "mainnet") networkID = "harmony"
  else if (param === "testnet") networkID = "harmony-testnet"
  else if (param === "partnernet") networkID = "harmony-partnernet"
  else if (param === "openstakingnet") networkID = "harmony-open-staking"
  return networkID
}
export const getURLPath = network => {
  let urlPath = "mainnet"
  if (network === "harmony") urlPath = "mainnet"
  else if (network === "harmony-testnet") urlPath = "testnet"
  else if (network === "harmony-partnernet") urlPath = "partnernet"
  else if (network === "harmony-open-staking") urlPath = "openstakingnet"
  return urlPath
}
