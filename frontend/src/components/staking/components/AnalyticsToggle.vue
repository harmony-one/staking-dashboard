<template>
  <div class="tabs">
    <span
      :class="{ tabItem: true, active: !value, first: true }"
      @click="() => onChange(false)"
    >
      {{ titlePrefix }} Last Epoch
    </span>
    <span
      :class="{ tabItem: true, active: value }"
      @click="() => onChange(true)"
    >
      {{ titlePrefix }} Live Epoch
    </span>
  </div>
</template>

<script>
export default {
  name: "AnalyticsToggle",
  props: ["value", "onChange", "titlePrefix"]
}
</script>

<style lang="scss">
.tabs {
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;

  .tabItem {
    cursor: pointer;
    color: rgba(85, 91, 104, 0.7);
    // margin-right: 20px;
    font-size: 1.1em;
    font-weight: 500;
    padding: 0 20px;

    &.first {
      padding: 0 20px 0 0;
      border-right: 1px solid #ddd;
    }

    &.active {
      // position: relative;
      // display: inline-block;
      // color: #1b295e;
      color: var(--blue);

      &:after {
        display: none;
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--blue);
        // background-color: #1b295e;
        opacity: 0.8;
        border-radius: 10px;
        bottom: -17px;
      }
    }
  }
}
</style>
