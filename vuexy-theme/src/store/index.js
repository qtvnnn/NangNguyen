import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './modules/app'
import appConfig from './modules/app-config'
import verticalMenu from './modules/vertical-menu'
// eslint-disable-next-line import/no-cycle
import hoSo from '../modules/ho-so/store'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    common,
    hoSo,
  },
  strict: process.env.DEV,
})
