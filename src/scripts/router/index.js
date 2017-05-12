import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'
import Board from '@/scripts/components/Board'
import Search from '@/scripts/components/Search'
import  Min from '@/scripts/components/Min'
import  Cart from '@/scripts/components/Cart'
import List from '@/scripts/components/shopList'
import  Comprehensive from '@/scripts/components/Comprehensive'
import Fbr from '@/scripts/components/fbr'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect:'board',       //设置刚进去时的路由
        children: [
          // {                    //设置刚进去时的路由(第二种方法)
          //   path:'',
          //  component:Board
          // },
          {
            path:'board',
            component:Board
          },
          {
            path:'search',
            component:Search
          },
          {
            path:'min',
            component:Min
          },
          {
            path:'cart',
            component:Cart
          }
        ]
    },
    {
      path:'/list',
      component:List,
      children: [
        {
          path:'comprehensive',
          component: Comprehensive
        },
         {
          path:'fbr',
          component: Fbr
        }
      ]
    }
  ]
})
