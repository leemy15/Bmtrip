<template>
  <div class="Main">
    <van-popup v-model="show" closeable>
      <div class="kefuBox">
        <div class="kefuTitle">联系客服</div>
        <div class="kefuImgBox">
          <div class="ImgBox"><svg class="svgBox" id="icon-icon_consult_px" viewBox="0 0 1024 1024"><path d="M85.679543 340.655543C39.716571 369.883429 10.4448 424.228571 10.4448 491.1104c0 96.109714 58.514286 175.542857 154.667886 175.542857a37.4784 37.4784 0 0 0 37.610057-37.610057V357.346743c0-16.6912-12.536686-33.426286-29.257143-37.624686C231.936 181.803886 361.515886 85.679543 512 85.679543s280.049371 96.109714 338.549029 234.057143c-16.735086 4.183771-29.271771 16.720457-29.271772 37.595428v271.711086a37.4784 37.4784 0 0 0 37.610057 37.610057c8.3968 0 16.735086 0 25.088-4.183771-12.536686 71.036343-41.7792 125.381486-75.234743 163.006171-20.8896 25.073371-37.624686 41.808457-54.315885 50.146743-6.290286 3.130514-11.966171 7.3728-16.720457 12.536686-4.1984 0-4.1984 0-4.1984 4.1984h-71.036343c-12.536686-41.808457-58.514286-71.080229-112.859429-71.080229-62.683429 0-117.028571 41.808457-117.028571 96.1536 0 54.315886 50.146743 96.109714 117.028571 96.109714 54.359771 0 96.124343-29.257143 112.859429-71.036342h75.234743c12.536686 0 16.720457-4.183771 25.073371-8.382172 8.338286-4.154514 16.735086-8.338286 25.073371-16.676571 20.8896-12.551314 41.808457-33.470171 66.881829-58.558172 41.7792-50.146743 79.389257-121.183086 87.771429-217.307428 45.962971-29.257143 71.050971-83.616914 71.050971-146.314972 0-66.852571-29.271771-121.197714-75.234743-150.454857C883.975314 148.3776 712.616229 10.4448 512 10.4448S140.024686 148.3776 85.679543 340.655543z"></path></svg></div>
          <div class="phoneNumber">400-021-9988</div>
        </div>
        <div class="kefuBotton">立即拨打</div>
        <div class="kefuTime">服务时间：周一至周日9:00-22:00</div>
      </div>
    </van-popup>
    <div class="main123">
      <div class="headerLin">
        <div class="leftheader">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQgMTcuNjZMOC4zNCAxMiAxNCA2LjM0Ii8+PC9nPjwvc3ZnPg=="
            alt
            @click="back"
          />
        </div>

        <div>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYgNikiIHN0cm9rZT0iI0ZGRiI+PGNpcmNsZSBjeD0iMiIgY3k9IjYiIHI9IjIiLz48Y2lyY2xlIGN4PSI5IiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiLz48cGF0aCBkPSJNMy44MyA1LjI3bDMuNDYtMi4xMU0zLjcyIDYuOThsNC4zNyAyLjM5Ii8+PC9nPjwvZz48L3N2Zz4="
            alt
          />
        </div>
      </div>
      <tutle-swiper :list="List.product_img_wx"></tutle-swiper>
      <div ref="container" class="uiui1">
        <van-sticky :container="container" class="uiui">
          <div class="title" type="warning">
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05IDE4YS40Ny40NyAwIDAxLS4zNS0uMTVMLjE2IDkuMzVhLjUuNSAwIDAxMC0uN0w4LjY1LjE2YS41LjUgMCAwMS44NDguMzU1LjUuNSAwIDAxLS4xNDguMzU1TDEuMjIgOWw4LjEzIDguMTNhLjUuNSAwIDAxMCAuNzFBLjQ3LjQ3IDAgMDE5IDE4eiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"
                alt
                @click="back"
              />
            </div>
            <div class="OneTitle">{{List.title}}</div>
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNCAxMC41YTMuNDcgMy40NyAwIDAwLTMuMSAxLjkybC0zLjYxLTIuMjZBMy40MSAzLjQxIDAgMDA3LjUgOWEzLjYgMy42IDAgMDAtLjI5LTEuMzlsMi4xMi0xLjM3QTMuNDggMy40OCAwIDEwOC41IDRjLjAwMi40ODEuMTAxLjk1Ny4yOSAxLjRMNi42NyA2Ljc3QTMuNDYgMy40NiAwIDAwNCA1LjVhMy41IDMuNSAwIDEwMi44MiA1LjU1bDMuNzQgMi4zNGE0LjA3IDQuMDcgMCAwMC0uMDYuNjEgMy41IDMuNSAwIDEwMy41LTMuNXptLTItOWEyLjUgMi41IDAgMTEwIDUgMi41IDIuNSAwIDAxMC01em0tOCAxMGEyLjUgMi41IDAgMTEwLTUgMi41IDIuNSAwIDAxMCA1em0xMCA1YTIuNSAyLjUgMCAxMTAtNSAyLjUgMi41IDAgMDEwIDV6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
                alt
              />
            </div>
          </div>
        </van-sticky>
        <detaile-price :list="List"></detaile-price>
        <ping-Lun :list="List" v-if="List.comment_count"></ping-Lun>
        <go-city :list="List"></go-city>
        <chanpin :neirong="neirong1" :list="List"></chanpin>
      </div>
    </div>
    <div class="fotter">
      <div
        class="shoucang"
        @click="collect(List.id,List.title,List.destination,List.product_img_wx[0].url,List.min_price)"
      >
        <span>
          <svg
            v-if="collectCare"
            t="1574750076131"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2309"
            width="19"
            height="19"
          >
            <path
              d="M245.746638 1023.944323a90.235093 90.235093 0 0 1-71.036138-30.71833 139.512414 139.512414 0 0 1-24.318678-106.874188l6.399652-228.467577-127.99304-163.831092a136.952553 136.952553 0 0 1-23.038747-119.673493 120.313458 120.313458 0 0 1 85.115372-72.956033l213.748377-63.99652L410.85766 63.99652A118.393562 118.393562 0 0 1 511.972162 0a127.99304 127.99304 0 0 1 99.194606 58.876799l127.99304 191.98956 191.989561 52.477147A127.99304 127.99304 0 0 1 1020.104532 383.979121a127.99304 127.99304 0 0 1-26.238573 113.913806l-136.952554 184.309978 11.519374 204.788865c-5.119722 125.43318-85.115372 136.952553-109.43405 136.952553a163.191126 163.191126 0 0 1-49.917285-8.319548l-211.188517-81.27558-183.030048 74.875928a202.868969 202.868969 0 0 1-69.116241 14.7192zM511.972162 63.99652a63.99652 63.99652 0 0 0-46.077495 33.278191l-119.033528 191.98956-236.787124 72.956033a63.99652 63.99652 0 0 0-46.077495 33.278191 80.635615 80.635615 0 0 0 15.99913 63.99652l141.43231 176.630396-7.039617 255.98608a88.315198 88.315198 0 0 0 9.599478 63.996521c6.399652 7.679582 24.958643 14.079234 68.476276 0l205.42883-83.835442 232.947334 87.035268a98.554641 98.554641 0 0 0 28.798434 5.119721c11.519374 0 42.877669 0 45.437529-63.99652l-12.799304-226.547681 7.039617-10.239444 143.352205-191.98956A73.595998 73.595998 0 0 0 959.947803 403.178077c-4.479756-15.359165-19.838921-28.158469-46.077495-37.757947L697.56207 307.183297 558.049656 94.71485A63.99652 63.99652 0 0 0 511.972162 63.99652z"
              p-id="2310"
              fill="#d81e06"
            />
          </svg>
          <svg
            v-else
            t="1574750076131"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2309"
            width="19"
            height="19"
          >
            <path
              d="M245.746638 1023.944323a90.235093 90.235093 0 0 1-71.036138-30.71833 139.512414 139.512414 0 0 1-24.318678-106.874188l6.399652-228.467577-127.99304-163.831092a136.952553 136.952553 0 0 1-23.038747-119.673493 120.313458 120.313458 0 0 1 85.115372-72.956033l213.748377-63.99652L410.85766 63.99652A118.393562 118.393562 0 0 1 511.972162 0a127.99304 127.99304 0 0 1 99.194606 58.876799l127.99304 191.98956 191.989561 52.477147A127.99304 127.99304 0 0 1 1020.104532 383.979121a127.99304 127.99304 0 0 1-26.238573 113.913806l-136.952554 184.309978 11.519374 204.788865c-5.119722 125.43318-85.115372 136.952553-109.43405 136.952553a163.191126 163.191126 0 0 1-49.917285-8.319548l-211.188517-81.27558-183.030048 74.875928a202.868969 202.868969 0 0 1-69.116241 14.7192zM511.972162 63.99652a63.99652 63.99652 0 0 0-46.077495 33.278191l-119.033528 191.98956-236.787124 72.956033a63.99652 63.99652 0 0 0-46.077495 33.278191 80.635615 80.635615 0 0 0 15.99913 63.99652l141.43231 176.630396-7.039617 255.98608a88.315198 88.315198 0 0 0 9.599478 63.996521c6.399652 7.679582 24.958643 14.079234 68.476276 0l205.42883-83.835442 232.947334 87.035268a98.554641 98.554641 0 0 0 28.798434 5.119721c11.519374 0 42.877669 0 45.437529-63.99652l-12.799304-226.547681 7.039617-10.239444 143.352205-191.98956A73.595998 73.595998 0 0 0 959.947803 403.178077c-4.479756-15.359165-19.838921-28.158469-46.077495-37.757947L697.56207 307.183297 558.049656 94.71485A63.99652 63.99652 0 0 0 511.972162 63.99652z"
              p-id="2310"
            />
          </svg>
        </span>
        <span v-if="collectCare" class="shoucangspan" style="color:red">收藏</span>
        <span v-else class="shoucangspan">收藏</span>
      </div>
      <div class="kefu">
        <span>
          <svg
            @click="showPopup"
            data-v-b02d2628
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              data-v-b02d2628
              stroke="#333"
              stroke-linejoin="round"
              fill="none"
              fill-rule="evenodd"
            >
              <path data-v-b02d2628 d="M2.18 14.46a9 9 0 113.29 3.32" stroke-linecap="round" />
              <path
                data-v-b02d2628
                d="M14.85 5.56c1.49 1.49.58 3.82-.35 5.35a8.69 8.69 0 01-1.33 1.69 9 9 0 01-5.38 2.58c-.93.1-2.22.24-2.94-.48a1.7 1.7 0 010-2.39 1.74 1.74 0 012.37 0c.47.42 4.16-1.09 4.41-2.22 0-.06-.07 0-.76-.53a2.71 2.71 0 010-4 2.81 2.81 0 013.98 0z"
              />
            </g>
          </svg>
        </span>
        <span class="shoucangspan">客服</span>
      </div>
      <div class="buttonOne">我要定制</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import store from "@/store";
