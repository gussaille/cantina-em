<template>
  <article class="recipe-card">
    <h1 class="recipe-card__title">{{recipe.titre}}</h1>
    <div class="informations">
      <img :src="recipe.photo || DEFAULT_PICTURE" class="informations__illustration" :alt="recipe.titre">
      <div class="informations__preparation">
        <p class="informations__preparation__level">Difficulté : {{ recipe.niveau }}</p>
        <p class="informations__preparation__time">Préparation : {{ CONVERT_TIME }} </p>
        
        <p class="informations__preparation__guest" v-if="recipe.personnes > 1"> Pour {{ recipe.personnes }} personnes
        </p>
         <p class="informations__preparation__guest" v-else> Pour {{ recipe.personnes }} personne
        </p>

        <div class="btn-custom">
          <button class="btn-custom--edit" @click="edit">Modifier</button> 
          <button class="btn-custom--remove" @click="onRemove">Supprimer</button> 
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
    edit(){

    },
    onRemove() {
        this.$emit("remove", this.recipe);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .recipe-card{
    width:95%;
    max-width:320px;
    border: 2px solid black;
    min-height:250px;
    margin-top:20px;
    cursor: pointer;
    background: black;
    transition: 0.5s;
    &:active{
      outline:none;
    }
    
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
          color:white;
        }
        .btn-custom{
            display: flex;
            justify-content: space-around;
            @media screen and(min-width:480px){
                width: 60%;
                margin: 0 auto;
                max-width: 500px;
            }
            @media screen and(max-width:320px){
              flex-direction: column;
              justify-content: center;
            }
            
            button {
                cursor: pointer;
                width:auto;
                @media screen and(min-width:480px){
                  width: 90px;
                }
                padding:10px;
                outline: 0;
                border: 0;
                margin: 20px auto;
                @media screen and(max-width:320px){
                  margin:5px auto;
                  width:100px;
                }
            }
            &--remove{
                background-color:red;
            }
        }
      }
    }
  }

</style>
