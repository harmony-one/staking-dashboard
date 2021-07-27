<template>
  <ActionModal
    id="modal-withdraw-rewards"
    ref="actionModal"
    :transaction-data="transactionData"
    :notify-message="notifyMessage"
    title="Claim Rewards"
    class="modal-withdraw-rewards"
    submission-error-prefix="Withdrawal failed"
    :disable="validatorsWithRewards"
  >
    <TmFormGroup
      class="action-modal-form-group"
      field-id="amount"
      field-label="Amount"
    >
      <span class="input-suffix">{{ denom | viewDenom }}</span>
      <TmField id="amount" :value="rewards | ones | fullDecimals" readonly />
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
import { viewDenom, ones, fullDecimals } from "src/scripts/num"
import ActionModal from "./ActionModal"
import TmField from "src/components/common/TmField"
import TmFormGroup from "src/components/common/TmFormGroup"

import transaction from "../utils/transactionTypes"

export default {
  name: `modal-withdraw-rewards`,
  components: {
    ActionModal,
    TmField,
    TmFormGroup
  },
  filters: {
    ones,
    viewDenom,
    fullDecimals
  },
  props: {
    rewards: {
      type: Number,
      default: 0
    },
    denom: {
      type: String,
      required: true
    }
  },
  data: () => ({
    gasPrice: 1,
    gasLimit: 25000,
    gasFee: 1e-9 * 25000,
  }),
  computed: {
    transactionData() {
      return {
        type: transaction.WITHDRAW,
        amount: this.rewards,
        gasFee: this.calculateFee(),
        gasPrice: this.gasPrice,
        gasLimit: this.gasLimit,
      }
    },
    notifyMessage() {
      return {
        title: `Successful withdrawal!`,
        body: `You have successfully withdrawn your rewards.`
      }
    },
    validatorsWithRewards() {
      return (
        this.$refs.actionModal &&
        this.$refs.actionModal.context.validatorsWithRewards.length > 0
      )
    }
  },
  validations() {
    return {
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
     clear() {
      this.$v.$reset()

       
      this.gasPrice = 1
      this.gasLimit = 25000
    },
  }
}
</script>

<style scope>
.form-message.withdraw-limit {
  white-space: normal;
}
</style>
