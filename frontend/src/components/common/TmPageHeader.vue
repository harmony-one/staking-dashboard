<template>
  <header class="tm-page-header">

      <div class="tm-page-header-text">
        <div v-if="$slots['title']" class="tm-page-header-title">
          <slot name="title" />
        </div>
        <!-- <div v-if="$slots['subtitle']" class="tm-page-header-subtitle">
          <slot name="subtitle" />
        </div>
        <div v-if="$slots['menu-body']" class="tm-page-header-body">
          <slot name="menu-body" />
        </div> -->
      </div>

      <div v-if="epoch" class="next-epoch">
        <TimePieBlock :time-next-epoch="networkInfo.time_next_epoch" class="time-body" />
      </div>
<!-- 
      <menu class="tm-page-header-menu">
        <slot name="menu" />
      </menu>
      
      <div class="tabs-and-buttons">
        <Tabs v-if="tabs" :tabs="tabs" />
        <div v-if="$slots['header-buttons']" class="header-buttons">
          <slot name="header-buttons" />
        </div>
      </div> -->


  </header>
</template>

<script>
import { mapState } from "vuex"
import Tabs from "common/Tabs"
import TimePieBlock from "./../wallet/TimePieBlock"
export default {
  name: `tm-page-header`,
  components: { 
    Tabs,
    TimePieBlock
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    epoch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(["connection"]),
    ...mapState({ networkInfo: state => state.connection.networkInfo }),
  }
}
</script>

<style scoped lang="scss">


.tm-page-header {
  background: white;
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  color: var(--gray);
  border-bottom: 1px solid var(--light);
}

.tm-page-header-text {
  flex: 1;
}


.next-epoch {
  height: 56;
  flex: 0 0 56px;
}


.header-buttons {
  padding: 0 1rem 1rem 0;
}

.tabs-and-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.tm-page-header-title > div {
  display: inline-block;
}

.tm-page-header-text .tm-page-header-body {
  flex: 1;
  display: flex;
}

.tm-page-header-text .tool-bar i.material-icons {
  font-size: calc(1.375 * var(--x));
}

.tm-page-header-text > div {
  overflow: hidden;
  text-overflow: ellipsis;
}

.tm-page-header-text h2 {
  padding-left: var(--double);
  text-transform: uppercase;
  color: var(--blue);
}

@media screen and (max-width: 414px) {
  
}

</style>
