<template>
    <div class="find">
        <div class="nav">
            <header-nav type="find"></header-nav>
          </div>
          <div class="findout">
                 <router-view >
                 </router-view>
          </div>
    </div>
</template>

<script lang="ts">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import headerNav from "components/headerNav"
   export default({
         components:{
            swiper,
            swiperSlide,
            headerNav,
        }
    })
</script>

<style scoped lang="stylus">
.find
  height 5.48rem
  display flex
  flex-direction column
.nav
  padding 0 .06rem
  height .45rem
.findout
    height 5rem
</style>




