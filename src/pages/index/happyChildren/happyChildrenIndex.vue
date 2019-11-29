<template>
    <div class="paddindiv">
         <image-title :imgurl="Pic1"></image-title>
         <image-title :imgurl="Pic2"></image-title>
         <image-title :imgurl="Pic3"></image-title>
         <detail-list-wrap>
            <index-list :list="list" v-for="list,index in pro1[0]" :key="index" ></index-list>
        </detail-list-wrap>
        <image-title :imgurl="link"></image-title>
        <image-title :imgurl="Pic4"></image-title>
        <detail-list-wrap>
            <index-list :list="list" v-for="list,index in pro1[1]" :key="index" ></index-list>
        </detail-list-wrap>
        <image-title :imgurl="link"></image-title>
        <image-title :imgurl="Pic5"></image-title>
        <detail-list-wrap>
            <index-list :list="list" v-for="list,index in pro1[2]" :key="index" ></index-list>
        </detail-list-wrap>
        <image-title :imgurl="link"></image-title>
        <image-title :imgurl="Pic6"></image-title>
          <div>
         <index-swiper :list="swiperPic7"></index-swiper>
       </div>

        <image-title :imgurl="Pic8"></image-title>

    </div>
</template>

<script lang="ts">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import detailListWrap from "components/detailListWrap.vue"
 import indexList from "components/detailList.vue"
 import imageTitle from "components/imageTitle.vue"
 import indexSwiper from "components/happyswiper.vue"
 import { get } from 'utils/http';
 import _ from 'lodash'
 export default{
     data(){
         return{
             List: [],
             Pic1: [],
             Pic2: [],
             Pic3: [],
             Pic4: [],
             Pic5: [],
             Pic6: [],
             swiperPic7: [],
             Pic8: [],
             pro1: [],
             link:{
                 url:"https://product-ssl-qiniu.bmtrip.com/product_5dad50ee7af42.jpg"
             }
         }
     },
        components:{
            indexList,
            imageTitle,
            detailListWrap,
            indexSwiper,
            swiper,
            swiperSlide
            },

        async mounted() {
        let result = await get({
          url: '/api/v3/m1/cms/page/detail?pageId=5dad3f5cb896310d8260c6b5&platform=4'
        })
        let result1 = await get({
          url: '/data/happyChildren.json'
        })


         this.pro1 = result1.data.list;
         let cache = _.chunk(this.pro1, 4);
         this.pro1 = cache;
         
        
         this.list = result.data.data[1];
         this.Pic1 = result.data.data[1].data[0].img;
         this.Pic2 = result.data.data[1].data[1].img;
         this.Pic3 = result.data.data[3].data[0].img;
         this.Pic4 = result.data.data[7].data[0].img;
         this.Pic5 = result.data.data[11].data[0].img;
         this.Pic6 = result.data.data[14].data[0].img;
         this.swiperPic7 = result.data.data[15].data;
         this.Pic8 = result.data.data[17].data[0].img;
         console.log(this.link ,this.Pic8);
        }
    }
</script>

<style scoped lang="stylus">

</style>