<template lang="html">
    <div class="p-list">
      <header>爱情鲜花</header>
      <nav> 
        <ul>
            <router-link tag="li" to="?/comprehensive" active-class="active"><b> 综合   ▽</b></router-link>
            <router-link tag="li" to="?/comprehensive&vulome" active-class="active"><b>销量</b></router-link>
            <router-link tag="li" to="?/comprehensive&price" active-class="active"><b>价格   △</b></router-link>
            <router-link tag="li" to="/fbr" active-class="active"><b>鲜花分类</b></router-link>
        </ul>
      </nav>
      <section>
        <shop-list></shop-list>
      </section>
  </div>
</template>

<script>
import Vue from 'vue'
//import Comprehensive from './Comprehensive.vue'
 //Vue.component('shop-list',Comprehensive)
import utilAxios from '../utils/axios'
export default {
    data() {
      return {
        activeName2: '1',
        searchList: [],
        title:''
      };
    },   

    mounted: function () {
         let that = this
         //  console.log(utilAxios)
         utilAxios.get({
            url: 'mock/search',
            method: 'get',
            callback: function (res) { 
                //that.searchList = res.data[0]
                that.title = res.data[0].title
                that.searchList = res.data[0].huacai
                //  console.log(that.searchList)
            }
        })
   }    
 }  
</script>