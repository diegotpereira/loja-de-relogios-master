<template>
	<NavWrapper class="navbar navbar-expand-sm navbar-dark px-sm-5">
		<router-link to="/">
        <img v-bind:src="logo" alt="" class="meuLogo navbar-brand">
		</router-link>

		<ul class="navbar-nav align-items-center">
			<li class="nav-item ml-5">
				<router-link to="/" class="nav-link">Relógios</router-link>
			</li>
		</ul>
		<router-link to="/carrinho" class="ml-auto">
			<ButtonContainer>
				<span class="mr-2">
					<i class="fas fa-cart-plus"></i>
				</span>
				Meu Carrinho
			</ButtonContainer>
		</router-link>
	</NavWrapper>
</template> 
<script>
import logo from '../img/logo.svg'
import styled from 'vue-styled-components'
import { ButtonContainer } from '../styledComponentButtons'

const NavWrapper = styled.nav`
    background:var(--mainVue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.5rem;
    }
`
export default {
	name: 'Navbar',
	data() {
		return {
			logo: logo
		}
	},
	components: {
		NavWrapper,
		ButtonContainer
	}

}
</script>
<style scoped>
     .meuLogo {
        height: 3.9rem;
        width: 5rem;
    }
</style>