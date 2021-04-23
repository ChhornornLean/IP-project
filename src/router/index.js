import { createRouter, createWebHistory, useRoute } from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import store from '../store/index'
import Homepage from '../views/Homepage'
import Adminpanel from '../views/Adminpanel'
import main from '../views/main'
import BackToStore from '../views/BackToStore'

const routes = [
  {
    path:'/',
    name:'index',
    component:main
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/setting',
    name: 'Setting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/setting.vue'),
    // beforeEnter(to, from, next){
    //   if(!store.getters.token){
    //     next({component: Login});
    //   }else{
    //     next();
    //   }
    // }
  },
  {
    path:'/admin',
    name:'Adminpanel',
    component:Adminpanel
  },
  {
    path:'/gameDetail',
    name:'gameDetail',
    component:BackToStore
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
