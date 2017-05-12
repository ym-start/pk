<template lang="html">
   <el-tabs v-model="activeName2" type="card"  @tab-click="handleClick">
        <el-tab-pane label="常用分类" name="1" >
            <div class='s-banner'>
                <img src="http://img02.hua.com/app/api/use/use_banner.png" alt="">
            </div>
            <div class='s-list'>
                <h3 v-html="title"></h3>
                <!--<ul>
                    <li v-for='item in searchList'>{{item.tle}}</li>     
                </ul> -->
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="鲜花" name="2">
            <div class='s-banner'>
                <img src="http://img02.hua.com/app/api/flower/12171.png" alt="">
            </div>
            <div class='s-list'>
                <h3 v-html="title[0]"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul>
               <h3 v-html="title[1]"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
               <h3 v-html="title[2]"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="商用鲜花" name="3">
            <div class='s-banner'>
                <img src="http://img02.hua.com/app/api/business/business_banner.png" alt="">
            </div>
            <div class='s-list'>
                <h3 v-html="title"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>     
        </el-tab-pane>
        <el-tab-pane label="永生花" name="4">
            <div class='s-banner'>
               <img src="http://img02.hua.com/app/api/yongshenghua/ysh_banner.png" alt="">
            </div>
            <div class='s-list'>
                <h3 v-html="title"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="蛋糕" name="5">
            <div class='s-banner'>
                <img src="http://img02.hua.com/app/api/cake/cake_banner.png" alt="">            
            </div>
            <div class='s-list'>
                <h3 v-html="title"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="巧克力" name="6">
            <div class='s-banner'>
                <img src="http://img02.hua.com/app/api/qiaokeli/chocolate.png" alt="">
            </div>
            <div class='s-list'>
                <h3 v-html="title"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="特色礼品" name="7">
            <div class='s-banner'>
                <img src="http://img02.hua.com/app/api/gift/gift_banner.png" alt="">
            </div>
            <div class='s-list'>
                <h3 v-html="title"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="品牌公仔" name="8">
            <div class='s-banner'>
                <img src="http://img02.hua.com/app/api/doll/doll_banner.png" alt="">
            </div>
            <div class='s-list'>
                <h3 v-html="title"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="礼蓝" name="9">
            <div class='s-banner'>
                <img src="http://img02.hua.com/app/api/baskets/baskets_banner.png" alt="">
            </div>
            <div class='s-list'>
               <h3 v-html="title"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="绿植花卉" name="10">
            <div class='s-banner'>
                <img src="http://img02.hua.com/app/api/plant/plant_banner.png" alt="">
            </div>
            <div class='s-list'>
                <h3 v-html="title"></h3>
               <ul>
                    <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                        <img :src="item.img" alt=""/>
                        <p v-text="item.tle"></p>
                    </router-link>
               </ul> 
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import Vue from 'vue'
import {Tabs,TabPane} from 'element-ui'
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
import utilAxios from '../utils/axios'
export default {
    data() {
      return {
        activeName2: '1',
        searchList: [],
        title:''
      };
    },   
   methods:{ 
            handleClick:function(tab, event) {
                    // console.log(tab.index);
                   let i=tab.index
                   //console.log(i)
                   let that = this
                    //  console.log(utilAxios)
                    utilAxios.get({
                        url: 'mock/search',
                        method: 'get',
                        callback: function (res) { 
                            //that.searchList = res.data[0]
                            that.title = res.data[i].title
                            that.searchList = res.data[i].Img
                            //  console.log(that.searchList)
                        }
                    })
            }
    }
//     mounted: function () {
//          let that = this
//          //  console.log(utilAxios)
//          utilAxios.get({
//             url: 'mock/search',
//             method: 'get',
//             callback: function (res) { 
//                 //that.searchList = res.data[0]
//                 that.title = res.data[0].title
//                 that.searchList = res.data[0].huacai
//                 //  console.log(that.searchList)
//             }
//         })
//    }    
 }  
</script>