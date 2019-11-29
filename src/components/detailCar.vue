<template>
   <div>
       <div class="bm-product-item-wrap" v-for="carList in car" :key="carList.id" @click="handClick(carList.id)">
        <div class="wrap">
            <img 
              :src="carList.img"
            />
        </div>
      <div class="bm-product-item-info">
        <div class="bm-product-item-title">{{carList.title}}</div>
        <div class="bm-product-item-subtitle">
          <span>{{carList.subtitle}}</span>
        </div>
        <div class="bm-product-item-bottom">
          <!---->
          <div class="bm-product-item-price">￥{{carList.price}}起</div>
        </div>
      </div>
    <div class="bm-product-item-type">{{carList.tip_mark}}</div>
    </div>
   </div>
</template>

<script>
   export default {
     props: ['car'],
     methods:{
            handClick(id){
               this.$router.push({path:'/BMdetail/'+id})
            }
        }
   }
</script>

<style lang='stylus' scoped>
.bm-product-item-wrap {
    position: relative;
    margin-top:10px;
}
 .bm-product-item-wrap .wrap{
    height:1.41rem;
}
.bm-product-item-wrap img{
    width:100%;
    height:100%;
}
.bm-destination-product-item .bm-product-item-title {
    font-size: 0.12rem;
    margin-bottom: .05rem;
}
.bm-product-item-title {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #333;
    letter-spacing: 0;
    font-weight: 500;
    margin-bottom: .03rem;
}
.bm-destination-product-item .bm-product-item-subtitle {
    font-size: 0.12rem;
    margin-bottom: 9px;
}

.bm-product-item-subtitle {
    font-family: PingFangSC-Light;
    font-size: 12px;
    color: #898989;
    letter-spacing: .10px;
    margin-bottom: 6px;
}

.bm-product-item-subtitle span:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 8px;
    background: #ccc;
    margin: 0 4px;
}

.bm-destination-product-item .bm-product-item-price {
    font-family: PingFangSC-Regular;
    font-weight: normal;
    font-size: 0.32rem;
    letter-spacing: 0.3px;
    margin-bottom: 9px;
}

.bm-product-item-price {
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #c04374;
    letter-spacing: .8px;
    white-space: nowrap;
}
.bm-product-item-type {
    position: absolute;
    top: 0;
    left: 9px;
    padding: 3px 6px;
    color: #fff;
    background: rgba(0,0,0,.5);
    border-radius: 0 0 3px 3px;
    font-size: 12px;
}
</style>