<template>
   <div class="ListSwiper">
       <image-title :imgurl="Imgurl"></image-title>
       <div class="haha">
       <detail-list-swiper :list="List"></detail-list-swiper>
       </div>
   </div>
</template>

<script>
    import detailListSwiper from "components/detailListSwiper.vue"
    import imageTitle from "components/imageTitle.vue"
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
   export default {
        data(){
            return{
              List: [],
              Imgurl:[]
           }
        },
       props: ['list','imgurl'],
       components:{
            detailListSwiper,
            imageTitle,
            swiper,
            swiperSlide
            },
            watch:{
            list(value){
                this.List=value 
            },
            imgurl(value){
                this.Imgurl=value
            }
        }
   }
</script>

<style lang='stylus' scoped>
.ListSwiper
    margin-top .2rem 
.haha
    margin-left .16rem 
</style>