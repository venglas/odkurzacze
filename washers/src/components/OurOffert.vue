<template>
  <article class="our-offert" id="our-offert">
    <h1 class="our-offert__title"> Poznaj naszą ofertę </h1>

    <div class="offert-box">
        <div class="wrapper">
            <div v-for="item in offert" @click="scrollToOffert(item.id)" :id="'box'+item.id" class="offert-box__item" title="Kliknij aby wyświetlić szczegóły">
                <img :src="item.img" alt="" class="item-img">
                <div class="item-title">
                    <h2>{{item.title}}</h2>
                    <h2 class="info">Kliknij aby wyświetlić szczegóły</h2>
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




        <!-- modal should be in new component -->
        <!-- <div class="info-modal" v-for="modal in offert" :id="'modal'+modal.id"> -->

            <!-- <img :src="closeIcon" alt="close icon" @click="closeModal(modal.id)" class="close-icon">
            
            <div class="section-top">
                <h2>{{ modal.title }}</h2>
                <h3>{{ modal.subtitle }}</h3>
                <p>{{ modal.description }}</p>
                <p v-html="modal.subDescription">{{ modal.subDescription }}</p>
            </div>

            <p class="offert-title">{{ modal.offertCaption }}</p>


            <u class="info-modal-list">
                <li v-for="modalList in modal.offertList" class="info-modal__item">
                    {{ modalList }}
                </li>
            </u>

            <h3 v-if="modal.id == 1">W ramach zakupu usługi gwarantujemy chemię oraz sprzęt niezbędny do sprzątania.</h3>

            <div class="info-item">
                <img :src="modal.iconTime" alt="calendar icon" class="info-item__photo">
                <p class="info-item__description">{{ modal.time }}</p>
            </div>

            <div class="info-item" v-if="modal.info1 != ''">
                <img :src="modal.iconOrder" alt="order icon" class="info-item__photo">
                <p class="info-item__description">{{ modal.info1 }}</p>
            </div>

            <div class="info-item">
                <img :src="modal.iconContact" alt="contact icon" class="info-item__photo">
                <p class="info-item__description">
                    <p>{{ telephone }} / {{ email }}</p>
                </p>
            </div>

            <div class="info-item">
                <img :src="modal.iconPrice" alt="price icon" class="info-item__photo">
                <p class="info-item__description">
                    <p>{{modal.price}}</p>
                </p>
            </div>

            <ul class="info-modal-list info-modal-list--2">
                <li v-for="modalList2 in modal.windowsClean" class="info-modal__item">
                    {{modalList2}}
                </li>
            </ul>

            <h3>{{ info2 }}</h3> -->
        <!-- </div>  -->
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
                id: 1, img: '../../static/img/kaf2.png',
                title: 'Pranie dywanów i wykładzin',
                subtitle: 'Ciepły, miękki i czysty dywan!',
                description: 'Czysty i ciepły dom to nie tylko lśniące okna, meble, sofa ale także dywan czy wykładzina. Codzienne użytkowanie zostawia po sobie bardzo widoczne, denerwujące plamy i ślady. Mamy na to skuteczny i wypróbowany sposób, skorzystaj i Ty z naszego doświadczenia!',
                subDescription: 'Wypożyczymy, przyjedziemy i wypierzemy za Ciebie.',
                offertCaption: 'Cennik prania dywanów i wykładzin:',
                offertList: [
                    'Sztuczne od 5 zł /m2',
                    'Wełniane od 6zł',
                    'SHAGGY tzw. Włochacze od 7 zł',
                    'wykładzina do 20 m2 od 5 zł za m2',
                    'wykładzina powyżej 20m2 od 4 zł za m2',
                    'wykładzina Ponad 100m i stałe zlecenia cena indywidualna'
                ],
                time: 'Biorąc pod uwagę komfort użytkowników biura, sprzątanie odbywa się po godzinach jego urzędowania, zgodnie z czasem zakontraktowanym i uzgodnionym z Klientem. Rozpoczęcie prac sprzątających odbywa się najwcześniej o godzinie 16.30.',
                info1: 'Szybka realizacja zamówienia, po indywidualnym ustaleniu z Klientem jego oczekiwań oraz dogodnego terminu.',
                price: 'Cena jest zależna od czyszczonej powierzchni. W przypadku biur, obiektów usługowych i innych firm, które potrzebują regularnych usług prania wykładzin i dywanów zapraszamy do kontaktu telefonicznego. Przy większej ilości elementów pranych jednorazowo możliwa jest negocjacja ceny.',
                windowsClean: [],
                ifno2: 'Aby dowiedzieć się więcej na temat sprzętu oraz techniki czyszczenia wykorzystywanej przez nasza firmę zapraszamy do zakładki sprzęt'
            },

            {
                id: 2, img: '../../static/img/kaf3.png',
                title: 'Pranie tapicerki meblowej',
                subtitle: 'Wypoczynek i relaks!',
                description: 'Miękka, pachnąca i czysta sofa albo fotel to gwarancja relaksu po ciężkim dniu. Zadbamy o Wasz wypoczynek Zapraszamy do skorzystania z naszej oferty czyszczenie mebli. Cena zależy od wielkości mebla oraz od rodzaju i stopnia zabrudzenia. Na proces czyszczenia składa się:',
                subDescription: `faza odplamiania specjalnymi, dostosowanymi do plam środkami, pranie zasadnicze odkurzaczem ekstrakcyjnym`,
                offertCaption: 'Cennik prania dywanów i wykładzin:',
                offertList: [
                    'Poduchy meblowe 10 – 15 zł',
                    'Krzesła siedzisko 10 – 15 zł',
                    'Krzesło: siedzisko + oparcie 15 – 25 zł',
                    'Pufy meblowe I osobowe 15 – 25 zł',
                    'Fotele biurowe 15 – 25 zł',
                    'Fotele wypoczynkowe 60 – 80 zł',
                    'Narożniki kuchenne 70 – 100 zł',
                    'Wersalki / kanapy dziecięce 70 – 100 zł',
                    'Kanapy II osobowe 120 – 150 zł',
                    'Kanapy III osobowe 140 – 170 zł',
                    'Kanapy (narożniki) IV osobowe 150 – 190 zł',
                    'Kanapy (narożniki) V osobowe 180 – 200 zł',
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
                id: 3, img: '../../static/img/car.png',
                title: 'Dojazd do klienta',
                subtitle: 'Dojazd do klienta na terenie Knurowa Gratis.',
                description: '',
                subDescription: '',
                offertCaption: '',
                offertList: [
                    'Do 15km - 10zł',
                    'Powyżej 15km - cena do uzgodnienia.'
                ],
                time: '',
                info1: '',
                price: '',
                ifno2: ''
            },

            {
                id: 4, img: '../../static/img/kaf4.png',
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
        }
    },
    // showModal(which){
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#app").offset().top
    //     }, 1000);
        
    //     $('body').css({overflow: 'hidden'});

    //     switch(which){
    //         case 1:
    //             $('#modal'+which).css({display: 'block'})
    //         break;

    //         case 2:
    //             $('#modal'+which).css({display: 'block'})
    //         break;

    //         case 3:
    //             $('#modal'+which).css({display: 'block'})
    //         break;

    //         case 4:
    //             this.$router.push('/Cennik');
    //             $('body').css({overflowY: 'scroll'});
    //         break;
    //     }
    // },
    // closeModal(which){
    //     $('body').css({overflowY: 'scroll'});

    //     switch(which){
    //         case 1:
    //             $('#modal'+which).css({display: 'none'})
    //         break;
    //     }

    //     switch(which){
    //         case 2:
    //             $('#modal'+which).css({display: 'none'})
    //         break;
    //     }

    //     switch(which){
    //         case 3:
    //             $('#modal'+which).css({display: 'none'})
    //         break;
    //     }
    // }
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
            width: calc(25% - 4rem);
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
                width: calc(33% - 4rem);
                margin: 2rem 2rem;
            }
            @media(max-width: 425px){
                display: block;
                width: 95%;
                height: fit-content;
            }
            .item-img{
                width: 100%;
                height: 20rem;
                max-height: 20rem;
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
        }
        .description{
            padding: 2rem 0;
            text-align: center;
            font-size: 1.3rem;
        }
        .subdescription{
            font-size: 1.1rem;
            padding-bottom: 1rem;
        }
        .list{
            margin-left: 2rem;
            padding-bottom: 2.5rem;
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
            }
        }
    }

}

// .info-modal{
//     display: none;
//     width: 100vw;
//     height: 100vh;
//     position: absolute;
//     background-color: rgb(68, 68, 68);
//     top: 0;
//     left: 0;
//     z-index: 1999;
//     padding: 5rem;
//     color: #fff;
//     font-size: 1.5rem;
//     white-space: normal;

//     .close-icon{
//         position: absolute;
//         top: 2rem;
//         right: 5rem;
//         cursor: pointer;
//     }
//     .section-top{
//         text-align: center;
//         font-size: 1.5rem;
//         *{
//             padding: 1rem 0;
//         }
//     }
//     .offert-title{
//         font-size: 1.7rem;
//         padding: 2rem 0 1rem 0;
//     }
//     .info-modal-list{
//         margin-left: 2rem;
//         text-decoration: none;
//         font-size: 1.5rem;
//         &--2{
//             li{
//                 &:first-child{
//                     list-style: none;
//                     font-weight: 600;
//                     margin-left: -2rem;
//                 }
//             }
//         }
//     }
//     .info-item{
//         padding: 1.5rem 0;
//         display: flex;
//         &__photo{
//             margin-right: 1rem;
//         }
//     }
// }

</style>
