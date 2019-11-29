<template>
  <div class="sousuoMain">
    <div>
        <div action="/">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch(value)"
            @cancel="onCancel"
          />
        </div>
    </div>
    <div class="fr">
      <router-view>

      </router-view>
     </div>
     <div class="sousuoLishi" v-if="care">
         <div class="sousuoTitle">搜索历史</div>
         <div class="lishiMain">
           <div @click="handclick(lis)"  class="lishiBox" v-for="(lis,index) in Lishi" :key="index">{{lis}}</div>
         </div>
     </div>
  </div>
</template>

<script>
import Vue from 'vue';
import store from "@/store";
import { get } from 'utils/http'
import { Search} from 'vant';
Vue.use(Search)
import 'vant/lib/index.css';
export default {
  data(){
    return{
      value:'',
      Lishi:[],
      care:true
    }
  },
    methods:{
      onSearch(keyworlds){
        this.$router.push({ name: 'searchDetail', params: {keyworlds}})
         store.commit("sousuojilu", keyworlds);
         this.care=false
      },
      onCancel(){
        this.$router.back()
        this.care=true
      },
      handclick(lis){
        console.log(1);
        this.value=lis
        this.$router.push({path:'/search/'+lis})
        this.care=false
      }
    },
    mounted(){
     this.care=true
     this.Lishi=store.state.sousuojilu
     this.value=this.$route.params.keyworlds
    }

};
</script>

<style lang='stylus' scoped>
.sousuoMain
  display flex
  flex-direction column
  height 100%
  background-color #fff
.fr
  position relative
  background-color #fff
.sousuoTitle
  font-size .18rem
  color #999
  margin .1rem 0 0 .1rem
.sousuoLishi
  width 100%
.lishiMain
  display flex
  width 100%
  margin-top .1rem
  flex-wrap wrap
.lishiBox
  text-align center
  width 29%
  margin .1rem 2% .1rem 2%
  height .3rem
  line-height .3rem
  background-color #F6F6F6
  color #333
</style>