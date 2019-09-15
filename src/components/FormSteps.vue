<template>
    <div class="textarea-block">
        <textarea
            type="text" 
             v-model="etapes[index]"
            placeholder="Saisissez l'étape de préparation"></textarea>  
            <button @click.prevent="sendSteps"><i class="material-icons">check</i></button>      
        <button @click.prevent="removeField">x</button>
    </div>
</template>

<script>
export default {
    name: 'FormSteps',
    props: ['etapes', 'index'],
    data: function(){
        return{
            // mutateEtapes : this.etapes
        }
    },

    methods:{
        sendSteps: function () {
            this.$emit('send', this.etapes);
        },
        // removeField(){
        //     this.etapes.shift(1)
        // }
    }
}
</script>

<style scoped lang="scss">
 
    textarea{
        min-height:50px;
        margin:5px 0;

        .textarea-block{
            min-height:40px;
            display:flex;
            align-items: center;
        }
        @media screen and(min-width:480px){
              padding-top: 28px;
        }
    }
</style>