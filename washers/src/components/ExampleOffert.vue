<template>
  <article class="example-offert">

    <div class="section section--top">
        <img :src="exampleOffert[0].img" alt="" class="section__img">
        <div class="section__description">
            <h2>{{ exampleOffert[0].name }}</h2>
            <p>{{ exampleOffert[0].description }}</p>
        </div>
    </div>

    <div class="section section--bottom">
        <div class="section__description">
            <h2>{{ exampleOffert[1].name }}</h2>
            <p>{{ exampleOffert[1].description }}</p>
        </div>
        <img :src="exampleOffert[1].img" alt="" class="section__img">
    </div>

  </article>
</template>

<script>
export default {
  name: 'ExampleOffert',
  data () {
    return {
        exampleOffert: [
            {name: 'odkurzacz przemysłowy karcher', img: '../../static/img/odkurzacz-przemyslowy-karcher.jpg', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum laudantium, placeat atque id, soluta cupiditate similique voluptatem reprehenderit odio eius vero amet fugiat doloribus molestias eligendi sunt repellat provident magni?'},
            {name: 'odkurzacz puzzi', img: '../../static/img/odkurzacz-puzzi.jpg', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum laudantium, placeat atque id, soluta cupiditate similique voluptatem reprehenderit odio eius vero amet fugiat doloribus molestias eligendi sunt repellat provident magni?'}
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables';

.example-offert{
    width: 80%;
    margin: 0 auto;
    .section{
        &__img{
            width: 25%;
            display: inline-block;
        }
        &__description{
            display: inline-block;
        }
    }
    
}
</style>
