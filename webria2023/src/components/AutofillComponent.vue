<template>
  <div>
    <input class="form-control" style="max-width: 500px; margin-left: 390px;" type="text" v-model="searchTerm" @input="fetchResults" />
    <ul v-show="showResults" class="search-results">
      <li v-for="result in searchResults" :key="result.name.common" @click="handleResultClick(result)">
        {{ result.name.common }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchTerm: '',
      searchResults: [],
      showResults: false,
    };
  },
  methods: {
    fetchResults() {
      if (this.searchTerm.length > 0) {
        axios.get(`https://restcountries.com/v3.1/name/${this.searchTerm}`)
          .then(response => {
            this.searchResults = response.data;
            this.showResults = true;
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        this.searchResults = [];
        this.showResults = false;
      }
    },
    handleResultClick(result) {
      this.showResults = false;
      // Redireccionar a la página de detalles con el resultado seleccionado
      this.$router.push({ name: 'vista', params: { id: result.name.common } });
    },
  },
};
</script>

<style scoped>
.search-results {
  list-style: none;
  padding: 5px;
  margin: 0;
  cursor: pointer;
}
</style>