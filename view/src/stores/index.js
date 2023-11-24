import { defineStore } from 'pinia';
// @ts-ignore
export const userInfoData = defineStore("userInfo", {
    // @ts-ignore
    persist: {
        enabled: false,
        strategies: [
            {
                key: 'userInfo',
                storage: sessionStorage,
                path: ['info']
            }
        ],
    },
    state: () => ({
        userInfo: {},
        menuList: [],
    }),
    getters: {},
    actions: {
        setData(data) {
            console.log(data);
            this.userInfo = data;
            // this.dicInfo = data.dicInfo;
        },
        setMenu(data) {
            this.menuList = data.menuList;
        }
    },
});
