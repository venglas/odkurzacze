<template>
  <article class="full-offert" id="offert">
      <div class="gallery-column gallery-column--1">
          <img  v-for="image in gallery" :src="image" alt="">
      </div>

      <div class="gallery-column gallery-column--2">

      </div>

      <div class="gallery-column gallery-column--3">

      </div>
  </article>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
        gallery: [
            '../../static/img/car.png',
            '../../static/img/kaf2.png',
            '../../static/img/odkurzacz-puzzi.jpg'
        ]
    }
  },
  mounted(){},
  destroyed(){}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.image{
    width: 10rem;
    height: 10rem;
}
</style>
