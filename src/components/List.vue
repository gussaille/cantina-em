<template>
  <div class="list" id="list">    
    <form class="form-filter" @submit.prevent>
      <div class="form-filter__search">
        <label for="searchVal">Rechercher :</label>
        <input type="text" id="searchVal" v-model="searchValue" placeholder="Veuillez saisir un nom de recette">
      </div>

      <div class="form-filter__select">
          <h3>Filtrer par :</h3>
        <div>
          <input type="checkbox" v-model="selectValue[0]" value="name" id="name" name="nom">
          <label for="name">Nom de recette</label>
        </div>
        <div>
          <select v-model="selectValue[1]" value="level" id="level" name="niveau">
            <option value="" disabled>-- Niveau de difficulté --</option>
            <option value="all">Tous niveaux</option>
            <option value="padawan">Padawan</option>
            <option value="jedi">Jedi</option>
            <option value="maitre">Maitre</option>
          </select>
        </div>
        <div> 
          <input type="number" v-model.number="personNumber" min="1"  value="guest" id="guest" name="personne">
          <label for="guest"> Nombre de personne </label>
        </div>
        <div>
          <input type="number" v-model.number="timeCooking" min="0" value="time" id="time" name="time">
          <label for="time"> Temps de préparation (en mn)</label>
        </div>
      </div>
    </form>
    <!-- <p v-if="error" class="error-message">Désolé, aucun résultat n'est apparu.</p> -->
    

    <div v-if="recipesList" class="recipe-list">    
        <RecipeCard @remove="removeRecipe" 
                    v-for="recipe in filteredList" 
                    :key="recipe.id" 
                    :recipe="recipe"/>
    </div>

  </div>
</template>

<script>

import RecipeCard from  './RecipeCard'
import userService from "../services/userService"
import { filter } from 'minimatch';

export default {
  name: 'List',
  components: {RecipeCard},
    data : function(){
    return{
        recipesList : null,
        searchValue: "",
        selectValue: [true, 'all'],
        personNumber: undefined,
        timeCooking:undefined 
    }
  },
  created(){
      userService
      .fetchAll()
      .then(recipesList => {
          this.recipesList = recipesList;
      });
  },
  computed: {

  filteredList: function() {
      let filteredList = this.recipesList;

      let searchVal = this.searchValue;
     
      if(this.selectValue[0] ===  true && searchVal != ''){
        filteredList = filteredList.filter((recipe)=> recipe.titre.toLowerCase().includes(searchVal))        
      }

      //If the select value is different from all show  show all the results matches
      if(this.selectValue[1] !=  "all"){
        filteredList = filteredList.filter((recipe)=> recipe.niveau.toLowerCase() === this.selectValue[1])
      }

      if(this.personNumber){
        filteredList = filteredList.filter((recipe)=> recipe.personnes >= this.personNumber)
      }

      if(this.timeCooking){
        filteredList = filteredList.filter((recipe)=> recipe.tempsPreparation <= this.timeCooking)
      }
      return filteredList;
    }
  },
  
  methods :{
    removeRecipe(recipeToDelete){
      if(confirm("Êtes-vous sûr de vouloir supprimer cette recette ?"))
        userService.removeRecipe(recipeToDelete)
        .then(()=> {
          let indexList = this.recipesList.indexOf(recipeToDelete)
          if(indexList > -1){
            this.recipesList.splice(indexList, 1);
          }
          this.$toasted.show("La recette a été supprimée !", { 
            theme: "bubble", 
            position: "top-center", 
            duration : 2000
          });          
        })
        .catch((error)=> {
            this.$toasted.error(error.message)          
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list{
  .form-filter{
    color:white;
    margin: 20px auto;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items:center;
    @media screen and(min-width:780px) and (orientation: landscape){
      width:80%;
    }
    @media screen and(max-width:480px){
      flex-direction: column;
    }
    &__search{
      width:100%;
      display:flex;
      flex-direction: column ;
      max-width:330px;
      @media screen and(min-width:800px){
        max-width:400px;
      }

      input{
        width:100%;
        margin:0 auto;
        padding: 12px;

        @media screen and(max-width:870px){
          width:80%;
        }
      }
      label{
        width:88%;
        @media screen and(min-width:870px){
          width: 100%;
        }
        margin:0 auto;
        text-align:left;
      }
    }
    &__select{
      display:flex;
      width:230px;
      flex-direction: column;

      label{
        margin:0 auto;
      }
     
      input{
       width:50px;
       padding:5px;
       margin:5px 0;
      }
      div{
        width: 100%;
        display:flex;
        align-items:center;
        margin: 5px auto;
      }
    }
  }
  .recipe-list{
    width:100%;
    max-width: 1480px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-around;
  }
}

</style>
