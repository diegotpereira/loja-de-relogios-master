<template>
    <div>
        <CarrinhoItem />
    </div>
</template>
<script>
import CarrinhoItem from './CarrinhoItem.vue'
export default {
    name: 'CarrinhoLista',
    data() {
        return {
            
        }
    },
    components: {
        CarrinhoItem
    },
    computed: {
        carrinho() {
            return this.$store.getters.carrinho
        }
    }
}
</script>
<style scoped>

</style>