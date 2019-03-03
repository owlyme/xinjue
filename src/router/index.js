import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/pages/mainPage/index.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('@/pages/aboutus/index.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('@/pages/service/index.vue')
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('@/pages/case/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/pages/mainPage/index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/contact/index.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from) {
    return { x: 0, y: 0 }
  }
})
