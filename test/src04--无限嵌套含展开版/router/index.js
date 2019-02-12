import Vue from 'vue'
import Router from 'vue-router'
import dongTaiBiaoTou from '../pages/dongTaiBiaoTou/dongTaiBiaoTou'
import TanChu from '../pages/TanChu/TanChu'
import demo from '../pages/demo/demo'
import Addpage from "../pages/AddPage/Addpage";

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/TanChu',
      component:TanChu
    },
    {
      path: '/dongTaiBiaoTou',
      component:dongTaiBiaoTou
    },
    {
      path: '/AddPage',
      component:Addpage
    },

    {
      path: '/demo',
      component:demo
    },
    {
      path: '/',
      redirect:'/dongTaiBiaoTou'
    },

  ]
})
