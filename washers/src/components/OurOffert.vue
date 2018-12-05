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

                <h4 class="description" v-html="singleOffert.description">
                    <!-- {{singleOffert.description }} -->
                </h4>

                <h4 class="subdescription">
                    {{ singleOffert.subDescription }}

                    <ul v-if="singleOffert.etaps" style="margin-left: 2rem; list-style-type: decimal">
                        <li v-for="item in singleOffert.etaps">
                            {{ item }}
                        </li>
                    </ul>
                </h4>

                <ul class="list list--etaps" v-if="singleOffert.offertInfo">
                    <h4 class="subdescription subdescription--etaps">Etapy prania tapicerki samochodowej:</h4>
                    <li class="list__item list__item--etaps" v-for="item in singleOffert.offertInfo">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                        
                    </li>
                </ul>

                <ul class="list" v-if="singleOffert.offertList">
                    <h2 class="list__title">Cennik:</h2>
                    <li class="list__item" v-for="listItem in singleOffert.offertList">
                       <p class="list__item--list">
                           <span>{{ listItem.item}} </span> <span> {{ listItem.price }}</span>
                       </p>
                    </li>
                </ul>

                <ul class="list list--custom" v-if="singleOffert.offertList2">
                    <h2 class="list__title">Cennik:</h2>
                    <li class="list__item list__item--offert-list" v-for="listItem2 in singleOffert.offertList2">
                        <ul>
                            <h2>{{listItem2.type}}</h2>

                            <li class="list__item list__item--inside" v-for="listPoint in listItem2.items">
                                <p> <span> {{listPoint.type}} </span> <span>{{listPoint.price}}</span> </p>
                            </li>
                        </ul>
                
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
            {
                id: 1, img: '../../static/img/czyszczenie-dywanow.jpg',
                title: 'Czyszczenie dywanów i wykładzin',
                subtitle: 'Ciepły, miękki i czysty dywan!',
                description: 'Czysty i ciepły dom to nie tylko lśniące okna, meble, sofa ale także dywan czy wykładzina. Codzienne użytkowanie zostawia po sobie bardzo widoczne, denerwujące plamy i ślady. Skorzystaj z naszego doświadczenia mamy na to skuteczny i wypróbowany sposób.',
                subDescription: 'Wypożyczymy lub przyjedziemy i wypierzemy za Ciebie.',
                offertCaption: 'Cennik prania dywanów i wykładzin:',
                offertList2: [
                    {id: 1, type: 'Dywany sztuczne', items: [
                            {type: 'Odkurzanie', price: '2,50 zł / m2'},
                            {type: 'Czyszczenie', price: '9,50 zł / m2'}
                        ]
                    },

                    {id: 2, type: 'Dywany wełniane', items: [
                            {type: 'Odkurzanie', price: '2,50 zł / m2'},
                            {type: 'Czyszczenie', price: '11,00 zł / m2'}
                        ]
                    },

                    {id: 3, type: 'Wykładziny', items: [
                            {type: 'Do 20 m2', price: '6,00 zł / m2'},
                            {type: 'Powyżej 20 m2', price: '5,00 zł / m2'},
                            {type: 'Ponad 100m i stałe zlecenia', price: 'cena indywidualna'}
                        ]
                    },

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
                description: 'Miękka, pachnąca i czysta sofa albo fotel to gwarancja relaksu po ciężkim dniu. Zadbamy o Wasz wypoczynek, zapraszamy do skorzystania z naszej oferty czyszczenia tapicerki meblowej. <br /> <br /> Cena zależy od wielkości mebla oraz od rodzaju i stopnia zabrudzenia. <br /> <br /> Na proces czyszczenia składa się:',
                // subDescription: ['Faza odplamiania specjalnymi, dostosowanymi do plam środkami', 'Pranie zasadnicze odkurzaczem ekstrakcyjnym', 'Proces płukania gwarantujący usunięcie resztek zabrudzenia'],
                etaps: ['Faza odplamiania specjalnymi, dostosowanymi do plam środkami', 'Pranie zasadnicze odkurzaczem ekstrakcyjnym', 'Proces płukania gwarantujący usunięcie resztek zabrudzenia'],
                offertCaption: 'Cennik prania dywanów i wykładzin:',
                offertList: [
                    {item: 'Poduchy meblowe', price: 'od 10 zł'},
                    {item: 'Krzesła siedzisko', price: 'od 10 zł'},
                    {item: 'Krzesło: siedzisko + oparcie', price: '15 zł'},
                    {item: 'Pufy meblowe I osobowe', price: '15 zł'},
                    {item: 'Fotele biurowe', price: 'od 15 zł'},
                    {item: 'Fotele wypoczynkowe', price: 'od 60 zł'},
                    {item: 'Narożniki kuchenne', price: 'od 70 zł'},
                    {item: 'Wersalki / kanapy dziecięce', price: 'od 70 zł'},
                    {item: 'Kanapy II osobowe', price: 'od 100 zł'},

                    {item: 'Kanapy III osobowe', price: 'od 140 zł'},
                    {item: 'Kanapy (narożniki) IV osobowe', price: 'od 150 zł'},
                    {item: 'Kanapy (narożniki) V osobowe', price: 'od 180 zł'},
                    // {item: 'Przy większej ilości elementów pranych jednorazowo możliwa jest negocjacja ceny.', price: ''},
                ],
                iconTime: '../../static/img/icons/time-icon.png',
                iconOrder: '../../static/img/icons/order-icon.png',
                iconContact: '../../static/img/icons/contact-icon.png',
                iconPrice: '../../static/img/icons/money-icon.png',
                time: 'Szybka realizacja zamówienia, po indywidualnym ustaleniu z Klientem dogodnego terminu.',
                info1: '',
                price: 'Podane ceny są cenami orientacyjnymi. Dokładną cenę poznają Państwo po oględzinach przed rozpoczęciem prania. Przy większej ilości elementów pranych jednorazowo możliwa jest negocjacja ceny.',
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
                offertInfo: [
                    {id: 1, title: '1. Odkurzanie', description: 'Odkurzamy wszystko najdokładniej jak można, każdą szczelinę, zagłębienie w fotelach, boczki oraz podłogę samochodu.'},
                    {id: 2, title: '2. Pranie', description: 'Działamy etapami, po jednym elemencie. Zaczynamy od fotela kierowcy, potem przechodzimy na tył, następnie fotel pasażera, wykładziny, bagażnik i boczki drzwiowe.'},
                    {id: 3, title: '3. Suszenie', description: 'Po skończonym praniu suszymy auto. Po wysuszeniu sprawdzamy czy wszystko jest w porządku. Jeżeli nie jesteśmy zadowoleni z końcowego efektu naszej pracy, czyścimy i poprawiamy aż do skutku!'}
                ],
                offertList: [
                    {item: 'Sam fotel – np. kierowcy', price: 'od 40 zł'},
                    {item: 'Dwa fotele lub kanapa tylna', price: 'od 60 zł'},
                    {item: 'Dwa fotele + kanapa tylna (z zagłówkami i podłokietnikiem)', price: 'od 120 zł'},
                    // {item: 'Podsufitka + mycie szyb od wewnątrz', price: 'od 60 zł'},
                    {item: 'Odkurzanie', price: 'od 30 zł'},
                    {item: 'Sprzątanie bagażnika', price: 'od 20 zł'},
                    {item: 'Suszenie', price: 'od 30 zł'},

                    // 'Odkurzanie - Odkurzamy wszystko najdokładniej jak można, każdą szczelinę, zagłębienie w fotelach. Dobrze odkurzony samochód usprawni proces prania oraz',
                    // 'Pranie - Działamy etapami, po jednym elemencie. Zaczynamy od fotela kierowcy, potem przechodzimy na tył, następnie fotel pasażera, wykładziny, bagażnik i boczki drzwiowe.',
                    // 'Suszenie - Po skończonym praniu suszymy auto. Po wysuszeniu sprawdzamy czy wszystko jest w porządku. Jeżeli nie jesteśmy zadowoleni z końcowego efektu naszej pracy, czyścimy i poprawiamy aż do skutku!',
                    
                ],
                time: 'Czas prania i suszenia to około od 2 do 5 godzin w zależności od wielkości pojazdu i stopnia zabrudzenia.',
                info1: 'Szybka realizacja zamówienia, po indywidualnym ustaleniu z Klientem dogodnego terminu.',
                price: 'Podane ceny są cenami orientacyjnymi. Dokładną cenę poznają Państwo po oględzinach przed rozpoczęciem prania.',
                ifno2: ''
            },

            {
                id: 4, img: '../../static/img/wypozyczalnia-karcher.jpg',
                title: 'Wypożyczalnia Karcher',
            },
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
                width: calc(25% - 4rem);
            }
            @media(max-width: 768px){
                width: calc(65% - 4rem);
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
                height: 23rem;
                max-height: 23rem;
                transition: filter ease-out 500ms;
            }
        }
        .item-title{
            position: absolute;
            top: 80%;
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
                @media(max-width: 768px){
                    font-size: 1.5rem;
                }
            }
            .info{
                transition: all ease-out 550ms;
                font-size: 0;
                opacity: 0;
                padding: 0;
                @media(max-width: 1024px){
                    font-size: 1.2rem !important;
                }
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
                font-size: 2.2rem;
                white-space: normal;
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
            text-align: left;
            font-size: 1.7rem;
        }
        .subdescription{
            font-size: 1.7rem;
            padding-bottom: 1rem;
            &--etaps{
                text-decoration: underline;
                padding: 3rem 0 2rem 0;
            }
        }
        .list{
            margin-left: 2rem;
            padding-bottom: 2.5rem;
            font-size: 1.5rem;
            &--custom{
                list-style-type: none;
            }
            &--etaps{
                font-size: 1.2rem;
                list-style-type: none;
            }
            &__title{
                font-size: 1.7rem;
                padding: 2rem 0;
            }
            &__item{
                padding: .35rem 0;
                &--offert-list{
                    h2{
                        font-size: 1.5rem;
                        padding: 1rem 0;
                    }
                }
                &--inside{
                    margin-left: 2rem;
                    p{
                        width: 40%;
                        display: flex;
                        justify-content: space-between;
                        @media(max-width: 425px){
                            width: 100%;
                        }
                    }
                }
                &--etaps{
                    p{
                        font-size: 1.5rem;
                        padding: .5rem 0;
                    }
                }
                &--list{
                    width: 60%;
                    display: flex;
                    justify-content: space-between;
                    @media(max-width: 425px){
                        width: 100%;
                    }
                }
            }
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
