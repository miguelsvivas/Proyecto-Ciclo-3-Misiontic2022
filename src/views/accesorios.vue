<template>
  <div>
	<NavBar/>
	<h1 class="titulo">Accesorios</h1>
	<div class="row productos">
		<div class="col-lg-4">
		<div class="card text-center">
			<div class="card-header">
				Featured
			</div>
			<div class="card-body">
				<img src="/img/accesorios1.png " width="350px" height="350px">
				<h4 class="card-title">Special title treatment</h4>
				<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
			<div class="card-footer text-muted">
				2 days ago
			</div>
		</div>
		</div>
				<div class="col-lg-4">
		<div class="card text-center">
			<div class="card-header">
				Featured
			</div>
			<div class="card-body">
				<img src="/img/Camiseta.png " width="350px" height="350px">
				<h4 class="card-title">Special title treatment</h4>
				<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
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
import NavBar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
	NavBar,
	Footer,
  },
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