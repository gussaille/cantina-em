<template>
    <div class="textarea-block">
        <textarea
            type="text" 
             v-model="etapes[index]"
            placeholder="Saisissez l'étape de préparation"></textarea>  
            <button  @click="toggle()" title="Cliquer pour valider votre ingrédient">
                <i @click.prevent="sendSteps" v-if="isValid" class="material-icons">check</i>
                <i @click.prevent="removeSteps" v-else class="material-icons">delete</i>
            </button>
    </div>
</template>

<script>
export default {
    name: 'FormSteps',
    props: ['etapes', 'index'],
    data: function(){
        return{
            // mutateEtapes : this.etapes
            isValid : true
        }
    },

    methods:{
        sendSteps: function () {
            this.$emit('send', this.etapes);
        },
        removeSteps: function(){
            this.etapes.splice(this.etape);
        },
        toggle: function(){
            this.isValid = !this.isValid
        }
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