import dashboardHome from './dashboard/pages/index.vue';
import orders from './dashboard/pages/orders.vue';
import meals from './dashboard/pages/meals.vue';
import chiefs from './dashboard/pages/chiefs.vue';
import delivery from './dashboard/pages/delivery.vue';
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
  },
  {
    path: '/meals',
    name: 'meals',
    component: meals,
  },
  {
    path: '/chiefs',
    name: 'chiefs',
    component: chiefs,
  },
  {
    path: '/delivery',
    name: 'Delivery Men',
    component: delivery
  }
];
