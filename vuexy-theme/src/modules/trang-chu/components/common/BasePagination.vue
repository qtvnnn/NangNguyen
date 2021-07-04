<template>
  <div class="pagination">
    <div>
      Số trang mỗi trang
      <div class="d-inline-block">
        <b-form-select
          v-model="pageSize"
          class="border-radius-0"
          :options="PAGE_NUMBER_OPTIONS"
          @change="onChangeNum()"
        />
      </div>
    </div>
    <div
      v-show="totalRows > 0"
      class="ml-auto"
    >
      <ul class="page-selection">
        <li
          class="first border-left-top-bottom"
          :class="isFirstPage ? 'disabled' : ''"
          @click="onToFirstPage()"
        >
          <a>←</a>
        </li>
        <li
          class="prev border-left-top-bottom"
          :class="isFirstPage ? 'disabled' : ''"
          @click="onPrev()"
        >
          <a>«</a>
        </li>
        <template v-for="(page, index) of pages">
          <li
            :key="index"
            class="border-left-top-bottom"
            :disabled="page.isDisabled"
            :class="{ active: isPageActive(page.name) }"
            @click="onClickPage(page.name)"
          >
            <a>
              {{ page.name }}
            </a>
          </li>
        </template>
        <li
          class="next border-left-top-bottom"
          :class="isLastPage ? 'disabled' : ''"
          @click="onNext()"
        >
          <a>»</a>
        </li>
        <li
          class="last"
          :class="isLastPage ? 'disabled' : ''"
          @click="onToLastPage()"
        >
          <a>→</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { PAGE_NUMBER_OPTIONS } from '../../constants/pagination'

export default {
  name: 'BasePagination',
  components: {},
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    totalRows: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pageSize: 10,
      PAGE_NUMBER_OPTIONS,
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1
      }

      return this.currentPage - 1
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages,
      )
    },
    pages() {
      const range = []

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        if (i > 0) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage,
          })
        }
      }

      return range
    },
    isFirstPage() {
      return this.currentPage === 1
    },
    isLastPage() {
      return this.currentPage === this.totalPages
    },
  },
  methods: {
    onPrev() {
      this.$emit('changePages', this.currentPage - 1)
    },
    onNext() {
      this.$emit('changePages', this.currentPage + 1)
    },
    onChangeNum() {
      this.$emit('changeNum', this.pageSize)
    },
    onToFirstPage() {
      this.$emit('changePages', 1)
    },
    onToLastPage() {
      this.$emit('changePages', this.totalPages)
    },
    onClickPage(page) {
      this.$emit('changePages', page)
    },
    isPageActive(page) {
      return this.currentPage === page
    },
  },
}
</script>

<style scoped></style>
