<template>
  <div class="">
    <Slider></Slider>

    <div class="section-under"> 
      <h1>Odwiedź nasz profil na facebooku</h1>
      <button>
        <a href="https://www.facebook.com/" target="_blank" class="button-link">Odkurza-czary</a>
      </button>
    </div>

    <OurOffert></OurOffert>
    <ExampleOffert></ExampleOffert>
  </div>
</template>

<script>
import Slider from '../components/Slider'
import OurOffert from '../components/OurOffert'
import ExampleOffert from '../components/ExampleOffert'
import BottomSection from '../components/BottomSection'

export default {
  name: 'Start',
  components: {Slider, OurOffert, ExampleOffert, BottomSection},
  data () {
    return {}
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
  @media(max-width: 425px){
    font-size: .7rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 2.2rem;
  }
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
