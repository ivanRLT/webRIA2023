<template>
  <div>
    <h2>{{ country.name?.common }}</h2>
    <p>Official Name: {{ country.name?.official }}</p>
    <p>Native Name: {{ country.name?.nativeName?.spa?.common }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountryDetails',
  data() {
    return {
      country: {},
    };
  },
  mounted() {
    const countryId = this.$route.params.id;
    this.fetchCountryDetails(countryId);
  },
  methods: {
    fetchCountryDetails(countryId) {
      axios
        .get(`https://restcountries.com/v3.1/name/${countryId}`)
        .then(response => {
          // Obtener los detalles del país desde la respuesta de la API
          if (response.data && response.data.length > 0) {
            this.country = response.data[0];
          } else {
            console.log('ESTA VACIO');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>