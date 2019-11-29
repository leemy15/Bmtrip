<template>
  <div class="paddindiv">
    <image-title :imgurl="Pic0"></image-title>
    <index-swiper :list="swiperPic1"></index-swiper>
    <div class="margin_T">
      <list-swiper-group :list="pro1" :imgurl="Pic1"></list-swiper-group>
    </div>
    <div class="marginT">
      <image-title :imgurl="link"></image-title>
    </div>
    <div class="margin_T">
      <list-group :list="pro2" :imgurl="Pic2"></list-group>
    </div>
    <div class="marginT">
      <image-title :imgurl="Pic3"></image-title>
    </div>
    <div class="margin_T">
      <list-swiper-group :list="pro3[0]" :imgurl="Pic4"></list-swiper-group>
    </div>
    <div class="marginT">
      <image-title :imgurl="Pic3"></image-title>
    </div>
    <div class="margin_T">
      <list-swiper-group :list="pro3[1]" :imgurl="Pic5"></list-swiper-group>
    </div>
    <div class="marginT">
      <image-title :imgurl="Pic6"></image-title>
    </div>
    <div class="marginT">
      <image-title :imgurl="Pic8"></image-title>
    </div>
    <div class="marginT">
      <image-title :imgurl="Pic10"></image-title>
    </div>
     <div class="marginL">
      <detail-list-swiper :list="pro4"></detail-list-swiper>
     </div>
     <div class="marginT">
      <image-title :imgurl="Pic11"></image-title>
    </div>
    <div class="marginL">
      <detail-list-swiper :list="pro5"></detail-list-swiper>
     </div>
  </div>
</template>

<script lang="ts">
import { swiper, swiperSlide } from "vue-awesome-swiper";
import detailListWrap from "components/detailListWrap.vue";
import indexList from "components/detailList.vue";
import imageTitle from "components/imageTitle.vue";
import indexSwiper from "components/happyswiper.vue";
import { get } from "utils/http";
import listSwiperGroup from "group/listSwiperGroup.vue";
import listGroup from "group/listGroup.vue";
import detailListSwiper from "components/detailListSwiper.vue"
import _ from "lodash";
export default {
  components: {
    indexList,
    imageTitle,
    detailListWrap,
    indexSwiper,
    swiper,
    swiperSlide,
    listSwiperGroup,
    listGroup,
    detailListSwiper
  },
  data() {
    return {
      List: [],
      Pic0: [],
      Pic1: [],
      Pic2: [],
      Pic3: [],
      Pic4: [],
      Pic5: [],
      Pic6: [],
      swiperPic1: [],
      Pic8: [],
      Pic9: [],
      Pic10: [],
      Pic11: [],
      Pic12: [],
      pro: [],
      pro1: [],
      pro2: [],
      pro3: [],
      pro4: [],
      pro5: [],
      pro7: [],
      link: {
        url:
          "https://product-ssl-qiniu.bmtrip.com/product_5daa78525d2d2.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!324x50.976r/crop/324x50.976/format/jpg/interlace/1/sharpen/1/quality/100!"
      }
    };
  },
  async mounted() {
    let result = await get({
      url:
        "/api/v3/m1/cms/page/detail?pageId=5da95ad1b896315b64180ed4&platform=4"
    });
    let result1 = await get({
      url: "/data/tourGroupPro.json"
    });

    this.pro = result1.data.list;
    let cache1 = _.dropRight(this.pro, 12);

    this.pro1 = cache1;
  
    let cache2 = _.dropRight(_.drop(this.pro, 3), 8);
    // let cache2 = _.dropRight(this.pro, 12);
    this.pro2 = cache2;

    let cache3 = _.chunk(_.dropRight(_.drop(this.pro, 7), 2), 3);
    this.pro3= cache3;

   console.log(this.pro3);
   
    this.pro4 = _.drop(this.pro, 14)
    console.log(this.pro4);
    this.pro5 = _.dropRight(_.drop(this.pro, 3), 11);

    this.list = result.data.data[1];
    this.Pic0 = result.data.data[0].data[0].img;
    this.swiperPic1 = result.data.data[1].data;

    this.Pic1 = result.data.data[2].data[0].img;
    this.Pic2 = result.data.data[5].data[0].img;
    this.Pic3 = result.data.data[7].data[0].img;
    this.Pic4 = result.data.data[8].data[0].img;
    this.Pic5 = result.data.data[11].data[0].img;
    this.Pic6 = result.data.data[13].data[0].img;
    this.Pic8 = result.data.data[14].data[0].img;
    this.Pic9 = result.data.data[15].data[0].img;
    this.Pic10 = result.data.data[17].data[0].img;
    this.Pic11 = result.data.data[19].data[0].img;
    this.Pic12 = result.data.data[21].data[0].img;
  }
};
</script>

<style scoped>
.margin_T {
  margin-top: -0.2rem;
}
.marginT {
  margin-top: 0.2rem;
}
.marginL{
  padding: 0 .18rem
}
</style>