<template>
  <div class="validator-main-block">
    <div class="validator">
      <td class="data-table__row__info">
        <ValidatorLogo
          :name="validator.moniker"
          :operator-address="validator.operator_address"
          :logo-url="validator.logo_url"
          size="large"
        />
        <div class="validator-info">
          <h2>{{ validator.moniker }}</h2>
          <div class="validator-amounts">
            <div>
              <span
                v-info-style
                v-tooltip.left="tooltips.v_profile.total_staked"
                >Total Staked:</span
              >
              <h4>
                {{ validator.total_stake | ones | zeroDecimals | noBlanks }}
              </h4>
            </div>

            <div>
              <span v-info-style v-tooltip.left="tooltips.v_profile.delegated"
                >Delegated:</span
              >
              <h4>{{ delegatedStake | ones | zeroDecimals | noBlanks }}</h4>
            </div>
            <div>
              <span v-info-style v-tooltip.left="tooltips.v_profile.self_stake"
                >Self Stake:</span
              >
              <h4>
                {{ validatorSelfStakeAmount | ones | zeroDecimals | noBlanks }}
              </h4>
            </div>

            <div>
              <span
                v-info-style
                v-tooltip.left="tooltips.v_profile.max_delegation"
                >Max Delegation:</span
              >
              <h4>
                {{
                  validator.max_total_delegation
                    | ones
                    | zeroDecimals
                    | noBlanks
                }}
              </h4>
            </div>

            <div class="status-container">
              <div :class="status | toClassName" class="validator-status">
                {{ status }}
              </div>
              <div v-if="status_detailed && validator.epos_status" class="validator-status-detailed">
                {{ validator.epos_status.substring(0, 1).toUpperCase() + validator.epos_status.substring(1) }}
              </div>
            </div>
          </div>
        </div>
      </td>
    </div>

    <div class="button-container">
      <TmBtn
        id="delegation-btn"
        value="Delegate"
        @click.native="onDelegation"
        :disabled="validator.total_stake >= validator.max_total_delegation"
      />
      <TmBtn
        id="undelegation-btn"
        :disabled="!selfStakeAmount"
        value="Undelegate"
        type="secondary"
        @click.native="onUndelegation"
      />
    </div>

    <DelegationModal
      ref="delegationModal"
      :from-options="delegationTargetOptions()"
      :to="validator.operator_address"
      :validator="validator"
      :denom="bondDenom"
      :disabled="validator.remainder === 0"
      :minAmount="1000 * 1e18"
    />
    <UndelegationModal
      ref="undelegationModal"
      :maximum="selfStakeAmount | ones"
      :to="session.signedIn ? session.address : ``"
      :validator="validator"
      :denom="bondDenom"
      @switchToRedelegation="onDelegation({ redelegation: true })"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { ones, fourDecimals, zeroDecimals, percent, uatoms } from "scripts/num"
import { formatBech32 } from "src/filters"
import TmBtn from "common/TmBtn"
import DelegationModal from "src/ActionModal/components/DelegationModal"
import UndelegationModal from "src/ActionModal/components/UndelegationModal"
import ValidatorLogo from "../components/ValidatorLogo"
import isEmpty from "lodash.isempty"
import tooltips from "src/components/tooltips"
import BigNumber from "bignumber.js"

