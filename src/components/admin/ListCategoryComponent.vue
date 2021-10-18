<template>


 <div class="row">
 <div class="col-md-12">
 <table class="table table-striped">
 <thead class="thead-dark">
 <tr>
 <th>Nombre</th>
 <th>Descripcion</th>
 <th>Opciones</th>
 </tr>
 </thead>
 <tbody>
 <tr v-for="category in Categories" :key="category._id">
 <td>{{ category.name }}</td>
 <td>{{ category.description }}</td>
 <td>
 <router-link
 :to="{ name: 'editcat', params: { id: category._id } }"
 class="btn btn-success"
 >Edit
 </router-link>
 <button
 @click.prevent="deleteCategory(category._id)"
 class="btn btn-danger"
 >
 Delete
 </button>
 </td>
 </tr>
 </tbody>
 </table>

 <br/>
 <br/>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Registrar Categoria
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registrar Categoria</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
          <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Nombre</label>
          <input type="text" class="form-control" v-model="category.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Descripcion</label>
          <input
            type="text" class="form-control"
            v-model="category.description"
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
<script >
import axios from "axios";

export default {
  data() {
    return {
    Categories:[],	
      category: {
        name: "",
        description: "",
      },
    };
  },
 created() {
 let apiURL = "http://localhost:4000/api/show";
 axios
 .get(apiURL)
 .then((res) => {
 this.Categories = res.data;
 })
 .catch((error) => {
 console.log(error);
 });
 },
 methods: {
 deleteCategory(id) {
 let apiURL = `http://localhost:4000/api/delete-category/${id}`;
 let indexOfArrayItem = this.Categories.findIndex((i) => i._id === id);
 if (window.confirm("Do you really want to delete?")) {
 axios
 .delete(apiURL)
 .then(() => {
 this.Categories.splice(indexOfArrayItem, 1);
 })
 .catch((error) => {
 console.log(error);
 });
 }
 },
     handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-category";

      axios
        .post(apiURL, this.category)
        .then(() => {
          //this.$router.push("/view");
          this.category = {
            name: "",
            description: "",
          },location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },



 },
};


</script>