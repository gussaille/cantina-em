<template>
    <div class="container centered">
      <h1>Formulaire de modification de recette Geek</h1>
      <hr>
      <Form v-if="recipe" :recipe="recipe" @send="update"></Form>
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
        update(recipeToEdit){
            userService.updateRecipe(recipeToEdit)
            .then(()=> {
                alert('Recette mise à jour')
                this.$router.replace('/list');
            })
            .catch(({message}) => {
                alert("Erreur try again");
            })
        }
     
        // addUser(userToAdd){        
        //     userService.addUser(userToAdd).then(res =>{
        //         this.$toasted.success("Un nouveau collaborateur a été ajouté !")
        //         this.$router.replace('/list');
        //     })
        //     .catch(({message}) => this.$toasted.error(message));
        // }
    }
}
</script>

<style>

</style>
