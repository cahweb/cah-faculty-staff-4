/* eslint no-undef: 1 */
/* eslint no-unused-vars: 1 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import AZList from '../views/AZList.vue'
import SubDepartment from '../views/SubDepartment.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: `/${wpVars.baseUrl}/`,
    name: 'AZList',
    component: AZList
  },
  {
    path: `/${wpVars.baseUrl}/subdept/:id`,
    name: 'SubDepartment',
    component: SubDepartment
  },
 {
   path: `/${wpVars.baseUrl}/profile/:id`,
   name: 'Profile',
   component: Profile,
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
