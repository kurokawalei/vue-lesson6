import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'products',

        component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
      },
      {
        path: 'product/:id',

        component: () => import(/* webpackChunkName: "about" */ '../views/Productinside.vue')
      },
      {
        path: 'car',

        component: () => import(/* webpackChunkName: "about" */ '../views/CardataView.vue')
      }
    ]
  }, {
    path: '/admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboredView.vue'),
    children: [

      {
        path: 'products',

        component: () => import(/* webpackChunkName: "about" */ '../views/AdminProducts.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'

})

export default router
