<template>
  <article class="our-offert" id="our-offert">
    <h1 class="our-offert__title"> Poznaj naszą ofertę </h1>

    <div class="offert-box">
        <div class="wrapper">
            <div v-for="item in offert" @click="scrollToOffert(item.id)" :id="'box'+item.id" class="offert-box__item" title="Kliknij aby wyświetlić szczegóły">
                <img :src="item.img" alt="" class="item-img">
                <div class="item-title">
                    <h2>{{item.title}}</h2>
                    <h2 class="info">Zapoznaj się z ofertą i cennikiem</h2>
                </div>
            </div>
        </div>
        

        <div class="offert" v-for="singleOffert in offert" v-if="singleOffert.id != 4" :id="'offert'+singleOffert.id">
            <div class="offert__header">
                <h1 class="title">
                    {{ singleOffert.title }}
                </h1>
                <!-- <img class="img" :src="singleOffert.img" alt=""> -->
            </div>

            <div class="offert__box">
                <h2 class="subtitle">
                    {{ singleOffert.subtitle }}
                </h2>

                <h4 class="description">
                    {{singleOffert.description }}
                </h4>

                <h4 class="subdescription">
                    {{ singleOffert.subDescription }}
                </h4>

                <ul class="list">
                    <li class="list__item" v-for="listItem in singleOffert.offertList">
                        {{listItem}}
                    </li>
                </ul>

                <div class="price-info info" v-if="singleOffert.price != ''">
                    <img class="img" :src="iconPrice" alt="">
                    <h4 class="info__content">
                        {{ singleOffert.price}}
                    </h4>
                </div>

                <div class="time-info info" v-if="singleOffert.time != ''">
                    <img class="img" :src="iconTime" alt="">
                    <h4 class="info__content">
                        {{ singleOffert.time }}
                    </h4>
                </div>

                <div class="order-info info" v-if="singleOffert.info1 != ''">
                    <img class="img" :src="iconOrder" alt="">
                    <h4 class="info__content">
                        {{ singleOffert.info1 }}
                    </h4>
                </div>

                <div class="last-info" v-if="singleOffert.info2 != ''">
                    <h4 class="last-info__content">
                        {{ singleOffert.info2 }}
                    </h4>
                </div>
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
        telephone: '694-045-198',
        email: 'example@gmail.com',
        closeIcon: '../../static/img/icons/close-icon.png',
        iconTime: '../../static/img/icons/calendar-icon-black.png',
        iconOrder: '../../static/img/icons/order-icon-black.png',
        iconContact: '../../static/img/icons/contact-icon.png',
        iconPrice: '../../static/img/icons/coin-icon-black.png',

        offert: [
            // {
            //     id: 1, img: '../../static/img/kaf1.png',
            //     title: 'SPRZĄTANIE BIUR',
            //     subtitle: 'Czyste biuro czysta przyjemność !',
            //     description: 'Zbliża się koniec pracy a na biurku w dalszym ciągu piętrzą się dokumenty, kuchnia pełna brudnych naczyń, pełne kosze, zadeptana wykładzina i zamiast cieszyć się wolnym popołudniem martwisz się ile jeszcze czasu musisz poświęcić na uporządkowanie biura.',
            //     subDescription: 'Skontaktuj się z nami – chętnie zadbamy o porządek w Twoim biurze i domu.',
            //     offertCaption: 'Przykładowa usługa sprzątania biura obejmuje:',
            //     offertList: [
            //         'sprzątanie powierzchni biurka',
            //         'odkurzanie wykładzin',
            //         'opróżnianie koszy',
            //         'wycieranie półek, szaf',
            //         'mycie podłogi',
            //         'sprzątanie pomieszczeń socjalnych i WC,',
            //         'wycieranie grzejników oświetlenia, itp.',
            //         'okresowe mycie pionowych i poziomych powierzchni mebli i drzwi',
            //         'okresowe wycieranie koszy oraz stelaży foteli i biurek',
            //         'okresowe wycieranie kurzu z miejsc usytuowanych najwyżej (górne powierzchnie wysokich szaf, ościeżnice drzwi i okien, górne powierzchnie drzwi',
            //         'mycie okien (raz na 6 miesięcy, wycena indywidualna)'
            //     ],
            //     iconTime: '../../static/img/icons/time-icon.png',
            //     iconOrder: '../../static/img/icons/order-icon.png',
            //     iconContact: '../../static/img/icons/contact-icon.png',
            //     iconPrice: '../../static/img/icons/money-icon.png',
            //     time: 'Biorąc pod uwagę komfort użytkowników biura, sprzątanie odbywa się po godzinach jego urzędowania, zgodnie z czasem zakontraktowanym i uzgodnionym z Klientem. Rozpoczęcie prac sprzątających odbywa się najwcześniej o godzinie 16.30.',
            //     info1: 'Szybka realizacja zamówienia, po indywidualnym ustaleniu z Klientem jego oczekiwań oraz dogodnego terminu.',
            //     price: 'godzina sprzątania 35zł',
            //     windowsClean: [
            //         'Cennik mycia okien:',
            //         'okno jednoskrzydłowe od 10 zł',
            //         'okno dwuskrzydłowe od 15 zł',
            //         'okno trzyskrzydłowe od 25 zł',
            //         'drzwi balkonowe od 25 zł',
            //         'drewniane starego typu – rozkręcane, podwójne wycena indywidualna',
            //         'Podane ceny są cenami orientacyjnymi. Dokładną cenę poznają Państwo po oględzinach przed rozpoczęciem sprzątania.'
            //     ],
            //     ifno2: 'Uwaga: do ceny należy doliczyć ustawową stawkę VAT w wysokości 23%/nie jesteśmy płatnikiem VAT'
            // },

            {
                id: 1, img: '../../static/img/czyszczenie-dywanow.jpg',
                title: 'Czyszczenie dywanów i wykładzin',
                subtitle: 'Ciepły, miękki i czysty dywan!',
                description: 'Czysty i ciepły dom to nie tylko lśniące okna, meble, sofa ale także dywan czy wykładzina. Codzienne użytkowanie zostawia po sobie bardzo widoczne, denerwujące plamy i ślady. Mamy na to skuteczny i wypróbowany sposób, skorzystaj i Ty z naszego doświadczenia!',
                subDescription: 'Wypożyczymy, przyjedziemy i wypierzemy za Ciebie.',
                offertCaption: 'Cennik prania dywanów i wykładzin:',
                offertList: [
                    'Sztuczne odkurzanie od 2,50 zł /m2',
                    'Sztuczne czyszczenie od 9,50 zł /m2',
                    'Wełniane odkurzanie od 2,50 zł',
                    'Wełniane czyszczenie od 2,50 zł',
                    'SHAGGY tzw. Włochacze od 7 zł',
                    'wykładzina do 20 m2 od 6 zł za m2',
                    'wykładzina powyżej 20m2 od 5 zł za m2',
                    'wykładzina Ponad 100m i stałe zlecenia cena indywidualna'
                ],
                time: 'Biorąc pod uwagę komfort użytkowników biura, sprzątanie odbywa się po godzinach jego urzędowania, zgodnie z czasem zakontraktowanym i uzgodnionym z Klientem. Rozpoczęcie prac sprzątających odbywa się najwcześniej o godzinie 16.30.',
                info1: 'Szybka realizacja zamówienia, po indywidualnym ustaleniu z Klientem jego oczekiwań oraz dogodnego terminu.',
                price: 'Cena jest zależna od czyszczonej powierzchni. W przypadku biur, obiektów usługowych i innych firm, które potrzebują regularnych usług prania wykładzin i dywanów zapraszamy do kontaktu telefonicznego. Przy większej ilości elementów pranych jednorazowo możliwa jest negocjacja ceny.',
                windowsClean: [],
                ifno2: 'Aby dowiedzieć się więcej na temat sprzętu oraz techniki czyszczenia wykorzystywanej przez nasza firmę zapraszamy do zakładki sprzęt'
            },

            {
                id: 2, img: '../../static/img/czyszczenie-tapicerki-meblowej.jpg',
                title: 'Czyszczenie tapicerki meblowej',
                subtitle: 'Wypoczynek i relaks!',
                description: 'Miękka, pachnąca i czysta sofa albo fotel to gwarancja relaksu po ciężkim dniu. Zadbamy o Wasz wypoczynek Zapraszamy do skorzystania z naszej oferty czyszczenie mebli. Cena zależy od wielkości mebla oraz od rodzaju i stopnia zabrudzenia. Na proces czyszczenia składa się:',
                subDescription: `faza odplamiania specjalnymi, dostosowanymi do plam środkami, pranie zasadnicze odkurzaczem ekstrakcyjnym`,
                offertCaption: 'Cennik prania dywanów i wykładzin:',
                offertList: [
                    'Poduchy meblowe od 10 zł',
                    'Krzesła siedzisko od 10 zł',
                    'Krzesło: siedzisko + oparcie 15 zł',
                    'Pufy meblowe I osobowe 15 zł',
                    'Fotele biurowe od 15 zł',
                    'Fotele wypoczynkowe od 60 zł',
                    'Narożniki kuchenne od 70 zł',
                    'Wersalki / kanapy dziecięce od 70 zł',
                    'Kanapy II osobowe od 100 zł',
                    'Kanapy III osobowe od 140 zł',
                    'Kanapy (narożniki) IV osobowe od 150zł',
                    'Kanapy (narożniki) V osobowe od 180 zł',
                    'Przy większej ilości elementów pranych jednorazowo możliwa jest negocjacja ceny.'
                ],
                iconTime: '../../static/img/icons/time-icon.png',
                iconOrder: '../../static/img/icons/order-icon.png',
                iconContact: '../../static/img/icons/contact-icon.png',
                iconPrice: '../../static/img/icons/money-icon.png',
                time: 'Szybka realizacja zamówienia, po indywidualnym ustaleniu z Klientem dogodnego terminu.',
                info1: '',
                price: 'Podane ceny są cenami orientacyjnymi. Dokładną cenę poznają Państwo po oględzinach przed rozpoczęciem prania.',
                windowsClean: [],
                ifno2: 'Podane ceny są cenami orientacyjnymi. Dokładną cenę poznają Państwo po oględzinach przed rozpoczęciem prania.'
            },

            {
                id: 3, img: '../../static/img/czyszczenie-tapicerki-samochodowej.jpg',
                title: 'Czyszczenie tapicerki samochodowej',
                subtitle: 'Czysta przyjemność z jazdy samochodem!',
                description: 'Każdy z nas wie jak ciężko utrzymać porządek i czystość w naszych autach. Podróże, zakupy oraz codzienne używanie samochodu narażają tapicerkę na kurz, błoto, różnego rodzaju plamy, które trudno usunąć. Doprowadzenie naszego auta do porządku zabiera sporo czasu i wymaga pewnych nakładów finansowych na niezbędne środki czystości oraz chemię.',
                subDescription: 'Korzystając z naszych usług prania tapicerki samochodowej zapewnisz sobie komfort jazdy a zaoszczędzony dzięki temu czas możesz miło spędzić z najbliższymi!',
                offertCaption: 'Etapy prania tapicerki samochodowej:',
                offertList: [
                    'Odkurzanie - Odkurzamy wszystko najdokładniej jak można, każdą szczelinę, zagłębienie w fotelach. Dobrze odkurzony samochód usprawni proces prania oraz',
                    'Pranie - Działamy etapami, po jednym elemencie. Zaczynamy od fotela kierowcy, potem przechodzimy na tył, następnie fotel pasażera, wykładziny, bagażnik i boczki drzwiowe.',
                    'Suszenie - Po skończonym praniu suszymy auto. Po wysuszeniu sprawdzamy czy wszystko jest w porządku. Jeżeli nie jesteśmy zadowoleni z końcowego efektu naszej pracy, czyścimy i poprawiamy aż do skutku!',
                    'Sam fotel – np. kierowcy od 40 zł',
                    'Dwa fotele lub kanapa tylna od 60 zł',
                    'Dwa fotele + kanapa tylna (z zagłówkami i podłokietnikiem) od 120 zł',
                    'Podsufitka + mycie szyb od wewnątrz od 60 zł',
                    'Odkurzanie od 30 zł',
                    'Sprzątanie bagażnika od 20 zł',
                    'Suszenie od 30 zł'
                ],
                time: 'Czas prania i suszenia to około od 3 do 5 godzin w zależności od wielkości pojazdu i stopnia zabrudzenia.',
                info1: '',
                price: '',
                ifno2: ''
            },

            {
                id: 4, img: '../../static/img/wypozyczalnia-karcher.jpg',
                title: 'Wypożyczalnia Karcher',
            },

            // {
            //     id: 5, img: '../../static/img/dostawczy.jpg',
            //     title: 'Dojazd do klienta',
            //     subtitle: 'Dojazd do klienta na terenie Knurowa Gratis.',
            //     description: '',
            //     subDescription: '',
            //     offertCaption: '',
            //     offertList: [
            //         'Do 15km - 10zł',
            //         'Powyżej 15km - cena do uzgodnienia.'
            //     ],
            //     time: '',
            //     info1: '',
            //     price: '',
            //     ifno2: ''
            // },
        ]
    }
  },
  methods: {
    scrollToOffert(which){
        switch(which){
            case 1:
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#offert1").offset().top
                }, 1000);
            break;

            case 2:
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#offert2").offset().top
                }, 1000);
            break;

            case 3:
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#offert3").offset().top
                }, 1000);
            break;

            case 4:
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#price-list").offset().top
                }, 1000);
            break;

            case 5:
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#offert5").offset().top
                }, 1000);
            break;

        }
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
    padding-bottom: 5rem;

    &__title{
        font-size: 3rem;
        font-weight: 400;
        text-align: center;
        padding: 2.5rem 0;
    }

    .offert-box{
        margin: 3rem auto;
        white-space: nowrap;
        // height: 100%;
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
            width: calc(25% - 3rem);
            margin: 0 2rem;
            height: 100%;
            position: relative;
            backface-visibility: hidden; //fix animation img jump at end
            cursor: pointer;
            
            &:hover{
                .item-img{
                    transition: filter ease-in 600ms;
                    filter: blur(3px) grayscale(100%);
                }
                .item-title{
                    .info{
                        transition: all ease 400ms;
                        font-size: 1.5rem;
                        opacity: 1;
                        padding: 2rem 0;
                    }
                }
            }
            @media(max-width: 1024px){
                width: calc(20% - 4rem);
            }
            @media(max-width: 768px){
                width: calc(80% - 4rem);
                margin: 2rem auto;
                display: block;
                height: fit-content;
            }
            @media(max-width: 425px){
                display: block;
                width: 95%;
                height: fit-content;
            }
            .item-img{
                width: 100%;
                height: 30rem;
                max-height: 30rem;
                transition: filter ease-out 500ms;
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
            @media(max-width: 768px){
                top: 40%;
            }
            h2{
                text-align: center;
                @media(max-width: 1440px){
                    font-size: 1rem;
                }
            }
            .info{
                transition: all ease-out 550ms;
                font-size: 0;
                opacity: 0;
                padding: 0;
            }
        }
    }
}

