<template>
  <div>
    <input type="text" v-model="searchTerm" @input="handleInput">
    <ul v-if="showSuggestions">
      <li v-for="suggestion in suggestions" :key="suggestion" @click="selectSuggestion(suggestion)">
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      showSuggestions: false,
      suggestions: []
    };
  },
  methods: {
    handleInput() {
      // Realizar una llamada a la API para obtener las sugerencias de autocompletado
      fetchSuggestions().then((data) => {
        this.suggestions = data;
        this.showSuggestions = true;
      });
    },
    selectSuggestion(suggestion) {
      this.searchTerm = suggestion;
      this.showSuggestions = false;
    }
  }
}

async function fetchSuggestions() {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/?q=${this.searchTerm}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>