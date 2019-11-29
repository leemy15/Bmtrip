<template>
   <ul>
          <router-link class="card_wrap" tag="li" v-for="findlist in findList" :key="findlist.id" :to="'/article/'+findlist.id">
            <div
              class="bmfind-item"
              url
              author_head="https://oi3v1wa3b.qnssl.com/product_5ba3635eccbc9.png"
            >
              <picture>
                <img
                  alt
                  height="189"
                  :src="findlist.head_pic"
                  width="339"
                />
              </picture>
              <div class="bmfind-item-title">{{findlist.title}}</div>
              <div class="bmfind-item-subtitle">{{findlist.subtitle}}</div>
              <div class="bmfind-item-type">{{findlist.sort_name}}</div>
            </div>
          </router-link>
    </ul>

</template>

<script>
import { get } from 'utils/http'
import BScroll from 'better-scroll'
export default {
   props: ['type'],
   data(){
      return{
         findList: [],
         care:true,
         Type:0,
         num:'2'
      }
   },
   async mounted(){
               let result = await get({
                url: '/api/v3/article/list',
                params: {
                      sort_id: this.type,
                      page: 0,
                      size: 6,
                      platform:4
                     }
                })
                this.findList=result.data.list
                if(this.care==true)
                  {
                    let bScroll = new BScroll('.findout', {  
                    pullUpLoad: true,    
                    click:true              
                   })
                  
                  this.care=false
                  if(this.Type!=this.tape)
                  {
                    this.num='2'
                  }
                  bScroll.on('pullingUp', async() => {
                  let result = await get({
                    url: '/api/v3/article/list',
                    params: {
                      sort_id: this.type,
                      page: this.num,
                      size: 6,
                      platform:4
                     }
                    })
                     await this.$nextTick()
                     bScroll.refresh()
                     this.num++;
                     this.findList = [
                        ...this.findList,
                        ...result.data.list
                        ]
                     bScroll.finishPullUp()
                     this.care=true
                  })
                  }
               },
                watch:{
                type(value){
                  this.Type=value
                 }
              }
                   
}
</script>

<style scoped>
.bsul{
  height: 1.15rem;
}
.bmfind-item {
    width: 100%;
    margin: 0 auto;
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center; 
}
img 
{
    vertical-align: middle;
    text-align:center;
}
.bmfind-item-type {
    position: absolute;
    right: 9Px;
    top: 9Px;
    padding: 2Px 6Px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: 10px;
    border-radius: 0.05333rem;
}
.bmfind-item-title {
    width: 100%;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    font-size: 16px;
    color: #333;
    padding: 0 0.1rem;
    letter-spacing: 0.005rem;
    margin: 0.06rem 0 0.05rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align:center;  
}
.bmfind-item-subtitle {
    width: 100%;
    font-family: PingFangSC-Light;
    font-size: 15px;
    color: #333333;
    letter-spacing: 0.002rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align:center;
    margin-bottom:.1rem
}

</style>