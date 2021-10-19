<template>
  <SessionFrame>
    <div class="session-container">
      <h2 class="session-title">Use WalletConnect</h2>
      <!-- WindowCheck
      <div v-if="!isWalletConnect" class="session-main">
        <p>
          It looks like you don't have a compatible wallet with Walletconnect,
          check the compatible wallets below and download one.
          <a
            href="https://walletconnect.com/registry/wallets"
            target="_blank"
            rel="noopener norefferer"
            >WalletConnect Wallets</a
          >
        </p>
      </div>
      -->
      <div v-if="!isConnect" class="session-main">
        <TmBtn value="Sign In" @click.native="connect()" />
      </div>
      <div v-if="isConnect" class="session-main">
        <TmBtn value="Disconect" @click.native="disconnect()" />
      </div>
    </div>
  </SessionFrame>
</template>

<script>
import SessionFrame from "common/SessionFrame"
import TmBtn from "common/TmBtn"
import { mapState } from "vuex"

import Web3 from "web3"
import WalletConnectProvider from "@walletconnect/web3-provider"

const provider = new WalletConnectProvider({
  rpc: {
    1666600000: "https://api.harmony.one",
    1666600001: "https://s1.api.harmony.one",
    1666600002: "https://s2.api.harmony.one",
    1666600003: "https://s3.api.harmony.one",
    1666700000: "https://api.s0.b.hmny.io",
    1666700001: "https://api.s1.b.hmny.io",
    1666700002: "https://api.s2.b.hmny.io",
    1666700003: "https://api.s3.b.hmny.io"
  },
  bridge: "https://bridge.walletconnect.org",
  qrcodeModalOptions: {
    mobileLinks: ["metamask", "trust"],
  },
})

const web3 = new Web3(provider)

export default {
  name: `session-walletconnect`,
  components: {
    SessionFrame,
    TmBtn,
  },
  data: () => ({
    isWalletConnect: false,
    isConnect: false
  }),
  mounted() {
    setInterval(() => {
      this.isConnect = localStorage.getItem("walletconnect") === null ? false : true
      this.isWalletConnect = window.walletconnect && window.walletconnect.isWalletConnect
    }, 1000)
  },
  methods: {
    async connect() {
      provider.enable()
      const accounts = web3.eth.getAccounts()
      console.log(accounts[0]);
      window.walletconnect.getAccount().then((accounts) => {
        this.$store.dispatch(`signIn`, {
          sessionType: `walletconnect`,
          address: accounts[0],
        })
        this.$router.push(`/`)
      })
    },
    async disconnect() {
      provider.disconnect()
      alert("disconnected")
    },
    async signIn(address) {
      window.walletconnect.getAccount().then((account) => {
        this.$store.dispatch(`signIn`, {
          sessionType: `walletconnect`,
          address: account.address,
        })
        this.$router.push(`/`)
      })
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
