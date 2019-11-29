<template>
  <div class="paddindiv">
    <image-title :imgurl="Pic0"></image-title>
    <image-title :imgurl="Pic1"></image-title>
    <index-swiper :list="swiperPic1"></index-swiper>
     <image-title :imgurl="Pic2"></image-title>
      <index-swiper :list="swiperPic2"></index-swiper>
      <list-swiper-group :list="pro1" :imgurl="Pic3"></list-swiper-group>
      <list-swiper-group :list="pro2" :imgurl="Pic4"></list-swiper-group>
      <image-title :imgurl="Pic5"></image-title>
      <image-title :imgurl="Pic6"></image-title>
      <index-swiper :list="swiperPic3"></index-swiper>
      <image-title :imgurl="Pic9"></image-title>
      <index-swiper :list="swiperPic4"></index-swiper>
      <image-title :imgurl="Pic10"></image-title>
      <index-swiper :list="swiperPic5"></index-swiper>
      <image-title :imgurl="Pic11"></image-title>
      <detail-list-wrap>
            <index-list :list="list" v-for="list,index in pro6" :key="index" ></index-list>
      </detail-list-wrap>
      <image-title :imgurl="Pic12"></image-title>
      <detail-list-wrap>
            <index-list :list="list" v-for="list,index in pro7" :key="index" ></index-list>
      </detail-list-wrap>
      <image-title :imgurl="Pic13"></image-title>
      <image-title :imgurl="Pic14"></image-title>
      <index-swiper :list="swiperPic6"></index-swiper>
      <image-title :imgurl="Pic17"></image-title>
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
      swiperPic2: [],
      swiperPic3: [],
      swiperPic4: [],
      swiperPic5: [],
      swiperPic6: [],
      Pic9: [],
      Pic10: [],
      Pic11: [],
      Pic12: [],
      Pic13: [],
      Pic14: [],
      Pic15: [],
      Pic16: [],
      Pic17: [],
      pro: [],
      pro1: [],
      pro2: [],
      pro3: [],
      pro4: [],
      pro5: [],
      pro6: [],
      pro7: [],
      pro8: [],
      pro9: [],
      pro10: []
    };
  },
  async mounted() {
    let result = await get({
      url:
        "/api/v3/m1/cms/page/detail?pageId=5dc52fd1b896310cf220c734&platform=4"
    });
    let result1 = await get({
      url: "/data/dream.json"
    });

    this.pro = result1.data.list;
    let cache1 = _.dropRight(this.pro, 15);
    this.pro1 = cache1;
    let cache2 = _.dropRight(_.drop(this.pro, 3), 12);
    this.pro2 = cache2;
    let cache3 = _.chunk(_.dropRight(_.drop(this.pro, 7), 2), 3);
    this.pro3 = cache3;
    this.pro4 = _.drop(this.pro, 13);
    this.pro5 = _.dropRight(_.drop(this.pro, 3), 11);
    this.pro6 = _.dropRight(_.drop(this.pro, 6), 6);
    this.pro7 = _.dropRight(_.drop(this.pro, 12), 2);
    this.pro8 = _.dropRight(_.drop(this.pro, 15), 2);
    this.pro9 = _.dropRight(_.drop(this.pro, 16), 1);
    this.pro10 = _.dropRight(this.pro, 15);

    this.list = result.data.data[1];
    this.Pic0 = result.data.data[0].data[0].img;
    this.swiperPic1 = result.data.data[2].data;
    this.swiperPic2 = result.data.data[4].data;
    this.Pic1 = result.data.data[1].data[0].img;
    this.Pic2 = result.data.data[3].data[0].img;
    this.Pic3 = result.data.data[5].data[0].img;
    this.Pic4 = result.data.data[7].data[0].img;
    this.Pic5 = result.data.data[9].data[0].img;
    this.Pic6 = result.data.data[10].data[0].img;
    this.swiperPic3 = result.data.data[11].data;
    this.swiperPic4 = result.data.data[13].data;
    this.swiperPic5 = result.data.data[15].data;
    this.swiperPic6 = result.data.data[22].data;
    this.Pic9 = result.data.data[12].data[0].img;
    this.Pic10 = result.data.data[14].data[0].img;
    this.Pic11 = result.data.data[16].data[0].img;
    this.Pic12 = result.data.data[18].data[0].img;
    this.Pic13 = result.data.data[20].data[0].img;
    this.Pic14 = result.data.data[21].data[0].img;
    this.Pic15 = result.data.data[23].data[0].img;
    this.Pic16 = result.data.data[25].data[0].img;
    this.Pic17 = result.data.data[27].data[0].img;
    console.log(this.pro6);
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