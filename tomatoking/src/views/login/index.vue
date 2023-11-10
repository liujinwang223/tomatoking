<template>
  <div class="backgroundLogin">
    <a-row justify="center" align="center">
      <a-col span="12">
        <div class="tomatoCard">
         <a-row>
           <a-col span="10">
            <div style="margin: 10px">
              <a-image
                width="200"
                height="200"
                :preview="false"
                :src="GreenTomatoIcon"
              >
              </a-image>
            </div>
           </a-col>
           <a-col span="12">
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
                    <a-button html-type="submit" type="dashed" status="danger">点击开始使用</a-button>
                  </a-form-item>
                </a-form>
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
import GreenTomatoIcon from "@/assets/projectLogoGroup/greenTomato.svg"
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
