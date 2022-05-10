import Vue from 'vue'
import VueRouter from 'vue-router'
import UserPage from './../views/UserPage'
import TweetCard from '@/components/TweetCard'
import ReplyCard from '@/components/ReplyCard'
import LikeCard from '@/components/LikeCard'
import NotFound from './../views/NotFound'
import login from "./../views/loginPage"

Vue.use(VueRouter)

const routes = [
  {
    path: '/user/page',
    // name: 'user-page',
    component: UserPage,
    children: [
      {
        path: '',
        name: 'tweet',
        component: TweetCard
      },
      {
        path: 'reply',
        name: 'reply',
        component: ReplyCard
      },
      {
        path: 'like',
        name: 'like',
        component: LikeCard
      },
    ]
  },
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('./../views/registPage'),
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('./../views/settingPage'),
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },


  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },

]

const router = new VueRouter({
  routes
})

export default router
