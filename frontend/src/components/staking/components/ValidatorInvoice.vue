<template>
  <div class="validator-info-container">
      <div class="money">
        <h3 class="li-validator-name">{{ subTotal }}</h3>
      </div>
      <div class="money" v-if="esimatedFee">
        <h3 class="li-validator-name">{{ data.estimatedFee }}</h3>
      </div>
      <div class="money" v-if="totalFee">
        <h3 class="li-validator-name">{{ total }}</h3>
      </div>
  </div>
</template>

<script>
import TableInvoice from "src/ActionModal/components/TableInvoice"
import { mapState, mapGetters} from "vuex"
import { fullDecimals, viewDenom } from "src/scripts/num"


export default {
  name: `li-validator`,
  components: {  },
  props: {
    data: {
      type: Object,
      required: true
    },
    
    esimatedFee: {
      type: Boolean,
      default:false,
      required: false
    },
    totalFee: {
      type: Boolean,
      default:false,
      required: false
    }
  },
  filters: {
    fullDecimals,
    viewDenom
  },
  computed: {
    ...mapState({
      amount: state => state.delegationque.amount
    }),
    ...mapGetters([
      `bondDenom`,
    ]),
    subTotal() {
      return this.amount 
    },
    total() {
      return Number(this.data.estimatedFee) + Number(this.amount) 
    }
    
  },

}
</script>

<style scoped lang="scss">
.money{
    margin:5px
}
.sm-input{
    width: 80px;
}
.validator-info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
}

.validator-info {
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
  align-content: center;
  justify-content: center;
}

.li-validator h4,
.li-validator h5 {
  font-size: var(--sm);
  display: inline-block;
}

.li-validator h5 {
  padding-left: 0.5rem;
  color: var(--success);
}

.li-validator:hover {
  cursor: pointer;
  color: var(--txt);
}

.li-validator-name {
  font-size: 1rem;
  line-height: 18px;
  font-weight: 500;
  color: var(--txt);
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.li-validator-image {
  border-radius: 0.25rem;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid var(--bc-dim);
}
</style>
