<template>
  <div id="main-wrapper">
    <form>
      <div
        id="tim-kiem-thong-tin"
        class="box box-form"
      >
        <div class="form-title">
          Thông tin tìm kiếm
        </div>
        <b-form-group
          label="Tên"
          label-for="title"
        >
          <b-form-input
            id="name"
            v-model="searchForm.name"
            type="text"
            required
            placeholder="Nhập tên"
          />
        </b-form-group>
        <b-form-group
          label="Giá"
          label-for="description"
        >
          <b-form-input
            id="price"
            v-model="searchForm.price"
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
          <p class="color-gray-1">
            Tìm thấy {{ totalRows }} kết quả
          </p>
          <b-table
            striped
            bordered
            :no-local-sorting="true"
            :items="listOfProduct"
            :fields="fieldNames"
          >
            <template v-slot:head()="scope">
              <div class="d-inline-block">
                {{ scope.label }}
              </div>
            </template>
            <template v-slot:cell(img)="row">
              <img
                class="avatar"
                :src="row.item.img"
              >
            </template>
            <template v-slot:table-colgroup="scope">
              <col
                v-for="field in scope.fields"
                :key="field.key"
                :style="{ width: field.key === 'stt' ? '3%' : '' }"
              >
            </template>
            <template v-slot:cell(name)="row">
              <router-link :to="`/product/${row.item.name}`">{{
                row.item.name
              }}</router-link>
            </template>
            <template #cell(actions)="row">
              <b-button
                variant="danger"
                @click="info(row.item, row.index, $event.target)"
              >
                Xoá
              </b-button>
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
import { mapGetters } from 'vuex'
import BasePagination from '../common/BasePagination.vue'

export default {
  name: 'ProductList',
  components: {
    BasePagination,
  },
  data() {
    return {
      searchForm: {
        title: '',
        description: '',
        pageSize: 10,
        currentPage: 1,
      },
      totalPages: 0,
      totalRows: 0,
      fieldNames: [
        {
          key: 'img',
          label: 'Avatar',
        },
        {
          key: 'name',
          label: 'Tên',
        },
        {
          key: 'categories[0]',
          label: 'Loại',
        },
        {
          key: 'price',
          label: 'Giá',
        },
        { key: 'actions', label: 'Actions' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      listOfProduct: 'product/products',
    }),
  },
  created() {
    this.getProducts()
  },
  methods: {
    onChangeNum(pageSize) {
      this.searchForm.currentPage = 1
      this.searchForm.pageSize = pageSize
      this.getProducts()
    },
    onChangePages(page) {
      this.searchForm.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar{
  height: 35px;
  width: 35px;
  border-radius: 50%;
}
</style>
