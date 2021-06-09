<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="menu-header">
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#" style="border: none">Articles</a>
    </div>
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
    <Product :products="products" />
    <Articel :articles="articles"/>
    <div class="footer">© Awesome Company</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Product from "./components/Product.vue";
import Articel from "./components/Articel.vue";
import { getProducts } from "./product.js";
import { getArtiles } from "./article";

export default {
  name: "App",
  components: {
    HelloWorld,
    Product,
    Articel,
  },

  data() {
    return {
      products: [],
      articles: [],
    };
  },

  methods: {
    async initData() {
      let responseProduct = await getProducts({}, 3, 1);
      this.products = responseProduct.data;
      console.log(this.products);
      let responseArticle = await getArtiles({}, 3, 1);
      this.articles = responseArticle.data;
      console.log(this.articles);
    },
  },

  async created() {
    await this.initData();
  },
};
</script>

<style lang="scss" scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 500px;
  width: 65%;
  margin: auto;
}
.menu-header {
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  a {
    padding-right: 5px;
    padding-left: 5px;
    border-right: 1px solid blue;
  }
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
