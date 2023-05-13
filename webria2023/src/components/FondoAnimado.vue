<template>
  <div class="fondo-animado"></div>
</template>

<style>
.fondo-animado {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  animation: abstractBackground 10s ease infinite;
}

@keyframes abstractBackground {
  0% {
    background-color: #81c7d3; /* Color suave 1 */
  }
  25% {
    background-color: #717bae; /* Color suave 2 */
  }
  50% {
    background-color: #644d88; /* Color suave 3 */
  }
  75% {
    background-color: #717bae; /* Color suave 4 */
  }
  100% {
    background-color: #81c7d3; /* Color suave 5 */
  }
}
</style>
