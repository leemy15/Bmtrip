<template>
  <div class="Warp">
    <div>
        <div>
        <div class="fee_label">费用包含</div>
         <div v-html="list.www_fee_contain">{{list.www_fee_contain}}</div>
        </div>
        <div>
        <div class="fee_label">费用不含</div>
         <div v-html="list.www_fee_not_contain">{{list.www_fee_not_contain}}</div>
        </div>
        <div>
        <div class="fee_label">预定需知</div>
         <div v-html="list.www_notice">{{list.www_notice}}</div>
         <div v-html="list.tip">{{list.tip}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['list']
};
</script>

<style lang='stylus' scoped>
.Warp
  margin-top .1rem 
  padding 0 .18rem
  background-color #fff
  padding-top 0.12rem
.fee_label
  text-align left
  font-size 0.15rem
  color #333333
  padding-left 0.1rem
  position relative
  margin-bottom 0.12rem
  margin-top 0.12rem
  font-weight bold
.fee_label::before
  content ''
  position absolute
  left 0
  top 50%
  -webkit-transform translateY(-50%)
  transform translateY(-50%)
  width 0.02rem
  height 0.12rem
  background #C14374
  border-radius 0.01rem
</style>