<template>
  <div>
    <br/>
   <NavBar2/>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Actualizar producto</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="product.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Descripcion</label>
          <input
            type="text"
            class="form-control"
            v-model="product.description"
            required
          />
        </div>

        <div class="form-group">
          <label>Precio</label>
          <input
            type="text"
            class="form-control"
            v-model="product.precio"
            required
          />
        </div>


        <div class="form-group">
          <label>Categoria</label>
          <input
            type="text"
            class="form-control"
            v-model="product.categoria"
            required
          />
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
      product: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-product/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.product = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-product/${this.$route.params.id}`;

      axios
        .put(apiURL, this.product)
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
