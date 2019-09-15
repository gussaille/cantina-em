<template>
    <div class="ingredients-bloc">
        <div> 
            <input type="number" placeholder="Quantité" v-model="ingredients[0]"/>
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
            <input placeholder="Ingrédient" v-model="ingredients[1]"/>
        </div>
        <button  @click="toggle()" >
            <i title="Cliquer pour valider votre ingrédient" @click.prevent="sendIngredients" v-if="isValid" class="material-icons">check</i>
            <i title="Cliquer pour supprimer votre ingrédient" @click.prevent="removeIngredients" v-else class="material-icons">delete</i>
        </button>      
        <!-- <button @click.prevent="removeIngredient" title="Cliquer pour supprimer votre ingrédient"><i class="material-icons">delete</i></button>       -->
    </div>
</template>

<script>
export default {
    name: 'FormIngredients',
    props:[ 'recipe'],
    data: function(){
        return{
            ingredients:[''],
            mesure:'',
            isValid: true 
        }
    },

    // le problème, sur add pas besoin de récupérer la prop ingredient car on renvoie la donnée dans le composant parent mais pour edit on a besoin de récupérer la prop pour la placer dans les champs input
    //Faire une condition si Add ou Edit

    methods: {
        sendIngredients: function () {
            this.$toasted.show("L'ingrédient a été enregistrée"); 
            this.$emit('send', this.ingredients);
        },
        removeIngredients: function(){
            this.ingredients.splice(this.ingredients[0]);
        },
        toggle: function(){
            this.isValid = !this.isValid
        }
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