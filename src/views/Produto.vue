<template>
	<div class="col-lg-3 col-md 6 col-9 mx-auto my-3">
		<div class="card">
			<div class="img-container py-5">
				<router-link to="/detalhes"><img src="" alt="" class="card-img-top"></router-link>
				<button class="card-btn">
					<p class="mb-0">No Carrinho</p>
					<i class="fas fa-cardt-plus" />
				</button>
			</div>
			<div class="card-footer d-flex justify-content-between">
				<p class="align-self-center mb-0"></p>
				<h5 class="text-vue mb-0"><div class="mr-1">R$</div></h5>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Produto',
	props: ['produto']
}
</script>