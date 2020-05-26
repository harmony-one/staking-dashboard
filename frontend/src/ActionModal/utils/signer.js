import { signWithExtension } from "src/scripts/extension-utils"
import { signWithOneWallet } from "src/scripts/onewallet-utils"

export async function getExtensionSigner(config, submitType = "", { address }) {
  return async signMessage => {
    return await signWithExtension(signMessage, address)
  }
}
export async function getOneWalletSigner(config, submitType = "", { address }) {
  return async signMessage => {
    return await signWithOneWallet(signMessage, address)
  }
}

