<template>
    <div class="vista">
      <h1>DETALLES PAIS</h1>
      <detalles></detalles>
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import DetallesPais from '@/components/DetallesPais.vue';
  
  @Options({
    components: {
      detalles: DetallesPais
    },
  })
  export default class VistaPais extends Vue {}
  </script>
  