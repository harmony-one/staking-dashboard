import { IAccount } from "@/staking-client/interfaces"
import { Harmony } from "@harmony-js/core"
import { ChainType } from "@harmony-js/utils"
// import * as crypto from "@harmony-js/crypto"

export default class Staking {
  harmony?: Harmony

  initHarmony = (rpc_url: string, chainId: string) => {
    // 1. initialize the Harmony instance
    this.harmony = new Harmony(
      // rpc url
      rpc_url,
      {
        chainType: ChainType.Harmony,
        chainId
      } as any // HarmonyConfig
    )
  }
  // coins
  account = (address: string): Promise<IAccount> => {
    const emptyAccount: IAccount = {
      coins: [],
      sequence: `0`,
      account_number: `0`,
      address
    }

    if (!this.harmony) {
      console.error(`Harmony client is not initialize`)

      return Promise.resolve(emptyAccount)
    }

    return this.harmony.blockchain
      .getBalance({ address })
      .then((res: any) => {
        if (this.harmony) {
          const amount = new this.harmony.utils.Unit(res.result)
            .asWei()
            .toSzabo()

          emptyAccount.coins.push({ denom: "one", amount })
        }

        return emptyAccount
      })
      .catch((err: any) => {
        console.log(err)

        return emptyAccount
      })
  }
}
