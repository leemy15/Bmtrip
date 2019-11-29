<template>
  <div class="xingcheng">
    <div class="journey-item" v-for="List in list">
      <div class="journey-item__label">
        <span class="journey-item-day">D{{List.day}}</span>
        <span class="journey-item-title">{{List.title}}</span>
      </div>
      <div class="journey-item__content">
        <div class="journey-item__info journey-item__route">
          <div class="journey-item__title journey-item__title__route"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxwYXRoIGQ9Ik04IDJhNSA1IDAgMDAtNSA1YzAgMi42MyA0LjE5IDYuNDUgNC42NyA2Ljg3YS40OC40OCAwIDAwLjY2IDBDOC44MSAxMy40NSAxMyA5LjYzIDEzIDdhNSA1IDAgMDAtNS01em0wIDEwLjgyQzYuNjQgMTEuNTQgNCA4LjcgNCA3YTQgNCAwIDExOCAwYzAgMS43LTIuNjQgNC41NC00IDUuODJ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOCA0LjVhMi41IDIuNSAwIDEwMCA1IDIuNSAyLjUgMCAwMDAtNXptMCA0YTEuNSAxLjUgMCAxMTAtMyAxLjUgMS41IDAgMDEwIDN6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+" alt="">具体行程</div>
          <div class="journey-item__info-content">
              <div class="journey-item__info-content-item" v-for="doing in List.plans_detail">
              <span class="j-label">{{doing.time}}</span>
              <span class="j-text">{{doing.name}}</span>
            </div>
          </div>
        </div>
        <div class="journey-item__info journey-item__cooking">
          <div class="journey-item__title journey-item__title__cooking"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxwYXRoIGQ9Ik0xMy41IDExaC0xMWEuNS41IDAgMTAwIDFoMTFhLjUuNSAwIDEwMC0xeiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0yLjUgOS44OWgxMWEuNS41IDAgMDAuNS0uNSA2IDYgMCAwMC00LjUtNS44di0uMDhhMS41IDEuNSAwIDAwLTMgMHYuMDhBNiA2IDAgMDAyIDkuMzlhLjUuNSAwIDAwLjUuNXpNOCAzYS40OS40OSAwIDAxLjQ4LjQxIDMuODYgMy44NiAwIDAwLTEgMEEuNDkuNDkgMCAwMTggM3ptMCAxLjM5YTUgNSAwIDAxNSA0LjVIM2E1IDUgMCAwMTUtNC41eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==" alt="">餐饮</div>
          <div class="journey-item__info-content">
            <div class="journey-item__info-content-item">
              <span class="j-label">早</span>
              <span class="j-text">{{List.breakfast}}</span>
            </div>
            <div class="journey-item__info-content-item">
              <span class="j-label">午</span>
              <span class="j-text">{{List.lunch}}</span>
            </div>
            <div class="journey-item__info-content-item">
              <span class="j-label">晚</span>
              <span class="j-text">{{List.dinner}}</span>
            </div>
          </div>
        </div>
        <div class="journey-item__info journey-item__traffic">
          <div class="journey-item__title journey-item__title__traffic"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxwYXRoIGQ9Ik0xMy4zNCA2LjMzQS41LjUgMCAwMDEzIDYuMmgtLjU5bC0xLTMuMTNhLjQ4LjQ4IDAgMDAtLjQ3LS4zNGgtNS44YS40OC40OCAwIDAwLS40Ny4zNGwtMSAzLjE0LS42Mi0uMDFhLjQ3LjQ3IDAgMDAtLjM4LjEzLjQ4LjQ4IDAgMDAtLjE3LjM3VjEyYTEuNSAxLjUgMCAwMDMgMGMxIC4wNiAxLjc4LjA5IDIuNDguMDlzMS41IDAgMi41Mi0uMVYxMmExLjUgMS41IDAgMDAzIDBWNi43YS41MS41MSAwIDAwLS4xNi0uMzd6TTUuNSAzLjc4aDVsLjgzIDIuNTZjLTEuMDYuMDgtMi40MS4xNy0zLjM1LjE3cy0yLjMxLS4wOS0zLjMxLS4xNmwuODMtMi41N3ptNyA4LjIyYS41LjUgMCAxMS0xIDB2LS41OGEuNTIuNTIgMCAwMC0uMTYtLjM3LjQ3LjQ3IDAgMDAtLjM0LS4xM2MtMS4yMy4wOS0yLjIzLjEzLTMgLjEzcy0xLjgyLS4wNS0zLS4xM2EuNTMuNTMgMCAwMC0uMzguMTQuNS41IDAgMDAtLjE2LjM2VjEyYS41LjUgMCAxMS0xIDBWNy4yNWwuNzQuMDZhMjkuMzEgMjkuMzEgMCAwMDMuOC4zMSAzMi43MSAzMi43MSAwIDAwMy44NC0uMzJoLjY2VjEyeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PGNpcmNsZSBmaWxsPSIjRkZGIiBjeD0iNSIgY3k9IjkiIHI9IjEiLz48Y2lyY2xlIGZpbGw9IiNGRkYiIGN4PSIxMSIgY3k9IjkiIHI9IjEiLz48L2c+PC9zdmc+" alt="">交通</div>
          <div class="journey-item__info-content">
            <div class="journey-item__info-content-item">
              <span class="j-text">{{List.traffic}}</span>
            </div>
          </div>
        </div>
        <div class="journey-item__info journey-item__guide">
          <div class="journey-item__title journey-item__title__guide"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTggOC41YTIgMiAwIDAwMi0ydi0xYTIgMiAwIDEwLTQgMHYxYTIgMiAwIDAwMiAyem0tMS0zYTEgMSAwIDExMiAwdjFhMSAxIDAgMTEtMiAwdi0xeiIvPjxwYXRoIGQ9Ik0xNS4zMiA2LjE4bC0yLjU5LTEuNWEuNTIuNTIgMCAwMC0uNjkuMTlsLTEuNSAyLjU5LTEuMTcgMkg2QTIuNSAyLjUgMCAwMDMuNSAxMmEuNS41IDAgMDAuNS41aDhhLjUuNSAwIDAwLjUtLjUgMi41IDIuNSAwIDAwLTItMi40NWwuODEtMS40MSAzLjg5LTFhLjUuNSAwIDAwLjM3LS40Mi40OS40OSAwIDAwLS4yNS0uNTR6bS0zLjkxIDUuMzJINC41OWExLjUgMS41IDAgMDExLjQxLTFoNGExLjUgMS41IDAgMDExLjQxIDF6TTEyIDYuOTJsLjY1LTEuMTIgMS4xMi42NS0xLjc3LjQ3eiIvPjwvZz48L2c+PC9zdmc+" alt="">导游</div>
          <div class="journey-item__info-content">
            <div class="journey-item__info-content-item">
              <span class="j-text">{{List.guide}}</span>
            </div>
          </div>
        </div>
        <div class="journey-item__info journey-item__hotel">
          <div class="journey-item__title journey-item__title__hotel"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxwYXRoIGQ9Ik03IDkuNUg1YS41LjUgMCAwMDAgMWgyYS41LjUgMCAxMDAtMXpNNyA2LjVINWEuNS41IDAgMDAwIDFoMmEuNS41IDAgMDAwLTF6IiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTEzLjEyIDYuNTFsLTMuNjItLjlWM2EuNDYuNDYgMCAwMC0uMTgtLjM4LjQ2LjQ2IDAgMDAtLjQtLjExbC02IDFBLjUuNSAwIDAwMi41IDR2OWEuNS41IDAgMDAuNS41aDEwYS41LjUgMCAwMC41LS41VjdhLjUxLjUxIDAgMDAtLjM4LS40OXpNMy41IDQuNDJsNS0uODN2OC45MWgtNVY0LjQyem05IDguMDhoLTNWNi42NGwzIC43NXY1LjExeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==" alt="">酒店</div>
          <div class="journey-item__info-content" v-if="hotels" v-for="hotels in List.hotels">
            <div class="journey-hotel" >
                <div><img :src="hotels.img" alt=""></div>
                <div class="two">
                    <p class="hotel">{{hotels.name_cn}}</p>
                    <p class="hotel">{{hotels.name_en}}</p>
                </div>
                <div style="margin-right:10px"><svg t="1574508253999" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1441" width="16" height="16"><path d="M672.4 512.1L269 108.6c-4.4-4.4-1.2-15 7.3-23.4L291 70.5c8.4-8.4 19-11.7 23.4-7.3L755 503.8c1.8 1.8 2.3 4.8 1.7 8.1 0.7 3.4 0.2 6.4-1.7 8.2L314.3 960.8c-4.4 4.4-14.9 1.2-23.4-7.2l-14.7-14.7c-8.4-8.4-11.7-18.9-7.2-23.4l403.4-403.4z" fill="#666666" p-id="1442"></path></svg></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["list"]
};
</script>

