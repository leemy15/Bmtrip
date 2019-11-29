<template>
  <div class="swiperBox">
    <swiper :options="swiperOption" ref="mySwiper" v-if="list.length">
      <!-- slides -->
      <swiper-slide v-for="item,index in List" :key="index">
        <div class="swiper-img">
          <img :src="item.img.url" @click="handleClick(item)" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "htSwiper",
  props: ["list"],
  data() {
    return {
      List: [],
      url1: [],
      swiperOption: {
        autoplay:true,
        effect : "flip",
        loop:true,
        speed:300,
               autoplay : {
                 delay:3000
               },
          
        centeredSlides: false,
        centeredSlidesBounds: true,
      }
    };
  },
  watch: {
    list(value) {
      this.List = value;
      // this.url1 = this.List.img
       console.log(this.List);
    }
  },
  methods:{
          handleClick(v){
            console.log(v);
            if(v.url!='')
            {
            let a=[],keyworlds=''
            a=v.url.split("=")
            keyworlds=a[2]
            this.$router.push({ path: '/CityJing/'+keyworlds})
            }
            else{
              console.log(1);
            }
          }
        }
};
</script>

<style lang="stylus" scoped>
.swiperBox
  padding 0 .16rem
  width 100%
img
  text-align center
  margin 0 auto
  width 100%
</style>
