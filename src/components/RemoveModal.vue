<template>  
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-body">
            <slot name="body">
                Êtes-vous sûr de vouloir supprimer cette recette ?
            </slot>
          </div>

            <div class="button-block">
                <div class="button-modal">
                    <button id="btn-remove" class="button-modal--remove" @click="$emit('confirm')">Supprimer</button>
                    <button id="btn-save" class="button-modal--save" @click="$emit('close')">Annuler</button>
                </div>
            </div>
        </div>
      </div>
    </div>
</transition>

</template>

<script>
    export default {
        name: 'RemoveModal',
        data : function(){
            return {
                showModal : false,
            }
        },
        methods: {
          
        }
    }
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}


.button-block{
    width:60%;
    margin: 0 auto;

    .button-modal{
        display: flex;
        justify-content: space-around;
        padding:10px;
        
        &--remove, &--save{
                border-radius: 4px;
            background-color:darkgrey;
            color:white;
            outline:none;
            padding:10px;
            border:1px solid darkgrey;
        }

        &--save{
            background-color: transparent;
            color:darkgrey;
        }
    }
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

</style>