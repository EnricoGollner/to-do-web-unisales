<template>
  <div class="container">
    <div class="nav">
      <router-link to="/"><p>Home</p></router-link>
    </div>
    <div class="nav">
      <router-link to="/to-do"><p>To-do App</p></router-link>
    </div>
    <div class="nav">
      <router-link to="/sobre"><p>Sobre</p></router-link>
    </div>

  </div>
</template>
  
<script lang="ts">
export default {
  name: 'Navbar'
};
</script>
  
<style scoped>
  .container {
    display: flex;
    justify-content: center;
    gap: 4vw;
    padding: 20px;
  }
  .nav p{
    text-decoration: none;
    color: #129622;
  }
</style>
  