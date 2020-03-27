<template>
  <div class="card-white validator-info">
    <ul class="row">
      <li class="row">
        <h4>Uptime (AVG)</h4>
        <span id="page-profile__uptime">
          {{ validator.uptime_percentage | percent | notAvailable }}
        </span>
      </li>
      <li class="row">
        <h4>Fees</h4>
        <span>
          {{ validator.rate | percent | notAvailable }}
        </span>
      </li>
      <li class="row">
        <h4>Slots</h4>
        <span>{{ validator.active_nodes || 0 }}</span>
      </li>
      <li class="row">
        <h4>Elected Slots</h4>
        <span>{{ validator.elected_nodes || 0 }}</span>
      </li>
      <li class="row">
        <h4>APR</h4>
        <span>{{ validator.apr | percent | notAvailable }}</span>
      </li>
      <li class="row">
        <h4>Your Rewards</h4>
        <span>+{{ rewards | ones | twoDecimals | noBlanks }}</span>
      </li>

    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { ones, percent, twoDecimals } from "scripts/num"
import validators from '../../../vuex/modules/validators'

export default {
  name: `perfomance-block`,
  filters: {
    percent
  },
  props: ["validator"],
  // methods: {
  //   ones, percent, twoDecimals, noBlanks
  // },
  filters: {
    ones, percent, twoDecimals, 
    noBlanks: function(value) {
      if (!value || value === `[do-not-modify]`) return `--`
      return value
    }
  },
  computed: {
    ...mapState([
      `session`,
    ]),
    selfStake() {
      const session = this.session
      return this.validator.delegations.find(
        d => d["delegator-address"] === session.address
      )
    },
    rewards() {
      return this.selfStake ? this.selfStake.reward : 0
    }
  }
}
</script>

<style scoped>
@import "./styles.css";

.card-white {
  padding: 0;
  padding-top: var(--unit);
}
</style>
