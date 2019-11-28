import Tendermint from "./tendermint"
import Staking from "@/staking-client"

export type TNode = { tendermint: Tendermint, get: Staking };

export default function Connector(apiUrl: string): TNode {
  const stakingClient = new Staking(apiUrl);

  const tendermint = new Tendermint(apiUrl);

  return Object.assign({
    get: stakingClient,
    tendermint,
  });
}
