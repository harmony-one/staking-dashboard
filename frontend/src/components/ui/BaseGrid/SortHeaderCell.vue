<template>
  <div
    :class="classNames"
    class="panel-sort-table-header"
    :style="
      column.align === 'right'
        ? { textAlign: 'right', justifyContent: 'flex-end' }
        : { textAlign: 'left', justifyContent: 'flex-start' }
    "
  >
    <template v-if="sort">
      <a
        v-tooltip.top="column.tooltip"
        class="sort-by-link"
        @click="() => onClick(column.value)"
      >
        {{ column.title }}
      </a>
      <i class="material-icons" @click="() => onClick(column.value)"
        >arrow_drop_up</i
      >
    </template>
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
  padding-right: 6px;
  border-bottom: 1px solid var(--bc-dim);
  min-height: 48px;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.sort-by i {
  font-size: var(--lg);
  display: flex;
  cursor: pointer;
  margin: 0 6px 0 6px;
}

.sort-by a {
  display: flex;
  cursor: pointer;
  user-select: none;
  color: var(--dim-black);
  line-height: 20px;
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
