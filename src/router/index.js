import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Meetings from '../views/Meetings.vue'
import CheckIn from '../components/CheckIn.vue'
import Attendees from '../components/Attendees.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/meetings',
    name: 'Meetings',
    component: Meetings
  },
  {
    path: '*',
   redirect:'/'
  },
  {
    path: "/checkin/:userID/:meetingID",
    name: 'CheckIn',
    component:CheckIn
  },
  {
    path: "/attendees/:userID/:meetingID",
    name: 'Attendees',
    component:Attendees
  }
]

const router = new VueRouter({
  routes
})

export default router
