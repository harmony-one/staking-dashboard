<template>
  <div class="card-white validator-info">
    <ul class="row">
      <li class="row">
        <h4 v-info-style v-tooltip.top="tooltips.v_profile.uptime_avg">
          Uptime (AVG)
        </h4>
        <span id="page-profile__uptime">{{
          (validator.uptime_percentage || 0) | percent
        }}</span>
      </li>
      <!-- <li class="row">
        <h4>Fee</h4>
        <span>{{ validator.rate | percent | notAvailable }}</span>
      </li> -->
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
          Expected Return
        </h4>
        <span>{{ validator.apr | percent | notAvailable }}</span>
      </li>
      <li class="row" v-for="item in shardIDs" :key="item.shard">
        <h4 v-info-style v-tooltip.top="tooltips.v_profile.shards">
          Shard {{ item.shard }}
        </h4>
        <span>{{ item.count }} {{ item.count > 1 ? "slots" : "slot" }}</span>
      </li>
      <li class="row">
        <h4 v-info-style v-tooltip.top="tooltips.v_profile.rewards">
          Lifetime Rewards
        </h4>
        <span>{{
          validator.lifetime_reward_accumulated | ones | zeroDecimals
        }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { ones, percent, twoDecimals, zeroDecimals } from "scripts/num"
import tooltips from "src/components/tooltips"

export default {
  name: `perfomance-block`,
  // methods: {
  //   ones, percent, twoDecimals, noBlanks
  // },
  filters: {
    ones,
    percent,
    zeroDecimals,
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
      // console.log(this.validator)
      return this.validator.delegations.find(
        d => d["delegator-address"] === session.address
      )
    },
    rewards() {
      // return this.selfStake ? zeroDecimals(ones(this.selfStake.reward)) : 0
      // total rewards to date based on all delegations
      return zeroDecimals(
        ones(this.validator.delegations.reduce((a, c) => (a += c.reward), 0))
      )
    },
    shardIDs() {
      const shards = {}

      this.validator["bls-public-keys"]
        .map(e =>
          e[e.length - 1] >= "a"
            ? (e.charCodeAt(e.length - 1) - 87) % 4
            : parseInt(e[e.length - 1]) % 4
        )
        .forEach(
          shard => (shards[shard] = shards[shard] ? shards[shard] + 1 : 1)
        )

      return Object.keys(shards).map(key => ({
        shard: key,
        count: shards[key]
      }))
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
