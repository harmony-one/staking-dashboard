<template>
  <menu class="app-menu">
    
    <div v-if="session.signedIn" class="user-box">
      <div>
        <h3>Your Address</h3>
        <Bech32 :address="session.address || ''" />
      </div>
    </div>

    <div v-if="session.signedIn" class="sign-out">
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
    </div>

    <div class="app-menu-main">
      <router-link
        class="app-menu-item"
        to="/portfolio"
        exact="exact"
        title="Portfolio"
        @click.native="close"
      >
        <h2 class="app-menu-title">Portfolio</h2>
        <i class="material-icons">chevron_right</i>
      </router-link>
      <router-link
        class="app-menu-item"
        to="/validators"
        title="Validators"
        @click.native="close"
      >
        <h2 class="app-menu-title">Validators</h2>
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
        class="app-menu-item"
        to="/networks"
        exact="exact"
        title="Networks"
        @click.native="close"
      >
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
        class="app-menu-item"
        to="/terms"
        exact="exact"
        title="Terms"
        @click.native="close"
      >
        <h2 class="app-menu-title">Terms of Service</h2>
      </router-link>

      <router-link
        class="app-menu-item"
        to="/privacy"
        exact="exact"
        title="Privacy"
        @click.native="close"
      >
        <h2 class="app-menu-title">Privacy Policy</h2>
      </router-link>
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
    ...mapGetters([`liquidAtoms`, `totalAtoms`, `bondDenom`])
  },
  methods: {
    close() {
      this.$emit(`close`)
      noScroll.off()
    },
    signOut() {
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


.app-menu-main {
  border-top: 1px solid var(--light);
}

.sign-out, .session-link {
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
  font-size: 14px;
  color: var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}
.app-menu-item h2 {
  flex: 1;
  display: inline-block;
}
.app-menu-item i {
  padding-right: var(--half);
  align-self: flex-end;
}
.app-menu-item:hover, .app-menu-item.router-link-active {
  color: var(--link);
  border-left: 4px solid var(--blue);
}

.app-menu-item:hover {
  color: var(--blue);
}




@media screen and (max-width: 1023px) {
  
}

@media screen and (min-width: 1023px) {
  
}
</style>