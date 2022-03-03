import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

import Login from './views/Login/Login.vue'
import ForgotPassword from './views/ForgotPassword/ForgotPassword.vue'
import SignIn from './views/SignIn/SignIn.vue'
import Profile from './views/Profile/Profile.vue'
import EditProfile from './views/Profile/EditProfile.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/signin', component: SignIn},
    { path: '/profile', component: Profile},
    { path: '/profile/edit', component: EditProfile}
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
