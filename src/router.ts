import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/kb',
    component: () => import('@/pages/KnowledgeBaseIndex.vue'),
    children: [
      {
        path: '/section/:sectionId',
        component: () => import('@/component/SimpleSection.vue'),
        children: [

      }
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
