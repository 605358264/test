import Vue from "vue";
import Router from "vue-router";
import dongTaiBiaoTou from "../pages/dongTaiBiaoTou/dongTaiBiaoTou";
import TanChu from "../pages/TanChu/TanChu";
import demo from "../pages/demo/demo";
import ChuanSuoKuang from "../pages/chuanSuoKuang/ChuanSuoKuang";
import slot from "../pages/slot/slot";
import child from "../pages/child/child";
import checkBox from "../pages/checkBox/checkBox";
import icons from "../pages/icons/icons";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/TanChu",
      component: TanChu
    },{
      path: "/icons",
      component: icons
    },{
      path: "/dongTaiBiaoTou",
      component: dongTaiBiaoTou
    },{
      path: "/chuanSuoKuang",
      component: ChuanSuoKuang
    },{
      path: "/demo",
      component: demo
    },{
      path: "/slot",
      component: slot
    },{
      path: "/child",
      component: child
    },{
      path: "/checkBox",
      component: checkBox
    },{
      path: "/",
      redirect: "/dongTaiBiaoTou"
    },
  ]
})
