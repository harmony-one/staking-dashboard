<template>
  <div :class="['widget-container', type ? type : ''].join(' ')">
    <div class="widget-portfolio-light">
      <div
        v-info-style
        v-if="title && tooltip"
        v-tooltip.top="tooltip"
        class="widget-title"
      >
        {{ title }}
      </div>
      <div v-else-if="title" class="widget-title">
        {{ title }}
      </div>
      <div class="widget-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `widget`,
  props: ["title", "type", "tooltip"]
}
</script>

<style scoped lang="scss">
.widget-container {
  margin-right: var(--unit);
  display: flex;
  flex-direction: column;
  width: 25%;
}

@media screen and (max-width: 1000px) {
  .widget-container {
    width: 100%;
  }
}

.widget-container.connected:not(:last-child) {
  margin-right: 0;
  .widget-portfolio-light {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.widget-portfolio-light {
  background: white;
  border: 1px solid var(--light2);
  border-radius: var(--unit);
  overflow: hidden;
  margin-bottom: var(--unit);
}
.widget-title {
  font-size: 16px;
  color: var(--blue);
  padding: var(--unit);
  padding-bottom: 0;
  text-transform: uppercase;
}

.widget-body {
  padding: var(--unit);
  overflow: hidden;
}

@media screen and (max-width: 414px) {
  .widget-container {
    max-width: calc(100vw - 2 * var(--double));
  }
  .widget-body {
    overflow-x: scroll;
  }
}
</style>
