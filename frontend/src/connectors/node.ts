import Tendermint from "./tendermint"
import Staking from "@/staking-client/Staking"
import Legacy from "@/staking-client/Legacy"

export type TNode = { tendermint: Tendermint, get: Legacy, staking: Staking };

export default function Connector(apiUrl: string): TNode {
  const stakingClient = new Staking();
  const legacyClient = new Legacy(apiUrl);

  const tendermint = new Tendermint(apiUrl);

  return Object.assign({
    staking: stakingClient,
    get: legacyClient,
    tendermint,
  });
}
