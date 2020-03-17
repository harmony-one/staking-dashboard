<template>
  <span :class="percentageChangeClass">
    (
    <i>{{ sign }}</i
    >{{ amount | percent | notAvailable }} from the previous epoch )
  </span>
</template>

<script>
export default {
  name: `PercentageChange`,
  filters: {
    percent: value =>
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
      }).format(Math.round(value * 10000) / 10000) + `%`
  },
  props: {
    amount: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    sign() {
      return this.amount >= 0 ? "+" : ""
    },
    percentageChangeClass() {
      return {
        percentageChangeContainer: true,
        red: this.amount < 0,
        green: this.amount > 0
      }
    }
  }
}
</script>
<style lang="scss">
.percentageChangeContainer {
  font-size: 14px;
  font-style: italic;

  i {
    font-size: 16px;
  }

  &.red {
    color: var(--red);
  }

  &.green {
    color: var(--success);
  }
}
</style>
