<template>
	<div class="py-5">
		<div class="container">
		<Titulo name="Our" title="Coleções" />
		<div class="row">
			<Produto />
		</div>
	</div>
	</div>
</template>
<script>
import Titulo from '../components/Titulo.vue'
import Produto from './Produto.vue'

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
}
</script>