<template>
  <div>
    <div class="table-headings-wrap">

      <div
        class="table-headings"
        v-for="column in columns"
        :key="column.value"
        :style="column.width ? { flexBasis: column.width, minWidth: column.width } : { flexGrow: 1 }"
      >
        <SortHeaderCell :column="column" :sort="sort" :onClick="orderBy" />
      </div>
    </div>

    <div :class="{ 'table-wrap': true, scrollable: scrollable }">
      <div class="table-body">
        <div
          class="table-column"
          v-for="(column, index) in columns"
          :key="index"
          :style="column.width ? { flexBasis: column.width, minWidth: column.width } : { flexGrow: 1 }"
        >
          <div
            class="table-cell"
            v-for="(item, index) in data"
            :key="column.key ? column.key(item) : index"
            @click="(e) => onRowClick(item)"
            @contextmenu.prevent="() => onRowClick(item, true)"
            :style="column.align === 'right' ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }"
          >
            <template v-if="column.render">
              {{ column.render(item[column.value], item) }}
            </template>

            <template v-else-if="column.renderComponent">
              <component
                :is="column.renderComponent"
                :value="item[column.value]"
                :data="item"
              />
            </template>

            <template v-else>
              {{ item[column.value] }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SortHeaderCell from "./SortHeaderCell"

export default {
  name: `base-grid`,
  components: {
    SortHeaderCell
  },
  props: ["data", "columns", "sort", "onRowClick", 'scrollable'],
  methods: {
    orderBy(property) {
      if (this.sort.property === property) {
        this.sort.order = this.sort.order === `asc` ? `desc` : "asc"
      } else {
        this.sort.property = property
        this.sort.order = "asc"
      }
    }
  }
}
</script>

<style lang="scss">

@mixin table-row {
  display: flex;
  flex-direction: row;
  width: calc(100% - 16px);
}

.table-headings-wrap {
  // @include table-row;
  display: flex;
  flex-direction: row;
  position: relative;
  min-height: 48px;
}

.table-wrap {
  /* TODO */
  position: relative;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
  border-bottom: 1px solid var(--light2);
}

.scrollable {
  max-height: calc(100vh - 442px);
}

@media screen and (max-width: 414px) {
  .table-wrap {
    max-height: none;
    overflow-y: hidden;
  }
}

.table-body {
  @include table-row;

  .table-column {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .table-cell {
      display: flex;
      align-items: center;
      padding: 0 var(--unit) 0 0;
      cursor: pointer;
      border-bottom: 1px solid var(--light2);
      min-height: 48px;
      max-height: 48px;
      overflow: hidden;
    }
    .table-cell:nth-child(odd) {
      background: #00ADE810;
    }
    .table-cell:last-child {
      border-bottom: none;
    }
  }
  .table-column:last-child {
    margin-right: calc(-1*var(--unit));
  }
}
</style>
