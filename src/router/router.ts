import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/Navbar.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Container,
        children: [
            {
                path: '/',
                component: Home
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router