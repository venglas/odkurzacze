<template>
    <div class="slider">
          <div><h3>1</h3></div>
  <div><h3>2</h3></div>
  <div><h3>3</h3></div>
  <div><h3>4</h3></div>
  <div><h3>5</h3></div>
  <div><h3>6</h3></div>
    </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log($('.slider'))
    $('.slider').slick({
      infinite: true,
      dots: true,
      speed: 800,
      autoplay: true
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  
</style>