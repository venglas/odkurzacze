<template>
  <article class="bottom-section">
      
      <div class="content">
        <img src="../../static/img/car.png" alt="auto dostawcze" class="content__img" id="car">
        <h2 class="content__title">Dojazd do klienta na terenie całego Śląska</h2>
      </div>

      <div class="spacer"></div>
  </article>
</template>

<script>
export default {
  name: 'BottomSection',
  data () {
    return {}
  },
  mounted(){
    document.addEventListener("scroll", ()=>{
      if(window.pageYOffset > 3900){
        $('#car').addClass("carAnimation")
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables';

.bottom-section{
  height: 400px;
}
.content, .spacer{
  height: 50%;
}
.content{
  position: relative;
  &__title{
    position: absolute;
    right: 5%;
    top: 45%;
    color: #fff;
    font-size: 1.8rem;
    @media(max-width: 768px){
      top: 25%;
    }
    @media(max-width: 425px){
      right: 0;
      text-align: center;
      width: 100%;
    }
    @media(max-width: 375px){
      font-size: 1.5rem;
    }
  }
  &__img{
    height: 100%;
    width: auto;
    margin-left: 5%;
    position: absolute;
    top: 20%;
    
    @media(max-width: 425px){
      max-width: 100%;
       margin-left: 0;
      top: 45%;
      height: auto;
    }
  }
  .carAnimation{
    animation-name: carDrive;
    animation-duration: 3000ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }
  @keyframes carDrive {
    0%{transform: none}
    100%{transform: translateX(215%)}
  }
  @media(max-width: 1440px){
    @keyframes carDrive {
      0%{transform: none}
      100%{transform: translateX(130%)}
    }
  }
  @media(max-width: 1024px){
    @keyframes carDrive {
      0%{transform: none}
      100%{transform: translateX(40%)}
    }
  }
  @media(max-width: 980px){
    @keyframes carDrive {
      0%{transform: none}
      100%{transform: none}
    }
  }
}
.spacer{
  background-color: $yellow;
}
</style>