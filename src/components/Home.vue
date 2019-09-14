<template>
    <div class="home">    
        <div class="container">
           
           <div class="banner">
                <img class="banner__illustration" src="/img/background-cantina.jpg" alt="Bannière Cantina">
                <div class="description">
                    <h1 class="description__title"> La Cantina </h1>
                    <p class="description__text">Les Geeks ont du Goût</p>
                </div>
            </div>

        </div>
     


  </div>
</template>

<script>

import userService from "../services/userService"

export default {
  name: 'Home',
  components: {},
    data : function(){
        return{
        
        }
    },
    created(){
      userService
      .fetchAll()
      .then(recipesList => {
          this.recipesList = recipesList;
      });
  },
  computed: {

  },
  
  methods :{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
    padding: 20px 0;
    .container{
        width: 75%;
        max-width: 1200px;
        border: 3px solid #FBE50B;
        margin:0 auto;

        .banner{
            min-height:400px;
            position:relative;
            &__illustration{
                width:100%;
            }
            .description{
                width:80%;
                max-width:300px;
                padding:20px;
                background-color: rgba(254,254,254, 0.5);
                position:absolute;
                top:25%;
                left:50%;
                transform: translate(-50%, 20%);
                animation: fadeIn 1.5s ease-in;
                &__title{
                    font-family:starJedi;
                    font-size: 36px;
                    color:#FBE50B; 
                    letter-spacing: 2px;                   
                    text-shadow: 2px 4px 5px #000000;
                    animation: fadeIn 1.5s ease-in;
                }
                &__text{
                    font-size:22px;
                    color: white;
                    animation: fadeIn 1.5s ease-in;
                    text-shadow: 2px 4px 5px #000000;
                }
            }
            // background-size:cover;
            // background-position:top;
            // background-repeat:no-repeat;
            // background: url('/img/background-cantina.jpg');
        }
    }
}

</style>
