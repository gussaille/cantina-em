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
          <input type="number" v-model.number="selectValue[2]"  value="guest" id="guest" name="personne">
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
          this.recipesList = recipesList;
      });
  },
  computed: {

  filteredList: function() {
      let filteredList = this.recipesList;
      let personnesNumber;

      let searchVal = this.searchValue;
     
        if(this.selectValue[0] ===  true){
          filteredList = filteredList.filter((recipe)=> recipe.titre.toLowerCase().includes(searchVal))
        }

        if(this.selectValue[1] ===  "padawan"){
          filteredList = filteredList.filter((recipe)=> recipe.niveau.toLowerCase().includes('padawan'))
        }
        if(this.selectValue[1] ===  "jedi"){
          filteredList = filteredList.filter((recipe)=> recipe.niveau.toLowerCase().includes('jedi'))
        }
        if(this.selectValue[1] ===  "maitre"){
          filteredList = filteredList.filter((recipe)=> recipe.niveau.toLowerCase().includes('maitre'))
        }

        //A MODIFIER FILTER PERSONNES + TEMPS DE PREPARATION 
        if(this.selectValue[2] == personnesNumber ){
          console.log(personnesNumber);
          filteredList = filteredList.filter((recipe)=> recipe.personnes.toString().includes(''))
        }

        // console.dir(filteredList)

        return filteredList;

      // for (let i = 0; i < filteredList.length; i ++){
      //   titre = filteredList[i].titre;
      //    console.log(titre)
      //    if(titre === searchVal){
      //       return `${titre}`.includes(searchVal)
      //    }
      // }

      //  filteredList = filteredList.filter((recipe)=> recipe.titre.includes(searchVal))

    // return this.recipesList.filter(({ titre, niveau, tempsPreparation, personnes }) => {
        
        // if(this.selectValue[0] === true){

        //   if(this.selectValue[1] === "padawan") { 
        //     `${niveau}`.includes("padawan") && `${titre}`.includes(searchVal)
        //   }

        //   else if(this.selectValue[1] === "jedi") {
        //     return `${niveau}`.includes("jedi")
        //   }

        //   else if(this.selectValue[1] === "maitre") { 
        //     return `${niveau}`.includes("maitre")
        //   }
        //   if(this.selectValue[2] === personnes){
        //     console.log('Personnes detecté')
        //     return `${titre}`.includes(personnes)
        //   } 
          
        //   if(this.selectValue[3] === tempsPreparation){
        //     console.log('tempsPreparation detecté')
        //     return `${titre}`.includes(tempsPreparation)
        //   } 

        //   return `${titre}`.includes(searchVal)
        // }
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
            //renvoi -> modal d'accord 
            // --> suppression
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
