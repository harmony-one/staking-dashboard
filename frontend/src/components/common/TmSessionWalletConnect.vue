<template>
  <SessionFrame>
    <div class="session-container">
      <h2 class="session-title">Use WalletConnect</h2>
      <div v-if="!isConnect" class="session-main">
        <TmBtn value="Sign In" @click.native="signIn()" />
      </div>
      <div v-if="isConnect" class="session-main">
        <TmBtn value="Disconect" @click.native="disconnect()" />
      </div>
    </div>
  </SessionFrame>
</template>

<script>
import { getAddress } from '../../utils'
import SessionFrame from "common/SessionFrame"
import TmBtn from "common/TmBtn"
import { mapState } from "vuex"

import Web3 from "web3"
import WalletConnectProvider from "@walletconnect/web3-provider"

const provider = new WalletConnectProvider({
  rpc: {
    1: "https://api.harmony.one", // Mainnet
    2: "https://api.s0.b.hmny.io", // TestNet
  },
  bridge: "https://bridge.walletconnect.org",
  qrcodeModalOptions: {
    mobileLinks: ["metamask", "trust"],
  },
})

const web3 = new Web3(provider)

export const getWalletAccount = async () => {
  let accounts = null
  let addressOne = null
  if (web3) {
    try {
      await provider.enable() 
      accounts = await web3.eth.getAccounts() 
      addressOne = await getAddress(accounts[0]).bech32
      return addressOne
    } catch (e) {
      console.log(e)
    }
  }
}

export default {
  name: `session-walletconnect`,
  components: {
    SessionFrame,
    TmBtn
  },
  data: () => ({
    isConnect: false,
    address: null
  }),
  mounted() {
    setInterval(() => {
      this.isConnect = !localStorage.getItem("walletconnect") ? false : true
    }, 1000)
  },
  methods: {
    async disconnect() {
      await provider.disconnect()
    },
    async signIn(address) {
      try {
      this.$store.dispatch(`signIn`, {
        sessionType: `walletconnect`,
        address: await getWalletAccount()
      })
      this.$router.push(`/`)
      } catch (e) {
        console.log(e)
      }
      
    },
  },
}
</script>
<style scoped>
.session-container {
  display: flex;
  flex-direction: column;
}
.session-title,
.extension-message {
  padding: 0 1rem;
  margin: 0;
}
</style>
