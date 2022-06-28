import Vue from 'vue'
import Router from 'vue-router'
import err404 from "../views/err404.vue"
import layout from "@/layout"
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/login/index")
  },

  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import("@/views/Home/index"),
      meta: { title: '首页' }
    }]
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import("@/views/mine/index")
  },
  {
    path: '/404',
    name: '404',
    component: err404
  },
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router