import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: {
            title: 'Knowledge Base - Login',
        },
    },
    {
        path: '/kb',
        component: () => import('@/pages/KnowledgeBase/KnowledgeBasePage.vue'),
        children: [
            {
                path: '',
                component: () => import('@/pages/KnowledgeBase/HomePage.vue'),
            },
            {
                path: '/section/:sectionId',
                component: () => import('@/pages/KnowledgeBase/SimpleNoteSection.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('@/pages/KnowledgeBase/SimpleNote.vue'),
                    },
                    {
                        path: '/note/:noteId',
                        component: () => import('@/pages/KnowledgeBase/SimpleNote.vue'),
                        props: true,
                    }
                ],
                props: true,
            }
        ],
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
