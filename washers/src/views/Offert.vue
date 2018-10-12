<template>
  <article class="full-offert">

    <div class="full-offert__intro">
        <h1>Czysta przyjemność z jazdy samochodem!</h1>
        <h2>Każdy z nas wie jak ciężko utrzymać porządek i czystość w naszych autach. Podróże, zakupy oraz codzienne używanie samochodu narażają tapicerkę na kurz, błoto, różnego rodzaju plamy, które trudno usunąć. Doprowadzenie naszego auta do porządku zabiera sporo czasu, zaś oczekiwany efekt końcowy wymaga pewnych nakładów finansowych na niezbędne środki czystości oraz chemię.</h2>
        <h2>Korzystając z naszych usług prania tapicerki samochodowej zapewnisz sobie komfort jazdy a zaoszczędzony dzięki temu czas możesz miło spędzić z najbliższymi!</h2>
    </div>
      
    <div class="full-offert__offert">
        <h2 class="title">Etapy prania tapicerki samochodowej:</h2>
        <ul class="list">
            <li class="list__item">
                <p class="item-title">Odkurzanie</p>
                <p class="item-description">Odkurzamy wszystko najdokładniej jak można, każdą szczelinę, zagłębienie w fotelach. Dobrze odkurzony samochód usprawni proces prania oraz </p>
            </li>

            <li class="list__item">
                <p class="item-title">Pranie</p>
                <p class="item-description">Działamy etapami, po jednym elemencie. Zaczynamy od fotela kierowcy, potem przechodzimy na tył, następnie fotel pasażera, wykładziny, bagażnik i boczki drzwiowe.</p>
            </li>

            <li class="list__item">
                <p class="item-title">Suszenie</p>
                <p class="item-description">Po skończonym praniu suszymy auto. Po wysuszeniu sprawdzamy czy wszystko jest w porządku. Jeżeli nie jesteśmy zadowoleni z końcowego efektu naszej pracy, czyścimy i poprawiamy aż do skutku!</p>
            </li>

            <li class="list__item">
                <p class="item-title">Suszenie</p>
                <p class="item-description">Po skończonym praniu suszymy auto. Po wysuszeniu sprawdzamy czy wszystko jest w porządku. Jeżeli nie jesteśmy zadowoleni z końcowego efektu naszej pracy, czyścimy i poprawiamy aż do skutku!</p>
            </li>
        </ul>

        <h3 class="info-under-list">Czas prania i suszenia to około od 3 do 5 godzin</h3>
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

.full-offert{
    width: 80%;
    margin: 0 auto;
    padding: 3rem 0;
    color: #fff;
    font-size: 1.3rem;
    line-height: 1.5;
    letter-spacing: 1.5px;
    &__intro{
        text-align: center;
        padding-bottom: 3.5rem;
        h1{
            padding: 1.2rem 0;
        }
    }

    &__offert{
        .title{
            padding: 1.5rem 0;
        }
        .list{
            list-style-type: dots;
            margin-left: 2rem; //for test
            font-size: 1.4rem;
            &__item{
                padding: 1.5rem 0;
                .item-title{
                    font-weight: 600;
                    text-transform: uppercase;
                }
                .item-description{
                    margin-left: 2rem;
                }
            }
        }
    }
    
    .info-under-list{
        padding: 2.5rem 0;
        text-align: center;
    }

}
</style>
