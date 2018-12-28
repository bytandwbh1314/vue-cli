import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/home'
import Login from './login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        ...Login
      ]
    }
  ]
})
