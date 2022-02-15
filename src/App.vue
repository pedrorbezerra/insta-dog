<template>
  <div id="app">
    <TheHeader />
    <router-view :key="$route.fullPath" class="router" />
  </div>
</template>

<script>
import TheHeader from './components/organisms/TheHeader/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="sass">
@use 'bulma'

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
