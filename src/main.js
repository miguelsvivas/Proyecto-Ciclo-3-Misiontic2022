import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import router from './router'
import VueRouter from 'vue-router'

import Home from './views/index.vue'
import Login from './views/login.vue'
import Admin from './views/admin.vue'


Vue.use(VueRouter)

Vue.config.productionTip = false

//creando las rutas de navegación.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login},
  { path: '/admin', component: Admin}
]

const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
