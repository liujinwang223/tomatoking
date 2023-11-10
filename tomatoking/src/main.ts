import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import router from './router'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
const IconFont = Icon.addFromIconFontCn({ src: 'https://at.alicdn.com/t/font_180975_ue66sq60vyd.js' });
const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(IconFont);

app.mount('#app')
