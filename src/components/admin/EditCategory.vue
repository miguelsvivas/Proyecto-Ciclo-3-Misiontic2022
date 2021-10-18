<template>
  <div>
    <br/>
   <NavBar2/>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Actualizar categoria</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="category.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Descripcion</label>
          <input
            type="text"
            class="form-control"
            v-model="category.description"

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
import NavBar2 from './navbar/navbar.vue'
export default {
    components: {
    NavBar2

  },
  data() {
    return {
      category: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-category/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.category = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-category/${this.$route.params.id}`;

      axios
        .put(apiURL, this.category)
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
