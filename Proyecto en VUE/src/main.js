import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//importando las paginas de /views
import Home from './views/index.vue'
import Login from './views/login.vue'
import Admin from './views/admin.vue'
import Mujer from './views/mujer.vue'
import Hombre from './views/hombre.vue'
import Accesorios from './views/accesorios.vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.config.productionTip = false

//creando las rutas de navegación.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login},
  { path: '/admin', component: Admin},
  { path: '/mujer', component: Mujer},
  { path: '/hombre', component: Hombre},
  { path: '/accesorios', component: Accesorios}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
