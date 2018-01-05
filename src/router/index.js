import Vue from 'vue'
import VueRouter from 'vue-router'



import clothMall from '../pages/clothmall/clothmall.vue'
import dogFood from '../pages/dogfood/dogfood.vue'
import heath from '../pages/heath/heath.vue'
import snackToy from '../pages/snack/snackandtoy.vue'
import dailyThings from '../pages/dailythings/dailythings.vue'
import beauty from '../pages/beauty/beauty.vue'

import main from '../pages/main/main.vue'
import select from '../pages/select/select.vue'
import shopCart from '../pages/shopcart/shopcart.vue'
import userCenter from '../pages/usercenter/usercenter.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/main',
      component: main
    },
    {
      path: '/select',
      component: select
    },
    {
      path: '/shopCart',
      component: shopCart
    },
    {
      path: '/userCenter',
      component: userCenter
    },
    {
      path: '/clothMall',
      component: clothMall
    },
    {
      path: '/dogFood',
      component: dogFood
    },
    {
      path: '/heath',
      component: heath
    },
    {
      path: '/snackToy',
      component: snackToy
    },
    {
      path: '/dailyThings',
      component: dailyThings
    },
    {
      path: '/beauty',
      component: beauty
    },
  ]
})
