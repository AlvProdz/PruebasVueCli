<template>
  <div id="app">
    <img class="darwin"alt="Vue logo" src="./assets/micara.png">
    <HelloWorld msg="Bienvenido de nuevo Álvaro"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.darwin{
  height: 300px;
}
</style>
