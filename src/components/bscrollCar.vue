<template>
  <div>
    
      <van-loading type="spinner" color="#1989fa" v-if="List.length<=0" class="loading"/>
        <div class="pro_card" v-for="listdetail in List" v-else  @click="handclick(listdetail.id)">
          <div
            data-v-325ec70c
            class="bm-product-item"
            product_type_name="企业游学"
            video
          >
            <a class="bm-product-item-wrap">
              <picture>
                <source :srcset="listdetail.img" />
                <img alt :src="listdetail.img" :srcset="listdetail.img"/>
              </picture>
              <div class="bm-product-item-info">
                <div class="bm-product-item-title">{{listdetail.title}}</div>
                <div class="bm-product-item-subtitle">
                  <span>{{listdetail.subtitle}}</span>
                </div>
                <div class="bm-product-item-bottom">
                  <ul class="bm-product-item-tags">
                    <li v-for="detail in listdetail.mark" :key="detail.name">{{detail.name}}</li>
                  </ul>
                  <div class="bm-product-item-price">￥{{listdetail.price}}起</div>
                </div>
              </div>
              <div class="bm-product-item-type">{{listdetail.tip_mark}}</div>
            </a>
          </div>
        </div>
    </div>
 
</template>

<script>
import Vue from 'vue';
import { Loading ,Toast} from 'vant';
Vue.use(Loading).use(Toast);
import { get } from "utils/http";
import BScroll from "better-scroll";
export default {
  props: ['TitleList','titleFont','value1','price'],
  //"type2",'value1',"title",
  data() {
    return {
      Type: 0,
      keywords: "",
      List: [],
      Title:'',
      bScroll:'',
      page:1,
      title:'全部',
      ForList:[],
      TitleFont:'全部',
      long:7,
      Air:'',
      care:true
    };
  },
  async mounted() {
    let bScroll = new BScroll(".flexBox", {
          pullUpLoad: true,
          click: true
        });
    this.bScroll=bScroll
    this.keywords = this.$route.params.keyworlds;
    this.Air=this.$route.params.keyworlds
    let result = await get({
      url: "/api/v3/m1/product/list",
      params: {
        page: 1,
        keywords: this.keywords,
        theme_id: [],
        order_by: this.Price,
        district_id: "",
        type: this.Type,
        platform: 4
      }
    });
    this.List = result.data.list;
    bScroll.on('pullingUp', async() => {
    if(this.page<Math.ceil(this.long/6)&&this.care)
    {
      this.care=false
     this.page++
     let result = await get({
       url: '/api/v3/m1/product/list',
       params: {
         page: this.page,
         keywords: this.$route.params.keyworlds,
         theme_id: [],
         order_by: this.Price,
         district_id: "",
         type: this.Type,
         platform: 4,
        }
       })
       this.long=result.data.list.total
       console.log(result);
         await this.$nextTick()
        bScroll.refresh()
        this.List = [
           ...this.List,
           ...result.data.list
           ]
       await this.$nextTick()
       bScroll.refresh()
       bScroll.finishPullUp()
       this.care=true
      }else{
        Toast({
          message: '到底了~',
          position: 'bottom',
          duration: 1000
        })  
      await this.$nextTick()
       bScroll.refresh()
       bScroll.finishPullUp()
      }
    })
    
  },
  watch:{
    TitleList(v)
    {
      this.ForList=v
    },
   async titleFont(v){
     
      
      this.long=7
      this.List=[]
      this.page=1;
      this.bScroll.scrollTo(0, 0)
      this.TitleFont=v
      for(let i=0;i<this.ForList.length;i++){
        if(this.ForList[i].title==v)
        {
          this.Type=this.ForList[i].type
        }
      } 
      this.keywords = this.$route.params.keyworlds;
      this.Air=this.$route.params.keyworlds
      let result = await get({
        url: "/api/v3/m1/product/list",
        params: {
          page: 1,
          keywords: this.keywords,
          theme_id: [],
          order_by:this.Price,
          district_id: "",
          type: this.Type,
          platform: 4
        }
      });
       this.List = result.data.list;
    },
   async value1(value){
     
      this.List=[]
      this.Type = this.type2;
      let result = await get({
      url: "/api/v3/m1/product/list",
      params: {
        page: 1,
        keywords: value,
        theme_id: [],
        order_by:this.Price,
        district_id: "",
        type: 0,
        platform: 4
      }
    });
    if(result.data.list==false){
          const toast = Toast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true,
            message: '没找到数据,2秒后返回'
          });

          let second = 2;
          const timer = setInterval(() => {
            second--;
            if (second) {
              toast.message = `倒计时 ${second} 秒`;
            } else {
              clearInterval(timer);
              Toast.clear();
              this.$router.push({path:'/search/'+this.Air})
            }
          }, 1000);
             
        }else{
           this.Air=value
           this.List = result.data.list;
        }
    },
   
   async price(v){
      this.page=1
      this.long=7
      this.List=[]
      this.Price=v
      let result = await get({
      url: "/api/v3/m1/product/list",
      params: {
        page: 1,
        keywords: this.keywords,
        theme_id: [],
        order_by: this.Price,
        district_id: "",
        type: this.Type,
        platform: 4
      }
    })
    this.List = result.data.list;
    }
   },
   methods:{
     handclick(id){
      this.$router.push({path:"/BMdetail/"+id})
     }
   }
}
</script>

<style scoped>
.loading{
   position:absolute !important;
   left:46%;
   top :30%;}
.pro_card {
  margin: 0 auto;
}
.bm-product-item {
  text-align: left;
  position: relative;
  width: 100%;
}
bm-product-item-wrap{
  width: 100%;
}
img {
  vertical-align: top;
  height:210px; 
  width: 100%;
}
.bm-product-item-info {
  padding: 12px 9px 0;
}
.bm-product-item-title {
  font-family: PingFangSC-Medium;
  font-size: 15px;
  color: #333;
  letter-spacing: 0;
  font-weight: 500;
  margin-bottom: 6px;
}
.bm-product-item-subtitle {
  font-family: PingFangSC-Light;
  font-size: 11px;
  color: #898989;
  letter-spacing: 0.15px;
  margin-bottom: 9px;
}
.bm-product-item-bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.bm-product-item .bm-product-item-type {
  position: absolute;
  top: 0;
  left: 9px;
  padding: 3px 6px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 3px 3px;
  font-size: 12px;
}
.bm-product-item-tags li {
  list-style: none;
  border: 0.5px solid rgba(193, 67, 116, 0.2);
  padding: 3px 6px;
  font-family: PingFangSC-Light;
  font-size: 10px;
  color: #c14374;
  letter-spacing: 0.2px;
  margin-right: 9px;
}
.bm-product-item-tags {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}
.bm-product-item-price {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #c04374;
  letter-spacing: 0.8px;
  white-space: nowrap;
}
</style>