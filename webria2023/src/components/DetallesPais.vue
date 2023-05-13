<template>
  <div>
    <h1 class="busTitulo">Detalles de {{ country.name?.common }} {{ country.flag }}</h1>
    <div class="row align-items-start" style="text-align: left; margin-left: 10px; margin-right: 10px;">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-5">
              <h3>Datos generales:</h3>
              <h5>Nombre Oficial: {{ country.name?.official }}</h5>
              <h5>Capital: {{ nombreFormateadoC }}</h5>
              <h5>Región: {{ country.region }}</h5>
              <div class="card" style="margin-top: 50px;">
                <div class="card-body">
                  <h4>Estado del tiempo actual:</h4>
                  <div class="row">
                    <div class="col-md-6">
                      <p style="margin-top: 15px;">Temperatura: {{ weather.temperatura }} °C</p>
                      <p>Sensación Térmica: {{ weather.sensacion }} °C</p>
                      <p>Viento: {{ weather.viento }} km/h</p>
                    </div>
                    <div class="col-md-6">
                      <img :src="weather.icon" alt="Icono del tiempo"
                        style="height: 130px; width: auto; margin-left: 50px;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <h4>Bandera nacional:</h4>
                  <img :src="country?.flags?.png" alt="Icono del tiempo"
                    style="height: 200px; width: auto;">
                </div>
                <div class="col-md-6">
                  <h4 style="margin-left: 50px;">Escudo de armas:</h4>
                  <img :src="country?.coatOfArms?.png" alt="Icono del tiempo"
                    style="height: 200px; width: auto; margin-left: 120px;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountryDetails',
  data() {
    return {
      country: {},
      weather: {},
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
            this.obtenerClima(); // Llamar a obtenerClima después de obtener los detalles del país
          } else {
            console.log('ESTA VACIO');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    obtenerClima() {
      const apiKey = '4e7e5f677b28498b8a8161203231305'; // Reemplaza con tu propia API Key de WeatherAPI
      const city = this.nombreFormateadoC; // Utiliza la capital formateada del país como la ciudad para obtener el clima

      axios
        .get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(response => {
          this.weather.temperatura = response.data.current.temp_c;
          this.weather.descripcion = response.data.current.condition.text;
          this.weather.sensacion = response.data.current.feelslike_c;
          this.weather.viento = response.data.current.wind_kph;
          this.weather.icon = response.data.current.condition.icon;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  computed: {
    nombreFormateadoC() {
      const capital = this.country.capital;
      if (Array.isArray(capital)) {
        return capital[0];
      }
      return capital;
    }
  }
};
</script>

<style scoped>
.busTitulo {
  font-size: 50px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
