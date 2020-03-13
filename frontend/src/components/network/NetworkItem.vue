<template>
  <div
    class="network-item"
    :class="{ active: connection.network === network.id }"
  >
    <div class="network-icon">
      <img :src=network.logo_url alt="harmony one token" />
    </div>
    <div class="network-content">
      <h4 class="network-title">
        {{ network.title }}
      </h4>
      <p class="network-caption">
        {{ network.chain_title }}
      </p>
    </div>
    <div class="network-status">
      <img
        v-if="!connection.connected && connection.network === network.id"
        class="tm-connected-network-loader"
        src="~assets/images/loader.svg"
        alt="a small spinning circle to display loading"
      />
      <div
        v-else-if="connection.connected && connection.network === network.id"
        class="network-selected"
      >
        <i class="material-icons">check</i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: `network-item`,
  props: {
    network: {
      type: Object,
      required: true
    },
    enabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState([`connection`])
  }
}
</script>

<style scoped>
.network-item {
  display: flex;
  align-items: center;
  border: 1px solid var(--light);
  background: white;
  position: relative;
  padding:  var(--unit);
  margin:  var(--unit);
  border-radius: var(--half);
}

.network-item:hover {
  cursor: pointer;
  background: var(--hover-bg);
  color: var(--bright);
}

.network-item b {
  font-weight: 500;
}

.network-icon img {
  max-height: 100%;
  max-width: 52px;
  display: block;
}

.network-content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  padding-left: 1rem;
}

.network-title {
  font-size: 1rem;
  line-height: 18px;
  font-weight: 500;
  color: var(--txt);
}

.network-caption {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: var(--dim);
}

.network-selected {
  color: var(--success);
}
</style>
