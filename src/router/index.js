import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import ItemView from '../views/ItemView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ListView
        },
        {
            path: '/item/:id',
            name: 'item',
            component: ItemView
        },
    ]
})

export default router
