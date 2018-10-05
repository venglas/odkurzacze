<template>
  <div class="">
    <Slider></Slider>

    <div class="section-under">
      <h1>lorem ipsum</h1>
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
</style>
