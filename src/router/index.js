import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Detail from '../components/Detail'
import Collect from '../components/Collect'
import List from '../components/List'
import Add from '../components/Add'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',component:Home
    },
    {
      path:'/list',component:List
    },
    {
      path:'/add',component:Add
    },
    {
      path:'/collect',component:Collect
    },
    {
      path:'/detail',component:Detail
    }
  ]
})
