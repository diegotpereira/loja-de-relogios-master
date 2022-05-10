import Vue from 'vue'
import Router from 'vue-router'
import ListaCompras from './views/ProdutoLista.vue'
import Detalhes from './views/Detalhes.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: ListaCompras
        },
        {
            path: '/detalhes',
            name: 'detalhes',
            component: Detalhes
        }
    ]
})