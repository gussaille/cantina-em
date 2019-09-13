<template>
    <div class="ingredients-bloc">
        <div> 
            <input placeholder="Quantité" v-model="ingredients[0]" @blur='sendIngredients'/>
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
            <input placeholder="Ingrédient" v-model="ingredients[1]">
        </div> 
        
    </div>
</template>

<script>
export default {
    name: 'FormIngredients',
    props: {
        recipe: {
            type: Object,
        }
    },
    data: function(){
        return{
            ingredients: [
            ],
            mesure: ''              
        }
    },
    methods: {
        sendIngredients: function () {
            this.$emit('send', this.ingredients);
        }
    }
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