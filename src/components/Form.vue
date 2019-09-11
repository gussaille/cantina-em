<template>
  <form class="recipe-form" @submit.prevent="onSubmit">
    <div class="recipe-form__group">
      <label for="title">Titre :</label>
      <input
        type="text"
        v-model="$v.recipe.titre.$model"
        @blur="$v.recipe.titre.$touch()"
        id="title"
        placeholder="Saisissez le titre de la recette"
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
        placeholder="Saisissez une description de la recette"
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

     <!-- <div class="recipe-form__group recipe-form__group--ingredient">
        <label for="ingredients">Liste des ingrédients :</label>
        <div class="ingredients-bloc" v-for="ingredient in ingredients" :id="ingredient.id" :key="ingredient.id">
          <div> 
            <input placeholder="Quantité">
          </div>

          <div>
            <select>
                <option value="">Mesure</option>
                <option value="l">l</option>
                <option value="cl">cl</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="mg">mg</option> 
            </select>
          </div>

          <div>
            <input placeholder="Ingrédient"  v-model="$v.recipe.ingredients.$model" >
          </div> 
      </div>
       <span v-if="$v.recipe.ingredients.$dirty && !$v.recipe.ingredients.required">Veuillez choisir au moins un ingrédient</span>
    </div> -->

    <div class="recipe-form__group">
      <label for="time">Temps de préparation :</label>
      <input
        type="number"
        v-model="$v.recipe.tempsPreparation.$model"
        @blur="$v.recipe.tempsPreparation.$touch()"
        id="time"
        placeholder="Saisissez le temps de préparation en minutes"
      >
      <span v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.required">Veuillez indiquer un temps de préparation en minute</span>
       <span v-if="!$v.recipe.tempsPreparation.integer">Veuillez indiquer un temps de préparation valide</span>
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
    
    <!-- work here -->
    <!-- <div class="recipe-form__group">
      <label for="step">Etapes de préparation</label>
      <div class="textarea-block" v-for="(step, index) in steps" :key="step.id"  :id="step.id">
        <textarea
          type="text" 
          :value="steps.value" 
          @blur="$v.recipe.etapes.$touch()" 
           placeholder="Saisissez l'étape de préparation"></textarea>          
          <button v-if="counterTextarea > 1" @click="steps.splice(index, 1)">x</button>
      </div>
      <button class="addField" @click.prevent="addField">+</button>
      <span v-if="$v.recipe.etapes.$dirty && !$v.recipe.etapes.required">
          Veuillez saisir les différentes étapes de la recette
      </span>
    </div> -->

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

import { required, integer, between, url } from "vuelidate/lib/validators";

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
                    ingredients : "",
                    niveau: "", 
                    personnes: "",
                    tempsPreparation: "",
                    photo: ""
                };
            }
        }
    },
     data: function() {
        return{
          counterTextarea : 1,
          counterIngredient : 1,
          steps: [{
            id: 'etapes1',
            label: 'Saisissez votre étape',
            value: '',
          }],
          ingredients: [{
            id: 'ingredient1',
            value: '',
          }],
        }
    }, 
    validations: {
        recipe: {
            titre: { 
              required
            },
            description: { required },
            etapes: { required },
            ingredients: { required },
            niveau: { required },
            personnes: { 
              required, 
              integer, 
              between: between(1, 1000)
            },
            tempsPreparation: { 
              required, 
              integer,
              between: between(1, 1000)
            },
            photo:{url}
        }
    },
    methods: {
        onSubmit() {
          console.log('Submit')
          if(this.$v.recipe.$invalid) 
              return this.$v.recipe.$touch()
              this.$emit('send', this.recipe)
        },
        // addField(){
        //   this.steps.push({
        //     id: `etapes${++this.counterTextarea}`,
        //     label: "Saisissez votre étape",
        //     value: '',
        //   });
        // },
        //  addField(){
        //   this.ingredients.push({
        //     id: `ingredient${++this.counterIngredient}`,
        //     label: "Saisissez votre étape",
        //     value: '',
        //   });
        // },
        // removeField(step){
        //   this.steps.$remove(step);
        // }
    }
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
            outline:none;
            border-radius:20px;
            border:none;
        }
        textarea{
          width:89%;
          .textarea-block{
            min-height:40px;
            display:flex;
            align-items: center;
          }
          margin:5px 0;
          @media screen and(min-width:480px){
              padding-top: 28px;
          }
        }
        select{
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
        &--ingredient{
          .ingredients-bloc{
            display:flex;
            align-items:center;
            @media screen and(max-width:480px){
              flex-direction:column;
              align-items:flex-start
            }

            input,select{
              width:100px;
              margin: 5px;

              @media screen and(max-width:480px){
                width: 220px;;
              }
          }    
        }
      }
    }
    .actions{
        button{
            width: 250px; 
            padding:12px;
            background: rgba(81, 203, 238, 0.8);
            margin: 20px auto;
            outline: none;
            font-size:20px;
            color:white;
            text-transform: uppercase;
            border: none;
            &:hover{
                box-shadow: 0 0 10px rgba(120, 204, 228, 0.6);
            }
        }
    }
}

</style>