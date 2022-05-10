<template>
	<div class="col-lg-3 col-md 6 col-9 mx-auto my-3">
		<div class="card">
			<div class="img-container py-5" v-on:click="handelDetalhe(produto.id)">
				<router-link to="/detalhes">
				<img v-bind:src="produto.imgUrl" alt="produto" class="card-img-top">
				</router-link>
				<button class="card-btn" v-bind:disabled="produto.noCarrinho" v-on:click="addNoCarrinho(produto.id); abrirModal(produto.id)">
					<p class="mb-0" v-if="produto.noCarrinho">No Carrinho</p>
					<i v-else class="fas fa-cardt-plus" />
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
			'abrirModal',
            'addNoCarrinho'
		])
	}
}
</script>
<style scoped>
    .card {
        border-color:transparent;
        transition:all 1s linear;
    }
    .card:hover {
        border: 0.4rem solid rgba(0,0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
        background:transparent;
        border-top:transparent;
        transition:all 1s linear;
    }
    .card-footer:hover {
        background:rgba(247,247,247);
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
        transition: all 0.5s linear;
    }
    .cart-btn {
        position:absolute;
        bottom:0;
        right:0;
        padding: 0.2rem 0.4rem;
        background:var(--mainVue);
        color:var(--mainWhite) !important;
        border:none;
        font-size:1.3rem;
        border-radius:0.5rem 0 0 0;
        transform:translate(100%, 100%);
    }
    .img-container:hover .cart-btn {
        transform:translate(0, 0);
        transition:all 0.5s linear;
    }
    .cart-btn:hover {
        background: lightgray;
        color:var(--mainVue) !important;
    }

</style>