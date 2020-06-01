<template>
  <div class="card-white validator-info" style="margin: 15px 0;">
    <div v-if="increased" class="row">
      <i class="material-icons" style="color: green; width: 40px;"
        >arrow_upwards</i
      >
      <div class="column">
        <div class="row">
          Stake increased at block <a>#{{ increased.block }}</a>
          {{ increased.date | date }}
        </div>
        <div class="row">
          {{ increased.total_stake_before | ones | shortDecimals }}
          <i class="material-icons">arrow_forward</i>
          {{ increased.total_stake_after | ones | shortDecimals }}
        </div>
      </div>
    </div>
    <div v-else>
      Not found increased events
    </div>
    <div class="line" />
    <div v-if="decreased" class="row">
      <i class="material-icons" style="color: red; width: 40px;"
        >arrow_downward</i
      >
      <div class="column">
        <div class="row">
          Stake decreased at block <a>#{{ decreased.block }}</a>
          {{ decreased.date | date }}
        </div>
        <div class="row">
          {{ decreased.total_stake_before | ones | shortDecimals }}
          <i class="material-icons">arrow_forward</i>
          {{ decreased.total_stake_after | ones | shortDecimals }}
        </div>
      </div>
    </div>
    <div v-else>
      No events of stake decreasing
    </div>
  </div>
</template>
<script>
import { percent, ones, shortDecimals } from "scripts/num"
import moment from "moment"

export default {
  name: `event-history`,
  filters: {
    date(value) {
      return moment(value).format("MMM DD hh:mm")
    },
    percent,
    ones,
    shortDecimals
  },
  props: ["events"],
  computed: {
    increased: state => state.events.increased,
    decreased: state => state.events.decreased
  }
}
</script>

<style scoped>

.card-white {
  padding: var(--unit);
}
.line {
  border-bottom: 1px dashed #dedede;
  margin: 20px 0;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
}

.row a {
  margin: 0 10px;
}
</style>
