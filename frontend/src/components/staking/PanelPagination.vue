<template>
  <div class="transactions-table explorer-card">
    <header>
      <div class="pagination-controls">
        <span class="total-tx-num">{{ txCount }} validators</span>
        <span class="page-controllers">
          <span class="page-navigator">
            <button
              class="btn btn-light btn-icon-only"
              :disabled="pageIndex === 0"
              @click="first()"
            >
              <i class="material-icons" style="width: 40px;">first_page</i>
            </button>
            <button
              class="btn btn-light btn-icon-only"
              :disabled="pageIndex === 0"
              @click="prev()"
            >
              <i class="material-icons" style="width: 40px;"
                >keyboard_arrow_left</i
              >
            </button>
            <span class="pagination-nums"
              >{{ pageIndex + 1 }} / {{ pageCount }}</span
            >
            <button
              class="btn btn-light btn-icon-only"
              :disabled="pageIndex === pageCount - 1"
              @click="next()"
            >
              <i class="material-icons" style="width: 40px;"
                >keyboard_arrow_right</i
              >
            </button>
            <button
              class="btn btn-light btn-icon-only"
              :disabled="pageIndex === pageCount - 1"
              @click="last()"
            >
              <i class="material-icons" style="width: 40px;">last_page</i>
            </button>
          </span>
        </span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "PaginationTable",
  props: ["total", "pagination"],
  data() {
    return {
      pageIndex: 0
    }
  },
  computed: {
    txCount() {
      return this.total
    },
    pageCount() {
      return Math.ceil(this.txCount / this.pagination.pageSize)
    }
  },
  watch: {
    total() {
      this.pageIndex = 0
      this.pagination.pageIndex = 0
    }
  },
  methods: {
    goToPage(index) {
      if (index < 0) index = 0
      if (index >= this.pageCount) index = this.pageCount - 1

      this.pageIndex = index
      this.pagination.pageIndex = index
    },
    first() {
      this.goToPage(0)
    },
    last() {
      this.goToPage(this.pageCount - 1)
    },
    prev() {
      if (this.pageIndex === 0) return
      this.goToPage(this.pageIndex - 1)
    },
    next() {
      if (this.pageIndex === this.pageCount - 1) return
      this.goToPage(this.pageIndex + 1)
    }
  }
}
</script>

<style lang="scss">
.pagination-controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1rem;

  .page-navigator {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .pagination-nums {
    padding: 0 15px;
    margin-left: 8px;
  }

  .btn-light {
    background: transparent;
    border: none;
    cursor: pointer;
    height: 30px;
    width: 30px;
    display: flex;

    i {
      cursor: pointer;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>
