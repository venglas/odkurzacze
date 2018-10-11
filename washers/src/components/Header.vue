<template>
  <header class="header">
    <div class="header__logo">
      <img src="../../static/img/icons/logo.png" alt="logo odkurza-czary" class="logo-img">
    </div>

    <nav class="header__navigation">
      <div class="mobile-menu" @click="toggleMenu">
        <img src="../../static/img/icons/mobile-menu.png" alt="mobile menu icon">
      </div>
      <ul class="list">
        <li class="list__item" @click="goTo('start')"> <span>start</span></li>
        <li class="list__item" @click="goTo('about-us')"> <span>o nas</span></li>
        <li class="list__item" @click="goTo('offert')"> <span>oferta</span></li>
        <li class="list__item" @click="goTo('price-list')"> <span>cennik</span></li>
        <li class="list__item" @click="goTo('gallery')"> <span>galeria</span></li>
        <li class="list__item"> <a href="https://www.facebook.com/" target="_blank"><span><img src="../../static/img/icons/facebook-original.png" alt="facebook" class="fb-icon"></span></a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerComp',
  data () {
    return {
      isOpen: false //mobile menu
    }
  },
  methods: {
    toggleMenu(){
      if(!this.isOpen){
        $('.list').css({height: '100%'});
        $('.logo-img').css({width: '100%'});
        $('.header__navigation').css({height: '100%'});

        this.isOpen = true;
      }else{
        $('.list').css({height: '0'});
        $('.logo-img').css({width: '12rem'});
        $('.header__navigation').css({height: '6rem'});

        this.isOpen = false;
      }
    },
    
    goTo(where){

      // @click="goTo('about-us')">
      // @click="goTo('offert')"> <span
      // @click="goTo('price-list')">
      // @click="goTo('gallery')"> <span




      switch(where){
        case 'start':
          this.$router.push('/')
        break;

        case 'about-us':
          this.$router.push('/O-nas')
        break;

        case 'offert':
          this.$router.push('/Oferta')
        break;

        case 'price-list':
          this.$router.push('/Cennik')
        break;

        case 'gallery':
          this.$router.push('/Galeria')
        break;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .header {
    height: 8rem;
    position: sticky;
    top: 0;
    padding: 2.5rem 2rem;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 1);
    z-index: 1999;
    @media(max-width: 425px){
      padding: 1rem 0;
    }

    &__logo{
      img{
        position: absolute;
        top: -13px;
        width: 14rem;
        height: 9rem;
        @media(max-width: 425px){
          width: 12rem;
          height: auto;
          transition: all ease 200ms;
        }
      }
      @media(max-width: 425px){
        position: absolute;
        width: 100%;
        margin: 0 auto;
      }
    }

    &__navigation{
      transition: all ease 200ms;
      .mobile-menu{
        display: none;
        position: absolute;
        top: 1rem; right: 1.5rem;
        img{
          width: 4rem;
        }
        @media(max-width: 425px){
          display: block;
        }
      }
      font-size: 1.5rem;
      .list{
        list-style-type: none;
        text-transform: capitalize;
        height: 0;

        &__item{
          display: inline-block;
          &:not(:last-child){
            margin: 0 .8rem;
          }
          .fb-icon{
            height: 2rem;
          }
        }
      }
      @media(max-width: 425px){
        font-size: 4rem;
        width: 100%;
        height: 6rem;

        .list{
          width: fit-content;
          margin: 0 auto;
          margin-top: 22rem;
          overflow: hidden;

          &__item{
            width: 100%;
            margin: .5rem 0;

            span{
              margin: 0 auto;
              display: block;
              width: fit-content;
            }
            .fb-icon{
              height: 4rem;
            }
          }
        }
      }
    }
  }
</style>