<template>
  <div class="recipe-list">
      <RecipeCard/>
  </div>
</template>

<script>
import RecipeCard from  './RecipeCard'
import userService from "../services/userService"

export default {
  name: 'List',
  components: {RecipeCard},
  props: {

  },
  created(){
      userService
      .fetchAll()
      .then(recipesList => {
          console.log(recipesList);
          this.recipesList = recipesList;
      });
  },
  methods :{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
