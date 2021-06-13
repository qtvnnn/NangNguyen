import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import ArticleList from '@/components/ArticleList'
import ProductList from '@/components/ProductList'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HelloWorld,
      isShowLeftMenu: true,
      menuName: 'Dashboard'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      isShowLeftMenu: false,
      expand: false,
      menuName: 'Login'
    },
    {
      path: '/articles',
      name: 'Articles',
      component: ArticleList,
      isShowLeftMenu: true,
      menuName: 'Articles'
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductList,
      isShowLeftMenu: true,
      menuName: 'Products'
    }
  ]
})
export default router
