import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      introduction: '',
      avatar: '',
      cover_image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const response = await usersAPI.getCurrentUser()
        // console.log('fetchCurrentUser', response)

        const { account, avatar, cover_image, folloingCount, followerCount, id, introduction, name, tweetCount } = response.data.user

        commit('setCurrentUser', {
          account, avatar, cover_image, folloingCount, followerCount, id, introduction, name, tweetCount
        })
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取得登入者的資料",
        });
        console.log(error.message)
      }
    }

  },
  modules: {
  }
})
