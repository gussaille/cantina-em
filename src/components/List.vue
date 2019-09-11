<template>
  <div class="list">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    
    <form class="form-filter" @submit.prevent>
        <input type="text" v-model="searchValue" placeholder="Veuillez saisir un nom de recette">

          <div class="form-filter__select">
              <label for="filter">Filtrer par :</label>
              <select name="filterBy" v-model="selectValue">
                  <option value="name">Nom de la recette</option>
                  <option value="level">Niveau de difficulté</option>
                  <option value="guest">Nombre de personne</option>
                  <option value="time">Temps de préparation</option>
              </select>
          </div>
      </form>

    <div v-if="recipesList" class="recipe-list">    
        <RecipeCard  @remove="removeRecipe" v-for="recipe in filteredList" :key="recipe.id" :recipe="recipe"/>
    </div>

    <RemoveModal v-if="showModal" @close="showModal = false"/>
  </div>
</template>

<script>

import RecipeCard from  './RecipeCard'
import RemoveModal from  './RemoveModal'
import userService from "../services/userService"

export default {
  name: 'List',
  components: {RecipeCard, RemoveModal},
  props:{},
  data : function(){
    return{
        recipesList : null,
        searchValue: "",
        selectValue: "name",
        showModal : false
    }
  },
  created(){
      userService
      .fetchAll()
      .then(recipesList => {
          console.log(recipesList);
          this.recipesList = recipesList;
      });
  },
  computed: {
        filteredList: function() {
            return this.recipesList.filter(({ titre, niveau, tempsPreparation, personnes }) => {
                let searchVal = this.searchValue.toLowerCase();
                    titre = titre.toLowerCase();
                    personnes = personnes.toString().toLowerCase();
                    tempsPreparation = tempsPreparation.toString();
                    niveau = niveau.toLowerCase();

                if(this.selectValue === "name"){
                  return `${titre}`.includes(searchVal)
                } 
                else if(this.selectValue === 'guest'){
                  return `${personnes}`.includes(searchVal)
                } 
                else if( this.selectValue === 'time'){
                  return `${tempsPreparation}`.includes(searchVal)
                } 
                else { 
                  return `${niveau}`.includes(searchVal)
                }
          });
      }
  },
  
  methods :{
    removeRecipe: function(){
      this.showModal = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list{
  .form-filter{
    margin: 20px auto;
    display:flex;
    justify-content: space-around;
    align-items:center;
    @media screen and(min-width:780px) and (orientation: landscape){
      width:80%;
    }
    @media screen and(max-width:480px){
      flex-direction: column;
    }

    input{
      width:80%;
      padding: 12px;
      max-width:420px;
    }
    &__select{
      display:flex;
      flex-direction: column;
      label{
        color:white;
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
