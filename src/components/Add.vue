<template>
    <div class="container centered">
      <h1>Page d'ajout de nouvelles recettes extraordinairement G33k</h1>
      <hr>
      <Form @send="addRecipe"></Form>
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

        }
    }, 
    methods: {
        addRecipe(recipeToAdd){        
            userService.addRecipe(recipeToAdd).then((res) =>{
                console.log(res)
                // this.$toasted.success("Un nouveau collaborateur a été ajouté !")
                alert("Felicitation, une nouvelle recette est ajoutée !")
                this.$router.replace('/list');
            })
            // .catch(({message}) => this.$toasted.error(message));
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
