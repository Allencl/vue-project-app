import Vue from 'vue'
import VueRouter from 'vue-router';
import ViewUI from 'view-design';

import 'view-design/dist/styles/iview.css';
import "@styles/index.less";  // 全局样式

import App from './App.vue'
import router from './router/config.js'


import http from './http/index';
Vue.prototype.$wisHTTP = http;


// 全局组件
import './packages/index.js';

Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
