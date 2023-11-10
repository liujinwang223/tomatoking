import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userInfo = defineStore("userInfo", {
  persist: {
    enabled: true,//开启数据持久化
    strategies: [
      {
        key: 'userInfo',//给一个要保存的名称
        storage: sessionStorage,//sessionStorage / localStorage 存储方式
      }
    ]
  },
  state: () => ({
    userInfoData: {}, // 用户个人设置
    dicInfo: {}, // 字典管理
    menuList: {}, // 菜单其他设置
  }),
  getters: {

  },
  actions: {
    setData(data: any) {
      this.userInfoData = data;
    },
    setData(data: any) {
      this.dicInfo = data;
    },
    setData(data: any) {
      this.menuList = data;
    },
  },
})
