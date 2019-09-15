<template>
    <article class="recipe">
        <div class="container">

            <section>
                <img :src="recipe.photo || DEFAULT_PICTURE" class="recipe__banner" :alt="recipe.titre">

                <div class="recipe__details details">
                    <h1 class="details__title">{{recipe.titre}}</h1>
                     <p class="details__preparation__description">{{recipe.description}}</p>

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
                <div class="recipe__ingredients">
                     <div class="recipe__header">
                        <h3 class="recipe__subtitle">ingrédients</h3>
                    </div>
                    <ul>
                    <li class="recipe__text" v-for="(ingredient, index) in recipe.ingredients" :key="index">
                        {{ recipe.ingredients[index].join(' ') }}</li>
                    </ul>
                </div>

                <hr>

                <div class="recipe__cooking">
                    <div class="recipe__header">
                          <img src="/img/lightsaber.png" class="recipe__header__illustration" alt="Sabre Laser">
                        <h3 class="recipe__subtitle">Préparation</h3>
                      
                    </div>
                    <ul>
                    <li class="recipe__text" v-for="(etape, step) in recipe.etapes" :key="step">
                        {{ recipe.etapes[step] }}</li>
                    </ul>
                </div>
            </section>
            <div class="btn-custom">
                <router-link :to="`/recipe/edit/${recipe.id}`" class="btn btn-custom--edit">Modifier</router-link>
                <button class="btn btn-custom--remove" @click="remove">Supprimer</button> 
            </div>
        </div>
     </article>
</template>

<script>

import userService from '../services/userService'

export default {
    name: 'Recipe',
    data() {
        return {
            recipe: {
                ingredients:{}
            }
        }
    },
    created(){
        userService
        .fetchOne(this.$route.params.id)
        .then(recipe => {
            this.recipe = recipe;
            console.log(recipe);
        })
        .catch(() => {
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
            userService.removeRecipe(this.recipe)
            .then(()=> {
                this.recipe.$remove;
                 alert("La recette a été supprimée") 
                 this.$router.push({name:'List'});
            })
            .catch(()=> {
                alert('Erreur')
            })      
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.recipe{
    padding:20px 0;
    color:white;
    min-height:100vh;

    &__subtitle{
        text-decoration: underline;
        font-size:20px;
        text-align:left;
    }

    &__text{
        margin: 10px auto;
    }

    .container{
        box-shadow: 0px 2px 40px 4px rgba(81, 203, 238, 0.8);
        max-width:720px;
        @media screen and(max-width:480px){
            width:90%;
            margin: 0 auto;
        }
        margin: 0 auto;
        section:first-child{
            display:flex;
            flex-direction:column;
            align-items: center;
            width:80%;
            margin:0 auto;
            padding-top:20px;

            @media screen and(min-width:480px){
                align-items:center;
                flex-direction:row;
                justify-content:space-around;
                width:75%;
                max-width:1680px;
                margin: 50px auto;
            }
            .recipe__banner {
                display: block;
                border-radius: 25px 0;
                border: 2px solid #FBE50B;               
                width:70%;
                margin:20px auto;

                @media screen and(min-width:480px){
                    width:50%;
                    margin: unset;
                    max-width:200px;
                    height:auto;
                }   
            }

            .details {
                color: white;

                @media screen and(max-width:480px){
                    display:flex;
                    align-items:center;
                    flex-direction: column;
                }

                &__preparation{
                    &__description{
                        font-style: italic;
                        font-size:14px;
                    }

                    &__level{
                        text-transform:capitalize;
                        color:white;
                    }
                }
            }  
        }
        section:last-of-type{                      
            width: 90%;
            margin: 0 auto;
            text-align: left;

            .recipe{
                padding-left: 10px;

                &__ingredients, 
                &__cooking {
                    margin: 10px auto;
                    padding-left: 15px;
                    text-align: left;
                    
                    .recipe__header{
                        display:flex;
                        &__illustration{
                            margin-right:15px;
                            width:50px;
                        }
                    }
                }
                &__cooking{
                    &__illustration{
                        float:left;
                        width:50px;
                    }
                    li{
                        list-style-type: decimal;
                    }
                }
            }
        }
    }
}

</style>
