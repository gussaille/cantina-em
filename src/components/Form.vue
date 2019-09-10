<template>
  <form class="recipe-form" @submit.prevent="onSubmit">
    <div class="recipe-form__group">
      <label for="title">Titre :</label>
      <input
        type="text"
        v-model="$v.recipe.titre.$model"
        @blur="$v.recipe.titre.$touch()"
        id="title"
        placeholder="Titre de la recette"
      >
      <span v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">Veuillez renseigner un titre à cette recette</span>
    </div>

    <div class="recipe-form__group">
      <label for="description">Description :</label>
      <textarea
        type="text"
        v-model="$v.recipe.description.$model"
        @blur="$v.recipe.description.$touch()"
        id="description"
        placeholder="Veuillez saisir la description de la recette"
      ></textarea>
      <span v-if="$v.recipe.description.$dirty && !$v.recipe.description.required">Veuillez renseigner une description pour cette recette</span>
    </div>

    <div class="recipe-form__group">
        <label for="level">Difficulté :</label>
        <select id="level" v-model="$v.recipe.niveau.$model">
            <option value="">Choisir un niveau de difficulté</option>
            <option value="padawan">Padawan</option>
            <option value="jedi">Jedi</option>
            <option value="maitre">Maître</option> 
        </select>
        <span v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.required">Veuillez choisir un niveau de difficulté</span>
    </div>

    <div class="recipe-form__group">
      <label for="time">Temps de préparation :</label>
      <input
        type="number"
        v-model="$v.recipe.tempsPreparation.$model"
        @blur="$v.recipe.tempsPrepartion.$touch()"
        id="time"
        placeholder="Saisissez le temps de préparation en minutes"
      >
      <span v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.required">Veuillez indiquer le temps de préparation de la recette en minute</span>
    </div>

    <div class="recipe-form__group">
      <label for="guest">Nombre de personne :</label>
      <input
        type="number"
        v-model="$v.recipe.personnes.$model"
        @blur="$v.recipe.personnes.$touch()"
        id="guest"
        placeholder="Saisissez le nombre de personnes">
      <span v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.required">Veuillez saisir un nombre de personne</span>
    </div>

    <div class="recipe-form__group">
      <label for="steps">Étapes :</label>
      <textarea
        type="text"
        v-model="$v.recipe.etapes.$model"
        @blur="$v.recipe.etapes.$touch()"
        id="steps"
        placeholder="Saisissez les étapes de la préparation"></textarea>
      <span v-if="$v.recipe.etapes.$dirty && !$v.recipe.etapes.required">
          Veuillez saisir les différentes étapes de la recette
        </span>
    </div>

    <div class="recipe-form__group">
      <label for="photo">Photo :</label>
      <input type="url" v-model.lazy="$v.recipe.photo.$model" id="photo" placeholder="http://">
      <span v-if="!$v.recipe.photo.url">L'URL est invalide</span>
    </div>
    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
    </div>
  </form>
</template>

<script>

import { required, alpha, url } from "vuelidate/lib/validators";

export default {
    name: "Form",
    props: {
        recipe: {
            type: Object,
            default: function() {
                return {
                    id: null,
                    titre: "",
                    description: "",
                    etapes: "",
                    ingredients: "",
                    niveau: "",
                    personnes: "",
                    tempsPreparation: "",
                    photo: ""
                };
            }
        }
    },
    validations: {
        recipe: {
            titre: { required },
            description: { required, alpha },
            etapes: { required, alpha },
            ingredients: { required },
            niveau: { required },
            personnes: { required },
            tempsPreparation: { required, alpha },
            photo: { url }
        }
    },
    methods: {
        onSubmit: function() {
            if(this.$v.recipe.$invalid) 
            return this.$v.recipe.$touch();
            this.$emit('send', this.recipe);
        }
    },
}
</script>

<style scoped lang="scss">

.recipe-form {
    color:white;
    width: 90%;
    max-width:540px;
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
            text-align:left;
            text-transform: uppercase;
        }
        
        input, select, textarea{
            width:90%;
            max-width:400px;
            padding:12px;
        }
        select{
            width:60%;
        }
        
        span{
            color:red;
            font-size:12px;
        }
    }
}

</style>