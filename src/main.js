import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import './assets/style/main.scss';
import BaseCard from './components/BaseCard.vue';
import VueApexCharts from 'vue-apexcharts';
import axios from './axios';
import './VeeValidate';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


Vue.use(Toast, {
  timeout: 3000,
  position: "bottom-right",
});
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);
Vue.component('base-card', BaseCard);
Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.prototype.$api = axios;

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#F29322',
          dark: '#1F1F1F',
          green: '#519259',
          red: '#F75757',
        },
      },
    },
    icons: {
      iconfont: 'mdiSvg',
    },
  }),
  render: (h) => h(App),
}).$mount('#app');
