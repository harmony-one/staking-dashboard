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
import SessionFrame from "common/SessionFrame"
import TmBtn from "common/TmBtn"
import { mapState } from "vuex"
import {
  web3WalletConnect,
  getWalletAccount,
  walletConnectDisconnet
} from "../../scripts/walletconnect-utils"

export default {
  name: `session-walletconnect`,
  components: {
    SessionFrame,
    TmBtn
  },
  data: () => ({
    isConnect: false,
    address: null,
  }),
  mounted() {
    setInterval(() => {
      this.isConnect = !localStorage.getItem("walletconnect") ? false : true
    }, 1000)
  },
  methods: {
    async disconnect() {
      await walletConnectDisconnet()
    },
    async signIn(address) {
      try {
        this.$store.dispatch(`signIn`, {
          sessionType: `walletconnect`,
          address: await getWalletAccount(),
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
