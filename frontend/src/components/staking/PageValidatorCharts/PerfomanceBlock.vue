<template>
  <div class="card-white validator-info">
    <ul class="row">
      <li class="row">
        <h4 v-info-style v-tooltip.top="tooltips.v_profile.uptime_avg">
          Uptime (AVG)
        </h4>
        <span id="page-profile__uptime">{{
          validator.uptime_percentage | percent | notAvailable
        }}</span>
      </li>
      <li class="row">
        <h4>Fees</h4>
        <span>{{ validator.rate | percent | notAvailable }}</span>
      </li>
      <li class="row">
        <h4 v-info-style v-tooltip.top="tooltips.v_profile.slots">Slots</h4>
        <span>{{ validator.active_nodes || 0 }}</span>
      </li>
      <li class="row">
        <h4 v-info-style v-tooltip.top="tooltips.v_profile.elected_slots">
          Elected Slots
        </h4>
        <span>{{ validator.elected_nodes || 0 }}</span>
      </li>
      <li class="row">
        <h4 v-info-style v-tooltip.top="tooltips.v_profile.apr">
          APR
        </h4>
        <span>{{ validator.apr | percent | notAvailable }}</span>
      </li>
      <li class="row">
        <h4 v-info-style v-tooltip.top="tooltips.v_profile.shards">Shards</h4>
        <span>{{ shardIDs }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { ones, percent, twoDecimals } from "scripts/num"
import tooltips from "src/components/tooltips"

export default {
  name: `perfomance-block`,
  // methods: {
  //   ones, percent, twoDecimals, noBlanks
  // },
  filters: {
    ones,
    percent,
    twoDecimals,
    noBlanks: function(value) {
      if (!value || value === `[do-not-modify]`) return `--`
      return value
    }
  },
  props: ["validator"],
  data: () => ({ tooltips }),
  computed: {
    ...mapState([`session`]),
    selfStake() {
      const session = this.session
      return this.validator.delegations.find(
        d => d["delegator-address"] === session.address
      )
    },
    rewards() {
      return this.selfStake ? this.selfStake.reward : 0
    },
    shardIDs() {
      return this.validator["bls-public-keys"]
        .map(e =>
          e[e.length - 1] >= "a"
            ? (e.charCodeAt(e.length - 1) - 87) % 4
            : parseInt(e[e.length - 1]) % 4
        )
        .toString()
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
