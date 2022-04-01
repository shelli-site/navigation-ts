import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import BasicLayout from '@/layout/basic-layout.vue'

const routes = [
  {
    path: '/',
    component: BasicLayout,
    meta: {
      title: 'Vite',
    },
    children: [
      {
        path: '/',
        component: Index
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
