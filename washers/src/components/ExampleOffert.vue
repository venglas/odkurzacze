<template>
    <article class="example-offert">
        <div class="slider" id="slider2">
            <div class="section-content" v-for="offert in exampleOffertData">
                <div class="section-content__header">
                    <h2 class="title">{{ offert.title }}</h2>
                    <img :src="offert.img" alt="" class="img">
                </div>

                <div class="section-content__info">
                    <h3 class="head-description">{{ offert.description }}</h3>
                    <ul class="list" v-if="offert.list1.length > 1">
                        <h3 class="list__title">
                            zastosowanie:
                        </h3>
                        <li class="list__item" v-for="listItem in offert.list1">
                            {{ listItem }}
                        </li>
                    </ul>

                    <ul class="list" v-if="offert.composition.length > 1">
                        <h3 class="list__title">
                            wyposażenie:
                        </h3>
                        <li v-for="listItem in offert.composition">
                            {{ listItem }}
                        </li>
                    </ul>

                    <table class="table" v-if="offert.priceList.length > 1">
                        <tr class="table__row table__row--vertical">
                            <th>okres</th>
                            <th>cena</th>
                        </tr>

                        <tr class="table__row table__row--horizontal">
                            <td v-for="pricesTitle in offert.priceList">
                                {{ pricesTitle.title }}
                            </td>
                        </tr>

                        <tr class="table__row table__row--horizontal">
                            <td v-for="pricesPrice in offert.priceList">
                                {{ pricesPrice.price }}
                            </td>
                        </tr>

                    </table>

                </div>
                

            </div>
        </div>
    </article>
</template>

