<template>
  <div>
    <div class="pinlun">
      <div class="comment_title">
        <div data-v-94b0c646 class="t-title t-title__score">
          <div data-v-94b0c646 class="left-txt">
            <span data-v-94b0c646>
              评分:
              <span data-v-94b0c646 style="font-size: 14px;">&nbsp;{{list.comment_average_score}}</span>
            </span>
            <!---->
          </div>
          <div data-v-94b0c646 class="right-block">
            <span data-v-94b0c646 class="dest_span">查看全部(2)</span>
            <!---->
            <i data-v-94b0c646 class="van-icon van-icon-arrow">
              <!---->
            </i>
          </div>
        </div>
      </div>
      <div data-v-2258e5e6 class="evaluate">
        <!---->
        <div data-v-2258e5e6 class="evaluate-right" style="margin-left: 0px;">
          <div data-v-2258e5e6 class="evaluate-user">
            <div data-v-2258e5e6 class="evaluate-user__info">
              <div data-v-2258e5e6 class="evaluate-user__nickname">{{list.comment[0].name}}</div>
            </div>
            <div data-v-2258e5e6 class="evaluate-user__date">{{list.comment[0].time}}</div>
          </div>
          <div data-v-2258e5e6 class="evaluate-rate">
            <div data-v-2258e5e6 class="evaluate-rate__flexbox">
              <div data-v-2258e5e6 class="evaluate-rate__item">
                <span data-v-2258e5e6>行程安排</span>
                <van-rate v-model="list.comment[0].trip_score" readonly size="12" :allow-half="true" />
              </div>
              <div data-v-2258e5e6 class="evaluate-rate__item">
                <span data-v-2258e5e6>餐饮住宿</span>
                <van-rate v-model="list.comment[0].hotel_score" readonly size="12" :allow-half="true" />
              </div>
            </div>
            <div data-v-2258e5e6 class="evaluate-rate__flexbox">
              <div data-v-2258e5e6 class="evaluate-rate__item">
                <span data-v-2258e5e6>导游服务</span>
                <van-rate v-model="list.comment[0].guide_score" readonly size="12" :allow-half="true" />
              </div>
              <div data-v-2258e5e6 class="evaluate-rate__item">
                <span data-v-2258e5e6>旅游交通</span>
                <van-rate v-model="list.comment[0].traffic_score" readonly size="12" :allow-half="true" />
              </div>
            </div>
          </div>
          <div
            data-v-2258e5e6
            class="evaluate-txt evaluate-txt--overflow"
            style="-webkit-line-clamp: 1;"
          >{{list.comment[0].content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],

};
</script>

<style lang='stylus' scoped>
.pinlun
  background #fff
  margin-top 10px
.comment_title
  padding 0.11rem 0.17rem 0
.t-title
  width 100%
  display -webkit-box
  display -ms-flexbox
  display flex
  -webkit-box-pack justify
  -ms-flex-pack justify
  justify-content space-between
.t-title.t-title__score .left-txt span
  color #ff9900
.t-title .left-txt span:first-child
  font-family PingFangSC-Regular
  font-size 0.14rem
  line-height 0.23rem
.t-title .right-block .dest_span
  font-family PingFangSC-Light
  font-size 0.12rem
  color #333333
  letter-spacing 0
  line-height 0.23rem
  font-weight 300
  vertical-align top
.evaluate-user
  display -webkit-box
  display -ms-flexbox
  display flex
  -webkit-box-pack justify
  -ms-flex-pack justify
  justify-content space-between
  -webkit-box-align center
  -ms-flex-align center
  align-items center
.evaluate-user__info
  display -webkit-box
  display -ms-flexbox
  display flex
  -webkit-box-align center
  -ms-flex-align center
  align-items center
.evaluate-user__date
  font-size 0.12rem
  color #898989
  letter-spacing 0
.evaluate
  background #FFFFFF
  text-align left
  padding 0.17rem
.evaluate-rate
  margin 0.1rem 0 0.1rem
.evaluate-rate__flexbox
  display flex
  justify-content space-between
.evaluate-rate__item
  display flex
  align-items center
.evaluate .van-rate__item
  padding 0 0.05333rem
  margin 0 -0.05333rem
.evaluate-rate__item > span
  font-size 0.14rem
  color #898989
  letter-spacing 0
  margin-right 0.05rem
  position relative
.evaluate-txt--overflow
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  -webkit-line-clamp 8
  -webkit-box-orient vertical
.evaluate-txt
  font-size 0.12rem
  color #333
  letter-spacing 0
</style>