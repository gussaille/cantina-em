<template>
    <div class="textarea-block">
        <textarea
            type="text" 
             v-model="etapes[index]"
            placeholder="Saisissez l'étape de préparation"></textarea>  
            <button title="Cliquer pour supprimer votre étape">
                <i @click.prevent="removeSteps" class="material-icons">delete</i>
            </button>
    </div>
</template>

<script>
export default {
    name: 'FormSteps',
    props: ['etapes', 'index'],
    data: function(){
        return{

        }
    },

    methods:{  
        removeSteps: function(){
            this.$toasted.show("L'étape a été supprimée"); 
            this.etapes.splice(this.index, 1);
        },
    }
}
</script>

<style scoped lang="scss">
.textarea-block{
        min-height:40px;
        display:flex;
        align-items: center;
        
        textarea{
            min-height:50px;
            margin:5px;
        }
    }
</style>