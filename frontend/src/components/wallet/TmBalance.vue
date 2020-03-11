<template>
  <div class="balance-header">
    <div class="values-container">
      <div class="total-atoms">
        <h3>Total {{ bondDenom | viewDenom }}</h3>
        <h2 class="total-atoms__value">
          {{ totalAtomsDisplay | ones | fourDecimals }}
        </h2>
      </div>

      <div class="row small-container">
        <div class="availabgit le-atoms">
          <h3>Staked</h3>
          <h2>{{ staked | ones | fourDecimals }}</h2>
        </div>

        <div class="rewards">
          <h3>Current reward</h3>
          <h2>+{{ rewards | ones | fourDecimals }}</h2>
        </div>

        <div class="available-atoms">
          <h3>Available</h3>
          <h2>{{ unbondedAtoms | ones | fourDecimals }}</h2>
        </div>
      </div>
      <div class="total-atoms">
        <h3>Total pending undelegations {{ bondDenom | viewDenom }}</h3>
        <h2 class="total-atoms__value">
          {{ totalUndelegated | ones | fourDecimals }}
        </h2>
      </div>
    </div>
    <div class="button-container">
      <TmBtn
        id="withdraw-btn"
        :disabled="!readyToWithdraw"
        class="withdraw-rewards"
        value="Claim Rewards"
        @click.native="readyToWithdraw && onWithdrawal()"
      />
      <TmBtn
        class="send-button"
        value="Transfer funds"
        type="secondary"
        @click.native="onSend()"
      />
    </div>

    <SendModal ref="SendModal" />
    <ModalWithdrawRewards
      ref="ModalWithdrawRewards"
      :rewards="rewards"
      :denom="bondDenom"
    />
  </div>
</template>
<script>
import num from "scripts/num"
import { fourDecimals, ones } from "scripts/num"
import TmBtn from "common/TmBtn"
import SendModal from "src/ActionModal/components/SendModal"
import ModalWithdrawRewards from "src/ActionModal/components/ModalWithdrawRewards"
import { mapState, mapGetters } from "vuex"
import _ from "lodash"

export default {
  name: `tm-balance`,
  components: {
    TmBtn,
    SendModal,
    ModalWithdrawRewards
  },
  filters: {
    viewDenom: num.viewDenom,
    fourDecimals,
    ones
  },
  data() {
    return {
      num,
      lastUpdate: 0
    }
  },
  computed: {
    ...mapState([
      `wallet`,
      `distribution`,
      `delegation`,
      `session`,
      "delegates"
    ]),
    ...mapGetters([`liquidAtoms`, `lastHeader`, `bondDenom`, `totalRewards`]),
    loaded() {
      return this.wallet.loaded && this.delegation.loaded
    },
    // only be ready to withdraw of the validator rewards are loaded and the user has rewards to withdraw
    // the validator rewards are needed to filter the top 5 validators to withdraw from
    readyToWithdraw() {
      return this.totalRewards > 0
    },
    rewards() {
      return this.distribution.loaded ? this.totalRewards : 0
    },
    totalUndelegated() {
      const delegates = this.delegates.delegates
      return this.delegates.loaded
        ? delegates
          ? _.sumBy(delegates, elem =>
              _.sumBy(elem.Undelegations, el => el.Amount)
            )
          : 0
        : 0
    },
    staked() {
      const delegates = this.delegates.delegates

      return this.delegates.loaded
        ? delegates
          ? delegates.reduce((sum, d) => sum + d.amount, 0)
          : 0
        : 0
    },
    unbondedAtoms() {
      // TODO - unify liquidAtoms format
      return this.liquidAtoms * 10e11
    },
    totalAtomsDisplay() {
      return this.staked + this.rewards + this.unbondedAtoms
    }
  },
  watch: {
    lastHeader: {
      immediate: true,
      handler(newHeader) {
        const height = Number(newHeader.height)
        // run the update queries the first time and after every 10 blocks
        const waitedTenBlocks = height - this.lastUpdate >= 10
        if (
          this.session.signedIn &&
          (this.lastUpdate === 0 || waitedTenBlocks)
        ) {
          this.update(height)
        }
      }
    }
  },
  methods: {
    ones,
    update(height) {
      this.lastUpdate = height
      this.$store.dispatch(`getRewardsFromMyValidators`)
      this.$store.dispatch(`queryWalletBalances`)
    },
    onWithdrawal() {
      this.$refs.ModalWithdrawRewards.open()
    },
    onSend() {
      this.$refs.SendModal.open(this.bondDenom)
    }
  }
}
</script>
<style scoped>
.balance-header {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
}

.values-container {
  display: flex;
  position: relative;
  width: 100%;
  padding: 1rem 0;
  flex-direction: column;
}

.values-container h2 {
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: var(--txt);
}

.values-container h3 {
  font-size: var(--sm);
  font-weight: 400;
  white-space: nowrap;
}

.total-atoms,
.available-atoms,
.rewards {
  padding-right: 2.5rem;
}

.rewards h2 {
  color: var(--success);
  font-size: var(--m);
  line-height: 20px;
}

.available-atoms h2 {
  font-size: var(--m);
  line-height: 20px;
}

.button-container {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  width: 100%;
  border-bottom: 1px solid var(--bc-dim);
  border-top: 1px solid var(--bc-dim);
  margin-bottom: 2rem;
}

.button-container button:first-child {
  margin-right: 0.5rem;
}

.row {
  display: flex;
  flex-direction: row;
}

.small-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: space-between;
}
</style>
