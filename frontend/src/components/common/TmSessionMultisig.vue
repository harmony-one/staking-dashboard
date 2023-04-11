<template>
  <SessionFrame>
    <div class="flex-center">
      <div class="session-container">
        <h2 class="session-title">Use Harmony Multisig</h2>
        <br />
        <div class="session-main">
          <TmBtn value="Sign In" @click.native="signIn()" />
        </div>
      </div>
    </div>
  </SessionFrame>
</template>

<script>
import SessionFrame from "common/SessionFrame"
import { toBech32 } from "@harmony-js/crypto"
import TmBtn from "common/TmBtn"
import { sessionType } from "src/ActionModal/components/ActionModal"
import SafeAppsSDK from '@safe-global/safe-apps-sdk';

const opts = {
  allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/, /multisig.harmony.one$/],
  debug: true,
};

export default {
  name: `session-onewallet`,
  components: {
    SessionFrame,
    TmBtn
  },
  data: () => ({
    isSafeAppInitilized: false
  }),
  mounted() { },
  methods: {
    async signIn() {
      console.log(document.location.href);
      console.log(document.location.origin);

      try {
        const appsSdk = new SafeAppsSDK(opts);

        const safe = await appsSdk.safe.getInfo();

        console.log(safe.safeAddress);
        // console.log(appsSdk);

        this.$store.dispatch("signIn", {
          sessionType: sessionType.MULTISIG,
          address: toBech32(safe.safeAddress)
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

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
