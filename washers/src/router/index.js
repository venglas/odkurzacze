import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/views/Start'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },

    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
