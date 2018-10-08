// When u scroll page header should have opacity, and when user have mouse on header opacity should be on 1

<template>
  <header class="header">
    <div class="header__logo">
      <img src="../../static/img/icons/logo.png" alt="logo odkurza-czary">
    </div>

    <nav class="header__navigation">
      <ul class="list">
        <li class="list__item">start</li>
        <li class="list__item">o nas</li>
        <li class="list__item">oferta</li>
        <li class="list__item">cennik</li>
        <li class="list__item">galeria</li>
        <li class="list__item">fb icon</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerComp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .header {
    position: sticky;
    top: 0;
    padding: 2.5rem 2rem;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 1);
    z-index: 1999;

    &__logo{
      img{
        position: absolute;
        top: -13px;
        width: 14rem;
        height: 9rem;
      }
    }

    &__navigation{
      font-size: 1.5rem;
      .list{
        list-style-type: none;
        text-transform: capitalize;
        &__item{
          display: inline-block;
          &:not(:last-child){
            margin: 0 .8rem;
          }
        }
      }
    }
  }
</style>