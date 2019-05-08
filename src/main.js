import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'font-awesome/css/font-awesome.min.css'
import Vuetify from 'vuetify'
import routes from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify, {
  iconfont: 'mdi'
})
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
