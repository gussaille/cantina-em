<template>
    <div class="home">    
        <div class="container">    
           <div class="banner" @click="redirectList">
                <div class="description">
                    <h1 class="description__title"> La Cantina </h1>
                    <p class="description__text">Les Geeks ont du Goût</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
    data : function(){
        return{
        
        }
    },
    methods:{
        redirectList(){
            this.$router.push("List");
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
    min-height: 75vh;
    padding: 20px 0;

    .container{
        width: 60%;

        @media screen and(max-width:480px){
            width:80%;
        }

        max-width: 1200px;
        border: 3px solid #FBE50B;
        margin:0 auto;

        .banner{
            cursor: pointer;
            min-height:400px;
            position:relative;
            background-image: url('/img/cantina-mobile.jpg');
            background-size:cover;
            background-repeat:no-repeat;
            background-position: bottom;
            
            @media screen and(min-width:800px){
                background-image: url('/img/background-cantina.jpg');
                background-size:cover;
                background-repeat:no-repeat;
            }

            &__illustration{
                width:100%;
                
                @media screen and(min-width:800px){
                    min-height:400px;
                }
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

                @media screen and(max-width:480px){
                    top:10%;
                }

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
        }
    }
}

</style>
