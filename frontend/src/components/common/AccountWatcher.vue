<script>
import { mapState } from "vuex"
import { toBech32 } from "@harmony-js/crypto"
import { sessionType } from "src/ActionModal/components/ActionModal"

export default {
  name: `AccountWatcher`,
  props: {},
  computed: {
    ...mapState({ sessionType: (state) => state.session.sessionType })
  },
  watch: {
    sessionType(val) {
      window.ethereum.removeListener(
        `accountsChanged`,
        this.handleAccountsChanged
      )
      if (val === sessionType.METAMASK) {
        window.ethereum.on(`accountsChanged`, this.handleAccountsChanged)
      }
    }
  },
  beforeUnmount() {
    window.ethereum.removeListener(
      `accountsChanged`,
      this.handleAccountsChanged
    )
  },
  methods: {
    handleAccountsChanged(accounts) {
      this.$store.dispatch(`changeAccount`, {
        address: toBech32(accounts[0]),
        sessionType: this.sessionType
      })
    }
  },
  render() {
    return null
  }
}
</script>
