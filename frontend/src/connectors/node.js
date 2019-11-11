"use strict"

//import Cosmos from "@lunie/cosmos-api"

import Staking from 'staking-client';

import Tendermint from "./tendermint"

export default function Connector(stargateUrl) {

  const stakingClient = new Staking(stargateUrl, "no_address")

  const tendermint = Tendermint(stakingClient)

  Object.assign(stakingClient, {
    tendermint
  })

  return stakingClient
}
