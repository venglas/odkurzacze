import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/views/Start'
import AboutUs from '@/views/AboutUs'
import Offert from '@/views/Offert'
import PriceList from '@/views/PriceList'
import Contact from '@/views/Contact'
import VueRouter from 'vue-router';


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
    },

    {
      path: '/O-nas',
      name: 'AboutUs',
      component: AboutUs
    },

    {
      path: '/Oferta',
      name: 'Offert',
      component: Offert
    },

    {
      path: '/Cennik',
      name: 'PriceList',
      component: PriceList
    },

    {
      path: '/Kontakt',
      name: 'Contact',
      component: Contact
    }
  ]
})
