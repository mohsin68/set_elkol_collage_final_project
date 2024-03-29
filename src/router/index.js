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
    redirect: '/admin-dashboard',
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (store.getters['isAuth'] || localStorage.getItem('token')) {
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
