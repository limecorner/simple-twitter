import Vue from 'vue'
import VueRouter from 'vue-router'
import UserPage from './../views/UserPage'
import TweetCard from '@/components/TweetCard'
import ReplyCard from '@/components/ReplyCard'
import LikeCard from '@/components/LikeCard'
import NotFound from './../views/NotFound'

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
    path: '*',
    name: 'not-found',
    component: NotFound
  },

]

const router = new VueRouter({
  routes
})

export default router
