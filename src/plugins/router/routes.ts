import Layout from '../../view/layout/TheLayout.vue';


export const routes = [
    {
        path: '/',
        component: Layout,
        hidden: false,
        meta: {
            title: 'داشبورد',
        },
        children: [],
    },

    {
        path: '/login', name: 'login',
        component: () => import('@view/components/Login.vue'),
        hidden: true,
        meta: {},
    },
]
