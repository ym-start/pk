<template lang="html">
  <div class="m-board">
    <mt-swipe :auto="3000" >
      <mt-swipe-item><img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2017-05/5907df75a0264.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="http://img02.hua.com/slider/17_mothersday_m.jpg?ss" /></mt-swipe-item>
      <mt-swipe-item><img src="http://img02.hua.com/slider/17_mothersday_m.jpg?ss" /></mt-swipe-item>
    </mt-swipe>
    <div class="re">
      <img src="http://img02.hua.com/slider/aboutus1.png" />
    </div>

    <div class="flow">
      <span><p><img v-on:click="bb()" src="http://m.hua.com/images/flower_1.png" alt=""></p><span style="margin-left:8px;">鲜花</span></span>
      <span><p><img src="http://m.hua.com/images/cake_2.png" alt=""></p><span style="margin-left:8px;">蛋糕</span></span>
      <span><p><img src="http://m.hua.com/images/flowersong_1.png" alt=""></p><span style="margin-left:2px;">永生花</span></span>
      <span><p><img src="http://m.hua.com/images/gifts_2.png" alt=""></p><span style="margin-left:-2px;">特色礼品</span></span>
      <span><p><img src="http://m.hua.com/images/Plant_2.png" alt=""></p><span style="margin-left:-5px;">更多分类</span></span>
    </div>

    <div class="xuan">
      <div class="img1">

        <img alt="新品鲜花速递" src="http://img02.hua.com/tuijian/xinpin03_m.png" border="0" width="100%">
        <span class="markup1"><p class="p1" style="color:#f00;">新品鲜花速递</p><p class="p2" style="color:#c6c6c6;">新款驾到</p></span>
      </div>
      <div class="img1">

        <img alt="巧克力" src="http://m.hua.com/images/xpsd_06.jpg" border="0" width="100%">
        <span class="markup1"><p class="p1" style="color:#ff8588;">美味巧克力</p><p class="p2" style="color:#c6c6c6;">最最甜蜜的宠爱</p></span>
      </div>
      <div class="img1">

        <img alt="漫画选花" src="http://m.hua.com/images/mhxh_001.png" border="0" width="100%">
        <span class="markup1"><p class="p1" style="color:#f2b354;">漫画选花</p><p class="p2" style="color:#c6c6c6;">浪漫以画代话</p></span>
      </div>
    </div>

    <!--母亲节特特辑  -->
    <div class="m">
      <div>———鲜花精选集―——</div>
      <div class="tt">
          <p v-for="(item,index) in dataSource" :key="index">
              <img :src="item.img" alt="">
              <span class="s1">  {{item.title}}</span>
              <span class="s2">  {{item.xi}}</span>
              <span class="s3">{{item.price}}</span>
          </p>
      </div>
      <a class="after">查看全部鲜花></a>
    </div>
    <a>
        <img src="http://img02.hua.com/m/icon/cake_banner.jpg" >
    </a>
    <div class="z">
      <p class="hao">好吃又好看才是心水的蛋糕</p>
    </div>








  </div>



</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import utilAxios from '../utils/axios';


export default {
    data() {
     return {
       dataSource: []
     }
   },

   mounted: function () {
     let that = this
    //  console.log(utilAxios)
     utilAxios.get({
       url: 'http://localhost:3000/board',
       method: 'get',
       callback: function (res) {
         that.dataSource = that.dataSource.concat(res.data)
           console.log(that.dataSource[1].title)
          console.log(that.dataSource[1].title)
       }
     })
   }

}

</script>
