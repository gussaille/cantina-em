<template>
    <div class="ingredients-bloc">
        <div> 
            <input placeholder="Quantité" v-model="ingredients[0]"/>
        </div>
        
        <div>
        <select v-model="mesure">
                <option value ="" select="selected" disabled>Mesure</option>
                <option value="l">l</option>
                <option value="cl">cl</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="mg">mg</option> 
            </select>
        </div>

        <div>
            <input placeholder="Ingrédient" v-model="ingredients[1]"         @blur="sendIngredients"/>
        </div>
     
    </div>
</template>

<script>
export default {
    name: 'FormIngredients',
    data: function(){
        return{
            mesure:'',
            ingredients:[]
        }
    },

    // le problème, sur add pas besoin de récupérer la prop ingredient car on renvoie la donnée dans le composant parent mais pour edit on a besoin de récupérer la prop pour la placer dans les champs input
    //Faire une condition si Add ou Edit

    methods: {
        sendIngredients: function () {
            this.$emit('send', this.ingredients);
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