<template>
  <a-layout style="width: 100vw; height: 100vh;">
    <a-layout-header>
      <a-row justify="space-between" align="center">
        <a-col :span="12">
          <a-menu mode="horizontal" :default-selected-keys="['1']">
          <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
            <div
              :style="{
            width: '160px',
            height: '30px',
            borderRadius: '2px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }"
            >超级番茄王</div>
          </a-menu-item>
          <a-menu-item key="1">首页</a-menu-item>
          <a-menu-item key="2">热门</a-menu-item>
          <a-menu-item key="3">轻应用</a-menu-item>
          <a-menu-item key="4">个人关注</a-menu-item>
        </a-menu>
        </a-col>
        <a-col :span="3">
          <a-avatar>
            <img
              alt="avatar"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            />
          </a-avatar>
          <span style="margin-left: 10px">超级管理员</span>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="dark">
        <a-menu
          :style="{ width: '200px', height: '100%' }"
          :default-open-keys="['0']"
          :default-selected-keys="['0_2']"
          show-collapse-button
          breakpoint="xl"
          @collapse="onCollapse"
        >
          <a-sub-menu key="0">
            <template #icon><icon-apps></icon-apps></template>
            <template #title>Navigation 1</template>
            <a-menu-item key="0_0">Menu 1</a-menu-item>
            <a-menu-item key="0_1">Menu 2</a-menu-item>
            <a-menu-item key="0_2">Menu 3</a-menu-item>
            <a-menu-item key="0_3">Menu 4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="1">
            <template #icon><icon-bug></icon-bug></template>
            <template #title>Navigation 2</template>
            <a-menu-item key="1_0">Menu 1</a-menu-item>
            <a-menu-item key="1_1">Menu 2</a-menu-item>
            <a-menu-item key="1_2">Menu 3</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="2">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>Navigation 3</template>
            <a-menu-item key="2_0">Menu 1</a-menu-item>
            <a-menu-item key="2_1">Menu 2</a-menu-item>
            <a-sub-menu key="2_2" title="Navigation 4">
              <a-menu-item key="2_2_0">Menu 1</a-menu-item>
              <a-menu-item key="2_2_1">Menu 2</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Message } from "@arco-design/web-vue";
const collapsed = ref(false);
const onClickMenuItem=(key:any)=> {
  Message.info({ content: `You select ${key}`, showIcon: true });
}
const onCollapse = () => {
  collapsed.value = !collapsed.value;
};
</script>
<style scoped>
</style>
