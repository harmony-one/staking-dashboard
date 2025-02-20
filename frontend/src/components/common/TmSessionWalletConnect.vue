<template>
  <SessionFrame>
    <div class="session-container">
      <h2 class="session-title">Use Ledger with WalletConnect</h2>
      <div class="session-main">
        <p>Connect your Ledger device through Ledger Live using WalletConnect</p>
        <div v-if="error" class="error-message">{{ error }}</div>
        <TmBtn value="Connect Wallet" @click.native="signIn()" />
      </div>
    </div>
  </SessionFrame>
</template>

<script>
import SessionFrame from "common/SessionFrame"
import { sessionType } from "src/ActionModal/components/ActionModal"
import { initWalletConnect } from "scripts/walletconnect-utils"
import { toBech32 } from "@harmony-js/crypto"
import TmBtn from "common/TmBtn"

export default {
  name: 'session-walletconnect',
  components: {
    SessionFrame,
    TmBtn
  },
  data: () => ({
    modal: null,
    error: null
  }),
  mounted() {
    // TODO: Replace with actual project ID from cloud.reown.com
    this.modal = initWalletConnect('harmony-staking-dashboard')
  },
  methods: {
    async signIn() {
      try {
        this.error = null
        const accounts = await this.modal.getAccounts()
        if (accounts.length === 0) {
          this.error = "No accounts found. Please connect your wallet."
          return
        }

        this.$store.dispatch("signIn", {
          sessionType: sessionType.WALLETCONNECT,
          address: toBech32(accounts[0])
        })

        this.$router.push('/')
      } catch (ex) {
        console.error("WalletConnect error:", ex)
        this.error = ex.message || "Failed to connect wallet"
      }
    }
  }
}
</script>

<style scoped>
.session-title {
  padding: 0 1rem;
  margin: 0;
}

.session-main {
  padding: 1rem;
  text-align: center;
}

.error-message {
  color: red;
  margin: 1rem 0;
  font-size: 0.9rem;
}
</style>
