import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import WebTemplate from '@ugitech/web-template';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
Vue.use(WebTemplate);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
