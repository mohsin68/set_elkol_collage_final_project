import dashboardHome from './pages/index.vue';
import orders from './pages/orders.vue';
import meals from './pages/meals.vue';
import chiefs from './pages/chiefs.vue';
import delivery from './pages/delivery.vue';
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
