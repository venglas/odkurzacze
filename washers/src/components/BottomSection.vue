<template>
  <article class="bottom-section">
        
    <img src="../../static/img/car.png" alt="auto dostawcze" class="img" id="car">
    <div class="content">

      <h2 class="content__title">{{ title }}</h2>

      <ul class="list">
        <li class="list__item" v-for="item in info">
          {{ item }}
        </li>
      </ul>

    </div>
    
  </article>
</template>

<script>
export default {
  name: 'BottomSection',

  data () {
    return {
      title: 'Dojazd do klienta',
      info: [
        'Do 15 km gratis',
        'Powyżej 15 km - cena do uzgodnienia.'
      ],
    }
  },

  mounted(){
    let pageHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;

    document.addEventListener("scroll", ()=>{
      if(window.pageYOffset > (pageHeight - windowHeight) * 0.98){
        $('#car').addClass("carAnimation")
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables';

.bottom-section{
  height: 200px;
  display: flex;
  justify-content: space-between;
  background-color: $yellow;
  text-align: center;
  position: relative;

  .img{
    height: 100%;
    @media(max-width: 425px){
      display: none;
    }
  }
  .content{
    @media(min-width: 768px){
      position: absolute;
      top: 10%;
      right: 5%;
    }

    &__title{
      font-size: 3rem;
      padding: 1rem;
    }
    &__subtitle{
      font-size: 1.8rem;
    }
    .list{
      font-size: 1.8rem;
      margin-left: 2rem;
      text-align: left;
      padding-top: 1rem;
      @media(max-width: 425px){
        list-style-type: none;
        text-align: center;
      }
    }
  }
}
</style>