<template>
    <div class="about-us" id="contact">
        <div class="about-us__content">
            <div class="about-us__content-wrapper">
                <h1>Skontaktuj się z nami!</h1>

                <h2 class="" id="animation-1">
                    Z przyjemnością odpowiemy na wszystkie Państwa pytania, potwierdzimy dostępność
                    odkurzacza piorącego bądź umówimy się na wykonanie usługi w dogodnym dla Państwa
                    terminie.
                </h2>

                <h2 class="" id="animation-2">
                    Naszym stałym Klientom dziękujemy za zaufanie jakim nas obdarzyli, a nowych Klientów serdecznie
                    witamy w stale powiększającym się gronie zadowolonych z naszych usług odbiorców!
                </h2>

                <h2 class="" id="animation-3">
                    Dziękujemy za poświęcony czas i zapraszamy do skorzystania z naszej oferty.
                </h2>
                
                <div class="firm">
                    <h2 class="animation-offset-1" id="animation-4">ODKURZA-CZARY</h2>
                    <h2 class="" id="animation-5">Ul. Powstańców 8A</h2>
                    <h2 class="animation-offset-3" id="animation-6">
                        <p>44-193 Knurów</p>
                        <p>Tel. 694-045-198</p>
                        <p>Mail: biuro@odkurza-czary.pl</p>
                    </h2>
                </div>
                
            </div>
            
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.2448455583!2d18.639158315790905!3d50.21264487944322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113659acc4fec3%3A0x7b018c6e7c406c2f!2zUG93c3RhxYRjw7N3IDgsIDQ0LTE5MyBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1539888595828" width="1920" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {}
  },
  mounted(){
    window.addEventListener("scroll", ()=>{        
        if(window.pageYOffset >= 2985){
            $('#animation-1').addClass('animation-1');
            $('#animation-2').addClass('animation-2');
            $('#animation-3').addClass('animation-3');

            $('#animation-4').addClass('animation-1');
            $('#animation-5').addClass('animation-2');
            $('#animation-6').addClass('animation-3');
        }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

@mixin animation-text($anim-delay){
    animation-name: fade-in-text;
    animation-delay: $anim-delay;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
}

.about-us{
    text-align: center;
    padding: 5rem;
    min-height: calc(100vh - 8vh - 380px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;

    @media(max-width: 768px){
        text-align: center;
    }

    &__content{
        line-height: 2;
        letter-spacing: 2px;
        display: flex;
        @media(max-width: 768px){
            display: block;
        }
        
        .about-us__content-wrapper{
            width: 65%;
            @media(max-width: 768px){
                width: 95%;
                margin: 0 auto;
            }
        }
        .map{
            width: 35%;
            @media(max-width: 768px){
                width: 100%;
            }
            @media(max-width: 425px){
                height: 33.33vh;
            }
        }
        
        .firm{
            h1, h2{
                color: #fff;
            }
        }
        h1, h2{
            color: $yellow;
            opacity: 0;
        }
        h1{
            font-size: 3rem;
            @include animation-text(400ms);
        }
        h2{
            font-size: 3rem;
            @media(max-width: 1440px){
                font-size: 1.5rem;
            }

            @media(max-width: 768px){
                font-size: 1.5rem;
            }

            @media(max-width: 425px){
                font-size: 1.3rem;
            }
        }

        .animation-1{
           @include animation-text(1000ms);
        }
        .animation-offset-1{
            padding-top: 3rem;
        }

        .animation-2{
           @include animation-text(1800ms);
        }
        .animation-3{
           @include animation-text(2600ms);
        }
        .animation-offset-3{
            padding-bottom: 2.5rem;
        }

        @keyframes fade-in-text {
            0%{opacity: 0}
            100%{opacity: 1} 
        }
    }
}
</style>