<template>
  <div style="padding:.05rem .18rem;background:#fff;margin-top:10px">
    <div v-for="speatil in List">
      <div class="t-x-high-feature-item" v-for="speatilList in speatil.list">
        <div class="t-x-high-feature-label">{{speatilList.title}}</div>
        <div class="high-feature-items">
          <div class="high-feature__item">
            <van-swipe :autoplay="3000" indicator-color="white">
              <van-swipe-item v-for="speatillist in speatilList.imgs">
                <img :src="speatillist" />
              </van-swipe-item>
            </van-swipe>

            <div class="high-feature__label" v-if="speatilList.label">{{speatilList.label}}</div>
            <div class="high-feature__title" v-if="speatilList.title">{{speatilList.title}}</div>
            <div class="high-feature__content" v-if="speatilList.content">{{speatilList.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["List"]
};
</script>

<style lang='stylus' scoped>
img
  width 100%
  height 1.89rem
.t-x-high-feature-item
  margin-top 0.3rem
.t-x-high-feature-label::before
  content ''
  position absolute
  left 0
  top 50%
  -webkit-transform translateY(-50%)
  transform translateY(-50%)
  width 0.019rem
  height 0.12rem
  background #C14374
  border-radius 0.01rem
.t-x-high-feature-label
  text-align left
  font-size 0.14rem
  color #333333
  padding-left 0.18rem
  position relative
  margin-bottom 0.12rem
  font-weight bold
.van-swipe
  border-radius 0.07rem
.high-feature__label
  display inline-block
  font-size 0.12rem
  color #C14374
  border 0.01rem solid #C14374
  border-radius 0.04rem
  padding 0.01rem 0.05rem
  margin 0.1rem 0
.high-feature__title
  font-size 0.14rem
  color #000
  margin-bottom 0.06rem
.high-feature__content
  font-size 0.13rem
  color #898989
</style>