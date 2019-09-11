<template>
  <div id="app" class="wrapper"> 
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
    name: 'app',
    components: {
        Navbar
    },
    data(){
        return {
            
        }
    },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper{
  color:white;
  width:100%;
  min-height:100vh;
  background: #2C2C2C;
  max-width:1680px;
  ul{
    padding:unset;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
