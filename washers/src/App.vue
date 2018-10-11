<template>
  <div id="app">
    <Header></Header>

    <transition name="fade">
      <router-view/>
    </transition>
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
@import './assets/scss/variables';
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
  font-family: $openSans;
}
#app {
  width: 100%;
  height: 100%;
  background-color: rgb(68, 68, 68);
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-200%);
  height: 0;
}
</style>