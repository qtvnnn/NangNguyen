<template>
  <div>
    <div class="content">
      <div class="content-title">
        Advanced Vue.js Component<br>
        Composition With Container<br>
        Components
      </div>
      <span>Demo application to show how to separate Vue.js components into</span>
      <span>Container components and Presentational Components</span>
    </div>
    <Product :products="listOfProduct" />
    <Article :articles="listOfArticle" />
    <div class="footer">
      © Awesome Company
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from '../product/Product.vue'
import Article from '../article/Article.vue'

export default {
  name: 'HomePage',
  components: {
    Product,
    Article,
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
    }
  },
  computed: {
    ...mapGetters({
      listOfProduct: 'product/products',
    }),
    ...mapGetters({
      listOfArticle: 'article/articles',
    }),
  },
  async created() {
    this.getArticles()
    this.getProducts()
  },
  methods: {
    onChangeNum(pageSize) {
      this.searchForm.currentPage = 1
      this.searchForm.pageSize = pageSize
      this.getArticles()
    },
    onChangePages(page) {
      this.searchForm.currentPage = page
    },
    getArticles() {
      this.$store.dispatch('article/getArticles', this.searchForm)
    },
    getProducts() {
      this.$store.dispatch('product/getProducts', this.searchForm)
    },
  },
}
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
  padding-top: 30px;
  display: grid;
  text-align: center;
  &-title {
    font-size: 24px;
  }
}
.footer {
  margin-top: 30px;
  border-top: 1px solid gray;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
