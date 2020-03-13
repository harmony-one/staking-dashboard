<template>
  <nav class="app-header">
  <!-- <nav class="app-header" :class="{ mobile: !desktop }"> -->
    <div class="container">
      <div class="header-item" :class="{ open: open }">
        <a href="/">
          <img
            class="header-item-logo"
            src="~assets/images/logo-top-right.png"
            alt="Harmony Staking spaceship accelerating into a colourful space sky"
          />
        </a>
        <!-- <template v-if="!desktop">
          <div v-if="open" class="close-menu" @click="close()">
            <i class="material-icons mobile-menu-action">close</i>
          </div>
          <div v-if="!open" class="open-menu" @click="show()">
            <i class="material-icons mobile-menu-action">more_vert</i>
          </div>
        </template> -->
      </div>
      <AppMenu @close="close" />
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex"
import noScroll from "no-scroll"
import AppMenu from "common/AppMenu"
export default {
  name: `app-header`,
  components: { AppMenu },
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

<style scoped language="sass">
.app-header {
  position: relative;
  width: var(--width-side);
  background: white;
  min-height: 100vh;
}

.mobile-menu-action {
  font-size: 1.5rem !important;
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

@media screen and (max-width: 1023px) {
  
}

@media screen and (min-width: 1024px) {
  
}
</style>
