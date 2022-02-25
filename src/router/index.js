import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/FrontView.vue'),
    children: [
      {
        path: '/',
        name: '首頁',
        component: () => import(/* webpackChunkName: "about" */ '../views/indexView.vue')
      },
      {
        path: 'products',
        name: '產品頁',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
      },
      {
        path: 'product/:id',
        name: '產品內頁',
        component: () => import(/* webpackChunkName: "about" */ '../views/Productinside.vue')
      },
      {
        path: 'car',
        name: '購物車',
        component: () => import(/* webpackChunkName: "about" */ '../views/CardataView.vue')
      },
      {
        path: 'test',
        name: '測試',
        component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
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
