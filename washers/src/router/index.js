import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/views/Start'
import AboutUs from '@/views/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },

    {
      path: '/O-nas',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
