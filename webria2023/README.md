# webria2023

## Instalacion inicial
```
npm install
```

### Inicio del servidor de prueba
```
npm run serve
```

### Compilacion para produccion
```
npm run build
```

## Historias de usuario:

- Como usuario quiero poder buscar información sobre un país concreto.
- Como usuario quiero poder solicitar aleatoriamente información sobre un país.
- Como usuario quiero conocer datos sobre un país.
- Como usuario quiero conocer datos del clima de la capital del país.
- Como usuario quiero poder ver la bandera del país.
- Como usuario quiero ver una web intuitiva.

## Análisis de diferentes APIs que podíamos usar para resolver las historias de usuario:

1. REST Countries: Esta API proporciona información detallada sobre países, como nombres, códigos ISO, capitales, población, idiomas, monedas, horarios, etc. La ventaja de esta API es que ofrece una amplia gama de datos sobre países en un formato fácil de usar.
2. Geonames: Es una base de datos geográfica que ofrece una API para obtener información sobre países, regiones, ciudades y otros lugares. Puedes obtener datos como nombres, ubicaciones geográficas, códigos de país y otros detalles geográficos. La ventaja de Geonames es su amplia cobertura geográfica y la posibilidad de obtener información detallada sobre lugares específicos.
3. RESTful: Esta API ofrece datos básicos sobre países, como nombres, capitales, monedas, idiomas y banderas. La ventaja de RESTful Country es su sencillez y facilidad de uso, ya que proporciona información básica y concisa sobre los países.
4. OpenCage Geocoder: Esta API no está dedicada exclusivamente a datos sobre países, OpenCage Geocoder es una API de geocodificación que puede proporcionar información geográfica sobre países, regiones y ciudades. Puedes obtener coordenadas geográficas, códigos de país, nombres de lugares y más. La ventaja de OpenCage Geocoder es su enfoque en la geolocalización y la capacidad de obtener información detallada sobre ubicaciones específicas.
5. OpenWeatherMap: Es una API que proporciona datos meteorológicos actuales, pronósticos a corto y largo plazo, así como información histórica sobre el clima. Ofrece una amplia gama de datos, como temperatura, humedad, velocidad del viento, precipitación y más. Además, cuenta con una gran cobertura geográfica y es fácil de usar. 
6. Weatherbit: Es una API que proporciona datos meteorológicos en tiempo real y pronósticos para varios intervalos de tiempo. Puedes obtener información sobre temperatura, humedad, presión atmosférica, velocidad del viento y mucho más. También ofrece datos históricos y cuenta con una cobertura geográfica global.
7. AccuWeather: Es una API confiable y precisa que ofrece pronósticos meteorológicos, información actualizada y datos históricos sobre el clima. Proporciona detalles sobre temperatura, precipitación, viento, nubes y más.
8. WeatherAPI: Es una API que ofrece datos meteorológicos precisos y detallados, incluyendo pronósticos a corto y largo plazo. Puedes obtener información sobre temperatura, precipitación, viento, humedad, etc. También cuenta con una amplia cobertura geográfica y opciones gratuitas y de pago para acceder a más características.



## APIs seleccionadas:
- En nuestro caso decidimos usar la primera opción en esta lista (REST Countries) debido a que nos pareció más completa que las demás. Un factor que influyo mucho en la elección fue la facilidad y documentación que encontramos en el momento de la decisión.
Es una API robusta y en etapa de pruebas no tuvimos ningún tipo de problema tanto en las request que hicimos para probarla como en lo que nos respondió para cada una.
- Además, decidimos incluir el uso de WeatherAPI para solucionar la obtención de datos del clima, la selección de esta API estuvo principalmente en la facilidad para utilizarla, así como que su versión gratuita realmente lo era, ya que otras opciones solicitaban un método de pago.
