<template>
    <div class="container">
        <div class="row">
            <div class="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text capitalize text-right">
                <button class="btn btn-outline-danger mb-3px-5" v-on:click="limparCarrinho">
                    Limpar Carrinho
                </button>
                <h5><span class="text-title">SubTotal: <b>R${{$store.state.carrinhoSubTotal}}</b></span></h5>
                <h5><span class="text-title">Taxa: <b>R${{$store.state.carrinhoTaxa}}</b></span></h5>
                <h5><span class="text-title">Total Carrinho: <b>R${{$store.state.carrinhoTotal}}</b></span></h5>

                <PayPalButton
                    :amount="totalQuantidade"
                    currency="BRL" :client="credentials"
                    @payment-completed="paymentComplete"
                    env="sandbox">
                </PayPalButton>
            </div>
        </div>
    </div>
</template>
<script>
import PayPalButton from 'vue-paypal-checkout'

export default {
    name: 'CarrinhoTotal',
    data() {
        return {
            credentials: {
                sandbox: process.env.VUE_APP_PAYPAL_ID,
                production: 'YOUR-PRODUCTION-APP-ID'
            }
        }
    },
    components: {
        PayPalButton
    },
    computed: {
        totalQuantidade() {
            return this.$store.state.carrinhoTotal
        }
    },
    methods: {
        limparCarrinho() {
            this.$store.dispatch('limparCarrinho')
        },
        paymentComplete() {
            this.$store.dispatch('paymentComplete')
        }
    }
}
</script>
<style scoped>

</style>