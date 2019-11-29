<template>
  <div class="article">
    <div class="header"><svg @click="handClick" t="1574824341059" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1455" width="16" height="16"><path d="M318.803148 489.952312 300.45509 511.994885 318.803148 534.037458 662.730144 947.216647C674.890167 961.825179 696.57699 963.798938 711.169018 951.625162 725.761045 939.451385 727.732576 917.740034 715.572552 903.131502L371.645555 489.952312 371.645555 534.037458 715.572552 120.858268C727.732576 106.249736 725.761045 84.538386 711.169018 72.364609 696.57699 60.190832 674.890167 62.164591 662.730144 76.773123L318.803148 489.952312Z" p-id="1456"></path></svg></div>
    <div class="articleMain">
      <div class="type">{{List1.sort}}</div>
      <div class="title">{{List1.title}}</div>
      <div class="autor">{{List1.subtitle}}</div>
      <div  class="aaaa" v-for="(list,index) in List" :key="index">
         <div v-if="typeof(list)=='string'">
            <div v-html="list">
               {{list}}
            </div>
         </div>
         <div v-if="typeof(list)=='object'">
            <div>
               <detail-car :car="list"></detail-car>
            </div>
         </div>
      </div>
      <div class="fenxiangButton">好文分享给朋友</div>
    </div>
  </div>
</template>

<script>
import { get } from "utils/http";
import detailCar from 'components/detailCar.vue'
export default {
   data(){
      return{
         List:[],
         List1:[]
      }
   },
   components:{
      detailCar
   },
   methods:{
      handClick(){
         this.$router.back()
      }
   },
  async mounted(){
       let result = await get({
      url: '/api/v3/article/detail?id='+this.$route.params.id+'&platform=4'
      });
      this.List=result.data.content
      this.List1=result.data
      console.log(this.List1);
   }
};
</script>

<style lang='stylus'>
.aaaa img 
      width 100%
</style>
<style lang='stylus' scoped>
.article
   background-color #fff
   display flex
   flex-direction column
.header
  height 0.44rem
  line-height .44rem
  padding 0 .18rem
.articleMain
  padding .1rem .18rem
  height 6.06rem
  overflow-y scroll
.title
  font-size .20rem
  margin .1rem 0 .1rem 0
.autor
  color #898989
  margin-bottom .1rem
.fenxiangButton
  width 60%
  height .44rem
  background-color #C04374
  margin .3rem auto .5rem auto
  border-radius .05rem
  line-height .44rem
  text-align center
  color #fff
  font-size .15rem 
</style>