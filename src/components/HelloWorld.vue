<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>
      Soy Darwin, ¿Qué te apetece que hagamos ahora?
      <br><br>
      <a class="boton_personalizado" href="#">Hablemos<img class="peque" alt="Vue logo" src="../assets/hablar-respuestas.png"></a><br><br>
      <a class="boton_personalizado" href="#">Ayúdame<img class="peque" alt="Vue logo" src="../assets/help.png"></a><br><br>
      <a class="boton_personalizado" href="#">Juguemos<img class="peque" alt="Vue logo" src="../assets/game.png"></a><br><br>
      <a class="boton_personalizado" href="#">¿Qué día es hoy?<img class="peque" alt="Vue logo" src="../assets/day.png"></a>
      <br>
    </h2>
    <p>(?) Selecciona una opción para interactuar con Darwin</p>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.boton_personalizado{
    text-decoration: none;
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    background-color: #2a2a2b9d;
    border-radius: 6px;
    border: 2px solid #0016b0;
}
.boton_personalizado:hover{
    color: #1883ba;
    background-color: #ffffff;
  }
  .peque{
    height: 25px;
  }
</style>
