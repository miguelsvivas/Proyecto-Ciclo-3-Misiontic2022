<template>
  <div>
    <NavBar />
    <b-container class="articulos">
      <div>
        <b-card-group deck>
          <b-card
            title="Title"
            sub-title="$10.000"
            img-src="https://picsum.photos/300/300/?image=41"
            img-alt="Image"
            img-top
            align="left"
          >
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </b-card-text>
          </b-card>

          <b-card
            title="Title"
            sub-title="$10.000"
            img-src="https://picsum.photos/300/300/?image=41"
            img-alt="Image"
            img-top
            align="left"
          >
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </b-card-text>
          </b-card>
          
          <b-card
            title="Title"
            sub-title="$10.000"
            img-src="https://picsum.photos/300/300/?image=41"
            img-alt="Image"
            img-top
            align="left"
          >
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
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
};
</script>
