<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body{
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  background-color: lighten(gray, 10%);
}
</style>
