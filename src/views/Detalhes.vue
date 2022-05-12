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

                    {{/*Buttons*/}}
                    <div>
                        <router-link to="/">
                            <ButtonContainerDark carrinho v-bind:disabled="detalheProduto.noCarrinho" v-on:click="addNoCarrinho(detalheProduto.id); abrirModal(detalheProduto.id)">
                                Voltar para Produtos
                            </ButtonContainerDark>
                        </router-link>
                        <ButtonContainerDark>
                            <span v-if="detalheProduto.noCarrinho">No Carrinho</span>
                            <span v-else>Add No Carrinho</span>
                        </ButtonContainerDark>
                    </div>
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
            'abrirModal',
            'addNoCarrinho'
        ])
    }
}
</script>
<style scoped>
    .text-dark {
        color:var(--mainDark);
    }
</style>