<template>
  <div>
    <div class="status-container">
      <span :class="status | toLower" class="validator-status">
        {{ status }}
      </span>
      <span v-if="status_detailed" class="validator-status-detailed">
        {{ status_detailed }}
      </span>
    </div>
    <div class="validator">
      <td class="data-table__row__info">
        <Avatar
          v-if="!validator.avatarUrl"
          class="validator-image"
          alt="generic geometric symbol - generated avatar from address"
          :address="validator.operator_address"
        />
        <img
          v-else-if="validator.avatarUrl"
          :src="validator.avatarUrl"
          :alt="`validator logo for ` + validator.moniker"
          class="validator-image"
        />
        <div class="validator-info">
          <h3 class="validator-name">{{ validator.moniker }}</h3>
          <div v-if="myDelegation">
            <h4>{{ myDelegation }}</h4>
            <h5 v-if="rewards">{{ 0 | atoms | shortDecimals | noBlanks }}</h5>
          </div>
        </div>
      </td>
    </div>

    <div class="button-container">
      <TmBtn id="delegation-btn" value="Stake" @click.native="onDelegation" />
      <TmBtn
        id="undelegation-btn"
        :disabled="!myDelegation"
        value="Unstake"
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
    />
    <UndelegationModal
      ref="undelegationModal"
      :maximum="Number(myBond)"
      :to="session.signedIn ? session.address : ``"
      :validator="validator"
      :denom="bondDenom"
      @switchToRedelegation="onDelegation({ redelegation: true })"
    />
  </div>
</template>

<script>
import { calculateTokens } from "scripts/common"
import { mapState, mapGetters } from "vuex"
import { atoms, viewDenom, shortDecimals, percent, uatoms } from "scripts/num"
import { formatBech32 } from "src/filters"
import TmBtn from "common/TmBtn"
import DelegationModal from "src/ActionModal/components/DelegationModal"
import UndelegationModal from "src/ActionModal/components/UndelegationModal"
import Avatar from "common/Avatar"
import isEmpty from "lodash.isempty"

export default {
  name: `main-block`,
  components: {
    DelegationModal,
    UndelegationModal,
    Avatar,
    TmBtn
  },
  filters: {
    atoms,
    shortDecimals,
    percent,
    toLower: text => text.toLowerCase(),
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
    myBond() {
      if (!this.validator.operator_address) return 0

      const delegator = this.delegates.delegates.find(
        d => d.validator_address === this.validator.operator_address
      )

      return atoms(
        calculateTokens(this.validator, delegator ? delegator.amount : 0)
      )
    },
    myDelegation() {
      const { bondDenom, myBond } = this
      const myDelegation = shortDecimals(myBond)
      const myDelegationString = `${myDelegation} ${viewDenom(bondDenom)}`
      return Number(myBond) === 0 ? null : myDelegationString
    },
    status() {
      if (
        this.validator.jailed ||
        this.validator.tombstoned ||
        this.validator.status === 0 ||
        this.validator.active === false
      )
        return `Inactive`
      return `Active`
    },
    status_detailed() {
      if (this.validator.jailed) return `Temporally banned from the network`
      if (this.validator.tombstoned) return `Banned from the network`
      if (this.validator.status === 0) return `Banned from the network`
      return "Validator is online and earning rewards"
    },
    rewards() {
      const { session, bondDenom, distribution, validator } = this
      if (!session.signedIn) {
        return null
      }

      const validatorRewards = distribution.rewards[validator.operator_address]
      return validatorRewards ? validatorRewards[bondDenom] : 0
    }
  },
  methods: {
    shortDecimals,
    atoms,
    uatoms,
    percent,
    onDelegation(options) {
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
          return validators.concat({
            address: address,
            maximum: Math.floor(committedDelegations[address]),
            key: `${delegate.description.moniker} - ${formatBech32(
              delegate.operator_address,
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
<style scoped>
@import "./styles.css";
</style>
