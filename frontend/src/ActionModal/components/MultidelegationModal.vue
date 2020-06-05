<template>
  <ActionModal
    id="multidelegation-modal"
    ref="actionModal"
    :validate="validateForm"
    :amount="amount"
    title="Multi Delegate"
    class="multidelegation-modal"
    submission-error-prefix="Delegating failed"
    :transaction-data="transactionData"
    :notify-message="notifyMessage"
    @close="clear"
  >
    <TmFormGroup class="action-modal-form-group">
      <div class="form-message notice">
        <span>
          It will take until the end of current epoch to unlock your tokens
          after a delegation and the tokens are still slashable if the validator
          behaves maliciously.
        </span>
      </div>
    </TmFormGroup>
    <!-- <TmFormGroup class="action-modal-form-group" field-id="to" field-label="To"> -->
    <TmFormGroup class="action-modal-address-group" field-id="to">
      <div v-for="(item, index) in to" :key="index">
        <!--        <span>{{ item.name }}</span>-->
        <div style="display: flex; flex-direction: row; align-items: center;">
          <TmField id="to" :value="item.address" type="text" readonly />
          <div style="margin-left: 20px; margin-right: 20px;">
            {{ Number(amount / to.length).toFixed(2) }}
          </div>
        </div>
      </div>
    </TmFormGroup>

    <TmFormGroup
      v-if="fromOptions.length > 1"
      class="action-modal-form-group"
      field-id="from"
      field-label="From"
    >
      <TmField
        id="from"
        v-model="selectedIndex"
        :title="from"
        :options="fromOptions"
        type="select"
      />
    </TmFormGroup>
    <!-- <TmFormGroup
      :error="$v.amount.$error && $v.amount.$invalid"
      class="action-modal-form-group"
      field-id="amount"
      field-label="Amount"
    >-->
    <TmFormGroup
      :error="$v.amount.$error && $v.amount.$invalid"
      class="action-modal-form-group"
      field-id="amount"
      v-if="isBalanceEnough"
    >
      <span class="input-suffix-denom">{{ viewDenom(denom) }}s will be delegated in total</span>
      <TmFieldGroup>
        <TmField
          id="amount"
          v-model="amount"
          v-focus
          class="tm-field-addon"
          type="number"
          placeholder="Amount"
          @keyup.enter.native="enterPressed"
        />
        <TmBtn
          type="button"
          class="secondary addon-max"
          value="Set Max"
          @click.native="setMaxAmount()"
        />
      </TmFieldGroup>

      <div class="slider">
        <div class="value">{{ sliderValueOutput }}%</div>
        <input
          v-model="sliderValue"
          type="range"
          min="0"
          max="100"
          step="10"
          @input="change"
        />
      </div>

      <span class="form-message">
        Available to Stake:
        {{ getFromBalance() }}
        {{ denom | viewDenom }}s
      </span>
      <TmFormMsg
        v-if="balance === 0"
        :msg="`doesn't have any ${viewDenom(denom)}s`"
        name="Wallet"
        type="custom"
      />
      <TmFormMsg
        v-else-if="$v.amount.$error && !$v.amount.decimal"
        name="Amount"
        type="numeric"
      />
      <TmFormMsg
        v-else-if="$v.amount.$error && (!$v.amount.required || amount === 0)"
        name="Amount"
        type="required"
      />
      <TmFormMsg
        v-else-if="$v.amount.$error && !$v.amount.between"
        :max="$v.amount.$params.between.max"
        :min="$v.amount.$params.between.min"
        name="Amount"
        type="between"
      />
      <TmFormMsg
        v-else-if="isMaxAmount()"
        msg="You are about to use all your tokens for this transaction. Consider leaving a little bit left over to cover the network fees."
        type="custom"
        class="tm-form-msg"
      />
    </TmFormGroup>

    <div v-else class="body_container">
      <TmFormMsg
        name=""
        type="custom"
        :msg="`Not enough funds to delegate, minimum ${minAmount} ONEs`"
      />
    </div>

    <div style="margin-top: 20px; margin-bottom: 20px;">
      <b>{{ amount / to.length }} {{ denom | viewDenom }}s</b>
      will be delegated to each validator
    </div>
  </ActionModal>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { between, decimal } from "vuelidate/lib/validators"
