import Vue from 'vue';
import '@/utils/env.setting';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import locale from 'element-ui/lib/locale/lang/en'; // lang i18n

// 添加本地国际化功能 Vue.prototype.$i18n(key)
// ;
import i18n from '@/lang';

import '@/styles/index.scss'; // global css

import App from './App';
import router from './router';
import store from './store';

import '@/icons'; // icon
import '@/permission'; // permission control

import '@/utils/i18n';

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;
window.Vue = Vue;
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
});
