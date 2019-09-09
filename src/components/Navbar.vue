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
    background-color: #42b983;
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
        padding: 0.75em;
        transition: all 150ms;
        transform: scale(1);

        &:hover{
            background-color: #128953;
            transform: scale(1.05);
        }
        &:last-of-type{
            margin-left: auto;
            @media screen and(max-width:480px){
                margin: unset;
            }
        }
        &:active{
            transition: none;
            color: #128953;
            background-color: #82f9c3
        }
        &.router-link-exact-active {
            @media screen and(max-width:480px){
                width: 100%;
            }
            background-color: #128953;
        }
    }

}

.navbar a

.navbar a:active {
   
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