import {
  uatoms,
  atoms,
  viewDenom,
  SMALLEST,
  ones,
  shortDecimals
} from "src/scripts/num"
import TmField from "src/components/common/TmField"
import TmFieldGroup from "src/components/common/TmFieldGroup"
import TmBtn from "src/components/common/TmBtn"
import TmFormGroup from "src/components/common/TmFormGroup"
import TmFormMsg from "src/components/common/TmFormMsg"
import ActionModal from "./ActionModal"
import transaction from "../utils/transactionTypes"

export default {
  name: `multidelegation-modal`,
  components: {
    TmField,
    TmFieldGroup,
    TmBtn,
    TmFormGroup,
    TmFormMsg,
    ActionModal
  },
  filters: {
    viewDenom,
    ones,
    shortDecimals
  },
  props: {
    fromOptions: {
      type: Array,
      required: true
    },
    to: {
      type: Array,
      required: true
    },
    denom: {
      type: String,
      required: true
    },
    minAmount: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    amount: null,
    selectedIndex: 0,
    slideValue: 50,
    slideValueOutput: 50,
    sliderValueOutput: 50
  }),
  computed: {
    ...mapState([`session`]),
    ...mapGetters([`modalContext`]),
    balance() {
      if (!this.session.signedIn) return 0

      return this.fromOptions[this.selectedIndex].maximum
    },
    isBalanceEnough() {
      return atoms(this.balance) > this.minAmount
    },
    from() {
      if (!this.session.signedIn) return ``

      return this.fromOptions[this.selectedIndex].address
    },
    transactionData() {
      if (!this.from) return {}
      return {
        type: transaction.MULTIDELEGATE,
        validatorAddress: this.to,
        amount: uatoms(this.amount),
        denom: this.denom
      }
    },
    notifyMessage() {
      return {
        title: `Successful delegation!`,
        body: `You have successfully delegated your ${viewDenom(this.denom)}s`
      }
    }
  },
  methods: {
    change() {
      this.sliderValueOutput = this.sliderValue
      this.amount = atoms((this.balance * this.sliderValue) / 100)
    },
    viewDenom,
    open() {
      console.log("transactionData", this.transactionData)
      this.$refs.actionModal.open()
    },
    validateForm() {
      this.$v.$touch()

      return !this.$v.$invalid
    },
    clear() {
      this.$v.$reset()

      this.selectedIndex = 0
      this.amount = null
    },
    setMaxAmount() {
      this.amount = atoms(this.balance)
    },
    isMaxAmount() {
      return parseFloat(this.amount) === parseFloat(atoms(this.balance))
    },
    enterPressed() {
      this.$refs.actionModal.validateChangeStep()
    },
    getFromBalance() {
      return atoms(this.balance)
    }
  },
  validations() {
    return {
      amount: {
        required: x => !!x && x !== `0`,
        decimal,
        between: between(
          Math.max(SMALLEST, this.minAmount),
          Math.min(atoms(this.balance), this.getFromBalance())
        )
      }
    }
  }
}
</script>

<style lang="scss">
.action-modal-address-group {
  max-height: 150px;
  overflow: auto;
  padding: 0px 0px 10px 0px;
  margin-bottom: var(--unit);
}

.slider {
  margin: var(--unit);

  .value {
    text-align: center;
  }

  input[type="range"] {
    padding: 0;
    border: none;
    -webkit-appearance: none;
    margin: 0;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #ddd;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid var(--blue);
    height: 32px;
    width: 32px;
    border-radius: 16px;
    background: #ffffff;
    cursor: pointer;
    margin-top: -12px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #eee;
    border: none;
    outline: none;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #ddd;
  }
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    border: 2px solid var(--blue);
    height: 32px;
    width: 32px;
    border-radius: 16px;
    background: #ffffff;
    cursor: pointer;
    margin-top: -12px;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #ddd;
  }
}
</style>
