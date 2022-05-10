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
import Modal from './components/Modal.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App'	,
	data() {
		return {
			
		}
	},
	components: {
		Navbar,
		Footer,
		Modal
	}
}
</script>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
	Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
