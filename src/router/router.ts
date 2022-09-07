import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/Navbar.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: 'Home'
        }
    },
    // {
    //     path: '/library',
    //     name: 'Library',
    //     component: () => import('../views/About.vue'),
    //     meta: {
    //         title: 'Library'
    //     }
    // },
    // {
    //     path: '/friends',
    //     name: 'Friends',
    //     component: () => import('../views/Contact.vue'),
    //     meta: {
    //         title: 'Friends'
    //     }
    // },
    
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
