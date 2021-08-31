import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import( '../views/Dashboard.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import( '../views/Projects.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import( '../views/Users.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import( '../views/Reports.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import( '../views/Orders.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import( '../views/Teams.vue')
  },
  {
    path: '/archives',
    name: 'Archives',
    component: () => import( '../views/Archives.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import( '../views/Settings.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import( '../views/Chat.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
