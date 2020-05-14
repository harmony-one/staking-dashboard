<template>
  <div class="balance-header">
    <div class="values-container">
      <div class="top-container">
        <div class="total-atoms">
          <h3 v-info-style v-tooltip.top="tooltips.portfolio.total_one">
            Total {{ bondDenom | viewDenom }}
          </h3>
          <h2 class="total-atoms__value">
            {{ totalAtomsDisplay | ones | zeroDecimals }}
          </h2>
        </div>

        <div class="available-atoms">
          <h3 v-info-style v-tooltip.top="tooltips.portfolio.available">
            Available
          </h3>
          <h2>{{ unbondedAtoms | ones | zeroDecimals }}</h2>
        </div>
      </div>

      <div class="row small-container">
        <div class="availabgit le-atoms">
          <h3 v-info-style v-tooltip.top="tooltips.portfolio.staked">Staked</h3>
          <h2>{{ staked | ones | zeroDecimals }}</h2>
        </div>

        <div class="rewards">
          <h3 v-info-style v-tooltip.top="tooltips.portfolio.rewards">
            Rewards
          </h3>
          <h2>+{{ rewards | ones | zeroDecimals }}</h2>
        </div>
      </div>
      <div class="total-atoms total-undel" v-if="totalUndelegated">
        <h3>Total pending undelegations {{ bondDenom | viewDenom }}</h3>
        <h2 class="total-atoms__value" style="color: #000000; margin-bottom: 10px;">
          {{ totalUndelegated | ones | zeroDecimals }}
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
import { zeroDecimals, ones } from "scripts/num"
import TmBtn from "common/TmBtn"
import SendModal from "src/ActionModal/components/SendModal"
import ModalWithdrawRewards from "src/ActionModal/components/ModalWithdrawRewards"
import { mapState, mapGetters } from "vuex"
import _ from "lodash"
import tooltips from "src/components/tooltips"

export default {
  name: `tm-balance`,
  components: {
    TmBtn,
    SendModal,
    ModalWithdrawRewards
  },
  filters: {
    viewDenom: num.viewDenom,
    zeroDecimals,
    ones
  },
  data() {
    return {
      num,
      lastUpdate: 0,
      tooltips
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
<style scoped lang="scss">
.balance-header {
  margin: 0 var(--unit);
}

.values-container {
  position: relative;
  width: 100%;
}

.values-container h2 {
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: white;
}

.values-container h3 {
  font-size: var(--sm);
  font-weight: 400;
  white-space: nowrap;
}

.top-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: space-between;

  color: white;
  padding: var(--unit);
  background: var(--blue);
  border-top-left-radius: var(--unit);
  border-top-right-radius: var(--unit);
  > div {
    flex: 1;
  }
}

.total-atoms.total-undel {
  margin-top: var(--unit);
  border-radius: var(--unit);
}

.small-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: space-between;
  padding: var(--unit);
  border-bottom-left-radius: var(--unit);
  border-bottom-right-radius: var(--unit);
  border: 1px solid #ddd;
  border-top: none;
}

.small-container h2 {
  color: var(--gray);
}

.availabgit,
.rewards {
  flex: 1;
  color: var(--gray);
}

.button-container {
  padding: 0;
  padding-top: var(--unit);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.row {
  display: flex;
  flex-direction: row;
}
</style>