import tutleSwiper from "./headTitle";
import pingLun from "./pinglun";
import goCity from "./goCity";
import detailePrice from "./detailePrice";
import chanpin from "./chanpin";
import { get } from "utils/http";
import {
  Swipe,
  SwipeItem,
  Sticky,
  Tab,
  Tabs,
  button,
  Rate,
  Popup,
  Cell
} from "vant";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Sticky)
  .use(Tab)
  .use(Tabs)
  .use(button)
  .use(Rate)
  .use(Popup)
  .use(Cell);
export default {
  data() {
    return {
      neirong1: [],
      container: null,
      List: "",
      collectCare: false,
      Midcase: false,
      show: false
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    showPopup() {
      this.show = true;
    },
    collect(id, title, destination, url, price) {
      this.collectCare = !this.collectCare;
      if (this.collectCare) {
        if (store.state.collect.length > 0) {
          for (let i = 0; i < store.state.collect.length; i++) {
            if (store.state.collect[i].id == this.$route.params.id) {
              this.Midcase = true;
            }
          }
          if (this.Midcase == false) {
            store.commit("collectMethod", [id, title, destination, url, price]);
          }
        } else {
          store.commit("collectMethod", [id, title, destination, url, price]);
        }
      } else {
        for (let i = 0; i < store.state.collect.length; i++) {
          if (store.state.collect[i].id == this.$route.params.id) {
            store.commit("removeCollect", i);
          }
        }
      }
      console.log(store.state.collect);
    }
  },
  components: {
    tutleSwiper,
    pingLun,
    goCity,
    chanpin,
    detailePrice
  },

  async mounted() {
    for (let i = 0; i < store.state.collect.length; i++) {
      if (store.state.collect[i].id == this.$route.params.id) {
        this.collectCare = true;
      }
    }
    this.container = this.$refs.container;
    let result = await get({
      url: "/api/v3/m1/product/detail",
      params: {
        product_id: this.$route.params.id,
        platform: 4
      }
    });
    this.List = result.data;
    if (result.data.feature.length != 0) {
      this.neirong1 = result.data.feature[0].content;
    }
  }
};
</script>

<style lang='stylus' scoped>
.shoucangspan
  position relative
  top -0.05rem
span
  text-align center
.fotter
  height 0.54rem
  background-color #fff
  display flex
  align-items center
  justify-content space-around
  padding 0 0.18rem
.shoucang, .kefu
  padding-top 0.1rem
  width 0.5rem
  display flex
  flex-direction column
.buttonOne
  border-radius 0.05rem
  color #FFFFFF
  font-weight 900
  font-family PingFangSC-Regular
  background-color #C04374
  font-size 0.15rem
  text-align center
  line-height 0.45rem
  width 2.14rem
  height 0.45rem
.Main
  height 100%
  background #F5F5F5
  display flex
  flex-direction column
.OneTitle
  width 70%
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  text-align center
.headerLin
  height 0.44rem
  display flex
  align-items center
  justify-content space-between
  padding 0 0.18rem
  position absolute
  z-index 5
  width 100%
.title
  display flex
  align-items center
  padding 0 0.24rem
  position absolute
  height 44px
  background-color #fff
  z-index -1
  width 100%
  justify-content space-between
.uiui1
  position relative
  z-index 97
.main123
  flex 1
  width 100%
  height 100%
  overflow-y scroll
  overflow-x hidden
.kefuBox
  display flex
  flex-direction column
  padding 0 .18rem
  height 3.8rem
  width 3rem
.kefuTitle
  height .3rem
  text-align left
  line-height .3rem
  margin-top .07rem
  font-size .18rem
.kefuImgBox
  display flex
  flex-direction column
  align-items center
  margin-top .6rem
.ImgBox
  width .782rem
  height .782rem
  text-align center
.phoneNumber
  font-size .3rem
  margin-top .05rem
  color: #C04374
  font-weight 900
.kefuBotton
  width 100%
  height .45rem
  background-color #C04374
  color #ffffff
  text-align center
  margin-top .3rem
  line-height .45rem
.kefuTime
  margin-top .2rem
  text-align center
.svgBox
  fill #C04374
</style>