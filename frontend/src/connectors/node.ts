import Tendermint from "./tendermint"
import Staking from "@/staking-client"

export type TNode = Staking & { tendermint: Tendermint };

export default function Connector(stargateUrl: string): TNode {
  const stakingClient = new Staking(stargateUrl, "no_address");

  const tendermint = new Tendermint(stargateUrl);

  return Object.assign(stakingClient, { tendermint });
}
