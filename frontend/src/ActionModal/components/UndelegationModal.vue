<template>
  <ActionModal
    id="undelegation-modal"
    ref="actionModal"
    :validate="validateForm"
    :amount="0"
    title="Undelegate"
    class="undelegation-modal"
    submission-error-prefix="Undelegating failed"
    :transaction-data="transactionData"
    :notify-message="notifyMessage"
    @close="clear"
  >
    <TmFormGroup class="action-modal-form-group">
      <div class="form-message notice">
        <span>
          Undelegation takes effect at the end of this epoch and cannot be
          undone. Please make sure you understand the rules of delegation
        </span>
      </div>
    </TmFormGroup>
    <TmFormGroup
      class="action-modal-form-group"
      field-id="from"
      field-label="From"
    >
      <TmField id="from" v-model="validator.operator_address" readonly />
    </TmFormGroup>
    <TmFormGroup
      :error="$v.amount.$error && $v.amount.$invalid"
      class="action-modal-form-group"
      field-id="amount"
      field-label="Amount"
    >
      <span class="input-suffix max-button">{{ num.viewDenom(denom) }}</span>
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
      <span v-if="maximum > 0" class="form-message">
        Currently Delegated: {{ maximum }} {{ num.viewDenom(denom) }}s
      </span>
      <TmFormMsg
        v-if="maximum === 0"
        :msg="
          `don't have any ${num.viewDenom(denom)}s delegated to this validator`
        "
        name="You"
        type="custom"
      />
      <TmFormMsg
        v-else-if="$v.amount.$error && (!$v.amount.required || amount === 0)"
        name="Amount"
        type="required"
      />
      <TmFormMsg
        v-else-if="$v.amount.$error && !$v.amount.decimal"
        name="Amount"
        type="numeric"
      />
      <TmFormMsg
        v-else-if="$v.amount.$error && !$v.amount.between"
        :max="$v.amount.$params.between.max"
        :min="$v.amount.$params.between.min"
        name="Amount"
        type="between"
      />
    </TmFormGroup>
    <TmFormGroup
      class="action-modal-form-group"
      field-id="gas-price"
      field-label="Gas price"
      :error="$v.gasPrice.$error && $v.gasPrice.$invalid"
    >
      <TmField
          id="gas-price"
          v-model.number="gasPrice"  
          type="number"
          min="1"
          placeholder="Gas price" 
        />
     </TmFormGroup>

     <TmFormGroup 
      class="action-modal-form-group"
      field-id="gas-limit"
      field-label="Gas Limit"
    >
      <TmField
          id="gas-limit"
          v-model.number="gasLimit"
          type="number"
          min="25000"
          placeholder="Gas Limit" 
        />
     </TmFormGroup>

     <TmFormGroup 
      
      class="action-modal-form-group"
      field-id="gas-fee"
      field-label="Gas Fee"
    >
        <TmField
            id="gas-fee" 
            :value="calculateFee()"  
            type="number"
            placeholder="Gas fee"
            disabled="true"
          />
          <TmFormMsg
            v-if="calculateFee() < '0.000025000'"
            name="Gas fee minimum 0,000025." 
            type="custom"
          />
     </TmFormGroup>
  </ActionModal>
</template>

<script>
//  removed from <div class="form-message notice">
//          Would you prefer to
//           <a id="switch-to-redelgation" href="#" @click="switchToRedelegation()"
//             >redelegate?</a
//           >

import { mapGetters } from "vuex"
import num, { uatoms, atoms, SMALLEST } from "src/scripts/num"
import { between, decimal } from "vuelidate/lib/validators"
import ActionModal from "./ActionModal"
import TmField from "src/components/common/TmField"
import TmFieldGroup from "src/components/common/TmFieldGroup"
import TmBtn from "src/components/common/TmBtn"
import TmFormGroup from "src/components/common/TmFormGroup"
import TmFormMsg from "src/components/common/TmFormMsg"
import transaction from "../utils/transactionTypes"

export default {
  name: `undelegation-modal`,
  components: {
    ActionModal,
    TmField,
    TmFieldGroup,
    TmBtn,
    TmFormGroup,
    TmFormMsg
  },
  props: {
    maximum: {
      type: Number,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    validator: {
      type: Object,
      required: true
    },
    denom: {
      type: String,
      required: true
    }
  },
  data: () => ({
    amount: null,
    atoms,
    num,
    gasPrice: 1,
    gasLimit: 25000,
    gasFee: 1e-9 * 25000,
  }),
  computed: {
    ...mapGetters([`liquidAtoms`]),
    transactionData() {
      return {
        type: transaction.UNDELEGATE,
        validatorAddress: this.validator.operator_address,
        amount: uatoms(this.amount),
        denom: this.denom,
        gasFee: this.calculateFee(),
        gasPrice: this.gasPrice,
        gasLimit: this.gasLimit,
      }
    },
    notifyMessage() {
      return {
        title: `Successful undelegation!`,
        body: `You have successfully undelegated ${this.amount} ${num.viewDenom(
          this.denom
        )}s.`
      }
    }
  },
  validations() {
    return {
      amount: {
        required: x => !!x && x !== `0`,
        decimal,
        between: between(SMALLEST, this.maximum)
      },
      gasPrice: {
        required: x => !!x && x > `0`,
      }
    }
  },
  methods: {
    calculateFee() {
      return ((this.gasPrice * 1e-9) * this.gasLimit).toFixed(9)
    },
    open() {
      this.$refs.actionModal.open()
    },
    validateForm() {
      this.$v.$touch()

      return !this.$v.$invalid
    },
    clear() {
      this.$v.$reset()

      this.amount = null
      this.gasPrice = 1
      this.gasLimit = 25000
    },
    setMaxAmount() {
      this.amount = this.maximum
    },
    enterPressed() {
      this.$refs.actionModal.validateChangeStep()
    },
    switchToRedelegation() {
      this.$refs.actionModal.close()
      this.$emit("switchToRedelegation")
    }
  }
}
</script>
