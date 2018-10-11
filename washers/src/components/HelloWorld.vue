<template>
  <div class="">
    <Slider></Slider>

    <div class="section-under"> 
      <h1>Odwiedź nasz profil na facebooku</h1>
      <button>
        <a href="https://www.facebook.com/" class="button-link">Odkurza-czary</a>
      </button>
    </div>

    <OurOffert></OurOffert>
    <ExampleOffert></ExampleOffert>
    <BottomSection></BottomSection>
  </div>
</template>

<script>
import Slider from './Slider'
import OurOffert from './OurOffert'
import ExampleOffert from './ExampleOffert'
import BottomSection from './BottomSection'

export default {
  name: 'HelloWorld',
  components: {Slider, OurOffert, ExampleOffert, BottomSection},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.section-under{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2.2rem;
  color: #fff;
  button{
    background-color: yellow;
    border: 0 transparent;
    border-radius: 3px;
    padding: 1rem 2.2rem;
  }
  .button-link{
    text-decoration: none;;
    color: #000;
    font-weight: 600;
  }
}
</style>
