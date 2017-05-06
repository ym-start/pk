 <!-- <link rel="stylesheet" href="iconfont/iconfont.ttf"> -->
<template>
  <div class="m-index">
      <header class="yo-header yo-header-a">
          <input class="inpm" type="text" />
          <span class="regret yo-ico">确定</span>
          <span class="affirm yo-ico">&#xe501;</span>
      </header>
    <section>
        <router-view></router-view>
    </section>
    <nav>
      <ul>
        <router-link tag="li" to="/board" active-class="active" class="yo-ico">
            <span>&#xe501;<b>首页</b></span>
        </router-link>
        <router-link tag="li" to="/search" active-class="active" class="yo-ico">
            <span>&#xf0048;<b>分类</b></span>
        </router-link>
        <router-link tag="li" to="/cart" active-class="active" class="yo-ico">
            <span>&#xe64a;<b>购物车</b></span>
        </router-link>
        <router-link tag="li" to="/atom" active-class="active" class="yo-ico">
            <span>&#xe60d;<b>消息</b></span>
        </router-link>
        <router-link tag="li" to="/min" active-class="active" class="yo-ico">
            <span>&#x3575;<b>我的</b></span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default{

  }
</script>