<style lang='stylus' scoped>
.hotel
    font-size .14rem
    color #333
.journey-hotel
    height 88px
    display flex
    align-items center
    background: #F5F5F5
.journey-hotel div img
    height .88rem
    width .88rem
.two
    flex 1
    padding .09rem .12rem .16rem
.xingcheng
  margin-top .1rem
  padding .05rem .18rem
  background-color #fff
.journey-item
  margin 0.18rem 0
  text-align left
.journey-item .journey-item__label
  display flex
  min-height 0.24rem
  align-items flex-start
  margin-bottom 0.1rem
.journey-item .journey-item__label .journey-item-day
  width 0.36rem
  height 0.24rem
  background rgba(193, 67, 116, 0.1)
  border-radius 0.05rem
  line-height 0.24rem
  text-align center
  font-size 0.14rem
  color #c14374
  font-weight bold
  margin-right 0.12rem
.journey-item__label .journey-item-title
  font-size 0.14rem
  color #333333
  min-height 0.24rem
.journey-item .journey-item__content
  margin-left 0.079rem
  padding-left 0.1rem
.journey-item__info:not(:last-child)
  position relative
.journey-item__info:not(:last-child)::before
  content ''
  position absolute
  height 100%
  width 0.01rem
  background #e1e1e1
  top 0.08rem
.journey-item .journey-item__content .journey-item__title
  font-size 0.15rem
  color #333333
  position relative
  left -0.09rem
.journey-item__title img
  margin-right .05rem
.journey-item__info-content-item
  display flex
  margin-left .1rem
.journey-item .journey-item__content .journey-item__info-content
  padding 0.09rem 0 0 0.18rem
.journey-item .journey-item__content .journey-item__info-content .journey-item__info-content-item .j-label
  display block
  min-width .19rem
  background #F0F0F0
  font-size 0.13rem
  color #898989
  padding 0.01rem 0.01rem
  margin-right 0.03rem
  margin .01rem
  text-align center
.j-text
  width 80%
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
</style>