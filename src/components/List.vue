<template>
  <div class="list">    
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
            <option disabled value="">-- Niveau de difficulté --</option>
            <option value="all">Tous niveaux</option>
            <option value="padawan">Padawan</option>
            <option value="jedi">Jedi</option>
            <option value="maitre">Maitre</option>
          </select>
        </div>
        <div> 
          <input type="number" v-model.number="selectValue[2]" min="1" max="100" value="guest" id="guest" name="personne">
          <label for="guest"> Nombre de personne </label>
        </div>
        <div>
          <input type="number" v-model.number="selectValue[3]" value="time" id="time" name="time">
          <label for="time"> Temps de préparation (en mn)</label>
        </div>
      </div>
    </form>

    <div v-if="recipesList" class="recipe-list">    
        <RecipeCard @remove="removeRecipe" 
                    v-for="recipe in filteredList" 
                    :key="recipe.id" 
                    :recipe="recipe"/>
    </div>

    <RemoveModal v-if="showModal" @close="showModal = false" @confirm='removeRecipe'/>

  </div>
</template>

<script>

import RecipeCard from  './RecipeCard'
import RemoveModal from  './RemoveModal'
import userService from "../services/userService"

export default {
  name: 'List',
  components: {RecipeCard, RemoveModal},
    data : function(){
    return{
        recipesList : null,
        searchValue: "",
        selectValue: [true],
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
              personnes = personnes.toString();
              tempsPreparation = tempsPreparation.toString();
              niveau = niveau.toLowerCase();

          if(this.selectValue[0] === true){
           
            if(this.selectValue[1] === "padawan") { 
              return `${niveau}`.includes("padawan")
            }

            else if(this.selectValue[1] === "jedi") {
              return `${niveau}`.includes("jedi")
            }

            else if(this.selectValue[1] === "maitre") { 
              return `${niveau}`.includes("maitre")
            }

            else if(this.selectValue[2] === personnes){
            console.log()
            return `${personnes}`.includes(searchVal)
            } 

            else if(this.selectValue[3] === tempsPreparation.{
              return `${tempsPreparation}`.includes(10)
            } 
           return `${titre}`.includes(searchVal)
          }
         
          if(this.selectValue[1] === "padawan") { 
            console.log('padawan');
            return `${niveau}`.includes("padawan")
          }
           if(this.selectValue[1] === "jedi") {
             console.log('jedi'); 
            return `${niveau}`.includes("jedi")
          }
          if(this.selectValue[1] === "maitre") { 
            console.log('maitre');
            return `${niveau}`.includes("maitre")
          }
            
          else if(this.selectValue[2] === personnes){
            console.log()
            return `${personnes}`.includes(searchVal)
          } 

          else if( this.selectValue[3] === true){
            return `${tempsPreparation}`.includes(searchVal)
          } 
        });
      }
  },
  
  methods :{
    removeRecipe(recipeToDelete){
        userService.removeRecipe(recipeToDelete)
          .then(()=> {
            let indexList = this.recipesList.indexOf(recipeToDelete)
            if(indexList > -1){
              this.recipesList.splice(indexList, 1);
            }
            alert("La recette a été supprimée")
          })
          .catch(()=> {
            alert('Erreur')
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
      margin:

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
