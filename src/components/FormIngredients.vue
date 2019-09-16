<template>
    <div class="ingredients-bloc">
        <div> 
            <input type="text" placeholder="Quantité" v-model="ingredient[0]"/>
        </div>

        <div>
            <input placeholder="Ingrédient" v-model="ingredient[1]"/>
        </div>
        <button>
            <i title="Cliquer pour supprimer votre ingrédient" @click.prevent="removeIngredients"  class="material-icons">delete</i>
        </button>      
    </div>
</template>

<script>
export default {
    name: 'FormIngredients',
    props:[ 'recipe', 'ingredients', "index"],
    data: function(){
        return{
            ingredient: this.ingredients[this.index],
        }
    },

    methods: {
        removeIngredients: function(){
            this.$toasted.show("L'ingrédient a été supprimé"); 
            this.ingredients.splice(this.index, 1); 
        },
    },
}

</script>

<style scoped lang="scss">
    .ingredients-bloc{
        display:flex;
        align-items:center;
        justify-content: space-around;

        input, select{
            width:140px;
            margin: 5px;

            @media screen and(max-width:480px){
                width: 75px;
            }
            @media screen and(max-width:320px){
                width:60px;
            }
        } 
    }
</style>