<template>
  <article class="our-offert">
    <h1 class="our-offert__title"> Poznaj naszą ofertę </h1>

    <div class="offert-box">
        <div v-for="item in offert" class="offert-box__item">
            <img :src="item.img" alt="" class="item-img">
            <div class="item-title">
                <h2>{{item.title}}</h2>
            </div>
        </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'OurOffert',
  data () {
    return {
        offert: [
            {id: 1, img: '../../static/img/kaf1.png', title: 'SPRZĄTANIE BIUR', description: 'Zapomnij o wielogodzinnych zmaganiach z myciem okien! Chcesz szybko umyć okna, lustra lub kafelki? To urządzenie jest stworzony z myślą o Tobie. Myjka WV 2 Premium BLACK przeznaczony jest do mycia wszelkiego rodzaju powierzchni szklanych, luster, a także fliz w domu.'},
            {id: 2, img: '../../static/img/kaf2.png', title: 'PRANIE DYWANÓW I WYKŁADZIN', description: 'nnowacyjna linia urządzeń wysokociśnieniowych Full Control Plus wyposażona w nowe pistolety, które ułatwiają dopasowanie ciśnienia do rodzaju czyszczonej powierzchni. Nowy pistolet wysokociśnieniowy Full Control Plus pozwala zapobiec uszkodzeniu wrażliwych powierzchni oraz zoptymalizować efekty czyszczenia, tak by za każdym razem rezultat prac był możliwie najlepszy.'},
            {id: 3, img: '../../static/img/kaf3.png', title: 'PRANIE TAPICERKI MEBLOWEJ', description: ''},
            {id: 4, img: '../../static/img/kaf4.png', title: 'WYPOŻYCZALNIA KARCHER', description: 'Urządzenie jest przeznaczone do prac porządkowych w miejscach, gdzie do zapewnienia czystości potrzebne są wytrzymałe i uniwersalne urządzenia. Niesprzyjające warunki i duże obciążenie panujące podczas prac porządkowych w transporcie, motoryzacji, budownictwie, rolnictwie czy pracy rzemieślniczej nie stanowią żadnej przeszkody dla tego odkurzacza.'},
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables';

.our-offert{
    background-color: $yellow;
    width: 100%;
    padding-bottom: 2rem;

    &__title{
        font-size: 3rem;
        font-weight: 400;
        text-align: center;
        padding: 2.5rem 0;
    }

    .offert-box{
        margin: 3rem auto;
        white-space: nowrap;
        height: 78%;
        width: 80%;
        margin: 0 auto;
        @media(max-width: 1024px){
            width: 95%;
        }
        @media(max-width: 768px){
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        &__item{
            display: inline-block;
            vertical-align: top; //fix position of element
            width: calc(25% - 4rem);
            margin: 0 2rem;
            height: 100%;
            position: relative;
            @media(max-width: 1024px){
                width: calc(25% - 4rem);
            }
            @media(max-width: 768px){
                width: calc(50% - 4rem);
                margin: 2rem 2rem;
            }
            @media(max-width: 425px){
                width: 95%;
            }
            .item-img{
                width: 100%;
                height: 20rem;
                max-height: 20rem;
            }
        }
        .item-title{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
            width: 100%;
            background-color: rgba(255, 255, 255, .6);
            padding: .5rem 0;
            h2{
                text-align: center;
                @media(max-width: 1440px){
                    font-size: 1rem;
                }
            }
        }
    }
}

</style>
