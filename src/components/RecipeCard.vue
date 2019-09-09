<template>
  <article class="recipe-card">
    <h1 class="recipe-card__title">{{recipe.titre}}</h1>
    <div class="informations">
      <img :src="recipe.photo" class="informations__illustration" :alt="recipe.titre">
      <p class="informations__level">{{ recipe.niveau }}</p>
      <p class="informations__time"></p>
    </div>
  </article>
</template>

<script>

export default {
  name: 'RecipeCard',
  props: {
     recipe: {
      type: Object,
      required: true
    }
  }, 
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .recipe-card{
    width:100%;
    border: 2px solid black;
    min-height:250px;
    margin-top:20px;
    background: black;

    @media screen and(max-width:450px){
       width:100%;
    }
    @media screen and(min-width:451px){
      width:33%;
      min-width:250px;
      max-width:320px;
    }

    &__title{
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073;
      color:white;
    }

    .informations {
      &__illustration {
        display: block;
        width:150px;
        height:auto;

        @media screen and(min-width:768px){
          width:100%;
          height:200px;
        }
      }
    }
  }

</style>
