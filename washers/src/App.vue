<template>
  <div id="app" v-if="isOn">
    <Header></Header>
    
    <transition name="fade">
      <router-view/>
    </transition>

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
  },
  data (){
    return{
      isOn: true
    }
  },
  created(){
    let time = new Date;
  },

  mounted(){
    let time = new Date;

    if(time.getFullYear() >= 2019){

      if(time.getFullYear() > 2019){
        this.isOn = false;
      }

      if(time.getMonth() == 4 ){
        if(time.getDate() > 13) {
          this.isOn = false;
        }
      }

      if(time.getMonth() < 4){
        this.isOn = false;
      }
      
      if(time.getMonth() > 4 ){
        this.isOn = false;
      }
    }
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