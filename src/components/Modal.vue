<template>
	<transition name="minhaModal" type="animation"> 
		<div class="ModalContainer">
			<div class="container">
				<div class="row">
					<div class="col-8 col-md-6 col-lg-4 p-5 mx-auto text-center" id="modal">
						<h5>Item adicionado ao Carrinho</h5>
						<img src="" alt="" class="img-fluid">
						<h5>modalProduto.titulo</h5>
						<h5 class="text-muted">Preço: R$ modalProduto.preco</h5>
						<router-link >
							<ButtonContainerDark>
								Continue Comprando
							</ButtonContainerDark>
						</router-link>
						<router-link to="/carrinho">
							<ButtonContainerDark>
								Ir para o Carrinho
							</ButtonContainerDark>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import { ButtonContainerDark } from '../styledComponentButtons'

export default {
	name: 'Modal',
	data() {
		return {
			
		}
	},
	components: {
		ButtonContainerDark
	}
}
</script>