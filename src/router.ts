import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from './views/auth/Login.vue';
import Register from './views/auth/Register.vue';
import { useAuth } from './store/useAuth';
import Dashboard from './views/Dashboard.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: '/ingresar',
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    {
        path: '/ingresar',
        name: 'Login',
        component: Login,
        meta: {
            guest: true
        }
    },
    {
        path: '/registrarse',
        name: 'Register',
        component: Register,
        meta: {
            guest: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//beforeEach for guest and auth routes
router.beforeEach((to, _from, next) => {
    const token = useAuth().user.token;
    //Ocupo el token para saber si el usuario esta autenticado, si no lo esta lo redirijo a la pagina de login, si lo esta lo redirijo a la pagina de dashboard
    if (to.matched.some(record => record.meta.auth)) {
        if (!token) {
            next({
                name: 'Login',
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (token) {
            next({
                name: 'Dashboard',
            });
        } else {
            next();
        }
    } else {
        next();
    }
});


export default router;