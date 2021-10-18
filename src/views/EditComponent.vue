<template>
  <div>
    <br/>
   <NavBar2/>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Actualizar administrador</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="student.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="student.password"
            required
          />
        </div>
        <br/>
        <div class="form-group">
          <button class="btn btn-success btn-block">Actualizar</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar2 from '../components/admin/navbar/navbar.vue'
export default {
    components: {
    NavBar2

  },
  data() {
    return {
      student: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.student = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

      axios
        .put(apiURL, this.student)
        .then((res) => {
          console.log(res);
          this.$router.push("/admin");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
