import { apiHelper } from './../utils/helpers'


export default {
  signIn({ account, password }) {
    return apiHelper.post('/users/login', {
      account,
      password
    })
  },
  regist(data) {
    console.log("inapi")
    return apiHelper.post('/users', {
      ...data
    })
  }
}