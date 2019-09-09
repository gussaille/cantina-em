<template>
    <nav class="navbar">
        <div class="container">
            <router-link to="/">Accueil</router-link>
            <router-link to="/list">Liste des recettes</router-link>
            <router-link to="/add">Ajouter une nouvelles recette</router-link>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    animation: slideDown 0.4s ease-out;
    background-color: #42b983;
    overflow: hidden;
    margin-bottom: 3em;
}

.navbar>.container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.navbar a:link,
.navbar a:visited {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 0.75em 1em;
    transition: all 150ms;
    transform: scale(1);
}

.navbar a:hover {
    background-color: #128953;
    transform: scale(1.05);
}

.navbar a.router-link-exact-active {
    background-color: #128953;
}

.navbar a:active {
    transition: none;
    color: #128953;
    background-color: #82f9c3
}

.navbar a:last-of-type {
    margin-left: auto;
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