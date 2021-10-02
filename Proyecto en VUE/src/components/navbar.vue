<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky="True">
    <b-navbar-brand href="/"
      ><strong>Tienda de Ropa Deportiva</strong></b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Inicio</router-link>
        <router-link class="nav-link" to="/mujer">Mujer</router-link>
        <router-link class="nav-link" to="/hombre">Hombre</router-link>
        <router-link class="nav-link" to="/accesorios">Accesorios</router-link>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!--<b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Buscar"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Buscar</b-button
            >
          </b-nav-form>-->
      </b-navbar-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/login"
          ><b-button class="btn-warning">Ingresar</b-button></router-link
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
