import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import product from './modules/product'
import article from './modules/article'

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
  modules: {
    counter: counter,
    product: product,
    article: article
  },
  state: {},
  getters: {},
  mutations: {}
})
