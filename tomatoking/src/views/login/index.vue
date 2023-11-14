<template>
  <div class="backgroundLogin">
    <a-row justify="center" align="center">
      <a-col span="15">
        <div class="tomatoCard">
          <a-row>
            <a-col span="10">
              <div style="margin: 30px; text-align: center">
                <a-image
                  :src="tomatoInfo.icon"
                  :title="tomatoInfo.title"
                  :description="tomatoInfo.context"
                  footerPosition="outer"
                  vertical-align:
                  top
                  :preview="false"
                />
              </div>
            </a-col>
            <a-col span="14">
              <div style="margin: 10px">
                】
                <a-typography-title :heading="5">
                  每过完一天， 要努力比早上醒来时更聪明一点
                </a-typography-title>
                <a-divider orientation="center">用户登陆</a-divider>
                <div style="margin: 10px">
                  <a-form :model="form" @submit="handleSubmit">
                    <a-form-item field="name" label="账号" required>
                      <a-input v-model="form.name" size="large" placeholder="请输入登陆号码" />
                    </a-form-item>
                    <a-form-item field="pwd" label="密码" required>
                      <a-input-password v-model="form.pwd" size="large" placeholder="请输入密码" />
                    </a-form-item>
                    <a-form-item field="isRead">
                      <a-checkbox v-model="form.isRead">这个点不点无所谓的</a-checkbox>
                    </a-form-item>
                    <a-form-item>
                      <a-button html-type="submit" type="dashed" status="danger"
                        >点击开始使用
                      </a-button>
                    </a-form-item>
                  </a-form>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import GreenTomatoIcon from '@/assets/svgLogos/logo.png'
import { Notification } from '@arco-design/web-vue';
import { userAllInfo } from "@/mock/info";
import {useRouter} from "vue-router";
import { userInfoData } from "@/stores";
// 图标说明
const tomatoInfo = ref({
  title: '青涩期',
  context: '这是一个青涩的番茄，俗称火柿子,当然他现在应该叫青涩的火柿子，因为他刚刚起步',
  icon: GreenTomatoIcon
})
// 声明一下路由哈
const router=useRouter();
// 用户信息
const userList=ref(userAllInfo)
// 登陆名称
const form = ref({
  name: '',
  pwd: '',
})
const handleSubmit = async(data) => {
  console.log(data.values.name);
  // 此处是静态登陆
  let key=userList.value.find(e=>data.values.name== e.no);
  if (key!=undefined){
    const userInfoState: any = userInfoData();
    await userInfoState.setData();
    localStorage.setItem('userInfo',key)
    console.log(userInfoState.value);
    Notification.success({
      title: '登陆成功',
      content: `登陆成功！欢迎您${key.nick}`,
    })
    await router.replace('/home')
  }else{
    Notification.error({
      title: '登陆失败',
      content: `请检查账号密码是否有误`,
    })
  }
}
</script>
<style scoped>
.backgroundLogin {
  width: 100vw;
  height: 100vh;
  background: tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tomatoCard {
  margin: 10px;
  padding: 4px;
  background: #f8f8f8;
  border-radius: 10px;
}
</style>