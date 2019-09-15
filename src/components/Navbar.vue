<template>
    <nav class="nav">
        <div class="nav-container">
            <router-link class="nav-container__link--logo" to="/">
                <img src="/img/logoCantina.png" alt="Logo Cantina">
            </router-link>
            <div class="nav-container__block">
                <router-link class="nav-container__link" to="/">  <i class="material-icons">home</i> Accueil</router-link>
                <router-link class="nav-container__link" to="/list">Liste de recettes</router-link>
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
        width:50px;
        margin-left:10px;
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
        transform: scale(1);
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
            background-color: black;
            transform: scale(1.05);
            color: rgba(81, 203, 238, 0.8);
        }

        &:last-of-type{
            @media screen and(max-width:480px){
                margin: unset;
            }
        }
        &:active{
            transition: none;
            color: rgba(81, 203, 238, 0.8);
            background-color: rgb(41, 40, 40);

        }
        &.router-link-exact-active {
            @media screen and(max-width:600px){
                width: 100%;
            }
            color: rgba(81, 203, 238, 0.8);
            background-color: #2C2C2C;
            text-shadow:0 0 10px rgba(81, 203, 238, 1);
        }
    }
}

@keyframes slideDown{
    from{
        transform: translateY(-100%);
    }
    to{
        transform: translateY(0);
    }
}
</style>