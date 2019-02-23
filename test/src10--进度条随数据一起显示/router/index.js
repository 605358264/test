import Vue from 'vue'
import Router from 'vue-router'
import dongTaiBiaoTou from '../pages/dongTaiBiaoTou/dongTaiBiaoTou'
import jingDuTiao from "../pages/jingDuTiao/jingDuTiao";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dongTaiBiaoTou',
      component: dongTaiBiaoTou
    },
    {
      path: '/jingDuTiao',
      component:jingDuTiao
    },
    {
      path: '/',
      redirect:'/dongTaiBiaoTou'
    }
  ]
})
