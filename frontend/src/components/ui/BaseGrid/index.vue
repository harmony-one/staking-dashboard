<template>
  <div>
    <div class="table-body">
      <div
        class="table-column"
        v-for="column in columns"
        :key="column.value"
        :style="column.width ? { flexBasis: column.width } : { flexGrow: 1 }"
      >
        <SortHeaderCell :column="column" :sort="sort" :onClick="orderBy" />

        <div class="table-cell" v-for="item in data" :key="item.address">
          {{
            column.render
              ? column.render(item[column.value])
              : item[column.value]
          }}
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
    SortHeaderCell,
  },
  props: ["data", "columns", "sort"],
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
.table-body {
  display: flex;
  flex-direction: row;

  .table-column {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .table-cell {
      padding: 1rem;
      border-bottom: 1px solid #ddd;
      height: 60px;
      overflow: hidden;
    }
  }
}
</style>
