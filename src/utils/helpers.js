import axios from 'axios'

const baseURL = 'https://intense-journey-94086.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL
})