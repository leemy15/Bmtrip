<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiperParent" v-if="twoNav.length">
    <!-- slides -->
                 <swiper-slide v-for="twonav in twoNav" :key="twonav.id">
                   <router-link class="slider" :to="/CityJing/+twonav.label" tag="div">
                     <img :src="twonav.img" class="bm-theme-item-img">
                     <div>{{twonav.label}}</div>
                     </router-link></swiper-slide>
                 <div class="swiper-pagination"  style="bottom:0" slot="pagination"></div>
              </swiper>
</template>

<script lang="ts">
import { get } from 'utils/http'
    export default({
        data(){
           return {
             swiperOption:{
               direction : 'horizontal',
               loop:true,
               slidesPerView :5,
               slidesPerGroup:5,
                pagination: {
                  el: '.swiper-pagination',
                }
             },
             twoNav:[],
           }
         },
         async mounted() {
        let result = await get({
        url: '/api/v3/m1/theme/group?platform=4'
        })
        this.twoNav = result.data.list
        }
    })
</script>

<style scoped lang="stylus">
    .slider
      display flex
      flex-direction column
      align-items center
      height .65rem
      text-align center
      img
        width .22rem
        height .22rem
       div
         font-family: PingFangSC-Regular;
         font-size: 10px;
         color: #333;
         letter-spacing: .2px;
         text-align: center;
</style>