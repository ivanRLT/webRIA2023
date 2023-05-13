<template>
  <div class="home">
    <fondo-animado />
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 textNav">CountryFinder</span>
        <a class="nav-link active textNav" aria-current="page" href="/">Home</a>
      </div>
    </nav>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="textNav">CountryFinder</h1>
    <div class="button-container">
      <router-link to="/buscador" class="btn btn-primary btn-lg searchB">BUSCAR PAIS</router-link>
      <router-link to="/aleatorio" class="btn btn-primary btn-lg searchB" @click="obtenerPaisRandom">ALEATORIO</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import FondoAnimado from '@/components/FondoAnimado.vue';
import axios from 'axios';

@Options({
  components: {
    HelloWorld,
    FondoAnimado
  },
})
export default class HomeView extends Vue {
  fondoKey = 0;
  public obtenerPaisRandom(): void {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        if (response.data && response.data.length > 0) {
          const indexRandom = Math.floor(Math.random() * response.data.length);
          const paisRandomSeleccionado = response.data[indexRandom];
          this.$router.push(`/vista/${paisRandomSeleccionado.name.common}`);
        } else {
          console.log("No se encontraron países en la API.");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
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
