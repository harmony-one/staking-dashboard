import Vue from "vue"
import { percent, isNotAvailable } from "../scripts/num"

export const notAvailableFormatter = value => {
  return isNotAvailable(value) ? "N/A" : value
}

Vue.filter("notAvailable", notAvailableFormatter)

export const percentOrPending = function(value, totalValue, pending) {
  return pending ? `--` : percent(totalValue === 0 ? 0 : value / totalValue)
}

export const formatBech32 = (
  address,
  longForm = false,
  length = 4,
  start = 4
) => {
  if (!address) {
    return `Address Not Found`
  } else if (address.indexOf(`1`) === -1) {
    return `Not A Valid Bech32 Address`
  } else if (longForm) {
    return address
  } else {
    return (
      address.split(`1`)[0] +
      address.slice(3, 3 + start) +
      `…` +
      address.slice(-1 * length)
    )
  }
}
export const formatEVM = (
  EVMaddress,
  longForm = false,
  length = 4,
  start = 4) => {
  if (!EVMaddress) {
    return `Address Not Found`
  } else if (!/^0x[a-fA-F0-9]{40}$/.test(EVMaddress)) {
    return `Not A Valid EVM Address`
  } else if (longForm) {
    return EVMaddress
  } else {
    return (
      EVMaddress.slice(0, start + 2) +
      `…` +
      EVMaddress.slice(-1 * length)
    )
  }
}

export const resolveValidatorName = (address, validators) => {
  if (validators[address]) {
    return validators[address].moniker
  }
  return formatBech32(address)
}

const plural = (value, unit) => value + unit + (value === 1 ? "" : "s")

export const timeLeft = minutes => {
  const leftMinAll = isNaN(minutes) ? 0 : minutes

  const leftHours = Math.floor(leftMinAll / 60)
  const leftMin = Math.floor(leftMinAll % 60)

  if (leftMinAll < 1) {
    return "less then 1 minute"
  }

  if (!leftHours) {
    return plural(leftMin, " minute")
  }

  return plural(leftHours, " hour") + " " + plural(leftMin, " minute")
}
