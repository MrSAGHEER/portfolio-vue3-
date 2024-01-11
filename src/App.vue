<template>
  <header_all/>

  <footer_all/>
</template>

<script>
import header_all from "./components/header_all.vue";
import footer_all from "./components/footer_all.vue";
export default {
  name: 'App',
  components: {
    header_all,footer_all
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
