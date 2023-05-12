<template>
  <div class="home">
    <fondo-animado />
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 textNav">CountryFinder</span>
      </div>
    </nav>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="textNav">CountryFinder</h1>
    <div class="button-container">
      <router-link to="/buscador" class="btn btn-primary btn-lg searchB">BUSCAR PAIS</router-link>
      <router-link to="/aleatorio" class="btn btn-primary btn-lg searchB">ALEATORIO</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import FondoAnimado from '@/components/FondoAnimado.vue';

@Options({
  components: {
    HelloWorld,
    FondoAnimado
  },
})
export default class HomeView extends Vue {
  fondoKey = 0; // Elimina la anotación de tipo innecesaria
  // ...
}
</script>

<style scoped>
.home {
  text-align: center;
}

.button-container {
  margin-top: 10px;
}

.searchB {
  margin: 5px;
  background-color: black;
  border-color: black;
}
.navbar {
  background-color: black;
}
.textNav {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
