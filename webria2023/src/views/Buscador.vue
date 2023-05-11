<template>
  <div class="buscador">
    <h1>BUSCAR PAIS</h1>
    <buscador></buscador>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AutofillComponent from '@/components/AutofillComponent.vue';

@Options({
  components: {
    buscador: AutofillComponent
  },
})
export default class HomeView extends Vue {}
</script>
