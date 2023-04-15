import dashboardHome from './dashboard/pages/index.vue';
import orders from './dashboard/pages/orders.vue';
export default [
  {
    path: '/',
    name: 'dashboard',
    component: dashboardHome,
  },
  {
    path: '/orders',
    name: 'orders',
    component: orders,
  }
];
