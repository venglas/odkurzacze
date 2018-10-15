<template>
  <div class="about-us">
      <div class="about-us__content">
        <h1>O Nas</h1>
        <h2 class="animation-1">Jesteśmy niewielką firmą podchodzącą do każdego zlecenia niezwykle poważnie i profesjonalnie.</h2>
        <h2 class="animation-2">Dysponujemy wyłącznie sprzętem renomowanej firmy Karcher i stosujemy tylko oryginalną chemię czyszczącą.</h2>
        <h2 class="animation-3">Większość naszych klientów pochodzi z poleceń.</h2>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {}
  },
  mounted(){
    $('.content__img')[0].className += ' carAnimation';
  },
  destroyed(){
    $('.content__img')[0].classList.remove('carAnimation');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin animation-text($anim-delay){
    animation-name: fade-in-text;
    animation-delay: $anim-delay;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
}

.about-us{
    text-align: center;
    padding: 5rem;
    min-height: calc(100vh - 8vh - 380px);
    display: flex;
    align-items: center;
    justify-content: center;

    &__content{
        line-height: 2;
        letter-spacing: 2px;
        h1, h2{
            color: #fff;
            opacity: 0;
        }
        h1{
            font-size: 5rem;
            @include animation-text(1000ms);

            @media(max-width: 1440px){
                font-size: 3.5rem;
            }
        }
        h2{
            font-size: 3rem;
            @media(max-width: 1440px){
                font-size: 2rem;
            }

            @media(max-width: 768px){
                font-size: 1.7rem;
            }

            @media(max-width: 425px){
                font-size: 1.3rem;
            }
        }

        .animation-1{
           @include animation-text(2000ms);
        }
        .animation-2{
           @include animation-text(3000ms);
        }
        .animation-3{
           @include animation-text(4000ms);
        }

        @keyframes fade-in-text {
            0%{opacity: 0}
            100%{opacity: 1} 
        }
    }
}
</style>
