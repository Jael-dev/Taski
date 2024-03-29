import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import moment from 'moment'
// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: '39ebcbda7c8ebae490a9',
//     cluster: 'eu',
//     forceTLS: true
// });

Vue.config.productionTip = false
window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:8000'
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
