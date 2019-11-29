<template>
    <div class="two">
        <router-link tag="div" to="/layout/index/superTourGroup"><img  src="https://product-ssl-qiniu.bmtrip.com/20191018icn_tourgroup@3x.png" alt="旅行团" class="bm-insert-item-img">
             <span>旅行团</span>
        </router-link>
        <router-link tag="div" to="/layout/customized"><img src="https://product-ssl-qiniu.bmtrip.com/20191018icn_customtour@3x.png" alt="定制游" class="bm-insert-item-img">
             <span>定制游</span></router-link>
        <router-link tag="div" to="/layout/index/dreamSiam"><img src="https://product-ssl-qiniu.bmtrip.com/20191018icn_freetravel@3x.png" alt="自由行" class="bm-insert-item-img">
             <span>自由行</span></router-link>
        <router-link tag="div" to="/layout/index/china"><img src="https://product-ssl-qiniu.bmtrip.com/20191018icn_touraround@3x.png" alt="周边游" class="bm-insert-item-img">
             <span>周边游</span></router-link>
    </div>
</template>

<script lang="ts">
    export default({
        name:'indexTwoNav'
    })
</script>

<style scoped lang="stylus">
    .two
      display flex
      width 100%
      div
        width 25%
        display flex
        flex-direction column
        align-items center
        img
            width: 36px;
            height: 36px;
            margin-bottom: 6px;
        span
            text-align: center;
</style>