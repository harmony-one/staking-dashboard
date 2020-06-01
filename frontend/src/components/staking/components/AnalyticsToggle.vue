<template>
  <div class="tabs">
    <span
      :class="{ tabItem: true, active: !value, first: true }"
      @click="() => onChange(false)"
    >
      {{ titlePrefix }} Last Election
    </span>
    <div class="divider" />
    <span
      :class="{ tabItem: true, active: value }"
      @click="() => onChange(true)"
    >
      {{ titlePrefix }} Next Election
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
  align-items: baseline;

  .divider {
    display: inline-block;
    height: 25px;
    width: 1px;
    margin: 5px 20px -7px 20px;
    background: #ddd;
  }

  .tabItem {
    cursor: pointer;
    color: rgba(85, 91, 104, 0.7);
    // margin-right: 20px;
    font-size: 0.9em;
    font-weight: 500;
    position: relative;
    display: inline-block;
    text-transform: uppercase;

    &.active {
      // color: #1b295e;
      color: var(--blue);

      &:after {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--blue);
        // background-color: #1b295e;
        opacity: 0.8;
        border-radius: 10px;
        bottom: -16px;
      }
    }
  }
}
</style>
