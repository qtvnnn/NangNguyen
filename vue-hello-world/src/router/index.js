import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import ArticleList from '@/components/article/ArticleList'
import Counter from '@/components/Counter'
import ProductList from '@/components/product/ProductList'

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
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter,
      isShowLeftMenu: false,
      menuName: 'Counter'
    }
  ]
})
export default router
