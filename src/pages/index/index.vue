<template>
  <div class="indexMain">
          <div class="nav">
            <index-header-nav type="index"></index-header-nav>
          </div>
          <div class="scroll1">
            <router-view>
            </router-view>
          </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import indexHeaderNav from "components/headerNav"

export default {
  components:{
    swiper,
    swiperSlide,
    indexHeaderNav,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .indexMain
    height 100% 
    width 100%
    display flex
    flex-direction column
    flex 1
    background-color #fff
  .nav
      padding 0 .06rem
      $border(1px 0 1px 0);
      height .45rem
    .scroll1
      overflow-y scroll 
</style>
