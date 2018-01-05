import Vue from 'vue'

import store from './store'
import App from './App.vue'
import router from './router'
import svgImg from './components/svg/svgimg.vue'
import {Swipe, SwipeItem} from 'mint-ui'


//注册全局组件
Vue.component('svgImg', svgImg)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
