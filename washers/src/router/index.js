import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/views/Start'
import VueRouter from 'vue-router'

Vue.use(Router)

//remove hash from URL
// const router = new VueRouter({
//   mode: 'history',
//   history: true
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    }
  ]
});