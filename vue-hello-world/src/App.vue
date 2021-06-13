<template>
  <div id="app">
    <div id="overlay-common" />
    <BaseHeader/>
    <router-view />
  </div>
</template>

<script>
import BaseHeader from '@/components/common/BaseHeader'

export default {
  name: 'App',
  components: {
    BaseHeader
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "assets/css/base/index";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
