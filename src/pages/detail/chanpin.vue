<template>
   <div class="heihei">
       <van-sticky :offset-top="35">
      <div class="stickyitle">
        <van-tabs @click="jump">
          <van-tab title="产品亮点" v-if="neirong.length"></van-tab>
          <van-tab title="特色体验" v-if="list.high_feature!=undefined&&list.high_feature.length>0"></van-tab>
          <van-tab title="行程安排" v-if="travel"></van-tab>
          <van-tab title="费用须知" v-if="list.www_fee_contain"></van-tab>
        </van-tabs>
      </div>
    </van-sticky>

    <div id="产品亮点" v-html="neirong" class="aaae heightLin" v-if="neirong.length">{{neirong}}</div>
    <speatil id="特色体验" :List="list.high_feature" v-if="list.high_feature!=undefined&&list.high_feature.length>0"></speatil>
    <xingcheng id="行程安排" :travel="travel" :list="List" v-if="travel"></xingcheng>
    <money id="费用须知" :list="list" v-if="list.www_fee_contain"></money>
    </div>
    
</template>

<script>
import speatil from './speatil'
import xingcheng from './xingcheng'
import money from './money'
import { get } from "utils/http";
   export default {
props: ['neirong','list','money'],
data() {
    return {
       travel:'',
       List:[],
    };
  },
components: {
    speatil,
    xingcheng,
    money
},
watch:{
   async list(v){
      if(v.plan_overview.length!=0)
      {
          
           this.travel=Object.keys(v.plan_overview)[0].replace(/\;/,"%3B")
           let result = await get({
           url: '/api/v3/m1/product/trip/detail?product_id='+this.$route.params.id+'&combo_key=' +this.travel+'&platform=4',
              })
              this.List=result.data.list
      }
   
      }
      
      },
methods:{
   jump(name,title){
       let tab= '#'+ title
       var jump = this.$el.querySelector(tab)
      // console.log(document.body.scrollTop);
      // document.body.scrollTop = jump.offsetTop
       document.querySelector(".main123").scrollTop=jump.offsetTop+146
   }
}
   }

</script>
<style lang="stylus">
.aaae
   transition-delay 2s
.aaae p
   margin:10px 0; 
   font-size: .14rem;
   color: #333333;
   letter-spacing: 0.004rem;
   line-height: 0.2rem;
   font-weight: 300;
   text-align: left;
.aaae p img
  width 100%
</style>
<style lang='stylus' scoped>
.aaae
   background-color #fff
   padding .2rem .18rem
.heightLin
   margin-top 10px 
.stickyitle
  display flex
  justify-content center
  line-height 0.44rem
  margin-top 0.1rem
  background-color #fff
  height 0.44rem
  padding 0 .18rem
  width 100%
.van-swipe__indicator
  border-radius 6% !important
  height 2px
</style>