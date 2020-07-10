<template>
  <div>
    <a
      v-if="!route"
      class="app-menu-item small"
      :href="href"
      @click="close"
      target="_blank"
    >
      <h2 class="app-menu-title"><slot></slot></h2>
    </a>
    <router-link
      class="app-menu-item small"
      to="/terms"
      exact="exact"
      @click.native="close"
      v-else
    >
      <h2 class="app-menu-title"><slot></slot></h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: `LinkLite`,
  props: ["href", "route"]
}
</script>

<style scoped>
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
</style>
