<template>
  <TmPage data-title="Network" title="networks" class="page">
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
import { mapState } from "vuex"
import TmPage from "common/TmPage"

export default {
  name: `page-network`,
  components: {
    TmPage,
    NetworkList
  },
  data: () => ({}),
  computed: {
    ...mapState([`connection`]),
    networks() {
      return this.connection.networks
    },
    mainNetworks() {
      return this.networks.filter(network => !network.testnet)
    },
    testNetworks() {
      return this.networks.filter(network => network.testnet)
    }
  }
}
</script>
<style scoped>
.page {
  /* padding: 2rem;
  margin: 0 auto;
  max-width: 680px; */
}

h3 {
  margin: 0 0 0.25rem 1rem;
  color: var(--dim);
  text-transform: uppercase;
}
</style>
