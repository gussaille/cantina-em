import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './components/List.vue'
import Add from './components/Add.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
