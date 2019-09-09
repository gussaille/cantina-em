import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List.vue'
import Edit from './components/Edit.vue'
import Add from './components/Add.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
      path : '/edit', 
      name: 'Edit',
      component : Edit
    }
  ]
})
