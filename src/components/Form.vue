<template>
  <form class="recipe-form" @submit.prevent="onSubmit">
    <div class="recipe-form__group">
      <label for="title">Titre*</label>
      <input
        type="text"
        v-model="$v.recipe.titre.$model"
        @blur="$v.recipe.titre.$touch()"
        id="title"
        placeholder="Saisissez le titre de la recette"
      >
      <span v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">
        Veuillez renseigner un titre à cette recette</span>
    </div>

    <div class="recipe-form__group">
      <label for="description">Description*</label>
      <textarea
        type="text"
        v-model="$v.recipe.description.$model"
        @blur="$v.recipe.description.$touch()"
        id="description"
        placeholder="Saisissez une description"
      ></textarea>
      <span v-if="$v.recipe.description.$dirty && !$v.recipe.description.required">
        Veuillez renseigner une description pour cette recette</span>
    </div>

    <div class="recipe-form__group">
        <label for="level">Difficulté*</label>
        <select id="level" v-model="$v.recipe.niveau.$model">
            <option value="">Choisir un niveau de difficulté</option>
            <option value="padawan">Padawan</option>
            <option value="jedi">Jedi</option>
            <option value="maitre">Maître</option> 
        </select>
        <span v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.required">
          Veuillez choisir un niveau de difficulté</span>
    </div>


    <div class="recipe-form__group recipe-form__group--ingredient">
        <label for="ingredients">Liste des ingrédients*</label>

        <div v-for="(value, index) in recipe.ingredients" :key="index">

          <!-- Composant FormIngredients -->
          <FormIngredients :index="index" :ingredients="recipe.ingredients" @send="getIngredients"/>
          <!-- -->
        </div>   
        <span v-if="$v.recipe.ingredients.$dirty && !$v.recipe.ingredients.required">
          Veuillez renseigner un ingrédient</span>

      <button class="addField" @click.prevent="addField" title="Cliquer pour ajouter un ingrédient"><i class="material-icons">add</i></button>
    </div>

    <div class="recipe-form__group">
      <label for="time">Temps de préparation*</label>
      <input
        type="number"
        v-model.number="$v.recipe.tempsPreparation.$model"
        @blur="$v.recipe.tempsPreparation.$touch()"
        id="time"
        placeholder="Saisissez le temps de préparation en minutes">
      <span v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.required">
        Veuillez indiquer un temps de préparation (en minute)</span>
      <span v-else-if="recipe.tempsPreparation <= 0 && $v.recipe.tempsPreparation.$dirty">Le temps de préparation doit être supérieur à 0 minute </span>
    </div>

    <div class="recipe-form__group">
      <label for="guest">Nombre de personnes*</label>
      <input
        type="number" 
        v-model.number="$v.recipe.personnes.$model"
        @blur="$v.recipe.personnes.$touch()"
        id="guest"
        placeholder="Saisissez le nombre de personnes">
      <span v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.required">
        Veuillez saisir un nombre de personne</span>
      <span v-else-if="recipe.personnes <= 0 && $v.recipe.personnes.$dirty"> Veuillez saisir au moins une personne</span>
    </div>
    

    <div class="recipe-form__group">
      <label for="step">Etapes de préparation*</label>
      
      <div v-for="(value, index) in recipe.etapes" :key="index">
        <FormSteps :index="index" :etapes="recipe.etapes"/>
      </div>

      <button class="addField" @click.prevent="addTextArea()" title="Cliquer pour ajouter une étape"><i class="material-icons">add</i></button>
      <span v-if="recipe.etapes < 1 && !$v.recipe.etapes.required">
          Veuillez saisir les différentes étapes de la recette
      </span>
    </div> 

    <div class="recipe-form__group">
      <label for="photo">Photo</label>
      <input type="url" v-model.lazy="$v.recipe.photo.$model" id="photo" placeholder="http://">
    </div>
    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
    </div>
    <small>* Champs Obligatoires</small>

  </form>
</template>

<script>

import FormSteps from "./FormSteps";
import FormIngredients from "./FormIngredients";
import { required, url, integer } from "vuelidate/lib/validators";

export default {
    name: "Form",
    components: { FormIngredients, FormSteps },
    props : ['recipe'],
    data: function() {
      return{}
    }, 
    validations: {
        recipe: {
            titre: { required },
            description: { required },
            etapes: { required },
            ingredients: { required },
            niveau: { required },
            personnes: { required, integer },
            tempsPreparation: { required, integer },
            photo:{url}
        }
    },
    methods: {
      onSubmit() {
        if(this.$v.recipe.$invalid) 
          return this.$v.recipe.$touch();
          this.$emit('send', this.recipe);
      },

      getIngredients: function(data) {
        this.recipe.ingredients[data.index] = data.ingredient;
      },
      
      getSteps: function(data){
        for(let i = 1; i <= this.recipe.ingredients; i++){
          this.recipe.ingredients[i] = data; 
        }
      },

      addTextArea: function(){
        this.recipe.etapes.push([''])
      },
      
      addField: function(){
        this.recipe.ingredients.push(['',''])
      }
  }
}
</script>

<style lang="scss">

.recipe-form {
    color:white;
    width: 90%;
    max-width:540px;
    padding:10px;
    margin:0 auto;
    display:flex;
    flex-direction: column;
    
    &__group{
      width:80%;
      margin: 0 auto;
      display:flex;
      flex-direction: column;
      margin: 10px auto;
      
      label{
        margin:4px auto;
          text-transform: uppercase;
      }
      
      input, select, textarea{
          width:90%;
          max-width:400px;
          padding:12px;
          height:30px;
          margin:0 auto;
          font-family: Arial;
          outline:none;
          border:none;

          &::placeholder{
            color:black;
          }
      }

      select{
        height:50px;
          width:60%;
      }
      
      span{
          margin-top:5px;
          color:red;
          font-size:12px;
      }

      .addField{
        width:50px;
        margin:10px 0;
      }
    }

    .actions{
        button{
          width: 250px; 
          cursor: pointer;
          padding:12px;
          margin: 20px auto;
          outline: none;
          font-size:20px;
          color:black;
          text-transform: uppercase;
          border: none;

          &:hover{
              background:lightgrey;
          }
        }
    }
}

</style>