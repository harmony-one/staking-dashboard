<template>
  <div class="sidebar-bottom">
    <a
      href="https://docs.google.com/forms/d/1OUALlRVgA6-AQdUf4jaPFx_TaStKALBRTX97xNmDBDY/"
      target="_blank"
    >
      <TmBtn
        id="intercom-button"
        class="intercom-button"
        value="Help / Feedback"
        type="secondary"
        size="small"
      />
    </a>
    <div v-tooltip.top="networkTooltip" id="network_status">
      <div
        v-if="connection.connected"
        id="tm-connected-network"
        class="tm-connected-network"
      >
        <div class="tm-connected-network__connection">
          <div
            id="tm-connected-network__icon"
            class="tm-connected-network__icon"
          >
            <span class="tm-connected-network__status green" />
          </div>
          <div
            id="tm-connected-network__string"
            class="tm-connected-network__string"
          >
            <span class="chain-id">
              {{ connection.lastHeader.chain_title }}
            </span>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          id="tm-disconnected-network"
          class="tm-connected-network tm-disconnected-network"
        >
          <img
            class="tm-connected-network-loader"
            src="~assets/images/loader-white.svg"
            alt="a small spinning circle to display loading"
          />
          <div
            class="
        tm-connected-network__string
        tm-connected-network__string--connecting
      "
          >
            Connecting…
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { prettyInt } from "scripts/num"
import TmBtn from "common/TmBtn"

export default {
  name: `tm-connected-network`,
  components: {
    TmBtn
  },
  filters: {
    prettyInt
  },
  computed: {
    ...mapState([`connection`]),
    networkTooltip() {
      return this.connection.connected
        ? `You're connected to ${this.connection.lastHeader.chain_title}`
        : "Seeking connection"
    }
  }
}
</script>

<style scoped>
.sidebar-bottom {
  padding: 0 1rem;
  margin-bottom: 2rem;
  width: 100%;
}

.intercom-button {
  width: 100%;
  margin: 1rem 0;
  text-align: left;
  border-color: var(--bright-light) !important;
  font-size: 12px;
  min-height: 40px;
  color: var(--text-white);
  border: 2px solid var(--bc);
  border-radius: 0.25rem;
}

.tm-connected-network {
  align-items: center;
  color: var(--gray);
}

.tm-connected-network .chain-id {
  font-weight: 500;
  padding-left: var(--unit);
}

.tm-connected-network .exit {
  font-size: var(--sm);
}

.tm-connected-network__icon {
  align-items: center;
  color: var(--success-bc);
  display: flex;
  font-size: var(--m);
  justify-content: center;
  padding-right: 0.25rem;
}

.tm-connected-network__icon .fa-spin {
  color: var(--warning);
}

.tm-connected-network--mocked .tm-connected-network__icon {
  color: var(--warning);
}

.tm-connected-network__connection {
  display: flex;
}

.tm-disconnected-network {
  justify-content: start;
}

.tm-connected-network__string--connecting {
  color: var(--warning);
}

.tm-connected-network-loader {
  height: 1rem;
  margin-right: 0.5rem;
  width: 1rem;
}

.tm-connected-network__status {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--success);
}

@media screen and (max-width: 767px) {
  .sidebar-bottom {
    max-width: 100%;
  }
}
</style>
