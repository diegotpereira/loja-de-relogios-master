<template>
	<div class="col-lg-3 col-md 6 col-9 mx-auto my-3">
		<div class="card">
			<div class="img-container py-5" v-on:click="handelDetalhe(produto.id)">
				<router-link to="/detalhes">
				<img v-bind:src="produto.imgUrl" alt="produto" class="card-img-top">
				</router-link>
				<button class="card-btn" v-bind:disabled="produto.noCarrinho" abrirModal(produto.id)>
					<p class="mb-0">No Carrinho</p>
					<i class="fas fa-cardt-plus" />
				</button>
			</div>
			<div class="card-footer d-flex justify-content-between">
				<p class="align-self-center mb-0">{{produto.titulo}}</p>
				<h5 class="text-vue mb-0"><div class="mr-1">R$</div>{{produto.preco}}</h5>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	name: 'Produto',
	props: ['produto'],
	methods: {
		...mapActions([
			'handelDetalhe',
			'abrirModal'
		])
	}
}
</script>