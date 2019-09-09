<template>
    <div class="container centered">
      <h1>Formulaire de modification de recette Geek</h1>
      <hr>
      <!-- <Form @send="addUser"></Form> -->
    </div>
</template>

<script>

// import Form from "./Form.vue"
// import userService from "../services/userService"

export default {
    name: 'Edit',
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

</style>
