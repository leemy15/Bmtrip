<template>
   <div>
     <div class="pro_title">
        <div class="bm-product-item-title">{{list.title}}</div>
        <div class="bm-product-item-subtitle">
          <span>{{list.label}}</span>
        </div>
        <ul class="bm-product-item-tags">
          <li v-for="mark in list.mark" :key="mark.name">{{mark.name}}</li>
        </ul>
        <div class="bm-product-item-price">￥{{list.min_price}}起</div>
    </div>
   </div>
</template>

<script>
   export default {
        props: ['list'],
   }
</script>

<style lang='stylus' scoped>
.pro_title
  margin-top 2px
  padding 0.13rem 0.17rem 0.17rem
  position relative
  text-align left
  background #fff
.bm-product-item-title
  font-size 0.15rem
  color #333
  letter-spacing 0
  font-weight 500
  margin-bottom 0.03rem
.bm-product-item-subtitle
  font-size 0.14rem
  color #898989
  letter-spacing 0.0004rem
  margin-bottom 0.03rem
.bm-product-item-subtitle span::after
  content ''
  display inline-block
  width 0.01rem
  height 0.1rem
  background #ccc
  margin 0 0.02667rem
.bm-product-item-tags
  display flex
  -ms-flex-wrap wrap
  flex-wrap wrap
  padding 0
  margin 0
  margin-bottom 0.1rem
  margin-top 0.05rem
.bm-product-item-tags li
  list-style none
  border 0.5px solid rgba(193, 67, 116, 0.2)
  padding 1px 4px
  font-size 10px
  color #c14374
  letter-spacing 0.2px
  margin-right 9px
.bm-product-item-price
  font-size 0.22rem
  color #c04374
  white-space nowrap
</style>