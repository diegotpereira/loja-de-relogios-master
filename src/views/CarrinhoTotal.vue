<template>
    <div class="container">
        <div class="row">
            <div class="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text capitalize text-right">
                <button class="btn btn-outline-danger mb-3px-5">
                    Limpar Carrinho
                </button>
                <h5><span class="text-title">SubTotal: <b></b></span></h5>
                <h5><span class="text-title">Taxa: <b></b></span></h5>
                <h5><span class="text-title">Total Carrinho: <b></b></span></h5>

                <PayPalButton>

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
            
        }
    },
    components: {
        PayPalButton
    }
}
</script>