import Vue from "vue";
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
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
        carrinhoTax: 0,
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
        handelDetalhe: (state, detalheProduto) => {
            state.detalheProduto = detalheProduto
        },
        CarregarCarrinhoAoRecarregar: (state, payload) => {
            state.produtos = payload.tempProdutos
            state.carrinho = payload.tempCarrinho
            state.carrinhoSubTotal = payload.carrinhoSubTotal
            state.carrinhoTax = payload.carrinhoTax
            state.carrinhoTotal = payload.carrinhoTotal
        },
        addNoCarrinho: (state, payload) => {
            state.produtos = payload.tempProdutos
            state.carrinho = [...state.carrinho, payload.produto]
        },
        addTotal: (state, payload) => {
            state.carrinhoSubTotal = payload.subTotal
            state.carrinhoTax = payload.tempTax
            state.carrinhoTotal = payload.total
        },
        abrirModal: (state, modalProduto) => {
            state.modalProduto = modalProduto
            state.modalAberto = true
        },
        fecharModal: (state) => {
            state.modalAberto = false
        },
        increment: (state, carrinho) => {
            state.carrinho = carrinho
        },
        decremento: (state, carrinho) => {
            state.carrinho = carrinho
        },
        removerItem: (state, payload) => {
            state.produtos = payload.produtos
            state.carrinho = payload.carrinho
        },
        limparCarrinho: (state, tempProdutos) => {
            state.produtos = tempProdutos
            state.carrinhoSubTotal = 0
            state.carrinhoTax = 0
            state.carrinhoTotal = 0
            state.carrinho = []
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
                    dispatch('CarregarCarrinhoAoRecarregar')
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
        CarregarCarrinhoAoRecarregar: ({ commit, dispatch, state }) => {
            console.log(dispatch);
            let stringParaArr = localStorage.getItem('carrinho')
            const tempCarrinho = JSON.parse(stringParaArr)

            let tempProdutos = []

            state.produtos.forEach((item) => {
                const unicoItem = {...item }
                tempProdutos = [...tempProdutos, unicoItem]
            })
            for (let index = 0; index < tempProdutos.length; index++) {
                for (let j = 0; j < tempCarrinho.length; j++) {
                    if (tempCarrinho[j].id === tempProdutos[index].id) {
                        tempProdutos[index] = {...tempCarrinho[j] }
                        break
                    }
                }
            }
            const carrinhoSubTotal = localStorage.getItem('carrinhoSubTotal')
            const carrinhoTax = localStorage.getItem('carrinhoTax')
            const carrinhoTotal = localStorage.getItem('carrinhoTotal')

            commit('CarregarCarrinhoAoRecarregar', { tempProdutos, tempCarrinho, carrinhoSubTotal, carrinhoTax, carrinhoTotal })
        },
        addNoCarrinho: ({ commit, dispatch, state }, id) => {
            let tempProdutos = [...state.produtos]

            state.produtos.forEach((item) => {
                const unicoItem = {...item }
                tempProdutos = [...tempProdutos, unicoItem]
            })
            let index = tempProdutos.findIndex(produto => produto.id === id)
            let produto = tempProdutos[index]

            produto.noCarrinho = true
            produto.contar = 1
            produto.total = produto.preco

            let p = new Promise((resolve) => {
                resolve(commit('addNoCarrinho', { tempProdutos: tempProdutos, produto: produto }))
            })
            p.then(() => {
                dispatch('addTotal')
            }).then(() => {
                dispatch('salvarCarrinhoNoBrowser')
            })
        },
        addTotal: ({ commit, state }) => {
            let subTotal = 0
            for (let index = 0; index < state.carrinho.length; index++) {
                subTotal += state.carrinho[index].total
            }
            let tempTax = subTotal * 0.1
            tempTax = parseFloat(tempTax.toFixed(2))

            let total = subTotal + tempTax

            commit('addTotal', { subTotal, tempTax: tempTax, total: total })
        },
        abrirModal: ({ commit, state }, id) => {
            const modalProduto = state.produtos.find(produto => produto.id === id)
            commit('abrirModal', modalProduto)
        },
        fecharModal: ({ commit }) => {
            commit('fecharModal')
        },
        incremento: ({ commit, dispatch, state }, id) => {
            const tempCarrinho = [...state.carrinho]
            const index = tempCarrinho.findIndex(item => item.id === id)
            const produto = tempCarrinho[index]
            produto.contar++
                produto.total += produto.preco

            return new Promise(resolve => {
                resolve(commit('incremento', tempCarrinho))
            }).then(() => {
                dispatch('addTotal')
            }).then(() => {
                dispatch('salvarCarrinhoNoBrowser')
            })
        },
        decremento: ({ commit, dispatch, state }, id) => {
            const tempCarrinho = [...state.carrinho]
            const index = tempCarrinho.findIndex(item => item.id === id)
            const produto = tempCarrinho[index]
            produto.contar--
                produto.total -= produto.preco

            if (produto.contar <= 0) {
                dispatch('removerItem', id)
            } else {
                return new Promise(resolve => {
                    resolve(commit('decremento', tempCarrinho))
                }).then(() => {
                    dispatch('addTotal')
                }).then(() => {
                    dispatch('salvarCarrinhoNoBrowser')
                })
            }
        },
        paymentComplete: ({ dispatch }) => {
            dispatch('limparCarrinho')
            localStorage.removeItem('detalheProdutoIndex')
            router.replace('/')
        },
        salvarCarrinhoNoBrowser: ({ state }) => {
            const StringCarrinho = JSON.stringify(state.carrinho)
            localStorage.setItem('carrinho', StringCarrinho)
            localStorage.setItem('carrinhoSubTotal', state.carrinhoSubTotal)
            localStorage.setItem('carrinhoTax', state.carrinhoTax)
            localStorage.setItem('carrinhoTotal', state.carrinhoTotal)
        },
        limparBrowserStorage() {
            localStorage.removeItem('carrinho')
            localStorage.removeItem('carrinhoSubTotal')
            localStorage.removeItem('carrinhoTax')
            localStorage.removeItem('carrinhoTotal')
            localStorage.removeItem('detalheProdutoIndex')
        }
    }
})