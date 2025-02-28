<template>
  <div class="bech32-address">
    <div
      v-tooltip="{
        placement: 'top',
        content: copySuccess || `Click to copy`
      }"
      v-clipboard:copy="address"
      v-clipboard:success="() => onCopy()"
      class="address"
    >
      {{ address | formatBech32(longForm, 8, 8) }}
    </div>

    <div
      v-tooltip="{
        placement: 'top',
        content: copySuccess || `Click to copy`
      }"
      v-clipboard:copy="evmAddress"
      v-clipboard:success="() => onCopy()"
      class="address"
    >
      {{ evmAddress | formatEVM(longForm, 4, 4) }}
    </div>

    <div
      class="show-on-ledger"
      v-tooltip="{
        placement: 'top',
        content: ledgerSuccess || `Click to show on Ledger`
      }"
    >
      <a
        v-if="session && !session.isMobile && session.sessionType === 'ledger'"
        @click="
          () => {
            onShowLedger()
            showAddressOnLedger()
          }
        "
        class="show-on-ledger"
        v-tooltip="{
          placement: 'top',
          content: ledgerSuccess || `Click to show on Ledger`
        }"
      >
        Show on Ledger
      </a>
    </div>

    <!-- <div :class="{ active: copySuccess }" class="copied">
      <i class="material-icons">check</i>
    </div> -->
  </div>
</template>

<script>
import { formatBech32, formatEVM } from "src/filters"

export default {
  name: `bech32-address`,
  filters: {
    formatBech32,
    formatEVM
  },
  props: {
    session: {
      type: Object,
      required: false
    },
    address: {
      type: String,
      required: true
    },
    evmAddress: {
      type: String,
      required: true
    },
    longForm: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    copySuccess: false,
    ledgerSuccess: false
  }),
  methods: {
    onShowLedger() {
      this.ledgerSuccess = "Some Message"
      setTimeout(() => {
        this.ledgerSuccess = false
      }, 2500)
    },
    onCopy() {
      this.copySuccess = "Copied!"
      setTimeout(() => {
        this.copySuccess = false
      }, 2500)
    },
    signOut() {
      this.$emit(`close`)
      this.$store.dispatch(`signOut`)
    },
    async showAddressOnLedger() {
      this.ledgerSuccess = "Please Verify on Ledger"
      setTimeout(() => {
        this.ledgerSuccess = undefined
      }, 2500)
      try {
        await this.$store.dispatch(`showLedgerAddress`)
        this.ledgerSuccess = "Address Matches"
      } catch (error) {
        console.log(error.message)
        this.ledgerSuccess = error.message
        this.messageTimeout = setTimeout(() => {
          this.$emit(close)
          this.$store.dispatch(signOut)
        }, 8000)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.address,
.show-on-ledger {
  width: 100%;
  margin-top: var(--half);
}

.bech32-address {
  padding: 0;
  margin: 0;
  font-size: inherit;
}

.bech32-address .address {
  color: var(--gray);
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
}

@media screen and (max-width: 414px) {
  .address {
    font-size: 12px;
  }
}

.bech32-address .address:hover {
  color: var(--blue);
}

.bech32-address .copied {
  align-items: flex-end;
  display: flex;
  font-size: 10px;
  opacity: 0;
  padding-left: 0.25rem;
  padding-top: 2px;
  transition: opacity 500ms ease;
}

.bech32-address .copied.active {
  opacity: 1;
}

.bech32-address .copied i {
  color: var(--success);
  font-size: 12px;
  padding-bottom: 2px;
  padding-right: 0;
}
</style>
