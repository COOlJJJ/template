import './assets/main.css'
// import Antd from 'ant-design-vue';  
// import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//导入pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import axiosPlugin from './config/axios'; 

import ArcoDesignVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';




const app = createApp(App)
// 创建pinia
const pinia = createPinia()

//pinia挂载数据持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(axiosPlugin);
// app.use(Antd);
app.use(ArcoDesignVue)  
app.mount('#app')
