<template>
  <SessionFrame title="Use Existing Address" image="account">
    <div id="session-existing">
      <h2 class="session-title">
        Use an existing address
      </h2>

      <div class="session-list">
        <LiSession
          v-if="!isIframe"
          id="explore-with-address"
          icon="language"
          title="Explore with any address"
          route="explore"
        />
        <LiSession
          v-if="!isMobileApp && !isIframe"
          id="use-ledger-nano"
          icon="vpn_key"
          title="Use Ledger"
          route="ledger"
        />

        <LiSession
          v-if="!isMobileApp && !isIframe"
          id="use-metamask"
          icon="extension"
          title="Use Metamask Wallet"
          route="metamask"
        />

        <LiSession
          v-if="!isMobileApp"
          id="use-multisig"
          icon="extension"
          title="Use Harmony Multisig"
          route="multisig"
        />

        <LiSession
          v-if="!isMobileApp && !isIframe"
          id="use-onewallet"
          icon="extension"
          title="Use Harmony One Wallet"
          route="onewallet"
        />

        <LiSession
          v-if="!isMobileApp && !isIframe"
          id="use-mathwallet"
          icon="laptop"
          title="Use Math Wallet"
          route="mathwallet"
        />

        <LiSession
          v-if="session.insecureMode && !isIframe"
          id="recover-with-backup"
          icon="settings_backup_restore"
          title="Recover with backup code"
          route="recover"
        />
        <LiSession
          v-if="accountExists && session.insecureMode && !isIframe"
          id="sign-in-with-account"
          icon="lock"
          title="Sign in with account"
          route="login"
        />
        <LiSession
          v-if="!isMobileApp && !isIframe"
          id="use-extension"
          icon="laptop"
          title="Use Harmony Browser Extension (Deprecated)"
          route="extension"
        >
        </LiSession>
      </div>
      <router-link to="create" style="padding-left: 16px;">
        Want to create a new address?
      </router-link>
    </div>
  </SessionFrame>
</template>

<script>
import config from "src/config"
import { mapState } from "vuex"
import LiSession from "common/TmLiSession"
import SessionFrame from "common/SessionFrame"

export default {
  name: `session-existing`,
  components: {
    SessionFrame,
    LiSession
  },
  data: () => ({
    isMobileApp: config.mobileApp,
    isIframe: false,
  }),
  computed: {
    ...mapState([`session`, `keystore`, `extension`]),
    accountExists() {
      return this.keystore && this.keystore.accounts.length > 0
    }
  },
  mounted() {
    try {
      this.isIframe = window.self !== window.top;
    } catch (e) {
      this.isIframe = true;
    }
  },
  created() {
    this.$store.dispatch("loadAccounts")
  }
}
</script>
