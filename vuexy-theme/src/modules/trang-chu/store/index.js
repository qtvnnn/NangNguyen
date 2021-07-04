import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import article from './modules/article'

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
  modules: {
    product,
    article,
  },
  state: {},
  getters: {},
  mutations: {},
})
