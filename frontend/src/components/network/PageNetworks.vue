<template>
  <TmPage data-title="Network" class="page" hide-header>
    <template>
      <h3>Main Networks</h3>
      <NetworkList :networks="mainNetworks" />
      <h3>Test Networks</h3>
      <NetworkList :networks="testNetworks" />
    </template>
  </TmPage>
</template>

<script>
import NetworkList from "./NetworkList"

import TmPage from "common/TmPage"
import { fetchNetworks } from "../../mock-service"
export default {
  name: `page-network`,
  components: {
    TmPage,
    NetworkList
  },
  data: () => ({
    networks: []
  }),
  computed: {
    mainNetworks() {
      return this.networks.filter(network => !network.testnet)
    },
    testNetworks() {
      return this.networks.filter(network => network.testnet)
    }
  },
  mounted() {
    fetchNetworks().then(networks => (this.networks = networks))
  }
}
</script>
<style scoped>
.page {
  padding: 2rem;
  margin: 0 auto;
  max-width: 680px;
}

h3 {
  margin: 0 0 0.25rem 1rem;
  color: var(--dim);
  font-size: var(--sm);
  font-weight: 500;
}
</style>
