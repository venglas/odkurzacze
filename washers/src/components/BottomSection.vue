<template>
  <article class="bottom-section">
      
      <div class="content">
        <img src="../../static/img/car.png" alt="auto dostawcze" class="content__img">
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
}
.spacer{
  background-color: $yellow;
}
</style>