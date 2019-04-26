import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Swal from 'sweetalert2'

Vue.config.productionTip = false
Vue.prototype.$swal = Swal

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
