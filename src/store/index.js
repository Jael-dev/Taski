import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
   async login({commit}, user){
     return  new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:8000/api/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp["data"]["data"]["token"]
           user = resp["data"]["data"]
           localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
  },
  async register({commit}, user){
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({url: 'http://localhost:8000/api/register', data: user, method: 'POST' })
      .then(resp => {
        const token = resp["data"]["data"]["token"]
        user = resp["data"]["data"]
        localStorage.setItem('user', JSON.stringify(user))
       localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, user)
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error', err)
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },
  logout({commit}){
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
  },
  modules: {
  }
})
