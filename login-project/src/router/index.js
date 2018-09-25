import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '../components/Login';
import Users from '../components/Users';
// import UserCard from '../components/UserCard'


 
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },        
        {
            path: '/users',
            name: 'Users',
            component: Users,
            beforeEnter: (to, from, next) => beforeEnteringRoute(to, from, next)
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
              
        }
    ],
    mode: 'history'
})

function beforeEnteringRoute(to, from, next) {
    if (true) {
        next();
    } else {
        next('/login');
    }
}