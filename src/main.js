import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue' //Prueba de importación de componente

Vue.component('home', Home); //Carga del componente

Vue.config.productionTip = false

new Vue({
  mounted() {
  },
  render: h => h(App),
}).$mount('#app')
