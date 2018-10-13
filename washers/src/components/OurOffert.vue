<template>
  <article class="our-offert">
    <h1 class="our-offert__title"> Poznaj naszą ofertę </h1>

    <div class="offert-box">
        <div v-for="item in offert" class="offert-box__item" title="Kliknij aby wyświetlić szczegóły">
            <img :src="item.img" alt="" class="item-img">
            <div class="item-title">
                <h2>{{item.title}}</h2>
            </div>
        </div>

        <div class="info-modal" v-for="modal in offert" :id="'modal'+modal.id">

            <img :src="closeIcon" alt="close icon" @click="closeModal(modal.id)" class="close-icon">
            
            <div class="section-top">
                <h2>{{ modal.title }}</h2>
                <h3>{{ modal.subtitle }}</h3>
                <p>{{ modal.description }}</p>
            </div>

            <p class="offert-title">{{ modal.offertCaption }}</p>


            <u class="info-modal-list">
                <li v-for="modalList in modal.offertList" class="info-modal__item">
                    {{ modalList }}
                </li>
            </u>

            <h3>W ramach zakupu usługi gwarantujemy chemię oraz sprzęt niezbędny do sprzątania.</h3>

            <div class="info-item">
                <img :src="modal.iconTime" alt="calendar icon" class="info-item__photo">
                <p class="info-item__description">{{ modal.time }}</p>
            </div>

            <div class="info-item">
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

            <h3>{{ info2 }}</h3>
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
        offert: [
            {
                id: 1, img: '../../static/img/kaf1.png',
                title: 'SPRZĄTANIE BIUR',
                subtitle: 'Czyste biuro czysta przyjemność !',
                description: 'Zbliża się koniec pracy a na biurku w dalszym ciągu piętrzą się dokumenty, kuchnia pełna brudnych naczyń, pełne kosze, zadeptana wykładzina i zamiast cieszyć się wolnym popołudniem martwisz się ile jeszcze czasu musisz poświęcić na uporządkowanie biura.',
                subDescription: 'Skontaktuj się z nami – chętnie zadbamy o porządek w Twoim biurze i domu.',
                offertCaption: 'Przykładowa usługa sprzątania biura obejmuje:',
                offertList: [
                    'sprzątanie powierzchni biurka',
                    'odkurzanie wykładzin',
                    'opróżnianie koszy',
                    'wycieranie półek, szaf',
                    'mycie podłogi',
                    'sprzątanie pomieszczeń socjalnych i WC,',
                    'wycieranie grzejników oświetlenia, itp.',
                    'okresowe mycie pionowych i poziomych powierzchni mebli i drzwi',
                    'okresowe wycieranie koszy oraz stelaży foteli i biurek',
                    'okresowe wycieranie kurzu z miejsc usytuowanych najwyżej (górne powierzchnie wysokich szaf, ościeżnice drzwi i okien, górne powierzchnie drzwi',
                    'mycie okien (raz na 6 miesięcy, wycena indywidualna)'
                ],
                iconTime: '../../static/img/icons/time-icon.png',
                iconOrder: '../../static/img/icons/order-icon.png',
                iconContact: '../../static/img/icons/contact-icon.png',
                iconPrice: '../../static/img/icons/money-icon.png',
                time: 'Biorąc pod uwagę komfort użytkowników biura, sprzątanie odbywa się po godzinach jego urzędowania, zgodnie z czasem zakontraktowanym i uzgodnionym z Klientem. Rozpoczęcie prac sprzątających odbywa się najwcześniej o godzinie 16.30.',
                info1: 'Szybka realizacja zamówienia, po indywidualnym ustaleniu z Klientem jego oczekiwań oraz dogodnego terminu.',
                price: 'godzina sprzątania 35zł',
                windowsClean: [
                    'Cennik mycia okien:',
                    'okno jednoskrzydłowe od 10 zł',
                    'okno dwuskrzydłowe od 15 zł',
                    'okno trzyskrzydłowe od 25 zł',
                    'drzwi balkonowe od 25 zł',
                    'drewniane starego typu – rozkręcane, podwójne wycena indywidualna',
                    'Podane ceny są cenami orientacyjnymi. Dokładną cenę poznają Państwo po oględzinach przed rozpoczęciem sprzątania.'
                ],
                ifno2: 'Uwaga: do ceny należy doliczyć ustawową stawkę VAT w wysokości 23%/nie jesteśmy płatnikiem VAT'
            },
            // {id: 2, img: '../../static/img/kaf2.png', title: 'PRANIE DYWANÓW I WYKŁADZIN', description: 'nnowacyjna linia urządzeń wysokociśnieniowych Full Control Plus wyposażona w nowe pistolety, które ułatwiają dopasowanie ciśnienia do rodzaju czyszczonej powierzchni. Nowy pistolet wysokociśnieniowy Full Control Plus pozwala zapobiec uszkodzeniu wrażliwych powierzchni oraz zoptymalizować efekty czyszczenia, tak by za każdym razem rezultat prac był możliwie najlepszy.'},
            // {id: 3, img: '../../static/img/kaf3.png', title: 'PRANIE TAPICERKI MEBLOWEJ', description: ''},
            // {id: 4, img: '../../static/img/kaf4.png', title: 'WYPOŻYCZALNIA KARCHER', description: 'Urządzenie jest przeznaczone do prac porządkowych w miejscach, gdzie do zapewnienia czystości potrzebne są wytrzymałe i uniwersalne urządzenia. Niesprzyjające warunki i duże obciążenie panujące podczas prac porządkowych w transporcie, motoryzacji, budownictwie, rolnictwie czy pracy rzemieślniczej nie stanowią żadnej przeszkody dla tego odkurzacza.'},
        ]
    }
  },
  methods: {
    closeModal(which){
        switch(which){
            case 1:
                $('#modal'+which).css({display: 'none'})
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
            width: calc(25% - 4rem);
            margin: 0 2rem;
            height: 100%;
            position: relative;
            cursor: pointer;
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

.info-modal{
    // display: none;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgb(68, 68, 68);
    top: 0;
    left: 0;
    z-index: 1999;
    padding: 5rem;
    color: #fff;
    font-size: 1.5rem;

    .close-icon{
        position: absolute;
        top: 2rem;
        right: 5rem;
        cursor: pointer;
    }
    .section-top{
        text-align: center;
        font-size: 1.5rem;
        *{
            padding: 1rem 0;
        }
    }
    .offert-title{
        font-size: 1.7rem;
        padding: 2rem 0 1rem 0;
    }
    .info-modal-list{
        margin-left: 2rem;
        text-decoration: none;
        font-size: 1.5rem;
        &--2{
            li{
                &:first-child{
                    list-style: none;
                    font-weight: 600;
                    margin-left: -2rem;
                }
            }
        }
    }
    .info-item{
        padding: 1.5rem 0;
        display: flex;
        &__photo{
            margin-right: 1rem;
        }
    }
}

</style>
