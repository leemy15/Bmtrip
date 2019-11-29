<template>
  <div
    class="Listmain"
  >
    <a class="bm-product-item-wrap" @click="handClick(list.id)">
      <picture>
        <img
          alt
          height="113"
          :src="list.img"
          :srcset="list.img"
        />
      </picture>
      <div class="bm-product-item-info">
        <div class="bm-product-item-title">{{list.title}}</div>
        <div class="bm-product-item-subtitle">
          <span>{{list.subtitle}}</span>
        </div>
        <div class="bm-product-item-bottom">
          <ul class="bm-product-item-tags">
            <li v-for="list,index in list.mark" :key="index">{{list.name}}</li>
          </ul>
          <div class="bm-product-item-price">￥ {{list.price}}起</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">

export default {
         data(){
            return{
              List: []
           }
        },
        props: ['list'],
        methods:{
          handClick(id){
            this.$router.push({path:"/BMdetail/"+id})
          }
        }
    }
</script>

<style scoped lang="stylus">
.Listmain
    width 48%
    img
        width 100%
    .bm-product-two .bm-product-two-item .bm-product-item-title 
        font-size: 10px;
        margin-bottom: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    .bm-product-item-title 
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        font-size: 10px;
        color: #333;
        letter-spacing: 0;
        font-weight: 500;
    .bm-product-item-subtitle
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        font-size: 10px;
        color: #898989;
        letter-spacing: .15px;
        margin-bottom: 4px;
    .bm-product-item-subtitle span:after 
        content: "";
        display: inline-block;
        width: 1px;
        height: 8px;
        background: #ccc;
        margin: 0 4px;
    .bm-product-two .bm-product-two-item .bm-product-item-bottom .bm-product-item-tags li 
        font-size: 9px;
        padding: 1px 3px;
        margin-right: 6px;
        margin-bottom: 3px;
    .bm-product-item-tags 
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
    .bm-product-item-tags li 
        list-style: none;
        border: .5px solid rgba(193,67,116,.2);
        font-size: 10px;
        color: #c14374;
        margin-right: 4px;
    .bm-product-item-price 
        font-size: 12px;
        color: #c04374;
        letter-spacing: .8px;
        white-space: nowrap;
        margin-bottom: 3px;
        margin-top: 5px;
    .bm-product-two .bm-product-two-item .bm-product-item-bottom .bm-product-item-price 
        font-size: 10px;
        letter-spacing: .3px;


</style>
