import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from './main'

import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'
import Login from './components/Login'
import SignUp from './components/SignUp'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'home',
      component: Customers,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/customer/:id',
      name: 'details',
      component: CustomerDetails,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: {
        requiresAuth: false
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
});

export default router;
