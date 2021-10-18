<template>
 <div>
 <NavBar2/>

    
<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <span data-feather="home"></span>
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="changeOption(1)" :class="[ option==1 ? 'active' : '']">Administrador
              
            </a>
          </li>
          <li class="nav-item">
             <a class="nav-link" @click="changeOption(2)" :class="[ option==2 ? 'active' : '']">Categorias
              
            </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" @click="changeOption(3)" :class="[ option==3 ? 'active' : '']">Productos
              
            </a>
          </li>
        <!--   <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
               <router-link class="nav-link" to="/view">Administradores</router-link>

            </a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
            
            </a>
          </li>
        </ul>
   
      </div>
    </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>


      </div>

       <div class="container ">
<!--  <router-view></router-view> -->
  <Article v-if="option == 1"/>
  <Category v-else-if="option == 2"/>
  <Product v-else-if="option == 3"/>
 </div>	

      <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

     
   
    </main>




  </div>
       <!-- Router view -->

</div>



 </div>
</template>

<script>
  import Article from '../components/admin/ListComponent'
  import NavBar2 from '../components/admin/navbar/navbar.vue'
  import Category from '../components/admin/ListCategoryComponent'
  import Product from '../components/admin/ListProductComponent'


  export default {
  components: {
    Article,
    NavBar2,
    Category,
    Product

  },
  data() {
    return {
      option: 1,
      visibleSidebar: true
    }
  },
  methods: {
    changeOption(i) {
      this.option = i
    },
    isVisibleSidebar() {
      this.visibleSidebar = !this.visibleSidebar
    }
  },
}
</script>
