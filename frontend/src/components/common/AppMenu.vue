<template>
  <menu class="app-menu">
    <div v-if="session.signedIn" class="user-box">
      <div>
        <h3>Your Address</h3>
        <Bech32 :session="session" :address="session.address" :evmAddress="session.evmAddress || ''" />
      </div>
    </div>

    <!-- <div v-if="session.signedIn" class="sign-out">
      <a id="sign-out" @click="signOut()">
        <i v-tooltip.top="'Sign Out'" class="material-icons">exit_to_app</i>
        Sign Out
      </a>
    </div>

    <div v-else class="sign-out">
      <a id="sign-out" @click="signIn()">
        <i v-tooltip.top="'Sign In'" class="material-icons">exit_to_app</i>
        Sign In
      </a>
    </div>-->

    <div class="app-menu-main">
      <router-link
        id="menu_item_portfolio"
        class="app-menu-item"
        :to="'/portfolio/' + getChainTitle"
        exact="exact"
        title="Portfolio"
        @click.native="close"
      >
        <svgicon name="profile" width="20" height="20"></svgicon>
        <h2 class="app-menu-title">Portfolio</h2>
        <i class="material-icons">chevron_right</i>
      </router-link>
      <router-link
        id="menu_item_validators"
        class="app-menu-item"
        :to="'/validators/' + getChainTitle"
        title="Validators"
        @click.native="close"
      >
        <svgicon name="validators" width="20" height="20"></svgicon>
        <h2 class="app-menu-title">Validators</h2>
        <i class="material-icons">chevron_right</i>
      </router-link>
      <router-link
        id="menu_item_global"
        class="app-menu-item"
        :to="'/analytics/' + getChainTitle"
        title="Analytics"
        @click.native="close"
      >
        <svgicon name="world" width="20" height="20"></svgicon>
        <h2 class="app-menu-title">Analytics</h2>
        <i class="material-icons">chevron_right</i>
      </router-link>

      <!-- <router-link
        class="app-menu-item hide-xs"
        to="/proposals"
        title="Proposals"
        @click.native="close"
      >
        <h2 class="app-menu-title">
          Proposals
        </h2>
        <i class="material-icons">chevron_right</i>
      </router-link>-->

      <!-- <router-link
        class="app-menu-item hide-xs"
        to="/transactions"
        exact="exact"
        title="Transactions"
        @click.native="close"
      >
        <h2 class="app-menu-title">Activity</h2>
        <i class="material-icons">chevron_right</i>
      </router-link>-->

      <router-link
        id="menu_item_networks"
        class="app-menu-item"
        to="/networks"
        exact="exact"
        title="Networks"
        @click.native="close"
      >
        <svgicon name="network" width="20" height="20"></svgicon>
        <h2 class="app-menu-title">Networks</h2>
        <i class="material-icons">chevron_right</i>
      </router-link>

      <!-- <router-link
        class="app-menu-item hide-m"
        to="/about"
        exact="exact"
        title="About"
        @click.native="close"
      >
        <h2 class="app-menu-title">About</h2>
      </router-link>-->

      <!-- <router-link
        class="app-menu-item hide-m"
        to="/careers"
        exact="exact"
        title="Careers"
        @click.native="close"
      >
        <h2 class="app-menu-title">Careers</h2>
      </router-link>-->

      <!-- <router-link
        class="app-menu-item hide-m"
        to="/security"
        exact="exact"
        title="Security"
        @click.native="close"
      >
        <h2 class="app-menu-title">Security</h2>
      </router-link>-->

      <router-link
        v-if="session.signedIn"
        to="#"
        class="app-menu-item small"
        exact="exact"
        title="signout"
        @click.native="signOut()"
      >
        <h2 class="app-menu-title">Sign Out</h2>
      </router-link>

      <router-link
        v-else
        to="#"
        class="app-menu-item small"
        exact="exact"
        title="signin"
        @click.native="signIn()"
      >
        <h2 class="app-menu-title">Sign In</h2>
      </router-link>

      <a
        class="app-menu-item small"
        href="https://cxone.harmony.one/"
        @click="close"
        target="_blank"
      >
        <h2 class="app-menu-title">Cross Shard Transfer</h2>
      </a>

      <a
        class="app-menu-item small"
        href="https://snapshot.org/#/harmony-mainnet.eth/"
        @click="close"
        target="_blank"
      >
        <h2 class="app-menu-title">Governance</h2>
      </a>

      <a
        class="app-menu-item small"
        href="https://docs.harmony.one/home/validators"
        @click="close"
        target="_blank"
      >
        <h2 class="app-menu-title">Become a Validator</h2>
      </a>

      <router-link
        class="app-menu-item small"
        to="/terms"
        exact="exact"
        title="Terms"
        @click.native="close"
      >
        <h2 class="app-menu-title">Terms of Service</h2>
      </router-link>

      <router-link
        class="app-menu-item small"
        to="/privacy"
        exact="exact"
        title="Privacy"
        @click.native="close"
      >
        <h2 class="app-menu-title">Privacy Policy</h2>
      </router-link>
 <!--
      <a
        class="app-menu-item small"
        href="https://www.harmonyvalidators.com/"
        target="_blink"
        title="dApps & Services"
      >
        <h2 class="app-menu-title">dApps & Services</h2>
      </a>


      <router-link
        class="app-menu-item small"
        to="#"
        exact="exact"
        title="Terms"
        @click.native="feedback"
      >
        <h2 class="app-menu-title">Feedback</h2>
      </router-link>-->


    </div>

    <ConnectedNetwork />
  </menu>
