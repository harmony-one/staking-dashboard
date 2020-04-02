<template>
  <SessionFrame>
    <div class="session-container">
      <h2 class="session-title">Use Math Wallet Browser Extension</h2>
      <div v-if="!isMathWallet" class="session-main">
        <p>
          Looks like you don't have the Math Wallet browser extension installed yet.
          Head over to the
          <a
            href="https://chrome.google.com/webstore/detail/math-wallet/afbcbjpbpfadlkmhmclhkeeodmamcflc"
            target="_blank"
            rel="noopener norefferer"
          >Math Wallet Chrome Extension</a>
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
  name: `session-mathwallet`,
  components: {
    SessionFrame,
    TmBtn
  },
  data: () => ({
    isMathWallet: false
  }),
  mounted() {
    setInterval(() => {
      this.isMathWallet = window.harmony && window.harmony.isMathWallet
    }, 1000)
  },
  methods: {
    async signIn(address) {
      window.harmony.getAccount().then(account => {
        this.$store.dispatch(`signIn`, {
          sessionType: `mathwallet`,
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
