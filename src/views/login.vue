<template>
	<div>
	<NavBar/>
	<div class="login">

    <main class = "container col-md-3">
      <div class = "form-signin">
        <form @submit="onSubmit" @reset="onReset" v-if="show">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Correo electrónico</label>
          </div>

          <br>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Contraseña</label>
          </div>
          <br>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recordarme
            </label>
          </div>
       <!--    <button class="w-100 btn btn-lg btn-primary" type="submit">
            Ingresar
          </button> -->
          <button type="submit" class="w-100 btn btn-lg btn-primary">Ingresar</button>
        </form>
    </div>
</main>
</div>
</div>
</template>

<style >
.login{
	padding-top: 100px;
}
</style>

<script>
import NavBar from '../components/navbar/navbar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert('Bienvenido');
      this.$router.push("admin");
    },
    onReset(event) {
      event.preventDefault();
      this.$router.push("/");
    },
  },
};
</script>