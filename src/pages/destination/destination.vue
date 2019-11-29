<template>
  <div class="fenlan">
    <div class="flexd" v-if="List.length<=0">
     <van-skeleton :row="8" :row-width="['80%','80%','80%','80%','80%','80%','80%','80%']" />
     <div class="rightg">
         <van-loading type="spinner" color="#1989fa" class="loading"/>
     </div>
     </div>
    <van-tree-select :items="items" :main-active-index.sync="activeIndex" class="fenlan" v-else>
      <template slot="content" v-for="item,index in items">
          <left-detail v-if="activeIndex === index" :index="List[index]" :child="list2[index]" :type="1"></left-detail>
      </template>
    </van-tree-select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import { TreeSelect , Image ,Loading} from 'vant';
import 'vant/lib/index.css';
import { get } from 'utils/http';
import leftDetail from 'pages/destination/zuoce.vue'
Vue.use(TreeSelect);
Vue.use(Image);
Vue.use(Loading);
export default {
  data() {
    return {
      activeIndex: 0,
      items: [],
      List:[],
      list2:[]
    };
  },
      components:{
        leftDetail,
    },
async mounted() {
        let result = await get({
          url: '/api/v3/m1/area/group?scene=6&platform=4'
        })
        this.List=result.data.list;       
        for(let i=0;i<this.List.length;i++)
        {   
          this.items.push({text:this.List[i].label})
        }
        for(let i=0;i<this.List.length;i++)
        {   
          this.list2.push(_.chunk(this.List[i].children, 4))
        }
        }
       
        
};
</script>

<style scoped lang="stylus">

.fenlan
   height 100% !important
.van-skeleton__row
  margin 16px 0!important
  height 24px
.van-skeleton__content
  width 1.08rem
.flexd
  height 100%
  display flex
.rightg
  height 100%
  position relative
  flex 1
.loading
   position:fixed !important
   left 60%
   top 30%
</style>