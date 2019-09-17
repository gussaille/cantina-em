<template>
    <div class="container centered">
      <h1>Formulaire de modification de recette</h1>
      <hr>
      <Form v-if="recipe" :id="recipe.id" :recipe="recipe" @send="update"></Form>
    </div>
</template>

<script>

import Form from "./Form.vue"
import recipeService from "../services/recipeService"

export default {
    name: 'Edit',
    components : {
      Form
    },
    data: function() {
        return{
            recipe: null
        }
    }, 
    created : function(){
        recipeService
        .fetchOne(this.$route.params.id)
        .then(recipe => { 
            this.recipe = recipe;
        })
        .catch(() => {
            this.$router.replace('/');
        });
    },

    methods: {
        update(recipe){
            console.log(recipe)
            recipeService.updateRecipe(recipe)
            .then(()=> {
                this.$toasted.show("La recette a été modifiée !", { 
                    theme: "bubble", 
                    position: "top-center", 
                    duration : 3000
                });                 
                this.$router.replace('/list');
            })
            .catch((error) => {
                console.log(recipe)
                this.$toasted.error(error.message)          
            })
        }
    }
}
</script>

<style>

</style>
