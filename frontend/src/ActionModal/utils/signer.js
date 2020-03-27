import { signWithExtension } from "src/scripts/extension-utils"

export async function getSigner(config, submitType = "", { address }) {
  return async signMessage => {
    return await signWithExtension(signMessage, address)
  }
}
