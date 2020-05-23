import Legacy from "@/staking-client/Legacy"

export type TNode = { get: Legacy }

export default function Connector(apiUrl: string): TNode {
  const legacyClient = new Legacy(apiUrl)

  return Object.assign({
    get: legacyClient
  })
}
