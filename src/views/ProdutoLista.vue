<template>
	<div class="py-5">
		<div class="container">
		<Titulo name="Sua" title="Coleção" />
		<div class="row">
			<Produto v-for="(produto, index) in produtos" :key="index" v-bind:produto="produto"/>
		</div>
	</div>
	</div>
</template>
<script>
import Titulo from '../components/Titulo.vue'
import Produto from './Produto.vue'
import { mapGetters } from 'vuex'

export default {
	name: "ListaCompras" ,
	data() {
		return {
			
		}
	},
	components: {
		Titulo,
		Produto
	},
	computed: {
		...mapGetters([
			'produtos'
		])
	}
}
</script>