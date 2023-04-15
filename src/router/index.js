import Vue from 'vue';
import VueRouter from 'vue-router';
import dashboardLayouts from '../layouts/dashboard.vue';
import authLayouts from '../layouts/auth.vue';

import dashboardRoutes from '@/modules/dashboard/dashboard.routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: dashboardLayouts,
    children: dashboardRoutes,
  },
  {
    path: '/auth',
    component: authLayouts,

  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
