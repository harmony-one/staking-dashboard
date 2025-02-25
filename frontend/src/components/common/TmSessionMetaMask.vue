<template>
  <SessionFrame>
    <div class="session-container">
      <h2 class="session-title">Use Metamask Wallet Extension</h2>
      <div v-if="!isMetamaskExist" class="session-main">
        <p>
          Looks like you don't have the MetaMask extension installed yet. Head
          over to the
          <a
            href="https://metamask.io"
            target="_blank"
            rel="noopener norefferer"
          >
            MetaMask Wallet
          </a>
          to quickly install the extension.
        </p>
      </div>
      <div v-else class="session-main">
        <TmBtn value="Sign In" @click.native="signIn()" />
      </div>
    </div>
  </SessionFrame>
</template>

<script>
import SessionFrame from "common/SessionFrame"
import { toBech32 } from "@harmony-js/crypto"
import detectEthereumProvider from "@metamask/detect-provider"
import TmBtn from "common/TmBtn"
import { sessionType } from "src/ActionModal/components/ActionModal"

export default {
  name: `session-onewallet`,
  components: {
    SessionFrame,
    TmBtn
  },
  data: () => ({
    isMetamaskExist: false
  }),
  mounted() {
    setInterval(() => {
      detectEthereumProvider().then((provider) => {
        if (provider === window.ethereum) {
          this.isMetamaskExist = true
          this.provider = provider
        }
      })
    }, 1000)
  },
  methods: {
    async signIn() {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        })

        if (accounts.length === 0) {
          return
        }

        this.$store.dispatch("signIn", {
          sessionType: sessionType.METAMASK,
          address: toBech32(accounts[0]),
          evmAddress: accounts[0]
        })

        this.$router.push(`/`)
      } catch (ex) {
        console.error("### ex", ex)
      }
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
