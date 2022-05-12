import Vue from 'vue'
import VueRouter from 'vue-router'
import UserPage from './../views/UserPage'
import TweetCard from '@/components/TweetCard'
import ReplyCard from '@/components/ReplyCard'
import LikeCard from '@/components/LikeCard'
import NotFound from './../views/NotFound'
import login from "./../views/loginPage"
import UserFollowShip from "./../views/UserFollowShip"
import Follower from "./../views/Follower"
import Following from "./../views/Following"


Vue.use(VueRouter)

const routes = [
  {
    path: '/users/',
    // name: 'user-page',
    component: UserPage,
    children: [
      {
        path: ':id/tweet',
        name: 'user-tweet',
        component: TweetCard
      },
      {
        path: ':id/reply',
        name: 'user-reply',
        component: ReplyCard
      },
      {
        path: ':id/like',
        name: 'user-like',
        component: LikeCard
      },
    ]
  },
  {
    path: '/users/',
    // name: 'user-page',
    component: UserFollowShip,
    children: [
      {
        path: ':id/follower',
        name: 'user-follower',
        component: Follower
      },
      {
        path: ':id/following',
        name: 'user-following',
        component: Following
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
