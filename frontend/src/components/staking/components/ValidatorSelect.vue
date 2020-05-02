<template>
  <div class="status-container">
    <input type="checkbox" id="checkbox" v-model="selected" @change="check" />
  </div>
</template>

<script>
import tooltips from "src/components/tooltips"
// import TmField from "src/components/common/TmField"


const toClassName = text => text.toLowerCase().replace(/ /g, "_")

export default {
  name: `validator-select`,
  props: ["data"],
  data: () => ({
    tooltips,
    selected:false
  }),
  watch: {
    selected: function (val) {
      
    }
  },
  methods:{
    check(val){
      if(this.selected) {
        let delegationObject = this.data
        delegationObject.amount = 0
        delegationObject.subtotal = 0
        delegationObject.estimatedFee = 0

          this.$store.commit('setDelegationQue',delegationObject)
      } else {
          this.$store.commit('removeDelegationQue',this.data.address)
      }
    }
  },
  components: {
    // TmField
  }
}
</script>
<style scoped lang="scss">
.validator-status {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: normal;
  padding: var(--half) var(--half) 6px var(--half);
  border: 1px solid;
  border-radius: var(--unit);
}

.validator-status.inactive {
  color: red;
  border-color: red;
}

.validator-status.elected {
  color: var(--blue);
  border-color: var(--blue);
}
</style>
