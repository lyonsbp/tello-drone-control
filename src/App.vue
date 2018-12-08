<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DroneControl></DroneControl>
  </div>
</template>

<script>
import DroneControl from './components/DroneControl'

export default {
  name: 'app',
  components: {
    DroneControl
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
