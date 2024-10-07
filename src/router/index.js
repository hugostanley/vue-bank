import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import SignUpView from '../views/SignUp.vue'
import AppView from '../views/App.vue'
import TransferView from '../views/Transfer.vue'
import TransactionsView from '../views/Transactions.vue'
import DepositView from '../views/Deposit.vue'

// Similar to the newer version of react router where routes are defined in an
// object.
//
// A cool thing is that this router variable can be imported and used outside of
// a vue component. See utils/store.js
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/app',
      children: [
        {
          path: "",
          name: 'app',
          component: AppView,
        },
        {
          path: 'transfer',
          name: 'transfer',
          component: TransferView
        },
        {
          path: 'deposit',
          name: 'deposit',
          component: DepositView
        },
        {
          path: 'transactions',
          name: 'transactions',
          component: TransactionsView
        },
      ]
    },
  ]
})

// This is called a navigation guard. So something similar with a middleware. I
// implemented a simple, not so secure auth with it
router.beforeEach((to, from) => {
  if (to.name === 'app') {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'), "null")
    loggedInUser = !!loggedInUser

    if (!loggedInUser) {
      return { name: 'login' }
    }

    return loggedInUser

  }

  if (to.name === 'login' || to.name === 'signup') {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'), "null")
    if (loggedInUser) {
      return { name: 'app' }
    }
  }
  return true
})

export default router
