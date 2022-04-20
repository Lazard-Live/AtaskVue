<template>
  <preHeader></preHeader>

</template>

<script>
import preHeader from './components/preHeader.vue'


export default {
  name: 'App',
  components: {
    preHeader
  }
}
</script>

<style lang="scss">

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
