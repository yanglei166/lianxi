import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import * as ajax from '@/request'
import store from '@/store'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Rem from './rem'
import { BackTop } from '@/components'

Vue.use(BackTop)
Vue.use(Mint)
// 全局混入
Vue.mixin({
  filters: {
    // 判断整个购物车的数量是否满足99
    gt99 (value) {
      return value > 99 ? '99+' : value
    },
    // 处理价钱的2位小数
    tofix2 (value) {
      if (typeof value === 'number') {
        return value.toFixed(2)
      } else {
        if (isNaN(value)) {
          return value
        } else {
          return value.toFixed(2)
        }
      }
    }
  }
})
Vue.prototype.$http = ajax

// 全局的导航守卫
router.beforeEach((to, from, next) => {
  store.commit('editHeaderTitle', to.meta.title)
  if (to.meta.isAuthRequired === true) {
    // 需要权限验证
    // 判断是否已经登录
    if (store.getters.isLogin === true) {
      // 已经登录
      next()
    } else {
      next({
        name: 'login',
        params: {
          to: to.path
        }
      })
    }
  } else {
    next()
  }
})
Vue.config.productionTip = false

new Vue({
  store,
  Rem,
  router,
  render: h => h(App)
}).$mount('#app')
