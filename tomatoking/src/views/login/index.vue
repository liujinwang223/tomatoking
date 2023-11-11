<template>
  <div class="backgroundLogin">
    <a-row justify="center" align="center">
      <a-col span="12">
        <div class="tomatoCard">
          <a-row>
            <a-col span="10">
              <div style="margin: 30px; text-align: center">
                <a-image
                  :src="GreenTomatoIcon"
                  title='成熟期'
                  description='这是一个青涩的番茄，俗称火柿子'
                  footerPosition="outer"
                  :preview="false"
                />
              </div>
            </a-col>
            <a-col span="12">
              <div style="margin: 10px">
                】
                <a-typography-title :heading="5">
                  每过完一天， 要努力比早上醒来时更聪明一点
                </a-typography-title>
                <a-divider orientation="center">用户登陆</a-divider>
                <div style="margin: 10px">
                  <a-form :model="form" @submit="handleSubmit">
                    <a-form-item field="name" label="账号">
                      <a-input v-model="form.name" size="large" placeholder="请输入登陆号码" />
                    </a-form-item>
                    <a-form-item field="post" label="密码">
                      <a-input v-model="form.post" size="large" placeholder="请输入密码" />
                    </a-form-item>
                    <a-form-item field="isRead">
                      <a-checkbox v-model="form.isRead">这个点不点无所谓的</a-checkbox>
                    </a-form-item>
                    <a-form-item>
                      <a-button html-type="submit" type="dashed" status="danger"
                        >点击开始使用</a-button
                      >
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
// 登陆名称
const form = ref({
  name: '',
  post: '',
  isRead: false
})
const handleSubmit = (data) => {
  console.log(data)
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