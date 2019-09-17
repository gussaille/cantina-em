<template>
    <nav class="nav">
        <div class="nav-container">
            <router-link class="nav-container__link--logo" to="/">
                <img src="/img/logoCantina.png" alt="Logo Cantina">
            </router-link>
            <div class="nav-container__block">
                <router-link class="nav-container__link" to="/"><i class="material-icons">home</i> Accueil</router-link>
                <router-link class="nav-container__link" to="/list">Liste des recettes</router-link>
                <router-link class="nav-container__link" to="/add">Ajouter une nouvelles recette</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.nav {
    animation: slideDown 0.8s ease-out;
    background-color: black;
    overflow: hidden;
}

.nav-container {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    
    @media screen and(max-width: 480px){
        flex-flow: column wrap;
        margin: 0 auto;
    }

    img{
        width:70px;
        transition: 0.6s;
        
        @media screen and(min-width:480px){
            margin-left:40px;
        }
        
        &:hover{
            transform: scale(1.05);
            transition: 0.6s;
        }
    }

    &__block{
        @media screen and(max-width:600px){
            width:100%;
            display:flex;
            flex-direction: column;
            align-items:center;
        }
    }

    &__link, &__link:visited{
        font-weight: 400;
        color: white;
        text-decoration: none;
        display: inline-block;
        transition: all 150ms;
        padding: 20px;
        line-height: 2.5;

        @media screen and(max-width:480px){
            padding: 0.75em 0;
            display:flex;
            align-items:center;
            justify-content:center;
        }

        i.material-icons{
            position:relative;
            top:5px;
           
            @media screen and(max-width:480px){
                top:0;
            }
        }

        &:hover{
            background-color: rgb(41, 40, 40);
        }

        &:last-of-type{
            @media screen and(max-width:480px){
                margin: unset;
            }
        }

        &:active{
            transition: none;
        }

        &.router-link-exact-active {
            border-bottom :1px solid white;
            
            @media screen and(max-width:600px){
                width: 100%;
            }
        }
    }
}

@keyframes slideDown{
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}
</style>