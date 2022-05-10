<template>
    <span>
        <transition name="meuModal" type="animation"> 
            <div class="ModalContainer" v-if="$store.state.modalAberto">
                <div class="container">
                    <div class="row">
                        <div class="col-8 col-md-6 col-lg-4 p-5 mx-auto text-center" id="modal">
                            <h5>Item adicionado ao Carrinho</h5>
                            <img v-bind:src="modalProduto.imgUrl" alt="Produto Imagem" class="img-fluid">
                            <h5>{{modalProduto.titulo}}</h5>
                            <h5 class="text-muted">Preço: R$ {{modalProduto.preco}}</h5>
                            <router-link >
                                <ButtonContainerDark v-on:click="onFecharModal()">
                                    Continue Comprando
                                </ButtonContainerDark>
                            </router-link>
                            <router-link to="/carrinho">
                                <ButtonContainerDark v-on:click="onFecharModal()">
                                    Ir para o Carrinho
                                </ButtonContainerDark>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <BackDrop :show="$store.state.modalAberto" :key="$store.state.modalAberto" /> 
    </span>
</template>
<script>
import { ButtonContainerDark } from '../styledComponentButtons'
import BackDrop from './Backdrop.vue'

export default {
	name: 'Modal',
	data() {
		return {
			
		}
	},
	components: {
		ButtonContainerDark,
        BackDrop
	},
	computed: {
		modalProduto() {
			return this.$store.getters.modalProduto
		}
	},
	methods: {
		onFecharModal() {
			this.$store.dispatch('fecharModal')
		}
	}
}
</script>
<style scoped>
    .ModalContainer {
        position: fixed;
        top:0;
        left:0;
        bottom: 0;
        right: 0;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }

    #modal {
        background: var(--mainWhite);
    }

    .meuModal-enter {}
    .meuModal-enter-active {
        animation: openModal 0.4s ease-out forwards;
    }
    .meuModal-leave {}
    .meuModal-leave-active {
        animation: closeModal 0.7s ease-out forwards;
    }

    @keyframes openModal {
        0%{
            opacity: 0;
            transform: translateY(-200%);
        }
        50%{
            opacity: 0.8;
            transform: translateY(50%);
        }
        100%{
            opacity: 1;
            transform: translateY(0%);
        }
    }
    @keyframes closeModal {
        0%{
            opacity: 1;
            transform: translateY(0);
        }
        50%{
            opacity: 0.8;
            transform: translateY(50%);
        }
        100%{
            opacity: 0;
            transform: translateY(-200%);
        }
    }
</style>
