import Vue from 'vue'
import VueRouter from 'vue-router'
import err404 from "../views/err404.vue"
import home from "../views/HomeView.vue"
import layout from "../layout"
Vue.use(VueRouter)

const routes = [

  {
    path: '/404',
    name: '404',
    component: err404
  },
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: home,
      meta: { title: '首页' }
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
