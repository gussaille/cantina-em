<template>
    <div class="container centered">
      <h1>Page d'ajout de nouvelles recettes extraordinairement G33k</h1>
      <hr>
      <!-- <Form @send="addUser"></Form> -->
    </div>
</template>

<script>

// import Form from "./Form.vue"
// import userService from "../services/userService"

export default {
    name: 'Add',
    components : {
    //   Form
    },
    data: function() {
        return{

        }
    }, 
    methods: {
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
h1{
    color:white;
}

</style>
