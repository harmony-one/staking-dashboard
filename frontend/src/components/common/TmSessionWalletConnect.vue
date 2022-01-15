<template>
  <SessionFrame>
    <div class="session-container">
      <h2 class="session-title">Use WalletConnect Wallet Application</h2>
      <div v-if="!isWalletConnect" class="session-main">
        <TmBtn value="Sign In" @click.native="signIn()" />
      </div>
    </div>
  </SessionFrame>
</template>

<script>
import SessionFrame from "common/SessionFrame"
import TmBtn from "common/TmBtn"
import Web3 from "web3"
import b32 from "scripts/b32"
import { getWalletConnectProvider } from "scripts/walletconnect-utils"
export default {
  name: `session-walletconnect`,
  components: {
    SessionFrame,
    TmBtn
  },
  data: () => ({
    isWalletConnect: false
  }),
  mounted() {
    setInterval(() => {
      this.isWalletConnect = !!localStorage.getItem("walletconnect")
    }, 1000)
  },
  methods: {
    async signIn() {
      const wcProvider = await getWalletConnectProvider()
      await wcProvider.enable()
      const web3 = new Web3(wcProvider)
      web3.eth.getAccounts().then(accounts => {
        const address = accounts[0].replace("0x", "")
        const arr = new Uint8Array(
          address.match(/[\da-f]{2}/gi).map(function(h) {
            return parseInt(h, 16)
          })
        )
        const bech32Address = b32.encode(arr, "one")

        this.$store.dispatch(`signIn`, {
          sessionType: `walletconnect`,
          address: bech32Address
        })
        this.$router.push(`/`)
      })
    }
  }
}
</script>
<style scoped>
.session-title,
.extension-message {
  padding: 0 1rem;
  margin: 0;
}
</style>
