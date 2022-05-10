<template>
    <div class="container py-2" :key="$store.state.detalheProduto">
        <div class="row">
            <div class="col-10 mx-auto my-5 text-center text-vue text-underline">
                <h1>{{detalheProduto.titulo}}</h1>
            </div>
            <div class="row">
                <div class="col-md-6 col-10 mx-auto my-3">
                    <img v-bind:src="detalheProduto.imgUrl" alt="Produto Imagem" class="img-fluid">
                </div>
                <div class="col-md-6 col-10 mx-auto text-capitalize">
                    <h4 class="text-title mt-3 mb-2">Feito por: {{detalheProduto.compania}}</h4>
                    <h4 class="text-muted">Preço: R$ {{detalheProduto.preco}}</h4>
                    <p class="mt-3 mb-0"><u><b>Produto Informação:</b></u></p>
                    <p class="text-muted">{{detalheProduto.info}}</p>
                </div>
                <div>
                    <router-link to="/">
                        <ButtonContainerDark>
                            Voltar para Produtos
                        </ButtonContainerDark>
                        <ButtonContainerDark>
                            <span>No Carrinho</span>
                            <span>Add No Carrinho</span>
                        </ButtonContainerDark>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ButtonContainerDark } from '../styledComponentButtons'
import { mapActions } from 'vuex'

export default {
    name: 'Detalhes',
    data() {
        return {
            
        }
    },
    components: {
        ButtonContainerDark
    },
    computed: {
        detalheProduto() {
            return this.$store.getters.detalheProduto
        }
    },
    methods: {
        ...mapActions([
            'abrirModal'
        ])
    }
}
</script>
<style scoped>
    .text-dark {
        color:var(--mainDark);
    }
</style>