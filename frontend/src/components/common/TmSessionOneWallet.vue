<template>
  <SessionFrame>
    <div class="session-container">
      <h2 class="session-title">Use Harmony One Wallet Extension</h2>
      <div v-if="!isOneWallet" class="session-main">
        <p>
          Looks like you don't have the Harmony One Wallet extension installed
          yet. Head over to the
          <a
            href="https://chrome.google.com/webstore/detail/harmony-one-wallet/fnnegphlobjdpkhecapkijjdkgcjhkib"
            target="_blank"
            rel="noopener norefferer"
          >Harmony One Wallet</a>
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
import TmBtn from "common/TmBtn"
import { mapState } from "vuex"
export default {
  name: `session-onewallet`,
  components: {
    SessionFrame,
    TmBtn
  },
  data: () => ({
    isOneWallet: false
  }),
  mounted() {
    setInterval(() => {
      this.isOneWallet = window.onewallet && window.onewallet.isOneWallet
    }, 1000)
  },
  methods: {
    async signIn(address) {
      window.onewallet.getAccount().then(account => {
        this.$store.dispatch(`signIn`, {
          sessionType: `onewallet`,
          address: account.address
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
