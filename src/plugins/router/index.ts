import type {App} from 'vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import {routes} from './routes'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),

    routes,
})

export default function (app: App) {
    app.use(router)
}


export {router}
