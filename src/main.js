import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'



Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(Toasted, {
  duration: 3000
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
