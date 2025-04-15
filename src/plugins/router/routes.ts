import Layout from '../../view/layout/TheLayout.vue';


export const routes = [
    {
        path: '/',
        component: Layout,
        hidden: false,
        meta: {
            title: 'داشبورد',
        },
        children: [
            {
                path: 'settings',
                component: () => import('@/view/Components/Settings/Settings.vue'),
            },
            {
                path: 'support',
                component: () => import('@/view/Components/Support/Support.vue'),
            }
        ],
    },

    {
        path: '/login', name: 'login',
        component: () => import('@view/components/Login.vue'),
        hidden: true,
        meta: {},
    },
]
