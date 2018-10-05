<template>
    <div class="slider">
      <div v-for="item in offert" class="slider__item">
        <p class="title">{{ item.description }}</p>
        <img :src="item.img" class="img">
      </div>
    </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      offert: [
        {id: 1, img: '../../static/img/slider/slide1.jpg', description: 'description of an item!'},
        {id: 2, img: '../../static/img/slider/slide2.jpg', description: 'description of an item!'},
        {id: 3, img: '../../static/img/slider/slide3.jpeg', description: 'description of an item!'}
      ]
    }
  },
  mounted() {
    $('.slider').slick({
      infinite: true,
      dots: true,
      speed: 800,
      autoplay: true,
      prevArrow: '<button type="button" class="slick-prev pull-left"><img src="../../static/img/slider/left-arrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next pull-right"><img src="../../static/img/slider/right-arrow.png"></button>'
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .slider{
    width: 100%;
    height: 45vh;
    &__item{
      width: 100%;
      height: 45vh;
      .title{
        position: absolute;
        top: 25%;
        z-index: 999;
        color: red;
        background-color: rgba(255, 255, 255, .75);
        padding: 1rem 2rem;
        // clip-path: polygon(0 0, 75% 0); // do it in next part of styling
      }
      .img{
        max-height: 100%;
        width: 100%;
      }
    }
    .slick-list{
      max-height: 100%;
    }
    .slick-track{
      max-height: 30vh;
    }
    .slick-arrow{
      position: absolute;
      top: 50%;
      z-index: 999;
      transform: translateY(-50%);
      background-color: transparent;
      border: none;
    }
    .slick-prev{
      left: 2rem;
    }
    .slick-next{
      right: 2rem;
    }
    .slick-dots{
      position: absolute;
      left: 50%;
      bottom: 1rem;
      transform: translateX(-50%);

      list-style-type: none;

      li{
        display: inline-block;
        margin: 0 .5rem;
        width: 15px; height: 15px;
        button{
          width: 100%; height: 100%;
          font-size: 0; //removing numbers from slick dots
          border: transparent;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, .75);
          &:hover{
            background-color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
</style>