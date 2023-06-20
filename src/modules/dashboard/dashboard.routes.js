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
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.roles[0] === 'super-admin') {
        next();
      } else {
        next({ name: 'chef-dashboard' });
      }
    },
  },
  {
    path: '/chef-dashboard',
    name: 'chef-dashboard',
    component: chefDashboard,
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.roles[0] === 'chef') {
        next();
      } else {
        next({ name: 'admin-dashboard' });
      }
    },
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
