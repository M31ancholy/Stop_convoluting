import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import { Button } from 'vant';
import 'vant/lib/index.css'

// 创建 Vue 应用实例
const app = createApp(App);

// 使用 .use() 在应用实例上注册 Vant Button 组件
app.use(Button);

// 挂载应用实例到 DOM
app.mount('#app');
