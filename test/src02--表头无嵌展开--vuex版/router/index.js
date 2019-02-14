import Vue from 'vue'
import Router from 'vue-router'
import dongTaiBiaoTou from '../pages/dongTaiBiaoTou/dongTaiBiaoTou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dongTaiBiaoTou',
      component: dongTaiBiaoTou
    },
    {
      path: '/',
      redirect:'/dongTaiBiaoTou'
    }
  ]
})
