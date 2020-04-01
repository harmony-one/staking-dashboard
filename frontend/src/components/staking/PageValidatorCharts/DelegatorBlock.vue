<template>
  <div class="container">
    <div class="headings">
      <div class="index"></div>
      <div class="address">
        Address
      </div>
      <div class="short-address">
        Address
      </div>
      <div class="amount">
        Amount
      </div>
    </div>
    <div class="delegation" v-for="(delegator, index) in delegations">
      <div class="index">
        {{index + 1}}
      </div>
      <div class="address">
        {{ delegator['delegator-address'] }}
      </div>
      <div class="short-address">
        {{ shortAddress(delegator['delegator-address']) }}
      </div>
      <div class="amount">
        {{delegator['amount'] | ones | zeroDecimals}}
      </div>
    </div>
  </div>
</template>

<script>
import { percent, ones, zeroDecimals } from "../../../scripts/num"

export default {
  name: "DelegatorBlock",
  props: ["validator"],
  filters: {
    ones, zeroDecimals,
  },
  methods: {
    shortAddress: (a) => a.substring(0, 11) + '...' + a.substring(a.length - 8)
  },
  data: function() {
    const delegations = this.validator.delegations.slice()

    const sort = 'amount'
    const dir = -1
    delegations.sort((a, b) => (a[sort] - b[sort]) * dir)

    return {
      delegations
    }
  }
}
</script>

<style scoped lang="scss">

.headings {
  text-transform: uppercase;
  font-weight: bold;
}

.delegation:nth-child(even) {
  background: #00ADE818;
}

.delegation, .headings {
  padding: 2px;
  background: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  .index {
    flex: 0 0 24px;
  }
  .address, .short-address {
    flex: 1;
  }
  .short-address {
    display: none;
  }
  .amount {
    text-align: right;
    flex: 1;
  }
}

@media screen and (max-width: 1200px) {

  .delegation {
    .address {
      display: none;
    }
    .short-address {
      display: block;
    }
  }
}

</style>
