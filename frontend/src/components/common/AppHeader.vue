<template>

  <div class="container">

    <div class="mobile-menu-button">
      <div v-if="open" class="close-menu" @click="close()">
        <i class="material-icons mobile-menu-action">close</i>
      </div>
      <div v-if="!open" class="open-menu" @click="show()">
        <i class="material-icons mobile-menu-action">more_vert</i>
      </div>
    </div>


    <div class="app-mobile-menu-drop" :class="{ open: open }" @click="close()"></div>

  <nav class="app-header" :class="{ open: open }">
  <!-- <nav class="app-header" :class="{ mobile: !desktop }"> -->
    <div class="container-desktop">
      <div class="header-item" :class="{ open: open }">
        <a href="/">
          <img
            class="header-item-logo"
            src="~assets/images/logo-top-right.png"
            alt="Harmony Staking spaceship accelerating into a colourful space sky"
          />
        </a>
      </div>
      <AppMenu @close="close" />
    </div>

    <div class="container-mobile" :class="{ open: open }">
      <div class="header-item">
        <a href="/">
          <img
            class="header-item-logo"
            src="~assets/images/logo-top-right.png"
            alt="Harmony Staking spaceship accelerating into a colourful space sky"
          />
        </a>
      </div>
      <AppMenu @close="close" />
    </div>
  </nav>

</div>
</template>

<script>
import { mapState } from "vuex"
import noScroll from "no-scroll"
import AppMenu from "common/AppMenu"
export default {
  name: `app-header`,
  components: {
    AppMenu,
  },
  data: () => ({
    open: false,
    desktop: false
  }),
  computed: {
    ...mapState([`session`])
  },
  mounted() {
    this.watchWindowSize()
    window.onresize = this.watchWindowSize
  },
  updated() {
    this.watchWindowSize()
    window.onresize = this.watchWindowSize
  },
  methods: {
    close() {
      this.open = false
      noScroll.off()
    },
    show() {
      this.open = true
      noScroll.on()
    },
    watchWindowSize() {
      const w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )


      if (w >= 1024) {
        this.close()
        this.desktop = true
        return
      } else {
        this.desktop = false
      }
    }
  }
}
</script>

<style scoped lang="scss">

.container {
    background: white;
    height: 100vh;
    overflow: hidden;
}
.app-header {
  position: relative;
  .container-mobile, .container-desktop {
    width: var(--width-side);
    background: white;
  }
  .container-mobile {
    display: none;
    border-right: 1px solid var(--light);
  }
}

.app-mobile-menu-drop {
  opacity: 0;
  width: 0;
  background: black;
  transition: opacity 0.32s ease-out;
  position: fixed;
  z-index: 9997;
}

.mobile-menu-action {
  font-size: 1.5rem !important;
}

.mobile-menu-button {
  display: none;
}

.app-header > .container {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}

.app-header .header-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-bottom: 1px solid var(--light);
}

.header-item img {
  height: 24px;
}

.app-header .header-item a {
  display: inline-block;
  height: 24px;
}

.header-item-logo {
  height: 48px;
}

@media screen and (max-width: 768px) {

  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    .container-desktop {
      display: none;
    }
    .container-mobile {
      display: block;
      transition: transform 0.32s ease-out;
      transform: translateX(-100vw);
    }
    .container-mobile.open {
      transform: translateX(0);
    }
  }

  .app-header.open {
    z-index: 9998;
  }
  .app-mobile-menu-drop.open {
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
  }


  .mobile-menu-button {
    z-index: 9999;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    > div {
      height: 56px;
      padding: var(--unit);
    }
  }
}
</style>
