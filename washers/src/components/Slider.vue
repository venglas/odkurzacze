<template>
<div v-if="!isLoaded">

  <!-- <div class="contact-modal">

  </div> -->

  <div class="phone-number">
    <img src="../../static/img/icons/phone-contact.png" alt="">
    <a href="tel:694045198">694-045-198</a>
  </div>

  <div class="slider" id="slider1">
      <div v-for="item in offert" class="slider__item">
        <p class="title">{{ item.description }}</p>
        <img :src="item.img" class="img">
      </div>
  </div>

</div>

</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      offert: [
        {id: 1, img: '../../static/img/slider/slide2.png', description: 'description of an item!'},
        {id: 2, img: '../../static/img/slider/slide3.png', description: 'description of an item!'}
      ],
      isLoaded: false,
      sliderData: {},
    }
  },
  methods: {},
  mounted() {
    let scope = this;

    axios.get('http://localhost:8080/api/slider').then( function (response) {
      scope.sliderData = response.data.data;
      scope.isLoaded = true;
      
      // if(scope.isLoaded === true){

      //   setTimeout(() => {

      //     $('.slider').slick({
      //       infinite: true,
      //       dots: true,
      //       speed: 800,
      //       autoplay: true,
      //       prevArrow: '<button type="button" class="slick-prev pull-left"><img src="../../static/img/slider/left-arrow.png"></button>',
      //       nextArrow: '<button type="button" class="slick-next pull-right"><img src="../../static/img/slider/right-arrow.png"></button>'
      //     });

      //   }, 100); // this timeout is beacuse slick start rendering before data is in component

      // }
    });

    $('#slider1').slick({
      infinite: true,
      dots: true,
      speed: 800,
      autoplay: true,
      prevArrow: '<button type="button" class="slick-prev pull-left"><img src="../../static/img/slider/left-arrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next pull-right"><img src="../../static/img/slider/right-arrow.png"></button>'
    });
  },
  created(){}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .phone-number{
    position: absolute;
    right: 0;
    z-index: 999;
    background: yellow;
    padding: .8rem 3rem;
    font-size: 1.8rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);
    display: flex;
    justify-content: space-between;
    img{
      padding: 0 1rem 0 2rem;
    }
    a{
      margin-top: .3rem;
      text-decoration: none;
      color: #000;
    }
  }
  .slider{
    width: 100%;
    height: 65vh;
    @media(max-width: 375px){
      height: 30vh;
    }
    &__item{
      width: 100%;
      height: 65vh;
      background-size: cover;
      .title{
        position: absolute;
        top: 25%;
        z-index: 999;
        background-color: rgba(255, 255, 255, .7);
        padding: 1rem 2rem;
        font-size: 1.5rem;
        font-weight: 600;
        // clip-path: polygon(0 0, 75% 0); // do it in next part of styling
      }
      .img{
        max-height: 100%;
        height: 100%;
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
      cursor: pointer;
      outline: none;
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
          outline: none;
          cursor: pointer;
          &:hover{
            background-color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
</style>