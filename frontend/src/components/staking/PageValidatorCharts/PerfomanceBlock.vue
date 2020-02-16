<template>
  <div class="card-white validator-info">
    <ul class="row">
      <li class="row">
        <h4>Uptime (Average)</h4>
        <span id="page-profile__uptime">
          {{ validator.uptime_percentage | percent }}
        </span>
      </li>
      <li class="row">
        <h4>Number of active nodes</h4>
        <span>{{ validator.active_nodes || 3 }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { percent } from "scripts/num"

export default {
  name: `perfomance-block`,
  filters: {
    percent
  },
  props: ["validator"],
  methods: {
    percent
  }
}
</script>

<style scoped>
@import "./styles.css";
</style>
