<template>
  <article class="example-offert">

    <div class="section section--top">
        <img :src="exampleOffert[0].img" alt="" class="section__img">
        <div class="section__description section__description--top">
            <h2 class="title">{{ exampleOffert[0].name }}</h2>
            <p class="description">{{ exampleOffert[0].description }}</p>
        </div>
        <div style="clear: both"></div>
    </div>

    <div class="section section--bottom">
        <img :src="exampleOffert[1].img" v-if="isMobile" alt="" class="section__img">

        <div class="section__description section__description--bottom">
            <h2 class="title">{{ exampleOffert[1].name }}</h2>
            <p class="description">{{ exampleOffert[1].description }}</p>
        </div>

        <img :src="exampleOffert[1].img" v-if="!isMobile" alt="" class="section__img">

        <div style="clear: both"></div>
    </div>

    <div style="clear: both"></div>

  </article>
</template>

<script>
export default {
  name: 'ExampleOffert',
  data () {
    return {
        isMobile: false,
        exampleOffert: [
            {name: 'ODKURZACZ PRZEMYSŁOWY KARCHER NT 35/1', img: '../../static/img/odkurzacz-przemyslowy-karcher.jpg', description: 'Urządzenie jest przeznaczone do prac porządkowych w miejscach, gdzie do zapewnienia czystości potrzebne są wytrzymałe i uniwersalne urządzenia. Niesprzyjające warunki i duże obciążenie panujące podczas prac porządkowych w transporcie, motoryzacji, budownictwie, rolnictwie czy pracy rzemieślniczej nie stanowią żadnej przeszkody dla tego odkurzacza.'},
            {name: 'ODKURZACZ  PIORĄCY PUZZI  10/1', img: '../../static/img/odkurzacz-puzzi.jpg', description: 'Dzięki bogatemu wyposażeniu urządzenie Puzzi można stosować zarówno do czyszczenia wykładzin dywanowych jak i tapicerki samochodowej, meblowej oraz podłóg twardych. Doskonale sprawdza się w hotelach, biurowcach, firmach zajmujących się przewozem osób. W zależności od stopnia zabrudzenia powierzchni może pracować w jednym lub w dwóch przejściach roboczych. Pozostawia jedynie niewielką wilgoć, dzięki czemu powierzchnię można użytkować w krótkim czasie po przeprowadzeniu prac czyszczących.'}
        ]
    }
  },
  created(){
    console.log(window.innerWidth)
    if(window.innerWidth <= 425){
        this.isMobile = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables';

.example-offert{
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    padding: 2rem 0;
    @media(max-width: 425px){
        text-align: center;
    }

    .section{
        width: 80%;
        margin: 0 auto;
        @media(max-width: 425px){
            padding: 3rem 0;
        }

        &--bottom{
            // background-color: darken(rgb(255, 255, 255), 6%)
        }
        &__img{
            width: 25%;
            display: inline-block;
            @media(max-width: 425px){
                width: 60%;
            }
        }
        &__description{
            display: inline-block;
            margin-top: 2rem;
            width: 65%;
            @media(max-width: 425px){
                width: 100%;
            }
            .title{
                font-size: 3rem;
                text-transform: uppercase;
                margin: 1rem 0;
                @media(max-width: 768px){
                    font-size: 2rem;
                }
                @media(max-width: 375px){
                    font-size: 1.7rem;
                }
            }
            .description{
                font-size: 1.8rem;
                letter-spacing: 2px;
                @media(max-width: 768px){
                    font-size: 1.5rem;
                }
                @media(max-width: 375px){
                    font-size: 1.2rem;
                }
            }
            &--top{
                float: right;
            }
            &--bottom{
                float: left;
            }
        }
    }
    
}
</style>
