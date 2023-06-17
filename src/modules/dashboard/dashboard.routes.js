import dashboardHome from './pages/index.vue';
import orders from './pages/orders.vue';
import meals from './pages/meals.vue';
import chiefs from './pages/chiefs.vue';
import delivery from './pages/delivery.vue';
import chefDashboard from './pages/chef-dashboard.vue';

export default [
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: dashboardHome,
  },
  {
    path: '/chef-dashboard',
    name: 'chef-dashboard',
    component: chefDashboard,
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
    component: delivery,
  },
];
