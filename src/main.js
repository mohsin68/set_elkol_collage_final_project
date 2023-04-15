import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import './assets/style/main.scss';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#1F1F1F',
          yellow: '#F29322',
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
