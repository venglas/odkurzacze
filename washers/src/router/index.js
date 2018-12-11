import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/views/Start'
import AboutUs from '@/views/AboutUs'
import OurOffert from '../components/OurOffert'
import PriceList from '@/views/PriceList'
import Contact from '@/views/Contact'
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