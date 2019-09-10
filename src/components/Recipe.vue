<template>
    <article class="recipe">
        <div class="container">
            <section>
                <img :src="recipe.photo || DEFAULT_PICTURE" class="recipe__banner" :alt="recipe.titre">
                <div class="recipes__details details">
                    <h1 class="recipe__title">{{recipe.titre}}</h1>

                    <div class="details__preparation">
                        <p class="details__preparation__level">Difficulté : {{ recipe.niveau }}</p>
                        <p class="details__preparation__time">Préparation : {{ CONVERT_TIME }} </p>
                        
                        <p class="details__preparation__guest" v-if="recipe.personnes > 1"> Pour {{ recipe.personnes }} personnes
                        </p>

                        <p class="details__preparation__guest" v-else> Pour {{ recipe.personnes }} personne
                        </p>
                    </div>
                </div>
            </section>  

            <section>

                <div class="ingredient">
                    <h2>Pour cette recette, vous aurez besoin de : </h2>
                    <li v-for="(ing, index) in recipe.ingredients" :key="index">{{ recipe.ingredients[index] }}</li>
                </div>

            </section>
      <!-- <div class="btn-custom">
            <button class="btn-custom--edit" @click="edit">Modifier</button> 
            <button class="btn-custom--remove" @click="remove">Supprimer</button> 
        </div> -->
        </div>
     </article>
</template>

<script>

import userService from '../services/userService'

export default {
    name: 'Recipe',
    data() {
        return {
            recipe: {}
        }
    },
    created(){
        console.log('yes');
        userService
            .fetchOne(this.$route.params.id)
            .then(recipe => {
                this.recipe = recipe;
                console.log(recipe);
            })
            .catch(({message}) => {
                this.message.error(message);
                this.$router.replace('/');
            });
    },
    computed: {
        DEFAULT_PICTURE: function() {
            return "https://munchies-images.vice.com/wp_upload/blue-star-wars-cookies.jpg?crop=0.9991111111111111xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*";
        },
        CONVERT_TIME: function(n) {
            n = this.recipe.tempsPreparation;
            var num = n;
            var hours = (num / 60);
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours) * 60;
            var rminutes = Math.round(minutes);
            if(rhours >= 1){
                return rhours + "h" + rminutes + "mn" ;
            }
            return rminutes + "mn";
        }
    },
    methods: {
        edit(){

        },
        remove(){
                
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.recipe{
    min-height:100vh;
    .container{
        section:first-child{
            display:flex;
            flex-direction:column;
            align-items: center;
            width:80%;
            margin:0 auto;

            @media screen and(min-width:480px){
                align-items:center;
                flex-direction:row;
                justify-content:space-around;
                width:60%;
                max-width:1680px;
                margin: 50px auto;
            }
        }
    }
    width:100%;
    &__banner {
        display: block;
        border-radius: 60px;
        width:100%;
        height:260px;
        margin:0 auto;
        @media screen and(min-width:480px){
            width:40%;
            height:auto;
        }
    }

    &__title{
      color:white;
    }

    .details {
        color: white;

        @media screen and(max-width:480px){
            display:flex;
            align-items:center;
        }

        &__illustration {
            display: block;
            width:150px;
            height:auto;

            @media screen and(min-width:480px){
            width:100%;
            height:200px;
            }
        }

        &__preparation{
            padding-left:10px;

            &__level{
                text-transform:capitalize;
                color:white;
            }

            .btn-custom{
                display:flex;
                justify-content: center;
                &--edit{
                    margin-right:4px;
                }
                &--remove{
                    background: red;
                }
            }
        }
    }
}

</style>
