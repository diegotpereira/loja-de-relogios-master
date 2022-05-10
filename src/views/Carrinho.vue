<template>
    <div>
        <div v-if="$store.state.carrinho.length <= 0">
            <CarrinhoVazio />
        </div>
        <div v-else>
            <Titulo name="Seu" title="Carrinho" />
            <CarrinhoColuna />
            <CarrinhoLista />
            <CarrinhoTotal />
        </div>
    </div>
</template>
<script>
import Titulo from '../components/Titulo.vue'
import CarrinhoColuna from './CarrinhoColuna.vue'
import CarrinhoLista from './CarrinhoLista.vue'
import CarrinhoVazio from './CarrinhoVazio.vue'
import CarrinhoTotal from './CarrinhoTotal.vue'

export default {
    name: 'Carrinho',
    data() {
        return {
            
        }
    },
    components: {
        Titulo,
        CarrinhoColuna,
        CarrinhoLista,
        CarrinhoVazio,
        CarrinhoTotal
    }
}
</script>