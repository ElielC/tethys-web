import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://tethys-api.herokuapp.com/api/v1/'
})
