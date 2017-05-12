<template lang="html">
  <div class="m-search">
      <search-list></search-list>
  </div>
</template>
<script>
  import Vue from 'vue'
  import SearchList from './SearchList.vue'
  Vue.component('search-list',SearchList)
  export default {
    
  }
</script>