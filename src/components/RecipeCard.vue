<template>
  <article class="recipe-card">
    <h1 class="recipe-card__title">{{recipe.titre}}</h1>
    <div class="informations">
      <img :src="recipe.photo || DEFAULT_PICTURE" class="informations__illustration" :alt="recipe.titre">
      <div class="informations__preparation">
        <p class="informations__preparation__level">Difficulté : {{ recipe.niveau }}</p>
        <p class="informations__preparation__time">Préparation : {{ recipe.tempsPreparation }} mn</p>
        
        <p class="informations__preparation__guest" v-if="recipe.personnes > 1"> Pour {{ recipe.personnes }} personnes
        </p>
         <p class="informations__preparation__guest" v-else> Pour {{ recipe.personnes }} personne
        </p>

        <div class="btn-custom">
          <button class="btn-custom--edit" @click="edit">Modifier</button> 
          <button class="btn-custom--remove" @click="remove">Supprimer</button> 
        </div>

      </div>
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
  },
  methods: {
      edit(){

      },
      remove(){
            
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .recipe-card{
    width:100%;
    max-width:320px;
    border: 2px solid black;
    min-height:250px;
    margin-top:20px;
    cursor: pointer;
    background: black;
    transition: 0.5s;
    
    &:hover{
      transform: scale(1.02);
      transition: 0.5s;
    }

    &__title{
      color:white;
    }

    .informations {
      color: white;
      @media screen and(max-width:480px){
        display:flex;
        align-items:center;
      }
      &__illustration {
        display: block;
        width:150px;
        height:auto;

        @media screen and(min-width:768px){
          width:100%;
          height:200px;
        }
      }
      &__preparation{
        padding-left:10px;
        &__level{
          text-transform:capitalize;
          color:white;
        }
        .btn-custom{
          &--edit{
            background: gray;
          }
          &--remove{
            background: red;
          }
        }
      }
    }
  }

</style>
