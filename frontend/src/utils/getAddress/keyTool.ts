import { fromBech32 } from "./bech32";
import * as bytes from './bytes'
import * as errors from "./errors";
import { keccak256 } from "./keccak256";
import { isBech32Address } from "./validators";

/**
 * @function toChecksumAddress
 * @param  {string} address - raw address
 * @return {string} checksumed address
 */
export const toChecksumAddress = (address: string): string => {
  if (typeof address === "string" && isBech32Address(address)) {
    address = fromBech32(address);
  }
  if (typeof address !== "string" || !address.match(/^0x[0-9A-Fa-f]{40}$/)) {
    errors.throwError("invalid address", errors.INVALID_ARGUMENT, {
      arg: "address",
      value: address,
    });
  }

  address = address.toLowerCase();

  const chars = address.substring(2).split("");

  let hashed = new Uint8Array(40);
  for (let i = 0; i < 40; i++) {
    hashed[i] = chars[i].charCodeAt(0);
  }
  hashed = bytes.arrayify(keccak256(hashed)) || hashed;

  for (let i = 0; i < 40; i += 2) {
    if (hashed[i >> 1] >> 4 >= 8) {
      chars[i] = chars[i].toUpperCase();
    }
    if ((hashed[i >> 1] & 0x0f) >= 8) {
      chars[i + 1] = chars[i + 1].toUpperCase();
    }
  }

  return "0x" + chars.join("");
};
