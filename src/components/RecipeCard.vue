<template>
  <article class="recipe-card">
    <div class="recipe-card__container" @click="goRecipe">
      <h1 class="recipe-card__title">{{recipe.titre}}</h1>

      <div class="informations" >
        <img :src="recipe.photo || DEFAULT_PICTURE" class="informations__illustration" :alt="recipe.titre">
        <div class="informations__preparation">
          <p class="informations__preparation__level">Difficulté : {{ recipe.niveau }}</p>
          <p class="informations__preparation__time">Préparation : {{ CONVERT_TIME }} </p>
          
          <p class="informations__preparation__guest" v-if="recipe.personnes > 1"> Pour {{ recipe.personnes }} personnes
          </p>
          <p class="informations__preparation__guest" v-else> Pour {{ recipe.personnes }} personne
          </p>
        </div>
      </div>
    </div>

    <div class="btn-custom">
        <router-link :to="`/recipe/edit/${recipe.id}`" title="Modifier la recette" class="btn btn-custom--edit"><i class="material-icons" >edit</i></router-link>
        <button class="btn btn-custom--remove"  title="Supprimer la recette" @click="onRemove"><i class="material-icons">delete</i></button> 
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
  computed: {
    DEFAULT_PICTURE: function() {
      return "https://munchies-images.vice.com/wp_upload/blue-star-wars-cookies.jpg?crop=0.9991111111111111xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*";
    },
    CONVERT_TIME: function(n) {
      n = this.recipe.tempsPreparation;
      var num = n;
      var hours = (num / 60);
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      if(rhours >= 1){
        return rhours + "h" + rminutes + "mn" ;
      }
      return rminutes + "mn";
    }
  },
  methods: {
    //REDIRECT TO THE RECIPE PAGE
    goRecipe(){
      this.$router.push({path:"/recipe/" + this.recipe.id});
    },
    //EVENT TO EMIT TO THE PARENT IN ORDER TO REMOVE THE RECIPE
    onRemove() {
        this.$emit("remove", this.recipe);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .recipe-card{
    width:95%;
    max-width:320px;
    border-radius: 25px 0;
    border: 2px solid #FBE50B;
    min-height:250px;
    margin-top:20px;
    cursor: pointer;
    background: black;
    transition: 0.5s;
    
    &:hover{
      background: rgba(254, 254, 254, 0.1);

      .recipe-card__title{
        text-shadow: 2px 4px 5px #000000;
      }
    }

    &:active{
      outline:none;
    }

    &__title{
      font-family: starJedi;
      letter-spacing: 3px;

      @media screen and(min-width:480px){
        min-height: 70px;
      }
    }

    .informations {
      @media screen and(max-width:480px){
        display:flex;
        align-items:center;
        justify-content: space-around;
      }

      &__illustration {
        display: block;
        width:150px;
        height:auto;

        @media screen and(min-width:480px){
          width:100%;
          height:200px;
        }
      }

      &__preparation{
        &__level{
          text-transform:capitalize;
        }
      }
    }
  }

</style>
