<template>
    <div class="textarea-block">
        <textarea
            type="text" 
             v-model="mutateEtapes"
            @blur="sendSteps"
            placeholder="Saisissez l'étape de préparation"></textarea>        
        <button @click.prevent="removeField">x</button>
    </div>
</template>

<script>
export default {
    name: 'FormSteps',
    props: ['etapes'],
    data: function(){
        return{
            mutateEtapes : this.etapes
        }
    },

     // le problème, sur add pas besoin de récupérer la prop etapes car on renvoie la donnée dans le composant parent mais pour edit on a besoin de récupérer la prop pour la placer dans les champs input

    methods:{
        sendSteps: function () {
            this.$emit('send', this.mutateEtapes);
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