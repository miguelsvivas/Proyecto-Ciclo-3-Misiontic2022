<template>


 <div class="row">
 <div class="col-md-12">
 <table class="table table-striped">
 <thead class="thead-dark">
 <tr>
 <th>Nombre</th>
 <th>Descripcion</th>
 <th>Precio</th>
 <th>Cantidad</th>
 </tr>
 </thead>
 <tbody>
 <tr v-for="student in Students" :key="student._id">
 <td>{{ student.name }}</td>
 <td>{{ student.email }}</td>
 <td>{{ student.phone }}</td>
 <td>
 <router-link
 :to="{ name: 'edit', params: { id: student._id } }"
 class="btn btn-success"
 >Edit
 </router-link>
 <button
 @click.prevent="deleteStudent(student._id)"
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

 <router-link class="btn btn-success" to="/createproduct"
 >Registrar producto</router-link
 >
 </div>



</div>







</template>