export default {
  name: `main-block`,
  components: {
    DelegationModal,
    UndelegationModal,
    ValidatorLogo,
    TmBtn
  },
  filters: {
    ones,
    fourDecimals,
    zeroDecimals,
    percent,
    toLower: text => text.toLowerCase(),
    toClassName: text => text.toLowerCase().replace(/ /g, "_"),
    // empty descriptions have a strange '[do-not-modify]' value which we don't want to show
    noBlanks: function(value) {
      if (!value || value === `[do-not-modify]`) return `--`
      return value
    }
  },
  props: ["validator"],
  computed: {
    ...mapState([
      `delegates`,
      `delegation`,
      `distribution`,
      `session`,
      `pool`, // ??
      `connection` // ??
    ]),
    ...mapGetters([
      `bondDenom`,
      `committedDelegations`,
      `liquidAtoms`,
      `connected`
    ]),
    status() {
      if (
        this.validator.jailed ||
        this.validator.tombstoned ||
        this.validator.status === 0 ||
        this.validator.active === false
      ) {
        return `Not elected`
      }
      return `Elected`
    },
    status_detailed() {
      if (
        this.validator.jailed ||
        this.validator.tombstoned ||
        this.validator.status === 0 ||
        this.validator.active === false
      ) {
        return `Validator is not elected in committees at current epoch`
      }
      return "Validator is elected in committees at current epoch"
    },
    selfStake() {
      return this.validator.delegations.find(
        d => d["delegator-address"] === this.session.address
      )
    },
    selfStakeAmount() {
      return this.selfStake ? this.selfStake.amount : 0
    },
    validatorSelfStakeAmount() {
      return this.validator.self_stake
    },
    delegatedStake() {
      return BigNumber(this.validator.total_stake)
        .minus(this.validatorSelfStakeAmount)
        .toNumber()
    },
    rewards() {
      return this.selfStake ? this.selfStake.reward : 0
    }
  },
  data: () => ({ tooltips }),
  methods: {
    percent,
    onDelegation(options) {
      window.ga('send', 'pageview', '/delegate')
      window.ga('send', 'event', 'delegate', 'open', 'modal')
      this.$refs.delegationModal.open(options)
    },
    onUndelegation() {
      this.$refs.undelegationModal.open()
    },
    delegationTargetOptions(
      { session, liquidAtoms, committedDelegations, $route, delegates } = this
    ) {
      if (!session.signedIn) return []

      //- First option should always be your wallet (i.e normal delegation)
      const myWallet = [
        {
          address: session.address,
          maximum: Math.floor(liquidAtoms),
          key: `My Wallet - ${formatBech32(session.address, false, 20)}`,
          value: 0
        }
      ]
      const bondedValidators = Object.keys(committedDelegations)
      if (isEmpty(bondedValidators)) {
        return myWallet
      }
      //- The rest of the options are from your other bonded validators
      //- We skip the option of redelegating to the same address
      const redelegationOptions = bondedValidators
        .filter(address => address != $route.params.validator)
        .reduce((validators, address) => {
          const delegate = delegates.delegates.find(function(validator) {
            return validator.operator_address === address
          })

          const name = delegate.validator_info && delegate.validator_info.name

          return validators.concat({
            address: address,
            maximum: Math.floor(committedDelegations[address]),
            key: `${name} - ${formatBech32(
              delegate.delegator_address,
              false,
              20
            )}`,
            value: validators.length + 1
          })
        }, [])
      return myWallet.concat(redelegationOptions)
    }
  }
}
</script>
<style scoped lang="scss">
@import "./styles.css";

.validator-main-block {
  max-width: 380px;
}

.status-container {
  margin-top: var(--unit);
  > div:first-child {
    min-width: 100px;
  }
}

.validator,
.button-container {
  padding: var(--unit) 0;
  padding-bottom: 0;
}
.validator-logo-container {
  margin-right: var(--unit);
}

.validator-status {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: normal;
  padding: var(--half) var(--half) 6px var(--half);
  border: 1px solid;
  border-radius: var(--unit);
}
.validator-status-detailed {
  margin: 0;
  margin-left: var(--unit);
}

.validator-status.inactive {
  color: red;
  border-color: red;
}

.validator-status.elected {
  color: var(--blue);
  border-color: var(--blue);
  text-align: center;
}

.validator-main-block .validator-info > h2 {
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 350px;
}

.validator-main-block .validator-amounts {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.validator-main-block .validator-amounts > div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.validator-main-block .validator-amounts > div span {
  margin-right: 5px;
}
</style>
