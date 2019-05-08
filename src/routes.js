import Home from './components/home/Index.vue'
import Register from './components/register/Index.vue'
import Database from './components/database/Index.vue'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/database',
        component: Database
    }
]