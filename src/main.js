import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import router from './router'
import VueRouter from 'vue-router'

import Home from './views/index.vue'
import Login from './views/login.vue'
import Admin from './views/admin.vue'
import Editar from './views/EditComponent.vue'
import EditarCat from './components/admin/EditCategory.vue'
import EditarProd from './components/admin/EditProduct.vue'
import Hombre from './views/hombre.vue'
import Mujer from './views/mujer.vue'
import Accesorios from './views/accesorios.vue'
import Compra from './views/compra.vue'



Vue.use(VueRouter)

Vue.config.productionTip = false

//creando las rutas de navegación.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login},
  { path: '/admin', component: Admin},
  { path: '/hombre', component: Hombre},
  { path: '/mujer', component: Mujer},
  { path: '/compra', component: Compra},
  { path: '/accesorios', component: Accesorios},
  { path: '/edit/:id',name:'edit' ,component: Editar},
  { path: '/edit/:id',name:'editcat' ,component: EditarCat},
  { path: '/edit/:id',name:'editprod' ,component: EditarProd},

]

const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
