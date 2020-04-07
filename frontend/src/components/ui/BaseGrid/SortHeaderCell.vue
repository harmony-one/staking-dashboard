<template>
  <div :class="classNames" class="panel-sort-table-header"
    :style="column.align === 'right' ? { textAlign: 'right' } : { textAlign: 'left' }"
  >
    <a
      v-if="sort"
      v-tooltip.top="column.tooltip"
      class="sort-by-link"
      @click="() => onClick(column.value)"
    >
      {{ column.title }}
      <i class="material-icons">arrow_drop_up</i>
    </a>
    <span v-else>{{ column.title }}</span>
  </div>
</template>

<script>
export default {
  name: `panel-sort`,
  props: {
    sort: {
      type: Object,
      default: null
    },
    column: {
      type: Object,
      required: true
    },
    onClick: {
      type: Function,
      default: null
    }
  },
  computed: {
    classNames() {
      const isActive = this.sort.property === this.column.value

      return {
        "sort-by": !!this.sort,
        active: isActive,
        desc: isActive && this.sort.order === `desc`,
        asc: isActive && this.sort.order === `asc`
      }
    }
  }
}
</script>

<style>
.panel-sort-table-header {
  font-size: var(--m);
  padding: var(--unit) 0;
  padding-right:  var(--quarter);
  border-bottom: 1px solid var(--bc-dim);
  min-height: 50px;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: bold;
}

.sort-by i {
  font-size: var(--lg);
  position: relative;
  top: 6px;
  right: 4px;
}

.sort-by a {
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  color: var(--dim-black);
}

.sort-by a:hover {
  color: var(--link);
}

.sort-by.active a {
  color: var(--txt-black);
}

.sort-by.asc i {
  color: var(--tertiary);
}

.sort-by.desc i {
  transform: rotate(180deg);
  color: var(--tertiary);
}
</style>
