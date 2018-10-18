<template>
  <div id="app">
    <Header></Header>

    <!-- <transition name="fade">
      <router-view/>
    </transition> -->

    <Slider></Slider>
    <AboutUs></AboutUs>
    <Start></Start>
    <Contact></Contact>



    <BottomSection></BottomSection>
  </div>
</template>

<script>
import Header from './components/Header'
import BottomSection from './components/BottomSection'
import Slider from './components/Slider'
import Start from './views/Start'
import AboutUs from './views/AboutUs'
import Contact from './views/Contact'

export default {
  name: 'App',
  components: {
    Header,
    BottomSection,
    Slider,
    Start,
    AboutUs,
    Contact
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
  transform: translateX(-200%);
  height: 100vh;
  opacity: 0;
}
</style>