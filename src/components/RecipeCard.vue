<template>
  <article class="recipe-card">
    <h1>{{recipe.titre}}</h1>
    <div class="recipe-"></div>
  </article>
</template>

<script>

export default {
  name: 'RecipeCard',
  props: {
     recipe: {
      type: Object,
      required: true
    }
  }, 
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .recipe-card{
    @media screen and(min-width:768px) and (orientation:landscape){
      width:33%;
      min-width:250px;
      max-width:320px;
    }
    width:100%;
    border: 2px solid black;
    min-height:250px;
    margin-top:20px;
  }

</style>
