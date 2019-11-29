<template>
<div>
     <swiper :options="swiperOption" ref="mySwiper" class="radiu">
    <!-- slides -->
                  <swiper-slide class="swipercss" v-for="swiper in StaticSwiper" :key="swiper.url">
                   <img alt="斑马首页banner图" height="180" :src="swiper.img.url" @click="handleClick(swiper)">
                   </swiper-slide>
                 <div class="swiper-pagination"  slot="pagination"></div>
              </swiper>
              
</div>
</template>

<script lang="ts">
    export default ({
        name:'indexBodystatic',
        props: ['StaticSwiper'],
        data(){
           return {
             swiperOption:{
               speed:300,
               autoplay : {
                 delay:3000
               },
               direction : 'horizontal',
               loop:true,
               pagination: {
                  el: '.swiper-pagination',
                },
             }
           }
         },
          watch:{
            StaticSwiper(value){
                console.log(value);
                
            },
        },
        methods:{
          handleClick(v){
            let a=[],keyworlds=''
            //console.log(v);
            a=v.url.split("=")
            keyworlds=a[2]
            console.log(keyworlds);
            this.$router.push({ path: '/CityJing/'+keyworlds})
          }
        }
    })
</script>

<style scoped lang="stylus">
 .radiu
     border-radius 5px   
     width 3.24rem !important
    .swipercss
      width 3.24rem !important
      margin 0 auto !important
  </style>