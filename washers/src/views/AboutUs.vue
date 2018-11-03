<template>
  <div class="" id="about-us">

    <!-- <h1 class="about-us-title">O Firmie</h1> -->

    <div class="about-us">
        <img src="../../static/img/icons/logo.png" alt="" class="about-us__img">

        <div class="about-us__content">
            <h1 class="about-us-title">O Firmie</h1>
            <h2 class="animation-1">Jesteśmy niewielką firmą podchodzącą do każdego zlecenia niezwykle poważnie i profesjonalnie.</h2>
            <h2 class="animation-2">Specjalizujemy się w zakresie czyszczenia, prania dywanów, wykładzin, tapicerki meblowej oraz samochodowej, a także mycia kostki brukowej i elewacji.</h2>
            <h2 class="animation-3">Dysponujemy wyłącznie sprzętem renomowanej firmy Karcher i stosujemy tylko oryginalną chemię czyszczącą. Większość naszych klientów pochodzi z poleceń.</h2>
            <h2 class="animation-4">Nasza firma nie jest płatnikiem podatku VAT</h2>
        </div>
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
    // $('.content__img')[0].className += ' carAnimation';
  },
  destroyed(){
    // $('.content__img')[0].classList.remove('carAnimation');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/variables';

@mixin animation-text($anim-delay){
    animation-name: fade-in-text;
    animation-delay: $anim-delay;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
}

.about-us-title{
    color: $yellow;
    font-size: 5.5rem;
    letter-spacing: 2px;
    text-align: center;
    padding-top: 5rem;
    opacity: 0;

    @include animation-text(1000ms);

    @media(max-width: 1440px){
        font-size: 3rem;
    }
}

.about-us{
    text-align: center;
    padding: 0 5rem 5rem 5rem;
    min-height: calc(100vh - 8vh - 380px);
    display: flex;
    align-items: center;
    justify-content: center;

    &__img{
        max-width: 25%;
        opacity: 0;
        @include animation-text(1000ms);
    }

    &__content{
        line-height: 2;
        letter-spacing: 2px;
        text-align: left;
        padding-left: 4rem;
        h1, h2{
            // color: #fff;
            color: $yellow;
            opacity: 0;
        }
        h1{
            font-size: 5rem;
            @include animation-text(1000ms);

            @media(max-width: 1440px){
                font-size: 3rem;
            }
        }
        h2{
            font-size: 3rem;
            line-height: 2.5;
            @media(max-width: 1440px){
                font-size: 1.5rem;
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
        .animation-4{
            @include animation-text(5000ms);
        }

        @keyframes fade-in-text {
            0%{opacity: 0}
            100%{opacity: 1} 
        }
    }
}
</style>
