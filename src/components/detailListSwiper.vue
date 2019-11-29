<template>
   <div class="swiperParent">
       <swiper :options="swiperOption" ref="mySwiper" v-if="list.length">
       <swiper-slide v-for="list in List" :key="list.id" >
                   <img alt="" height="210" :src="list.img" @click="handclick(list.id)">
                   <div class="bm-product-item-info">
                       <div class="bm-product-item-title">{{list.title}}</div>
                       <div class="bm-product-item-subtitle">
                           <span>{{list.subtitle}}</span>
                           </div>
                             <div class="bm-product-item-bottom">
                               <ul class="bm-product-item-tags">
                                   <div>
                                        <li v-for='mark,index in list.mark' :key="index">{{mark.name}}</li>
                                   </div>
                                   <div class="bm-product-item-price">￥{{list.price.replace(/\.00/,'')}}起</div>
                                   </ul>
                                  
                                </div>
                            </div>
        </swiper-slide>
       </swiper>
   </div>
</template>

<script>
   export default {
       props: ['list'],
        data(){
           return {
               swiperOption:{
               direction : 'horizontal',
               slidesPerView :1.03,
             },
             List:[]
           }
       },
       watch:{
            list(value){
                this.List=value
            }
        },
        methods:{
            handclick(id){
               this.$router.push({path:'/BMdetail/'+id})
            }
        }
   }
</script>

<style lang='stylus' scoped>
.swiperParent
    img
     width 95%
    .bm-product-item-title {
        font-size: .15rem;
        color: #333;
        letter-spacing: 0;
        font-weight: 500;
        margin-bottom: .06rem;
    }
    .bm-product-item-subtitle {
        font-size: .11rem;
        color: #898989;
        letter-spacing: .15px;
        margin-bottom: .09rem;
    }
    .bm-product-item-subtitle span:after {
        content: "";
        display: inline-block;
        width: .01rem;
        height: .08rem;
        background: #ccc;
        margin: 0 .04rem;
    }
    .bm-product-item-tags {
        display: flex;
        flex-wrap: wrap;
        padding-right:10%;
        margin: 0;
        justify-content space-between
    }
    .bm-product-item-tags div{
         display: flex;
        flex-wrap: wrap;
        padding:0;
        margin: 0;
    }
    .bm-product-item-tags div li {
        list-style: none;
        border: .5px solid rgba(193,67,116,.2);
        padding: 3px 6px;
        font-size: 10px;
        color: #c14374;
        letter-spacing: .2px;
        margin-right: 9px;
    }
    .bm-product-item-price 
        font-size 18px
        margin-right 0
        color #c04374
        letter-spacing .8px
        white-space nowrap

</style>