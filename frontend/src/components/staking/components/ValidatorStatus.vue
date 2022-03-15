<template>
  <div class="status-container">
    <span
      :class="status_class"
      class="validator-status"
      :title="status_detailed"
      >{{ status }}</span
    >
  </div>
</template>

<script>


      // removed from span element v-tooltip.top="tooltips.v_list[status_class]"


import tooltips from "src/components/tooltips"

const toClassName = text => text.toLowerCase().replace(/ /g, "_")

export default {
  name: `validator-status`,
  props: ["data"],
  data: () => ({
    tooltips
  }),
  computed: {
    status() {
      if (
        this.data.jailed ||
        this.data.tombstoned ||
        this.data.status === 0 ||
        this.data.active === false
      )
        return `Not elected`
      return `Elected`
    },
    status_class() {
      return toClassName(this.status)
    },
    status_detailed() {
      if (this.data.jailed) return `Temporally banned from the network`
      if (this.data.tombstoned) return `Banned from the network`
      if (this.data.status === 0) return `Banned from the network`
      return false
    }
  }
}
</script>
<style scoped lang="scss">
.status-container {
}

.validator-status {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: normal;
  padding: var(--half) var(--half) 6px var(--half);
  border: 1px solid;
  border-radius: var(--unit);
}

.validator-status.inactive {
  color: red;
  border-color: red;
}

.validator-status.elected {
  color: var(--blue);
  border-color: var(--blue);
}
</style>
