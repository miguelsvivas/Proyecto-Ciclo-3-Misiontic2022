<template>
  <div>
	<NavBar/>
	<h1 class="titulo">Articulos para mujer</h1>
	<div class="row productos">
		<div class="col-lg-4" v-for="product in Products" :key="product._id">
		<div class="card text-center">
			<div class="card-header">
				{{product.name}}
			</div>
			<div class="card-body">
                <img v-bind:src="product.imagen" width="350px" height="350px">
				<h4 class="card-title">${{product.precio}}</h4>
				<p class="card-text">{{ product.description}}</p>
				<router-link class="btn btn-primary" to="/compra">Comprar</router-link>
			</div>
			<div class="card-footer text-muted">
				2 days ago
			</div>
		</div>
		</div>
	</div>
	<Footer/>	
</div>		
</template>


<script>
import axios from "axios";
import NavBar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
	NavBar,
	Footer,
  },
    data() {
    return {
    Products:[],  
    };
  },
     created() {
 let apiURL = "http://localhost:4000/api/showproduct";
 axios
 .get(apiURL)
 .then((res) => {
 this.Products = res.data;
 })
 .catch((error) => {
 console.log(error);
 });
 }
};
</script>

<style >
.productos{
	padding-left: 100px;
	margin-top: 20px;
}
.titulo{
	padding-right: 800px;
	margin-top: 20px;
}	
</style>