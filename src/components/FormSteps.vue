<template>
    <div class="textarea-block">
        <textarea
            type="text" 
             v-model="etapes"
            @blur="sendSteps"
            placeholder="Saisissez l'étape de préparation"></textarea>        
        <button @click.prevent="removeField">x</button>
    </div>
</template>

<script>
export default {
    name: 'FormSteps',
    props: {
        recipe: {
            type: Object,
        }
    },
    data: function(){
        return{
            etapes: ''
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
          width:89%;

          .textarea-block{
            min-height:40px;
            display:flex;
            align-items: center;
          }
          margin:5px 0;
          @media screen and(min-width:480px){
              padding-top: 28px;
          }
        }
</style>