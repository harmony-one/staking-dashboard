<template>
  <menu class="app-menu">
    <div v-if="session.signedIn" class="user-box">
      <div>
        <h3>Your Address</h3>
        <Bech32 :address="session.address || ''" />
      </div>
    </div>
    <TmBtn
      v-else
      id="sign-in"
      class="session-link"
      value="Sign In"
      type="secondary"
      size="small"
      @click.native="signIn()"
    />
    <div class="app-menu-main">
      <router-link
        class="app-menu-item hide-xs"
        to="/portfolio"
        exact="exact"
        title="Portfolio"
        @click.native="close"
      >
        <h2 class="app-menu-title">Portfolio</h2>
        <i class="material-icons">chevron_right</i>
      </router-link>
      <router-link
        class="app-menu-item hide-xs"
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
        class="app-menu-item hide-m"
        to="/terms"
        exact="exact"
        title="Terms"
        @click.native="close"
      >
        <h2 class="app-menu-title">Terms of Service</h2>
      </router-link>

      <router-link
        class="app-menu-item hide-m"
        to="/privacy"
        exact="exact"
        title="Privacy"
        @click.native="close"
      >
        <h2 class="app-menu-title">Privacy Policy</h2>
      </router-link>
    </div>

    <div v-if="session.signedIn" class="sign-out">
      <a id="sign-out" @click="signOut()">
        <i v-tooltip.top="'Sign Out'" class="material-icons">exit_to_app</i>
        Sign Out
      </a>
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

<style scoped lang="scss">
.app-menu {
  position: relative;
  flex-grow: 1;

  .app-menu-main {
    flex-grow: 1;
  }
}

.app-menu .app-menu-item {
  font-weight: bold;
  font-size: 14px;
  color: var(--gray) !important;
}

.app-menu .app-menu-item.router-link-active {
  background: var(--app-fg);
}

.app-menu .app-menu-item.router-link-active i {
  color: white;
}

.app-menu .app-menu-item.router-link-active h2 {
  font-weight: 500;
}

.app-menu-item:hover {
  color: var(--blue);
}

.session-link {
  margin: 2.5rem 1rem 1rem;
}

.user-box {
  margin: var(--unit) 0;
  padding-left: 20px;
  font-size: 14px;
  color: var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    color: var(--bright);
    font-size: var(--m);
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    background: var(--bc-dim);

    &:hover {
      background: var(--bc);
      cursor: pointer;
    }
  }
}

.sign-out {
  font-size: 12px;
  margin: 0 1rem;
  padding: 0.5rem 0.75rem;
  color: var(--text-white);
  border: 2px solid var(--bc);
  border-radius: 0.25rem;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    cursor: pointer;

    i {
      margin-right: 10px;
      font-size: 20px;
    }
  }
}

.app-menu .app-menu-item--link:hover {
  color: var(--link);
}

.app-menu .app-menu-item.router-link-active {
  background: var(--app-fg);
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



.app-menu .app-menu-item.router-link-active i {
  color: white;
}

.app-menu .app-menu-item.router-link-active h2 {
  font-weight: 500;
}

@media screen and (max-width: 1023px) {
  
}

@media screen and (min-width: 1023px) {
  
}
</style>
