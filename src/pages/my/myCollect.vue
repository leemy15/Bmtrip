<template>
  <div class="myCollect">
    <div class="header" @click="handClick">
      <div class="headerOne">
        <svg
          t="1574769821876"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1455"
          width="16"
          height="16"
        >
          <path
            d="M318.803148 489.952312 300.45509 511.994885 318.803148 534.037458 662.730144 947.216647C674.890167 961.825179 696.57699 963.798938 711.169018 951.625162 725.761045 939.451385 727.732576 917.740034 715.572552 903.131502L371.645555 489.952312 371.645555 534.037458 715.572552 120.858268C727.732576 106.249736 725.761045 84.538386 711.169018 72.364609 696.57699 60.190832 674.890167 62.164591 662.730144 76.773123L318.803148 489.952312Z"
            p-id="1456"
          />
        </svg>
      </div>
      <div class="headerFont">我的收藏</div>
    </div>

      <ul>
        <li v-for="(list,index) in List" :key="list.id">
        <router-link tag="div" class="liBox" :to="'/BMdetail/'+list.id">
          <div class="imgBox">
            <img
              :src="list.url"
              alt
            />
          </div>
          <div class="LeftMain">
            <div>{{list.title}}</div>
            <div>￥{{list.price}}</div>
            <div class="remove">
              <span>{{list.destination}}</span>
            </div>
          </div>
          </router-link>
           <div class="colorFont"><span class="FontSpan" @click="removeClick(index)">移除</span></div>
        </li>
      </ul>
    </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      List: store.state.collect
    };
  },
  methods: {
    handClick() {
      this.$router.back();
    },
    removeClick(i){
         store.commit("removeCollect", i);
    }
  },
};
</script>

<style lang='stylus' scoped>
.header
  height 0.46rem
  background-color #fff
  display flex
  align-items center
  padding 0 0.18rem

.headerFont
  flex 1
  text-align center
  font-size 0.15rem
li
    height 1.1rem
    background-color #fff
.liBox
  height 1.1rem
  margin-top 0.15rem
  display flex
  padding 0.15rem 0.15rem
.imgBox
  width 30%
img
  width 100%
  height 100%
.LeftMain
  display flex
  flex-direction column
  justify-content space-around
  width 100%
  padding 0 0.18rem
.remove
  display flex
  justify-content space-between
.colorFont
  color #c04374
  text-align right 
  display block
  position relative
  top -.35rem
  right .2rem
  
.FontSpan
  padding .1rem
ul
  height 6.10rem
  overflow-y scroll
</style>