<template>
  <div class="recipe-list">
      <RecipeCard v-for="recipe in recipesList" :key="recipe.id" :recipe="recipe"/>
  </div>
</template>

<script>
import RecipeCard from  './RecipeCard'
import userService from "../services/userService"

export default {
  name: 'List',
  components: {RecipeCard},
  props: {},
  data : function(){
    return{
        recipesList : null,
        searchValue: "",
        selectValue: "name"
    }
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

.recipe-list{
  width:100%;
  max-width: 1480px;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: space-around;
}
</style>