.wrapper{
    text-align: center;
}

.offert{
    width: 100%;
    padding-top: 10rem;
    &__header{
        text-align: center;
        padding: 2.5rem 0;
        .title{
            font-size: 4rem;
            text-shadow: 0 0 30px rgba(0, 0, 0, .5);
            @media(max-width: 425px){
                font-size: 2.5rem;
            }
        }
    }
    &__box{
        width: 80%;
        margin: 0 auto;
        white-space: normal;
        .subtitle{
            text-align: center;
            padding-bottom: 2rem;
            font-size: 2rem;
        }
        .description{
            padding: 2rem 0;
            text-align: center;
            font-size: 1.5rem;
        }
        .subdescription{
            font-size: 1.3rem;
            padding-bottom: 1rem;
        }
        .list{
            margin-left: 2rem;
            padding-bottom: 2.5rem;
            font-size: 1.3rem;
        }
        // .price-info, .time-info, .order-info{
        //     .img{
        //         display: inline-block;
        //     }
        //     &__content{
        //         display: inline-block;
        //     }
        // }
        .info{
            padding: 1.5rem 0;
            .img{
                display: inline-block;
                width: 32px;
                vertical-align: top;
            }
            .info__content{
                display: inline-block;
                width: calc(100% - 32px - 3rem);
                margin-left: 2rem;
                font-size: 1.3rem;
            }
        }
    }

}

</style>
