import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import { userInfoData } from "@/stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/master',
      name: 'master',
      component: () => import('@/views/master/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
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
  console.log(to.path);
  if (to.path === '/login') {
    next();
  } else {
    console.log(userInfoState.userInfo);
    if (Object.keys(userInfoState.userInfo).length === 0) {
      next('/login');
    } else {
      next();
    }
  }

})
export default router
