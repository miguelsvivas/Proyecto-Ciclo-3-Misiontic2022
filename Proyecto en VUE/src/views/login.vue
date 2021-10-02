<template>
  <div>
    <NavBar />
    <b-container>
      <b-row align-v="center" align-h="center">
        <div class="login">
          <div class="mt-5 login-content">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Correo electrónico"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="name@example.com"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Contraseña"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  type="password"
                  placeholder="contraseña"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  v-model="form.checked"
                  id="checkboxes-4"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-checkbox value="me">Recordar usuario</b-form-checkbox>
                  <!--<b-form-checkbox value="that">Check that out</b-form-checkbox>-->
                </b-form-checkbox-group>
              </b-form-group>

              <b-button type="submit" variant="primary" class="mr-2"
                >Ingresar</b-button
              >
              <b-button type="reset" variant="danger">Regresar</b-button>
            </b-form>
          </div>
        </div>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    NavBar,
    Footer,
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
      alert(JSON.stringify(this.form));
      this.$router.push("admin");
    },
    onReset(event) {
      event.preventDefault();
      this.$router.push("/");
    },
  },
};
</script>
<style>
.login {
  display: flex;
  justify-content: center;
  align-content: center;
  position: center;
  margin-top: 30px;
  margin-bottom: 120px;
}
.login .login-content {
  background-color: #f5f5f5;
  padding: 40px;
  max-width: 330px;
  border-radius: 10px;
  margin: auto;
}
</style>
