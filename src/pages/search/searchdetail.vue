<template>
  <!-- titleList.length<=0 -->
  <div>
    <div v-if="titleList.length<=0" class="flexgr">
      <van-skeleton :row="5" :row-width="['18%','18%','18%','18%','18%','18%']" />
      <van-skeleton :row="1" :row-width="['18%']" />
    </div>
    <van-tabs @change="onClick" v-else>
      <div class="fenlei">
        <div class="price" v-if="care" @click="handelcClick">
          价格
          <svg
            t="1574231399892"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="834"
            width="10"
            height="10"
          >
            <path
              d="M836.8 633.6H187.2c-32 0-51.2 20.8-35.2 36.8 24 25.6 310.4 324.8 324.8 339.2 17.6 19.2 56 16 72 0C560 998.4 854.4 688 872 670.4c16-17.6-4.8-35.2-35.2-36.8zM187.2 390.4h649.6c30.4 0 51.2-19.2 35.2-36.8-17.6-17.6-312-328-324.8-340.8-14.4-16-52.8-17.6-72 0C462.4 28.8 176 328 152 353.6c-16 16 3.2 36.8 35.2 36.8z"
              fill
              p-id="835"
            />
          </svg>
        </div>
        <div class="price" style="color:red" v-else @click="handelcClickTwo">
          价格
          <svg
            t="1574231399892"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="834"
            width="10"
            height="10"
          >
            <path
              d="M836.8 633.6H187.2c-32 0-51.2 20.8-35.2 36.8 24 25.6 310.4 324.8 324.8 339.2 17.6 19.2 56 16 72 0C560 998.4 854.4 688 872 670.4c16-17.6-4.8-35.2-35.2-36.8zM187.2 390.4h649.6c30.4 0 51.2-19.2 35.2-36.8-17.6-17.6-312-328-324.8-340.8-14.4-16-52.8-17.6-72 0C462.4 28.8 176 328 152 353.6c-16 16 3.2 36.8 35.2 36.8z"
              fill="#d81e06"
              p-id="835"
            />
          </svg>
        </div>
      </div>
      <div>
        <van-tab
          v-for="index1,index in titleList"
          :type="index1.type"
          :replace="false"
          :title="index1.title"
          :key="index"
        ></van-tab>
      </div>
    </van-tabs>

    <div class="flexBox">
      <bscroll-car :TitleList="titleList" :titleFont="Title" :price="price" :value1="value3"></bscroll-car>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { get } from "utils/http";
import bscrollCar from "components/bscrollCar";
import { Tab, Tabs, Skeleton, Toast } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Skeleton)
  .use(Toast);
import "vant/lib/index.css";
export default {
  data() {
    return {
      titleList: [],
      keywords: "",
      value3: "",
      Title: "",
      care: true,
      price: ""
    };
  },
  components: {
    bscrollCar
  },
  async mounted() {
    let result = await get({
      url: "/api/v3/m1/product/list/type",
      params: {
        keywords: this.$route.params.keyworlds,
        theme_id: "",
        district_id: "",
        platform: 4
      }
    });
    if (result.data.list == false) {
      Toast({
        message: "没有数据~",
        position: "bottom",
        duration: 1000
      });
      this.$router.push({ path: "/search" });
    } else {
      this.titleList = result.data.list;
    }
  },
  watch: {
    async $route(to, from) {
      let result = await get({
        url: "/api/v3/m1/product/list/type",
        params: {
          keywords: to.params.keyworlds,
          theme_id: "",
          district_id: "",
          platform: 4
        }
      });
      this.titleList = result.data.list;
      this.value3 = to.params.keyworlds;
    }
  },
  methods: {
    onClick(name, title) {
      this.Title = this.$toast(title).message;
    },
    handelcClick() {
      this.care = !this.care;
      this.price = 2;
    },
    handelcClickTwo() {
      this.care = !this.care;
      this.price = "";
    }
  }
};
</script>

<style lang='stylus' scoped>
.van-skeleton__row
  margin-top 12px
  height 24px
.van-skeleton__content
  display flex !important
  justify-content space-around
.flexgr
  display flex
  flex-direction column
.fenlei
  height 0.44rem
.flexBox
  height 5rem
  padding 0 5%
  overflow hidden
.price
  font-size 0.15rem
  text-align center
  line-height 0.44rem
</style>