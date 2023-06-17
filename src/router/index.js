import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import dashboardLayouts from '../layouts/dashboard.vue';
import authLayouts from '../layouts/auth.vue';

import dashboardRoutes from '@/modules/dashboard/dashboard.routes';
import authRoutes from '@/modules/auth/auth.routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: dashboardLayouts,
    children: dashboardRoutes,
    beforeEnter: (to, from, next) => {
      if (store.getters['isAuth'] || localStorage.getItem('token')) {
        if (to.path == '/') {
          if (JSON.parse(localStorage.getItem('user')).roles[0] == 'super-admin')
            next({ name: 'admin-dashboard' });
          else next({ name: 'chef-dashboard' });
        }
        next();
      } else {
        next('/auth/signin');
      }
    },
  },
  {
    path: '/auth',
    component: authLayouts,
    children: authRoutes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
