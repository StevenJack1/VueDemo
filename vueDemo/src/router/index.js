import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/index'
import ResourceManagement from '@/views/ResourceManagement/index'
import DataManagement from '@/views/DataManagement/index'
import MalfunctionManagement from '@/views/MalfunctionManagement/index'
import SituationManagement from '@/views/SituationManagement/index'
import TaskManagement from '@/views/TaskManagement/index'
import UserManagement from '@/views/UserManagement/index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/resourceManagement',
      name: 'ResourceManagement',
      component: ResourceManagement
    },
    {
      path: '/dataManagement',
      name: 'DataManagement',
      component: DataManagement
    },
    {
      path: '/malfunctionManagement',
      name: 'MalfunctionManagement',
      component: MalfunctionManagement
    },
    {
      path: '/situationManagement',
      name: 'SituationManagement',
      component: SituationManagement
    },
    {
      path: '/taskManagement',
      name: 'TaskManagement',
      component: TaskManagement
    },
    {
      path: '/userManagement',
      name: 'UserManagement',
      component: UserManagement
    }
  ]
})
