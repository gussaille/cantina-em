<template>
    <div class="ingredients-bloc">
        <div> 
            <input type="number" placeholder="Quantité" v-model="ingredient[0]"/>
        </div>
        
        <div>
        <select v-model="mesure">
                <option value ="" select="selected" disabled>Unité</option>
                <option value="l">l</option>
                <option value="cl">cl</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="mg">mg</option> 
            </select>
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
            mesure:'',
        }
    },

    // le problème, sur add pas besoin de récupérer la prop ingredient car on renvoie la donnée dans le composant parent mais pour edit on a besoin de récupérer la prop pour la placer dans les champs input
    //Faire une condition si Add ou Edit

    methods: {
        sendIngredients: function () {
            this.$toasted.show("L'ingrédient a été enregistré"); 
            // this.$emit('send', { ingredient: this.ingredient, index: this.index});
        },
        removeIngredients: function(){
            this.$toasted.show("L'ingrédient a été supprimé"); 
            this.ingredients.splice(this.index, 1); // Actuellement ne supprime pas le bon objet
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
            width:100px;
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