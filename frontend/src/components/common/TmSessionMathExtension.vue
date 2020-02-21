<template>
  <SessionFrame>
    <h2 class="session-title">
      Use MathWallet Extension
    </h2>

    <template v-if="session.browserWithMathExtensionSupport">
      <div class="session-main">
        <HardwareState :loading="status === `connect` ? false : true">
          <template v-if="status === `connect` || status === `detect`">
            <p>
              Please unlock your mathwallet extension and switch to Harmony
            </p>
          </template>
          <p v-if="connectionError" class="error-message">
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
        Please use Chrome. MathWallet Extension is not supported in this
        browser.
      </p>
    </div>
  </SessionFrame>
</template>

<script>
  import TmBtn from "common/TmBtn"
  import {mapState} from "vuex"
  import HardwareState from "common/TmHardwareState"
  import SessionFrame from "common/SessionFrame"

  export default {
    name: `session-hardware`,
    components: {
      TmBtn,
      SessionFrame,
      HardwareState
    },
    data: () => ({
      status: `connect`,
      connectionError: null,
      address: null
    }),
    computed: {
      ...mapState([`session`]),
      submitCaption() {
        return {
          connect: "Sign In",
          detect: "Waiting for MathExtension"
        }[this.status]
      }
    },
    methods: {
      async signIn() {
        this.connectionError = null
        this.status = `detect`
        this.address = null
        window.harmony.getAccount().then((account) => {
          this.address = account.address;
          this.$router.push(`/`)
          this.$store.dispatch(`signIn`, {
            sessionType: `math`,
            address: this.address
          })
        }).catch((message) => {
          this.status = `connect`
          this.connectionError = message
          return
        });

      }
    }
  }
</script>
<style scoped>
  .error-message {
    color: var(--danger);
    font-size: var(--sm);
    font-style: italic;
    margin-bottom: 0;
    padding-top: 1rem;
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
