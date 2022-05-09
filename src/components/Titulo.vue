<template>
	<div class="row mt-2">
		<div class="col-10 mx-auto text-center text-title">
			<h1 class="font-weight-bold">
				{{nome}}
				<strong class="text-vue">{{titulo}}</strong>
			</h1>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Titulo',
	props: ['nome', 'titulo']
}
</script>
