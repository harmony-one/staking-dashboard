<template>
  <SessionFrame>
    <div class="session-container">
      <h2 class="session-title">Use Harmony-One Wallet Browser Extension</h2>
      <div v-if="!onewallet.enabled" class="session-main">
        <p>
          Looks like you don't have the Harmony-One Wallet browser extension
          installed yet. Head over to the
          <a
            href="harmony-one wallet chrome store link"
            target="_blank"
            rel="noopener norefferer"
            >Harmony-One Wallet Chrome Extension</a
          >
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
import { logInWithOneWallet } from "../../scripts/onewallet-utils"
import { openOneWalletPopup } from "../../ActionModal/utils/openOneWalletPopup"
export default {
  name: `session-onewallet`,
  components: {
    SessionFrame,
    TmBtn
  },
  data: () => ({}),
  computed: {
    ...mapState([`session`, `onewallet`])
  },
  methods: {
    async signIn() {
      openOneWalletPopup(this.session.extensionId, 400, 580)
      const { address } = await logInWithOneWallet()
      if (address) {
        this.$store.dispatch(`signIn`, {
          sessionType: `onewallet`,
          address
        })
        this.$store.dispatch("setOneWalletAccount", address)
        this.$router.push(`/`)
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
