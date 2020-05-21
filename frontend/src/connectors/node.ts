import Staking from "@/staking-client/Staking"
import Legacy from "@/staking-client/Legacy"

export type TNode = { tendermint: any, get: Legacy, staking: Staking };

export default function Connector(apiUrl: string): TNode {
  const stakingClient = new Staking();
  const legacyClient = new Legacy(apiUrl);

  return Object.assign({
    staking: stakingClient,
    get: legacyClient,
    tendermint: {},
  });
}
