import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import List from './components/List.vue'
import Edit from './components/Edit.vue'
import Add from './components/Add.vue'
import Recipe from './components/Recipe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path : '/', 
      name: 'Home',
      component : Home
    },
    { 
      path : '/list', 
      name: 'List',
      component : List
    },
    { 
      path : '/add', 
      name: 'Add',
      component : Add
    },
    { 
      path : '/recipe/edit/:id', 
      name: 'Edit',
      component : Edit
    },
    { 
      path : '/recipe/:id', 
      name: 'Recipe',
      component : Recipe
    },
  ]
})
