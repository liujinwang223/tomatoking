import { defineStore } from 'pinia'
export const userInfoData = defineStore("userInfo", {
  // @ts-ignore
  persist: {
    enabled: false,//开启数据持久化
    strategies: [
      {
        key: 'userInfo',//给一个要保存的名称
        storage: sessionStorage,//sessionStorage / localStorage 存储方式
        path: ['info']
      }
    ],
  },
  state: () => ({
    userInfo: {},
    menuList:[],
  }),
  getters: {

  },
  actions: {
    setData(data: any) {
      console.log(data);
      this.userInfo = data;
      // this.dicInfo = data.dicInfo;
    },
    setMenu(data:any){
      this.menuList = data.menuList;
    }
  },
})
