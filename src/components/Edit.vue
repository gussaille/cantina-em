<template>
    <div class="container centered">
      <h1>Formulaire de modification de recette Geek</h1>
      <hr>
      <Form v-if="recipe" :recipe="recipe" @send="update(recipe)"></Form>
    </div>
</template>

<script>

import Form from "./Form.vue"
import userService from "../services/userService"

export default {
    name: 'Edit',
    components : {
      Form
    },
    data: function() {
        return{
            recipe:null
        }
    }, 
    created : function(){
        userService
        .fetchOne(this.$route.params.id)
        .then(recipe => { 
            this.recipe = recipe;
        })
        .catch(({message}) => {
            this.$router.replace('/');
        });
    },
    methods: {
        update(recipeToUpdate){
            console.log(recipeToUpdate)
            userService.updateRecipe(recipeToUpdate)
            .then(()=> {
                alert('Recette mise à jour')
                // this.$router.replace('/list');
            })
            .catch(({message}) => {
                console.log(recipeToUpdate)
                alert("Erreur try again");
            })
        }
    }
}
</script>

<style>

</style>
