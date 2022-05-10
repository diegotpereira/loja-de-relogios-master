import Vue from "vue";
import Vuex from 'vuex'
import axios from 'axios'
// import router from '../router'
import { storeProdutos } from '../data'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        produtos: [],
        detalheProduto: null,
        carrinho: [],
        modalAberto: false,
        modalProduto: null,
        carrinhoSubTotal: 0,
        carrrinhoTax: 0,
        carrinhoTotal: 0
    },
    getters: {
        produtos: (state) => {
            return state.produtos
        },
        detalheProduto: (state) => {
            return state.detalheProduto
        },
        modalProduto: (state) => {
            return state.modalProduto
        },
        carrinho: (state) => {
            return state.carrinho
        }
    },
    mutations: {
        setProdutos: (state, produtos) => {
            state.produtos = produtos
        },
        abrirModal: (state, modalProduto) => {
            state.modalProduto = modalProduto
            state.modalAberto = true
        },
        fecharModal: (state) => {
            state.modalAberto = false
        },
        handelDetalhe: (state, detalheProduto) => {
            state.detalheProduto = detalheProduto
        }
    },
    actions: {
        setProdutos: ({ commit, dispatch }) => {
            let tempProdutos = []
            console.log(dispatch);
            commit('setProdutos', tempProdutos)

            storeProdutos.forEach(item => {
                const tempItem = {...item }

                tempProdutos = [...tempProdutos, tempItem]
            })
            commit('setProdutos', tempProdutos)

            axios.get(process.env.VUE_APP_SERVER)
                .then(res => {
                    tempProdutos = res.data
                    commit('setProdutos', tempProdutos)
                    console.log('serveradata', tempProdutos);
                }).then(() => {
                    dispatch('carregarDetalheAoRecarregar')
                }).catch(err => console.log(err))
        },
        handelDetalhe: ({ commit, state }, id) => {
            let produto = state.produtos.find(produto => produto.id === id)
            commit('handelDetalhe', produto)

            let index = state.produtos.findIndex(produto => produto.id === id)
            localStorage.setItem('detalheProdutoIndex', index)
        },
        carregarDetalheAoRecarregar: ({ commit, dispatch, state }) => {
            console.log(dispatch);
            if (state.detalheProduto !== null) {
                return
            } else {
                const index = localStorage.getItem('detalheProdutoIndex')
                commit('handelDetalhe', state.produtos[index])
            }
        },
        abrirModal: ({ commit, state }, id) => {
            const modalProduto = state.produtos.find(produto => produto.id === id)
            commit('abrirModal', modalProduto)
        },
        fecharModal: ({ commit }) => {
            commit('fecharModal')
        }
    }
})