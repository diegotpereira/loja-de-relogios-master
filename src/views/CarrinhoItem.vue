<template>
    <div class="row my-2 text-center text capitalize">
        {{/*Imagem Col*/}}
        <div class="col-10 col-lg-2 mx-auto">
            <img :src="item.imgUrl" :style="{width: '5rem',height:'5rem'}" alt="Produto Imagem" class="img-fluid">
        </div>
        {{/*Produto Col*/}}
        <div class="col-10 col-lg-2 mx-auto">
            <span class="d-lg-none">Produto: </span>{{item.titulo}}
        </div>
        {{/*Preco Col*/}}
         <div class="col-10 col-lg-2 mx-auto">
            <span class="d-lg-none">Preço: </span>R$ {{item.preco}}
        </div>
        {{/*Quantidade Button Col*/}}
         <div class="col-10 col-lg-2 mx-auto my-2 my-lg-0">
            <div class="d-flex justify-content-center">
                <span class="btn btn-black mx-1" v-on:click="decremento(item.id)">-</span>
                <span class="btn btn-black mx-1">{{item.contar}}</span>
                <span class="btn btn-black mx-1" v-on:click="incremento(item.id)">+</span>
            </div>
        </div>
        {{/*Remover Button Col*/}}
        <div class="col-10 col-lg-2 mx-auto">
            <div class="cart-icon" v-on:click="removerItem(item.id)">
                <i class="fas fa-trash"></i>
            </div>
        </div>
        {{/*Total Col*/}}
        <div class="col-10 col-lg-2 mx-auto">
            <b>Item Total: R$ {{item.total}}</b>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'CarrinhoItem',
    data() {
        return {
            
        }
    },
    props: ['item'],
    methods: {
        ...mapActions([
            'incremento',
            'decremento',
            'removerItem'
        ])
    }
}
</script>
<style scoped>
</style>