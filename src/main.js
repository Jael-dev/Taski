import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import moment from 'moment'


Vue.config.productionTip = false
window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:8001'
Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  vuetify,
  axios,
  moment,
  render: h => h(App)
}).$mount('#app')
