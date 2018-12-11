<template>
<article class="price-list">
    <h1 class="price-list__title">Wypożyczalnia Karcher</h1>

    <ul class="list">
        <li class="list__item" v-for="item in priceList">
            
            <div class="item-presentation">
                <h2 class="item-presentation__title">{{ item.title }}</h2>

                <img :src="item.img" :alt="item.title" class="item-presentation__image">
            </div>

            <div class="about-item-section">
                <p class="about-item-section__description">
                    <h3 class="description-title">{{ item.description }}</h3>
                </p>

                <p class="about-item-section__prices">
                    <ul v-if="item.price != '' ">
                        <h4 class="list-name">Cennik:</h4>

                        <li v-for="price in item.price">
                            {{ price }}
                        </li>
                    </ul>
                </p>

                <p class="about-item-section__composition">
                    <ul v-if="item.composition != '' ">
                        <h4 class="list-name">wyposażenie:</h4>

                        <li v-for="composition in item.composition">
                            {{ composition }}
                        </li>
                    </ul>
                </p>
            </div>
            <div style="clear: both"></div>
        </li>
    </ul>

</article>
</template>

<script>
export default {
  name: 'PriceList',
  data () {
    return {
        priceList: [
            {
                id: 1, img: '../../static/img/myjka-karcher-2.jpg',
                title: 'MYJKA DO OKIEN KARCHER VW 2 PREMIUM',
                description: 'Zapomnij o wielogodzinnych zmaganiach z myciem okien! Chcesz szybko umyć okna, lustra lub kafelki? To urządzenie jest stworzony z myślą o Tobie. Myjka WV 2 Premium BLACK przeznaczony jest do mycia wszelkiego rodzaju powierzchni szklanych, luster, a także fliz w domu.',
                list: [
                    'okna, lustra, świetliki',
                    'płytki, kafelki',
                    'wszelkiego typu powierzchnie szklane, np. drzwi, blaty, kabiny prysznicowe',
                    'płaskie, wodoodporne powierzchnie'
                ],
                price: [
                    '1 doba 15 zł',
                    'weekend 35 zł (piątek – poniedziałek)',
                    'kaucja zwrotna 40 zł'
                ],
                composition: [
                    'wąska ssawka 170 mm',
                    'ssawka 280 mm'
                ]
            },

            {
                id: 2, img: '../../static/img/pianownica-do-myjki.jpg',
                title: 'PIANOWNICĘ DO MYJKI KARCGER K5',
                description: '',
                list: [],
                price: [],
                composition: []
            },
            
            {
                id: 3, img: '../../static/img/myjka-karcher.jpg',
                title: 'MYJKA  KARCHER K5  FULL CONTROL HOME ',
                description: 'Innowacyjna linia urządzeń wysokociśnieniowych Full Control Plus wyposażona w nowe pistolety, które ułatwiają dopasowanie ciśnienia do rodzaju czyszczonej powierzchni. Nowy pistolet wysokociśnieniowy Full Control Plus pozwala zapobiec uszkodzeniu wrażliwych powierzchni oraz zoptymalizować efekty czyszczenia, tak by za każdym razem rezultat prac był możliwie najlepszy. Regulacja ciśnienia wody i dozowanie środka czyszczącego jest realizowana za pomocą przycisków +/-, a bieżące ustawienie pokazywane jest na wyświetlaczu LCD. Zestaw Home idealnie nadaje się do utrzymania czystości wokół domu.',
                list: [],
                price: [
                    '1 doba 60 zł',
                    'weekend 90 zł (piątek – poniedziałek)',
                    'kaucja zwrotna 150 zł'
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
                list: [],
                price: [
                    '1 doba 60 zł',
                    'weekend 95 zł (piątek – poniedziałek)',
                    'kaucja zwrotna 100 zł'
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
                list: [],
                price: [
                    '1 doba 50 zł',
                    'weekend 89 zł (piątek – poniedziałek)',
                    'kaucja zwrotna 150 zł'
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
                list: [],
                price: [
                    '1 doba 65 zł',
                    'weekend 95 zł (piątek – poniedziałek)',
                    'kaucja zwrotna 100 zł'
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
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.price-list{
    color: #fff;
    width: 80%;
    margin: 0 auto;
    padding: 4rem 0;
    @media(max-width: 1024px){
        width: 95%;
    }

    &__title{
        font-size: 3rem;
        text-align: center;
        padding: 2.5rem 0;
    }

    .list{
        list-style-type: none;

        &__item{
            padding-bottom: 3rem;

            .item-presentation{
                width: 25%;
                display: inline-block;
                @media(max-width: 425px){
                    display: block;
                    width: 100%;
                }

                &__title{
                    padding: 1.5rem 0;
                    @media(max-width: 768px){
                        font-size: 1.2rem;
                        text-align: center;
                    }
                }

                &__image{
                    max-width: 100%;
                }
            }
            .about-item-section{
                display: inline-block;
                width: calc(75% - 6rem);
                padding: 0 0 0 5rem;
                vertical-align: top;
                @media(max-width: 425px){
                    display: block;
                    width: 100%;
                    padding: 0 1rem;
                }

                .description-title{
                    line-height: 1.5;
                    padding: 1.5rem 0;
                    text-align: center;
                    font-size: 1.5rem;
                    @media(max-width: 768px){
                        font-size: 1.2rem;
                        width: 100%;
                    }
                }

                &__prices, &__composition{
                    @media(max-width: 768px){
                        font-size: 1.1rem;
                    }
                    .list-name{
                        padding: 2rem 0 1rem 0;
                    }
                    ul{
                        li{
                            margin-left: 3rem;
                        }
                    }
                }
            }

        }
    }
}
</style>