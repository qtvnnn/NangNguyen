<template>
  <div class="hello" id="main-wrapper">
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
import { get as getProducts } from '../data/product.js'
import { get as getArtiles } from '../data/article'
import Product from '@/components/Product'
import Articel from '@/components/Articel'
export default {
  components: {
    Product,
    Articel
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listOfProduct: [],
      listOfArticle: []
    }
  },
  async created () {
    await getProducts({}, 10, 1).then(res => {
      this.listOfProduct = res && res.data ? res.data : []
    })
    await getArtiles({}, 10, 1).then(res => {
      this.listOfArticle = res && res.data ? res.data : []
    })
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
