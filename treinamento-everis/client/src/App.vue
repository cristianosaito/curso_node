<template>
	<div id="app">
		<ev-header v-if="isAuth"/>
		<ev-message/>
		<router-container/>
	</div>
</template>

<script>
import vue from 'vue'
import Message from '@/components/globals/message'
import RouterContainer from '@/containers/router-view'
import Header from '@/components/globals/header'
import GenericContainer from '@/components/shared/generic-container'

vue.component('ev-container',GenericContainer)

export default {
	name: 'App',
	components:{
		'ev-message': Message,
		'ev-header': Header,
		'router-container': RouterContainer
	},
	computed:{
		isAuth(){
			return this.$store.getters["Auth/isAuth"] && this.$route.name !== "Login"
		}
	}
}
</script>

<style lang="scss">
@import '~bootstrap-vue/src/index.scss';
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body{
	background-color: #f3f3f3;
    font-size: 0.875em;
    overflow-x: hidden;
    color: #222;
    font-family: "Poppins", sans-serif;
    background-attachment: fixed;
}
</style>
