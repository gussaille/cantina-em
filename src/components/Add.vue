<template>
    <div class="container centered">
      <h1>Page d'ajout de nouvelles recettes extraordinairement G33k</h1>
      <hr>
      <Form :recipe="recipe" :id="recipe.id" @send="addRecipe"></Form>
    </div>
</template>

<script>

import Form from "./Form.vue"
import userService from "../services/userService"

export default {
    name: 'Add',
    components : {
      Form
    },
    data: function() {
        return{
            recipe: {     
                id: null,
                titre: "",
                description: "",
                etapes: [''],  
                ingredients: [['','']],                 
                niveau: "", 
                personnes: "",
                tempsPreparation: "",
                photo: ""
            },
        }
    }, 
    methods: {
        addRecipe(recipeToAdd){        
            userService.addRecipe(recipeToAdd).then(() =>{
                this.$toasted.show("La recette a été ajoutée avec succès!", { 
                    theme: "bubble", 
                    position: "top-center", 
                    duration : 3000
                });                         
                this.$router.push({ path: '/list' })
            })
            .catch((error) => {
                this.$toasted.error(error.message)          
            }) 
        }
    }
}
</script>

<style>
.container{
    width: 90%;
    max-width:780px;
    margin: 0 auto;
}
h1{
    color:white;
    font-size:20px;
}

</style>
