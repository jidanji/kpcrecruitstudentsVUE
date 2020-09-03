import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../pages/Login/index.vue')
    },
    {
        path: '/',
        name: 'Home',
        redirect:'/user',
        component:()=>
            import ( /* webpackChunkName: "about" */ '../component/layout.vue'),
        children:[
            {
                path: '/user',
                name: 'User',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/User/index.vue')
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/About.vue')
            },
            {
                path: '/table',
                name: 'Table',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/Home.vue')
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router