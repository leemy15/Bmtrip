<template>
<div class="indexdiv">
    <div class="indexNav">
            <index-body-static :StaticSwiper="lunbo" class="static"></index-body-static>
            <index-two-nav class="two-nav"></index-two-nav>
            <div class="two-swiper">
            <index-body-swiper></index-body-swiper>
            </div>
    </div>
    <list-group :list="productListOne[0]" :imgurl="List2[0]"></list-group>
    <list-group :list="productListOne[1]" :imgurl="List2[1]"></list-group>
    <list-swiper-group :list="productListTwo[0]" :imgurl="List2[2]"></list-swiper-group>
    <list-swiper-group :list="productListTwo[1]" :imgurl="List2[3]"></list-swiper-group>
    <list-swiper-group :list="productListTwo[2]" :imgurl="List2[4]"></list-swiper-group>
    <list-group :list="productListThr" :imgurl="List2[5]"></list-group>
</div>
</template>

<script lang="ts">
    import indexBodyStatic from "./indexBodystatic.vue"
    import indexTwoNav from "./indexTwoNav.vue"
    import indexBodySwiper from "./indexBodySwiper.vue"
    import listGroup from "group/listGroup.vue"
    import listSwiperGroup from "group/listSwiperGroup.vue"
    import { get } from 'utils/http';
    import _ from 'lodash'
    export default({
        components:{
            indexBodyStatic,
            indexTwoNav,
            indexBodySwiper,
            listGroup,
            listSwiperGroup
            },
            data(){
            return{
              List: [],
              productListOne:[],
              productListTwo:[],
              productListThr:[],
              List2:[],
              lunbo:[]
           }
           },
     async mounted() {
        let result = await get({
        url: '/data/detailList.json'
        })
        this.List=result.data.list
        
        
        this.productListOne =  _.chunk((_.dropRight(this.List, 13)),4)
        this.productListTwo = _.chunk((_.dropRight((_.drop(this.List, 8)),4)),3)
        this.productListThr =  _.drop(this.List, 17)

        let result2 = await get({
          url: '/api/v3/m1/cms/page/detail?pageId=5da95458b896310cf66ba97f&platform=4'
        })
        this.lunbo=result2.data.data[0].data
        for(let i =0 ; i<result2.data.data.length;i++)
        {
          if(result2.data.data[i].data[0].img.h==64)
          {
              this.List2.push(result2.data.data[i].data[0].img)
          }
        }
        }
        })
</script>

<style scoped lang="stylus">
.indexNav
 height 3.46rem
 display flex
 flex-direction column
 justify-content space-around
 padding 0 auto
    .static
      width 324px
      margin 0 auto
    .two-nav
      height .58rem
      margin-top .2rem
      width 100%
    .two-swiper
      height .65rem
      margin-top .15rem
      width 100%
</style>