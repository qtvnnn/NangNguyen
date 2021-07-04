<template>
  <div>
    <div class="content">
      <div class="content-title">
        Advanced Vue.js Component<br />
        Composition With Container<br />
        Components
      </div>
      <span
        >Demo application to show how to separate Vue.js components into</span
      >
      <span>Container components and Presentational Components</span>
    </div>
    <Product :products="listOfProduct" />
    <Articel :articles="listOfArticle"/>
    <div class="footer">© Awesome Company</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from '@/components/product/Product'
import Articel from '@/components/article/Articel'
export default {
  components: {
    Product,
    Articel
  },
  computed: {
    ...mapGetters({
      listOfProduct: 'product/products'
    }),
    ...mapGetters({
      listOfArticle: 'article/articles'
    })
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  async created () {
    this.getArticles()
    this.getProducts()
  },
  methods: {
    onChangeNum (pageSize) {
      this.searchForm.currentPage = 1
      this.searchForm.pageSize = pageSize
      this.getArticles()
    },
    onChangePages (page) {
      this.searchForm.currentPage = page
    },
    getArticles () {
      this.$store.dispatch('article/getArticles', this.searchForm)
    },
    getProducts () {
      this.$store.dispatch('product/getProducts', this.searchForm)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
