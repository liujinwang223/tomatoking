import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import { userInfoData } from "@/stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/plan/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    }
  ]
})
router.beforeEach((to,from,next)=>{
  // 模拟url登陆地址导航栏截取
  // const url='http://122.9.41.215/fk_move/MapprList?userid=1815&school=szht6666'
  // let urlOne = url.split('?');
  // let userInfo=urlOne[1].split('&');
  // let userId =userInfo[0].replaceAll('userid=','');
  // let qyId=userInfo[1].replaceAll('school=','');
  const userInfoState: any = userInfoData();
  if (to.path === '/login') {
    next();
  } else {
    if (Object.keys(userInfoState)) {
      console.log(userInfoState);
      next('/login');
    } else {
      console.log(userInfoState.value);
      next();
    }
  }

})
export default router
