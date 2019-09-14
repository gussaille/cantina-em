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

@font-face {
  font-family: "starJedi";
  src: url("/fonts/StarJedi.woff"),
  url("/fonts/StarJedi.ttf"),
  url("/fonts/StarJedi.eot"),
  url("/fonts/StarJedi.woff2")
}
html, body, div, span, applet, object, iframe, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

body {
	line-height: 1;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

@keyframes fadeIn {
  from{
    opacity:0;
  }
  to{
    opacity: 1;
  }
}


</style>
