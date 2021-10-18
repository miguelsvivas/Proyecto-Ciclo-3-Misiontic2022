<template>
 <div class="row">
 <div class="col-md-12">
 <table class="table table-striped">
 <thead class="thead-dark">
 <tr>
 <th>Nombre</th>
 <th>Descripcion</th>
 <th>Precio</th>
 <th>Categoria</th>
 <th>Cantidad</th>
  <th>Opciones</th>
 </tr>
 </thead>
 <tbody>
 <tr v-for="product in Products" :key="product._id">
 <td>{{ product.name }}</td>
 <td>{{ product.description }}</td>
 <td>{{ product.precio}}</td>
 <td>{{ product.categoria}}</td>
  <td>{{ product.cantidad}}</td>
 <td>
 <router-link
 :to="{ name: 'editprod', params: { id: product._id } }"
 class="btn btn-success"
 >Editar
 </router-link>
 <button
 @click.prevent="deleteProduct(product._id)"
 class="btn btn-danger"
 >
 Eliminar
 </button>
 </td>
 </tr>
 </tbody>
 </table> 
 <br/>
 <br/>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Registrar Producto
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registrar Producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
          <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Nombre</label>
          <input type="text" class="form-control" v-model="product.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Descripcion</label>
          <input
            type="text" class="form-control"
             v-model="product.description"
            required
          />
        </div>

        <div class="form-group">
          <label>Precio</label>
          <input
            type="text" class="form-control"
             v-model="product.precio"
            required
          />
        </div>



        <div class="form-group" >
        <label>Categoria</label>
      <select class="form-select form-select-sm" aria-label=".form-select-sm example"
      v-model="product.categoria">
  <option selected>Seleccione una categoria</option>
  <option value="Ropa Hombre">Ropa Hombre</option>
  <option value="Ropa Mujer">Ropa Mujer</option>
  <option value="Ropa niño">Ropa Niño</option>
</select>
        </div>

        <div class="form-group">
          <label>Cantidad</label>
          <input
            type="text"
            class="form-control"
            v-model="product.cantidad"
            required
          />
        </div>

<!--           <div class="form-group">
            <label for="formFile" class="form-label">Imagen</label>
  <input class="form-control" type="file" id="formFile">
        </div> -->

        <div class="form-group">
          <label>Url imagen</label>
          <input type="text" class="form-control" v-model="product.imagen"
            required
          />
        </div>

        <br/>

        <div class="form-group">
          <button class="btn btn-success btn-block" data-bs-dismiss="modal">Registrar 
          </button>
        </div>
      </form>





      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
       <!--  <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>
 </div>
 </div>


</template>
<script>



import axios from "axios";

export default {
  data() {
    return {
    Products:[],	
      product: {
        name: "",
        description: "",
        precio: "",
        categoria: "",
        cantidad: "",
        imagen: "", 
      },
    };
  },
 created() {
 let apiURL = "http://localhost:4000/api/showproduct";
 axios
 .get(apiURL)
 .then((res) => {
 this.Products = res.data;
 })
 .catch((error) => {
 console.log(error);
 });
 },
 methods: {
 deleteProduct(id) {
 let apiURL = `http://localhost:4000/api/delete-product/${id}`;
 let indexOfArrayItem = this.Products.findIndex((i) => i._id === id);
 if (window.confirm("Do you really want to delete?")) {
 axios
 .delete(apiURL)
 .then(() => {
 this.Students.splice(indexOfArrayItem, 1);
 })
 .catch((error) => {
 console.log(error);
 });
 }
 },
     handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-product";

      axios
        .post(apiURL, this.product)
        .then(() => {
          //this.$router.push("/view");
          this.product = {
            name: "",
            description: "",
            precio: "",
            categoria: "",
            cantidad: "",
            imagen: "",
          },location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },



 },
};


</script>