<template>
  <div id="main-wrapper">
    <form>
      <div id="tim-kiem-thong-tin" class="box box-form">
        <div class="form-title">Thông tin tìm kiếm</div>
        <b-form-group label="Tên" label-for="title">
          <b-form-input
            v-model="searchForm.name"
            id="name"
            type="text"
            required
            placeholder="Nhập tên"
          />
        </b-form-group>
        <b-form-group label="Giá" label-for="description">
          <b-form-input
            v-model="searchForm.price"
            id="price"
            type="text"
            required
            placeholder="Nhập giá"
          />
        </b-form-group>
        <b-form-group class="border-bottom-form padding-bottom-20">
          <b-button
            class="btn search-information-btn d-block float-right"
            @click="layDanhSachHoSoPhanTrang()"
          >
            TÌM KIẾM
          </b-button>
        </b-form-group>
        <div class="box-form-result">
          <p class="color-gray-1">Tìm thấy {{ totalRows }} kết quả</p>
          <b-table
            striped
            bordered
            :no-local-sorting="true"
            :items="listOfArticle"
            :fields="fieldNames"
          >
            <template v-slot:head()="scope">
              <div class="d-inline-block">
                {{ scope.label }}
              </div>
            </template>
            <template v-slot:table-colgroup="scope">
              <col
                v-for="field in scope.fields"
                :key="field.key"
                :style="{ width: field.key === 'stt' ? '3%' : '' }"
              />
            </template>
            <template v-slot:cell(title)="row">
              <router-link :to="`/product/${row.item.name}`">{{
                row.item.name
              }}</router-link>
            </template>
          </b-table>
        </div>
        <BasePagination
          :total-pages="totalPages"
          :total-rows="totalRows"
          :current-page="searchForm.currentPage"
          @changePages="onChangePages($event)"
          @changeNum="onChangeNum($event)"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BasePagination from '@/components/common/BasePagination'
import { get as getArticle } from '../data/article.js'

export default {
  name: 'ProductList',
  components: {
    BasePagination
  },
  data () {
    return {
      searchForm: {
        title: '',
        description: '',
        pageSize: 10,
        currentPage: 1
      },
      totalPages: 0,
      totalRows: 0,
      listOfArticle: [],
      fieldNames: [
        {
          key: 'name',
          label: 'Tên'
        },
        {
          key: 'categories[0]',
          label: 'Loại'
        }
      ]
    }
  },
  async created () {
    await getArticle({}, 10, 1).then(res => {
      this.listOfArticle = res && res.data ? res.data : []
    })
  },
  methods: {
    onChangeNum (pageSize) {
      this.searchForm.currentPage = 1
      this.searchForm.pageSize = pageSize
      this.layDanhSachHoSoPhanTrang()
    },
    onChangePages (page) {
      this.searchForm.currentPage = page
    },
    async layDanhSachHoSoPhanTrang () {
      await getArticle({}, this.searchForm.pageSize, this.searchForm.currentPage).then(res => {
        this.listOfArticle = res && res.data ? res.data : []
      })
    }
  }
}
</script>

<style scoped></style>
