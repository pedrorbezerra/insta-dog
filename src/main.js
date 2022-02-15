import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Buefy, { defaultIconPack: 'fas' })

import Login from './views/Login/Login.vue'
import ForgotPassword from './views/ForgotPassword/ForgotPassword.vue'
import SignIn from './views/SignIn/SignIn.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/signin', component: SignIn}
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
