<script setup lang="ts">
</script>

<template>
  <main class="welcome">
	<h1>Seja bem-vindo(a) a sua nova lista de tarefas!</h1>
	<br>
	<button class="botao-iniciar">
		<router-link class="link" to="/to-do">Iniciar</router-link>
	</button>
  </main>
	
</template>

<style>

.welcome {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 85vh;
}
.link {
	text-decoration: none;
	color: #fff;
}
.botao-iniciar {
    background-color: #0f8504; 
    color: white; 
    border: none; 
    padding: 10px 20px; 
    border-radius: 5px;
    cursor: pointer; 
    font-size: 16px; 
}

.botao-iniciar:hover {
    background-color: #0c6e03;
}</style>