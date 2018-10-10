<template>
  <article class="our-offert">
    <h1 class="our-offert__title"> Poznaj naszą ofertę </h1>

    <div class="offert-box">
        <div v-for="item in offert" class="offert-box__item">
            <img :src="item.img" alt="" class="item-img">
            <div class="item-description">
                <h2>{{item.title}}</h2>
                <p>{{item.description}}</p>
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
            {id: 1, img: '../../static/img/myjka-karcher-2.jpg', title: 'MYJKA DO OKIEN KARCHER VW 2 PREMIUM', description: 'Zapomnij o wielogodzinnych zmaganiach z myciem okien! Chcesz szybko umyć okna, lustra lub kafelki? To urządzenie jest stworzony z myślą o Tobie. Myjka WV 2 Premium BLACK przeznaczony jest do mycia wszelkiego rodzaju powierzchni szklanych, luster, a także fliz w domu.'},
            {id: 2, img: '../../static/img/myjka-karcher.jpg', title: 'MYJKA  KARCHER K5  FULL CONTROL HOME ', description: 'nnowacyjna linia urządzeń wysokociśnieniowych Full Control Plus wyposażona w nowe pistolety, które ułatwiają dopasowanie ciśnienia do rodzaju czyszczonej powierzchni. Nowy pistolet wysokociśnieniowy Full Control Plus pozwala zapobiec uszkodzeniu wrażliwych powierzchni oraz zoptymalizować efekty czyszczenia, tak by za każdym razem rezultat prac był możliwie najlepszy.'},
            {id: 3, img: '../../static/img/pianownica-do-myjki.jpg', title: 'PIANOWNICĘ DO MYJKI KARCGER K5', description: ''},
            {id: 4, img: '../../static/img/odkurzacz-przemyslowy-karcher.jpg', title: 'ODKURZACZ PRZEMYSŁOWY KARCHER NT 35/1', description: 'Urządzenie jest przeznaczone do prac porządkowych w miejscach, gdzie do zapewnienia czystości potrzebne są wytrzymałe i uniwersalne urządzenia. Niesprzyjające warunki i duże obciążenie panujące podczas prac porządkowych w transporcie, motoryzacji, budownictwie, rolnictwie czy pracy rzemieślniczej nie stanowią żadnej przeszkody dla tego odkurzacza.'},
            {id: 5, img: '../../static/img/odkurzacz-puzzi.jpg', title: 'ODKURZACZ  PIORĄCY PUZZI  10/1', description: 'Dzięki bogatemu wyposażeniu urządzenie Puzzi można stosować zarówno do czyszczenia wykładzin dywanowych jak i tapicerki samochodowej, meblowej oraz podłóg twardych. Doskonale sprawdza się w hotelach, biurowcach, firmach zajmujących się przewozem osób. W zależności od stopnia zabrudzenia powierzchni może pracować w jednym lub w dwóch przejściach roboczych. Pozostawia jedynie niewielką wilgoć, dzięki czemu powierzchnię można użytkować w krótkim czasie po przeprowadzeniu prac czyszczących.'},
            {id: 6, img: '../../static/img/parownica-karcher.jpg', title: 'PAROWNICA  KARCHER  SC 4 ', description: 'Parownica pozwoli Państwu na efektywne sprzątanie prawie każdej powierzchni bez konieczności użycia środków chemicznych. Gorąca para wodna dotrze w niedostępne zakamarki lub uciążliwe w utrzymaniu czystości miejsca. Dzięki udostępnionemu wyposażeniu nasza parownica znajdzie zastosowanie na powierzchniach wodoodpornych, zdezynfekuje przedmioty codziennego użytku oraz odświeży tekstylia.'}
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
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        height: 78%;
        margin: 3rem 0;
        &__item{
            display: inline-block;
            vertical-align: top; //fix position of element
            width: calc(20% - 4rem);
            margin: 0 2rem;
            height: 100%;
            @media(max-width: 1024px){
                width: calc(25% - 4rem);
            }
            @media(max-width: 768px){
                width: calc(35% - 4rem);
            }
            @media(max-width: 425px){
                width: calc(70% - 4rem);
            }
            @media(max-width: 375px){
                width: calc(100% - 4rem);
            }
            .item-img{
                width: 100%;
                height: 20rem;
                max-height: 20rem;
            }
        }
        .item-description{
            h2{
                text-align: center;
                @media(max-width: 1440px){
                    font-size: 1rem;
                }
            }
            p{
                text-align: justify;
                white-space: normal;
            }
        }
    }
}
</style>
