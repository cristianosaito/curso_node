import vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/dashboard'
import Login from '@/views/login'
import Logout from '@/views/logout.vue'
import User from '@/views/user'
import Page404 from '@/views/page404'
import { authUser as AuthUserGuard } from './guards'
vue.use(Router)



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter(to, from, next){
        const isAuthUser = localStorage.getItem('token') ? true : false
        if (isAuthUser) {
            next({ name: 'Dashboard' })
        }else{
          next()
        }
      }
    },
    {
      path: '',
      name: 'root', 
      redirect: to => {
        const authUser = localStorage.getItem('token') ? true : false
        if (authUser) {
          return { name: 'Dashboard' }
        } else{
          return { name: 'Login' }
        }
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: AuthUserGuard
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      beforeEnter: AuthUserGuard
    },
    {
      path: '/user/:id',
      name: 'UpdateUser',
      component: User,
      beforeEnter: AuthUserGuard
    },
    {
      path: '*',
      component: User,
      redirect: to => ({ name: '404' })
    },
    {
      path: '404',
      name: '404',
      component: Page404,
    }
  ]
})
