<template>
    <div id="app">
      <Navbar />
      <div class="conditional-content">
        <router-view />
        <Modal />
      </div>
      <Footer />
    </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
	name: 'App'	,
	data() {
		return {
			
		}
	},
	components: {
		Navbar,
    Modal,
		Footer,
	},
  created() {
    this.$store.dispatch('setProdutos')
  }
}
</script>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Modal
  },
  created () {
    this.$store.dispatch('setProdutos')
  },
}
</script>
<style>
  /*This is the way to setup css variables that we can use later with the name of the variable "var(--mainBlue)" like shown below in the body*/
  :root {
    --mainVue:#41B883;
    --lightBlue:#009ffd ;
    --mainWhite:#f3f3f3;
    --mainDark:#003366;
    --mainYellow: #ffb830;
    --lightGray:lightgray;
    --mainBlack:#232528;
  }

  body{
    font-family: 'Oswald', sans-serif !important; /*Because we are using Bootstrap we need !important or else bootstrap will overwrite it  */
    background: var(--mainWhite) !important;
    color: var(--mainDark) !important;
  }
  .conditional-content {
    min-height: 34rem;
  }
  @media only screen and (min-width: 1600px) {
      .conditional-content {
          min-height: 45rem;
      }
  }
  .footer {
    background-color: var(--mainVue);
    height: 3rem;
    width: 100%;
    text-align: center;
    display: table;
  }
  .footer p {
    font-size: 1rem ;
    text-align:center;
    display: table-cell;
    vertical-align: middle;
  }
  .text-title {
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.3rem;
  }
  .text-vue {
    color: var(--mainVue);
  }
  .text-bright {
    color: var(--lightBlue);
  }

  .text-underline {
    text-decoration: underline;
    text-decoration-color: lightcoral;
  }

  .btn-black {
    background: transparent;
    text-transform: capitalize;
    font-size: 0.8rem !important;
    color: var(--mainDark);
    border-radius: 0.3rem !important;
    border: 0.1rem solid var(--mainDark) !important;
    cursor: pointer;
  }
  .btn-black:hover {
    background: var(--mainVue) !important;
    color: var(--mainWhite) !important;
  }

  .cart-icon {
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--mainYellow);
  }
  .page-fill {
    margin-top: 100%;
    margin-bottom: 100%;
  }
</style>
