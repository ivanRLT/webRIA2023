<template>
  <div class="buscador" style="align-items: center;">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 textNav">CountryFinder</span>
        <a class="nav-link active textNav" aria-current="page" href="/">Inicio</a>
      </div>
    </nav>
    <fondo-animado />
    <img style="width: 200px; height: auto;" alt="Vue logo" src="../assets/logo.png">
    <h1 class="busTitulo">Buscar Pais</h1>
    <buscador></buscador>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AutofillComponent from '@/components/AutofillComponent.vue';
import FondoAnimado from '@/components/FondoAnimado.vue';

@Options({
  components: {
    buscador: AutofillComponent,
    FondoAnimado
  },
})
export default class Buscador extends Vue {}
</script>

<style scoped>
.navbar {
  background-color: black;
}
.textNav {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.busTitulo {

  font-size: 50px;
  color:white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>