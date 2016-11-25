import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'about',
    path: '/about',
    component: About
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router