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
    props:{
        
    },
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
                ingredients: [''],                 
                niveau: "", 
                personnes: "",
                tempsPreparation: "",
                photo: ""
            }
        }
    }, 
    methods: {
        addRecipe(recipeToAdd){        
            userService.addRecipe(recipeToAdd).then((res) =>{
                console.log(res)
                this.$router.push({ path: '/list' })
            })
            .catch(() => console.log("Erreur"));
        }
    }
}
</script>

<style>
h1{
    color:white;
    font-size:20px;
}

</style>
