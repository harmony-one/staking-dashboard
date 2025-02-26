<template>
  <SessionFrame>
    <h2 class="session-title">
      Use my Ledger Nano
    </h2>

    <template v-if="session.browserWithLedgerSupport">
      <div class="session-main">
        <HardwareState :loading="showLoading">
          <template v-if="status === `connect` || status === `detect`">
            <p style="margin-bottom: 1rem;">
              Please plug in your Ledger&nbsp;Nano and open the Harmony Ledger
              app
            </p>
          </template>
          <p
            v-if="connectionError === 'BROWSER_HID_DISABLED'"
            class="error-message-block"
          >
            Your browser doesn't have HID enabled. Please enable this feature by
            visiting:
            <CopyLink
              text="chrome://flags/#enable-experimental-web-platform-features"
              href="chrome://flags/#enable-experimental-web-platform-features"
            />
          </p>
          <p v-else-if="connectionError" class="error-message-block">
            {{ connectionError }}
          </p>
          <TmBtn
            :value="submitCaption"
            :disabled="status === `connect` ? false : `disabled`"
            @click.native="signIn()"
          />
        </HardwareState>
      </div>
    </template>

    <div v-else class="session-main">
      <p>
        Please use Chrome, Opera, or Brave. Ledger is not supported in this
        browser.
      </p>
    </div>
  </SessionFrame>
</template>

<script>
import TmBtn from "common/TmBtn"
import { mapState } from "vuex"
import HardwareState from "common/TmHardwareState"
import SessionFrame from "common/SessionFrame"
import CopyLink from "./CopyLink"
import { fromBech32 } from "@harmony-js/crypto"
export default {
  name: `session-hardware`,
  components: {
    CopyLink,
    TmBtn,
    SessionFrame,
    HardwareState
  },
  data: () => ({
    status: `connect`,
    connectionError: null,
    address: null,
    loading: false
  }),
  computed: {
    ...mapState([`session`]),
    submitCaption() {
      return {
        connect: "Sign In",
        detect: "Waiting for Ledger"
      }[this.status]
    },
    showLoading() {
      return this.loading || (this.status === `connect` ? false : true)
    }
  },
  methods: {
    async signIn() {
      this.connectionError = null
      this.status = `detect`
      this.address = null
      try {
        this.address = await this.$store.dispatch(`connectLedgerApp`)
        this.$router.push(`/`)
      } catch ({ message }) {
        this.status = `connect`
        this.connectionError = message
        return
      }
      console.log(`address`, this.address)
      console.log(`fromBech32(this.address)`, fromBech32(this.address))
      await this.$store.dispatch(`signIn`, {
        sessionType: `ledger`,
        address: this.address,
        evmAddress: fromBech32(this.address)
      })
    }
  },
  mounted() {
    this.loading = true
    this.$store.dispatch(`loadLegerModule`).then(() => (this.loading = false))
  }
}
</script>
<style scoped>
.error-message-block {
  color: var(--danger);
  font-size: var(--sm);
  font-style: italic;
  margin-bottom: 0;
  padding: 0 0 1rem 0;
  user-select: text;
}

.install-notes {
  flex-direction: column;
}

.ledger-install {
  font-size: var(--sm);
  margin-bottom: 0;
}

.address {
  color: var(--link);
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
}

.form-message {
  font-size: var(--sm);
  font-weight: 500;
  font-style: italic;
  color: var(--dim);
  display: inline-block;
}

.form-message.notice {
  border-radius: 0.25rem;
  border: 1px solid var(--bc-dim);
  background-color: #1c223e;
  font-weight: 300;
  margin: 2rem 0;
  padding: 1rem 1rem;
  font-size: 14px;
  font-style: normal;
  width: 100%;
}
</style>
