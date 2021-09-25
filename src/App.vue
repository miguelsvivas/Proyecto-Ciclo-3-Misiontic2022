<template>
 <div>
 <!-- Nav bar -->
 <nav
 class="navbar navbar-dark bg-dark justify-content-between flexnowrap flex-row"
 >

 <a class="navbar-brand float-left"> Tienda deportiva</a>
 <ul class="nav navbar-nav flex-row float-right">
 <li class="nav-item">
<!--  <router-link class="nav-link pr-3" to="/"
 >Create Student</router-link
 > -->
  <router-link class="nav-link pr-3" to="/shop"
 >Ir a la tienda</router-link
 >
 </li>
 </ul>

 </nav>


    
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
            <a class="nav-link" href="#">
              <span data-feather="file"></span>
              Productos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <router-link class="nav-link" to="/viewcategory">Categorias</router-link>
            </a>
          </li>
    <!--       <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="users"></span>
              Ventas
            </a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
               <router-link class="nav-link" to="/view">Administradores</router-link>

            </a>
          </li>
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
 <router-view></router-view>
 </div>	

      <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

     
   
    </main>




  </div>
       <!-- Router view -->

</div>



 </div>
</template>