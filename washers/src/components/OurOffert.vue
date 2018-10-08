<template>
  <article class="our-offert">
    <h1 class="our-offert__title"> Poznaj naszą ofertę </h1>

    <div class="offert-box">
        <div v-for="item in offert" class="offert-box__item">
            <img :src="item.img" alt="" class="item-img">
            <p class="item-description">
                {{item.description}}
            </p>
        </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'OurOffert',
//   props: [offert],
  data () {
    return {
        offert: [
            {id: 1, img: '../../static/img/myjka-do-okien-karcher.jpg', description: 'description of an item!'},
            {id: 1, img: '../../static/img/myjka-karcher-2.jpg', description: 'description of an item!'},
            {id: 1, img: '../../static/img/myjka-karcher.jpg', description: 'description of an item!'},
            {id: 1, img: '../../static/img/odkurzacz-przemyslowy-karcher.jpg', description: 'description of an item!'},
            {id: 1, img: '../../static/img/odkurzacz-puzzi.jpg', description: 'description of an item!'},
            {id: 1, img: '../../static/img/parownica-karcher.jpg', description: 'description of an item!'},
            {id: 1, img: '../../static/img/pianownica-do-myjki.jpg', description: 'description of an item!'}
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables';

.our-offert{
    background: $yellow;
    width: 100%;
    height: 400px;
    overflow-x: scroll;
    overflow-y: hidden;
    &__title{
        font-size: 2.2rem;
        text-align: center;
        padding: 2rem 0;
    }
    .offert-box{
        display: flex;
        width: 200%; //set this property with calc of items count
        &__item{
            display: inline-block;
            width: calc(25% - 4rem);
            margin: 0 2rem;
            .item-img{
                width: 100%; height: auto;
            }
        }

    }

}
</style>
