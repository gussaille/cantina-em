<template>
  <div class="home">    


  </div>
</template>

<script>

import userService from "../services/userService"

export default {
  name: 'Home',
  components: {},
    data : function(){
    return{
        
    }
  },
  created(){
      userService
      .fetchAll()
      .then(recipesList => {
          this.recipesList = recipesList;
      });
  },
  computed: {

  },
  
  methods :{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
