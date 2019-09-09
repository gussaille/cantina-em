<template>
    <nav class="nav">
        <div class="nav-container">
            <router-link class="nav-container__link" to="/">Accueil</router-link>
            <router-link class="nav-container__link" to="/list">Liste des recettes</router-link>
            <router-link class="nav-container__link" to="/add">Ajouter une nouvelles recette</router-link>
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
    margin-bottom: 3em;
}

.nav-container {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    @media screen and(max-width: 480px){
        flex-flow: column wrap;
        margin: 0 auto;
    }

    &__link, &__link:visited{
        color: white;
        text-decoration: none;
        display: inline-block;
        transition: all 150ms;
        transform: scale(1);
        padding: 0.75em;
        @media screen and(max-width:480px){
            padding: 0.75em 0;
        }

        &:hover{
            background-color: black;
            transform: scale(1.05);
            color: rgba(81, 203, 238, 0.8);
        }
        &:last-of-type{
            margin-left: auto;
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
            @media screen and(max-width:480px){
                width: 100%;
            }
            color: rgba(81, 203, 238, 0.8);
            background-color: rgb(41, 40, 40);
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