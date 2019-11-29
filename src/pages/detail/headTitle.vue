<template>
   <div>
    <div class="titleBox">
      <div class="swiperBox">
        <van-swipe :autoplay="3000" indicator-color="white" >
          <van-swipe-item v-for="pic in list" :key='pic.url'>
            <img
              :src="pic.url"
            />
          </van-swipe-item>
        </van-swipe>
          </div>
     
        </div>
   </div>
</template>

<script>
   export default {
      props: ['list'],
   }
</script>

<style lang='stylus' scoped>
.swiperBox
  background-color #fff
img
  width 100% 
  height 2.325rem
</style>