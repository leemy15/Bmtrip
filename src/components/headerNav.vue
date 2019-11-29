<template>
            <swiper :options="swiperOption" ref="mySwiper" class="swiperParent">
    <!-- slides -->
                 <swiper-slide 
                 v-for="nav in HeaderNav"  
                 :key="nav.id"
                 class="swipercss" 
                 >
                   <router-link 
                    :to="{name: nav.name}"  
                     active-class="active" 
                     tag="div"
                    ><div>{{nav.name}}</div>
                   <span></span>
                   </router-link>
                 </swiper-slide>
              </swiper>
</template>

<script>
import { get } from 'utils/http'
    export default{
         name : 'indexHeaderNav',
          props: ['type'],
         data(){
           return {
             swiperOption:{
               direction : 'horizontal',
               slidesPerView :'auto',
               slideToClickedSlide: true,
             },
             HeaderNav: []
           }
         },
        async mounted() {
          if(this.type=='index')
          {
                let result = await get({
                url: '/api/v3/m1/cms/nav?pageId=5da95458b896310cf66ba97f&platform=4'
                })
                this.HeaderNav = result.data.nav
          }
          else if(this.type=="find")
          {
                let result = await get({
                url: '/api/v3/article/type?platform=4'
                })
                this.HeaderNav = result.data.list
          }
        }
     }
</script>

<style scoped lang="stylus">
@import "~assets/border.styl"
  .swiperParent
    height .45rem 
    background-color #fff
    .swipercss
        display flex
        flex-direction column
        align-items center
        padding 0 14px
        font-size .13rem
        font-weight 500
        letter-spacing .8px
        width auto
        height .40rem
        text-align center
        line-height .40rem 
        color #333333
        span
          display block
          background-color #fff
          width 18px
          height 5px 
&.active
 color #c14374
 display flex
 flex-direction column
 align-items center
 span
  display block
  width 18px
  height 5px 
  $border(0px 0px 5px 0 ,#c14374)
</style>