</template>

<script>
import noScroll from "no-scroll"
import Bech32 from "common/Bech32"
import ConnectedNetwork from "common/TmConnectedNetwork"
import TmBtn from "common/TmBtn"
import { mapState, mapGetters } from "vuex"
import { atoms, viewDenom, shortDecimals } from "scripts/num.js"
export default {
  name: `app-menu`,
  components: {
    Bech32,
    ConnectedNetwork,
    TmBtn
  },
  filters: {
    atoms,
    viewDenom,
    shortDecimals
  },
  computed: {
    ...mapState([`session`]),
    ...mapState({ networkConfig: state => state.connection.networkConfig }),
    ...mapGetters([`liquidAtoms`, `totalAtoms`, `bondDenom`]),
    getChainTitle() {
      return this.networkConfig.chain_title
    }
  },
  methods: {
    feedback() {
      console.log("feedback")
    },
    close() {
      this.$emit(`close`)
      noScroll.off()
    },
    signOut() {
      if (this.session.sessionType === "mathwallet" && window.harmony) {
        window.harmony
          .forgetIdentity()
          .then(() => {})
          .catch(err => {})
      } else if (this.session.sessionType === "onewallet" && window.onewallet) {
        window.onewallet
          .forgetIdentity()
          .then(() => {})
          .catch(err => {})
      }
      this.$emit(`close`)
      this.$store.dispatch(`signOut`)
    },
    signIn() {
      this.$router.push(`/welcome`)
      this.$emit(`close`)
    }
  }
}
</script>

<style scoped>
/* .app-menu-main {
  border-top: 1px solid var(--light);
} */

.sign-out,
.session-link {
  margin: var(--unit) 0;
  padding-left: var(--unit);
  font-size: 14px;
  color: var(--gray) !important;
}
.sign-out a {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--gray);
  cursor: pointer;
}

.sign-out a > i {
  margin-right: 10px;
  font-size: 20px;
}

.user-box {
  margin: var(--unit) 0;
  padding-left: 20px;
  padding-bottom: 12px;
  font-size: 14px;
  color: var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light);
}

.app-menu {
  position: relative;
  height: 100%;
  background: white;
  color: var(--gray);
  min-height: calc(100vh - 56px);
}

.app-menu-item {
  margin: var(--unit) 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  padding: var(--half) 0 var(--half) var(--unit);
  color: var(--gray);
  border-left: 4px solid var(--gray);
  cursor: pointer;
}
.app-menu-item:nth-child(5) {
  border-top: 1px solid var(--light);
  padding-top: var(--unit);
}

.app-menu-item.small {
  font-weight: normal;
  border-left-color: transparent !important;
}

.app-menu-item h2 {
  flex: 1;
  margin-left: 5px;
  display: inline-block;
}
.app-menu-item i {
  padding-right: var(--half);
  align-self: flex-end;
}
.app-menu-item:hover,
.app-menu-item:active,
.app-menu-item.router-link-active {
  color: var(--blue);
  border-left: 4px solid var(--blue);
}

.app-menu-item:hover {
  color: var(--blue);
}

.app-menu-item:hover > .svg-icon {
  fill: var(--blue);
}

.router-link-active > .svg-icon {
  fill: var(--blue);
}

@media screen and (max-width: 1023px) {
}

@media screen and (min-width: 1023px) {
}
</style>
