<template>
  <div>
    <NavBar />

    <!--Carousel-->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1400"
      img-height="600"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with tittle, text and button -->
      <b-carousel-slide img-src="/imagenes/banner_mujeres.png">
        <div class="carousel-caption text-start">
          <!--<h3>Example headline.</h3>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <p>
              <a class="btn btn-lg btn-primary" href="">Ver productos</a>
            </p>-->
        </div>
      </b-carousel-slide>

      <!-- Slides with tittle, text and button -->
      <b-carousel-slide img-src="/imagenes/banner_hombres.png">
        <div class="carousel-caption text-start">
          <!--<h3>Example headline.</h3>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <p>
              <a class="btn btn-lg btn-primary" href="">Ver productos</a>
            </p>-->
        </div>
      </b-carousel-slide>

      <!-- Slides with tittle, text and button -->
      <b-carousel-slide img-src="/imagenes/banner_accesorios.png">
        <div class="carousel-caption text-start">
          <!--<h3>Example headline.</h3>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <p>
              <a class="btn btn-lg btn-primary" href="">Ver productos</a>
            </p>-->
        </div>
      </b-carousel-slide>
    </b-carousel>

    <!--Categorías-->
    <b-container>
      <b-row align-v="center">
        <b-col col md="7">
          <h2 class="featurette-heading">
            First featurette heading.
            <span class="text-muted">It’ll blow your mind.</span>
          </h2>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
          <p>
            <router-link class="nav-link" to="/mujer"
          ><b-button variant="outline-primary">Ver productos</b-button></router-link
        >
          </p>
        </b-col>
        <b-col md="5">
          <b-img
            src="/imagenes/mujer1.png"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>

    <hr class="divisor" />

    <b-container>
      <b-row align-v="center">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Oh yeah, it’s that good.
            <span class="text-muted">See for yourself.</span>
          </h2>
          <p class="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
          <p>
            <router-link class="nav-link" to="/hombre"
          ><b-button variant="outline-primary">Ver productos</b-button></router-link
        >
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <b-img
            src="/imagenes/hombre1.png"
            fluid
            alt="Responsive image"
          ></b-img>
        </div>
      </b-row>
    </b-container>

    <hr class="divisor" />

    <b-container>
      <b-row align-v="center">
        <b-col md="7">
          <h2 class="featurette-heading">
            And lastly, this one. <span class="text-muted">Checkmate.</span>
          </h2>
          <p class="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
          <p>
            <router-link class="nav-link" to="/accesorios"
          ><b-button variant="outline-primary">Ver productos</b-button></router-link
        >
          </p>
        </b-col>
        <b-col md="5">
          <b-img
            src="/imagenes/accesorios1.png"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>

    <hr class="divisor" />

    <!--Equipo-->
    <b-container id="equipo">
      <b-row>
        <b-col lg="4">
          <b-avatar size="140px" variant="danger"></b-avatar>
          <h2>Miguel</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <a class="btn btn-outline-primary" href="#">Contactar</a>
          </p>
        </b-col>

        <b-col lg="4">
          <b-avatar size="140px" variant="primary"></b-avatar>
          <h2>Julián</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p>
            <a class="btn btn-outline-primary" href="#">Contactar</a>
          </p>
        </b-col>

        <b-col lg="4">
          <b-avatar size="140px" variant="success"></b-avatar>
          <h2>Victor</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p>
            <a
              class="btn btn-outline-primary"
              href="https://www.linkedin.com/in/victips/"
              target="_blank"
              >Contactar</a
            >
          </p>
        </b-col>
      </b-row>
    </b-container>

    <!--Volver arriba-->
    <transition name="fade">
      <a v-if="!isVisibleUpButton" href="#" class="back-to-top"
        ><b-icon-chevron-up
          font-scale="1
      "
        ></b-icon-chevron-up
      ></a>
    </transition>

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
      isVisibleUpButton: true,
      scrollPosition: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  watch: {
    scrollPosition() {
      if (this.scrollPosition > 100) {
        this.isVisibleUpButton = false;
      } else {
        this.isVisibleUpButton = true;
      }
    },
  },
};
</script>

<style>
.back-to-top {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
}
#carousel-1 {
  margin-bottom: 60px;
}
.divisor {
  margin: 60px;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: end;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.featurette-heading {
  font-weight: 300;
  font-size: 45px;
  line-height: 1;
  /* rtl:remove */
  letter-spacing: -0.05rem;
}
.b-avatar {
  margin: 20px;
}
#equipo {
  margin-bottom: 80px;
}

</style>
