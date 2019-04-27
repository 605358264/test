import Vue from 'vue'
import Router from 'vue-router'
import dongTaiBiaoTou from '../pages/dongTaiBiaoTou/dongTaiBiaoTou'
import biaoGe from '../pages/biaoge/biaoGe'
import ShuXinBiaoGe from '../pages/shuXinBiaoGe/ShuXinBiaoGe'
import Process from '../pages/Process/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dongTaiBiaoTou',
      component: dongTaiBiaoTou
    },
    {
      path: '/biaoge',
      component: biaoGe
    },
    {
      path: '/shuXinBiaoGe',
      component: ShuXinBiaoGe
    },
    {
      path: '/Process',
      component: Process
    },
    {
      path: '/',
      redirect:'/biaoge'
    }
  ]
})