<script>
export default {
  name: 'ExampleOffert',
  data () {
    return {
        isMobile: false,
        exampleOffertData: [
            {
                id: 1, img: '../../static/img/myjka-karcher-2.jpg',
                title: 'MYJKA DO OKIEN KARCHER VW 2 PREMIUM',
                description: 'Zapomnij o wielogodzinnych zmaganiach z myciem okien! Chcesz szybko umyć okna, lustra lub kafelki? To urządzenie jest stworzony z myślą o Tobie. Myjka WV 2 Premium BLACK przeznaczony jest do mycia wszelkiego rodzaju powierzchni szklanych, luster, a także fliz w domu.',
                list1: [
                    'okna, lustra, świetliki',
                    'płytki, kafelki',
                    'wszelkiego typu powierzchnie szklane, np. drzwi, blaty, kabiny prysznicowe',
                    'płaskie, wodoodporne powierzchnie'
                ],
                priceList: [
                    {title: '1 doba', price: '15 zł'},
                    {title: 'weekend', price: '35 zł (piątek - poniedziałek)'},
                    {title: 'kaucja zwrotna', price: '40 zł'}
                ],
                composition: [
                    'wąska ssawka 170 mm',
                    'ssawka 280 mm'
                ]
            },

            { // this element should be comared with myjka k5 
                id: 2, img: '../../static/img/pianownica-do-myjki.jpg',
                title: 'PIANOWNICĘ DO MYJKI KARCGER K5',
                description: '',
                list1: [],
                priceList: [],
                composition: []
            },
            
            {
                id: 3, img: '../../static/img/myjka-karcher.jpg',
                title: 'MYJKA  KARCHER K5  FULL CONTROL HOME ',
                description: 'Innowacyjna linia urządzeń wysokociśnieniowych Full Control Plus wyposażona w nowe pistolety, które ułatwiają dopasowanie ciśnienia do rodzaju czyszczonej powierzchni. Nowy pistolet wysokociśnieniowy Full Control Plus pozwala zapobiec uszkodzeniu wrażliwych powierzchni oraz zoptymalizować efekty czyszczenia, tak by za każdym razem rezultat prac był możliwie najlepszy. Regulacja ciśnienia wody i dozowanie środka czyszczącego jest realizowana za pomocą przycisków +/-, a bieżące ustawienie pokazywane jest na wyświetlaczu LCD. Zestaw Home idealnie nadaje się do utrzymania czystości wokół domu.',
                list1: [],
                priceList: [
                    {title: '1 doba', price: '60 zł'},
                    {title: 'weekend', price: '90 zł (piątek – poniedziałek)'},
                    {title: 'kaucja zwrotna', price:'150 zł'}
                ],
                composition: [
                    'Pistolet wysokociśnieniowy, G 145 Q Full Control',
                    'Lanca Vario Power',
                    'Dysza rotacyjna',
                    'Pianownica'
                ]
            },

            {
                id: 4, img: '../../static/img/odkurzacz-przemyslowy-karcher.jpg',
                title: 'ODKURZACZ PRZEMYSŁOWY KARCHER NT 35/1 TACT Z FUNKCJĄ ZBIERANIA WODY',
                description: 'Urządzenie jest przeznaczone do prac porządkowych w miejscach, gdzie do zapewnienia czystości potrzebne są wytrzymałe i uniwersalne urządzenia. Niesprzyjające warunki i duże obciążenie panujące podczas prac porządkowych w transporcie, motoryzacji, budownictwie, rolnictwie czy pracy rzemieślniczej nie stanowią żadnej przeszkody dla tego odkurzacza. Płaski falisty filtr Eco umożliwia zbieranie bardzo drobnego pyłu klasy M zapewniając skuteczną ochronę silnikowi. Nie wymaga demontażu w celu zbierania wody, jest łatwy w czyszczeniu.',
                list1: [],
                priceList: [
                    {title: '1 doba', price: '60 zł'},
                    {title: 'weekend', price: '95 zł (piątek – poniedziałek)'},
                    {title: 'kaucja zwrotna', price: '100 zł'}
                ],
                composition: [
                    'ssawka podłogowa',
                    'ssawka szczelinowa',
                    'ssawka samochodowa',
                    'ssawka do tapicerki',
                    'szczotka z naturalnego włosia'
                ]
            },

            {
                id: 5, img: '../../static/img/odkurzacz-puzzi.jpg',
                title: 'ODKURZACZ  PIORĄCY PUZZI  10/1',
                description: 'Dzięki bogatemu wyposażeniu urządzenie Puzzi można stosować zarówno do czyszczenia wykładzin dywanowych jak i tapicerki samochodowej, meblowej oraz podłóg twardych. Doskonale sprawdza się w hotelach, biurowcach, firmach zajmujących się przewozem osób. W zależności od stopnia zabrudzenia powierzchni może pracować w jednym lub w dwóch przejściach roboczych. Pozostawia jedynie niewielką wilgoć, dzięki czemu powierzchnię można użytkować w krótkim czasie po przeprowadzeniu prac czyszczących.',
                list1: [],
                priceList: [
                    {title: '1 doba', price: '50 zł'},
                    {title: 'weekend', price: '89 zł (piątek – poniedziałek)'},
                    {title: 'kaucja zwrotna', price: '150 zł'}
                ],
                composition: [
                    'Odkurzacz piorący Karcher Puzzi',
                    'Dysza do dywanów',
                    'Dysza do tapicerki',
                    'Szkolenie z obsługi odkurzacza piorącego',
                    '100 g proszku czyszczącego Karcher RM 760 wystarczającego na czyszczenie 10-12m2 wykładziny w zależności od stopnia zabrudzenia',
                    'stnieje możliwość dokupienia chemii czyszczącej. Proszek RM 760 – 100g    cena 10,00 zł.'
                ]
            },

            {
                id: 6, img: '../../static/img/parownica-karcher.jpg',
                title: 'PAROWNICA  KARCHER  SC 4 ',
                description: 'Parownica pozwoli Państwu na efektywne sprzątanie prawie każdej powierzchni bez konieczności użycia środków chemicznych. Gorąca para wodna dotrze w niedostępne zakamarki lub uciążliwe w utrzymaniu czystości miejsca. Dzięki udostępnionemu wyposażeniu nasza parownica znajdzie zastosowanie na powierzchniach wodoodpornych, zdezynfekuje przedmioty codziennego użytku oraz odświeży tekstylia. Urządzenie sprawdzi się w całym domu, a głównie w kuchni i łazience gdzie najtrudniej utrzymać czystość. Parownica Karcher pomoże Państwu w pracach takich jak np. czyszczenie fug, doczyszczanie zakamarków, mycie piekarnika, dezynfekcja wszelkich powierzchni, usuwanie kleju, gumy, plasteliny itd. To uniwersalne urządzenie przydatne w każdym domu, przyjazne domownikom, a w szczególności dzieciom i alergikom.',
                list1: [],
                priceList: [
                    {title: '1 doba', price: '65 zł'},
                    {title: 'weekend', price: '95 zł (piątek – poniedziałek)'},
                    {title: 'kaucja zwrotna', price: '100 zł'}
                ],
                composition: [
                    'dysza punktowa',
                    'dysza Power',
                    'ssawka do tapicerki i powierzchni płaskich',
                    'dysza podłogowa',
                    'szczotka okrągła do fug i ciężkich zabrudzeń dodatkowo 15,00 zł (klient otrzymuje nową którą zatrzymuje)',
                    'możliwość dokupienia szmatek dodatkowo 3,00 zł'
                ]
            }
        ]
    }
  },
  created(){
    console.log(window.innerWidth)
    if(window.innerWidth <= 425){
        this.isMobile = true
    }
  },
  mounted(){
    $('#slider2').slick({
        infinite: true,
        dots: true,
        speed: 800,
        // autoplay: true,
        prevArrow: '<button type="button" class="slick-prev pull-left"><img src="../../static/img/slider/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><img src="../../static/img/slider/right-arrow.png"></button>'
    });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables';

.example-offert{
    width: 100%;
    // height: 100vh;
    margin: 0 auto;
    background-color: #fff;
    padding: 8rem 3rem;
    @media(max-width: 425px){
        text-align: center;
        padding: 6rem 1rem;
    }

    .slider{
        height: 100%;
        .section-content{
            &__header{
                width: calc(25% - 1rem);
                display: inline-block;
                vertical-align: top;
                @media(max-width: 425px){
                    display: block;
                    width: 100%;
                }

                .title{}
                .img{
                    max-width: 100%;
                    @media(max-width: 425px){
                        max-width: 65%;
                        margin: 0 auto;
                    }
                }
            }
            &__info{
                width: calc(75% - 5rem);
                display: inline-block;
                padding: 0 5rem;
                @media(max-width: 425px){
                    display: block;
                    width: 100%;
                }
                .head-description{
                    text-align: center;
                    padding-bottom: 3rem;
                }
                .list{
                    padding-bottom: 3rem;
                    &__title{
                        padding: 1rem 0;
                    }
                }
                .table{
                    width: 40rem;
                    text-align: left;
                    padding-bottom: 3rem;
                    @media(max-width: 425px){
                        width: 95%;
                        margin: 0 auto;
                    }
                    &__row{
                        &--vertical{
                            display: block;
                            width: 100%;
                            padding-bottom: 1rem;
                            th{
                                display: inline-block;
                                width: calc(50% - 1rem)
                            }
                        }
                        &--horizontal{
                            display: inline-block;
                            padding: 0 4rem 0 0;
                            width: calc(50% - 1rem);
                            td{
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }

    //slider styles
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
      outline: none;
      cursor: pointer;
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
          background-color: rgba(0, 0, 0, 0.75);
          outline: none;
          cursor: pointer;
          &:hover{
            background-color: rgba(0, 0, 0, 0.75);
         }
        }
      }
    }
    
}
</style>
