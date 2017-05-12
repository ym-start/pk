<template lang='html'>
    <div class='f-list'>
        comprehensive...
    </div>
</template>

<script>
    import Vue from 'vue'
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