<template>
   <div>
       <div class="bm-destination-dest-wrap">
      <div class="bm-destination-dest">
        <div class="bm-destination-dest-top">
          <div class="item" v-for="Children in care?childes[0]:children" :key="Children.ide" @click="handleClick(Children)">
            <div class="info">
              <img
                :src="Children.img" 
                
              />
              <div class="mask"></div>
              <div class="info-text">
                <div>
                  <p>{{Children.name_en}}</p>
                  <span>{{Children.label}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bm-destination-dest-bottom">
          <div class="more" @click="handClick" v-if="care">
            更多目的地
            <img style="transform:rotate(180deg);" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjQzA0Mzc0IiBjeD0iNiIgY3k9IjYiIHI9IjYiLz48cGF0aCBkPSJNNiA1LjM3OWwyLjQ3NSAyLjQ3NWEuNS41IDAgMCAwIC43MDctLjcwOEw2LjM1NCA0LjMxOGEuNDk4LjQ5OCAwIDAgMC0uNzA4IDBMMi44MTggNy4xNDZhLjUuNSAwIDAgMCAuNzA3LjcwOEw2IDUuMzc5eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=" class="is-more">
          </div>
          <div class="more" @click="handClick" v-else>
          收起
           <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjQzA0Mzc0IiBjeD0iNiIgY3k9IjYiIHI9IjYiLz48cGF0aCBkPSJNNiA1LjM3OWwyLjQ3NSAyLjQ3NWEuNS41IDAgMCAwIC43MDctLjcwOEw2LjM1NCA0LjMxOGEuNDk4LjQ5OCAwIDAgMC0uNzA4IDBMMi44MTggNy4xNDZhLjUuNSAwIDAgMCAuNzA3LjcwOEw2IDUuMzc5eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=" class="is-more"></div>
        </div>
      </div>
    </div>
   </div>
</template>
<script>
   export default {
       props: ['children','childes'],
       data(){
         return{
           index:0,
           care:true
         }
       },
       methods:{
         handClick(){
           this.care=!this.care
         },
          handleClick(v){
            this.$router.push({ path: '/CityJing/'+v.label})
          }
       }, 
   }
</script>

<style lang='stylus' scoped>
.bm-destination-right .bm-destination-dest-wrap {
  margin-bottom: 0.53333rem;
}
.bm-destination-dest-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.bm-destination-dest-top .item {
  height: 50%;
  margin-bottom: 0.1rem;
  position: relative;
  box-sizing: border-box;
  width: 48%;
}
.bm-destination-dest-top .item .info img {
  width: 100%;
  height: 65px;
  border-radius: 2px;
}
.bm-destination-dest-top .item .info .mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.1);
}
.bm-destination-dest-top .item .info .info-text {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 86%;
  height: 77%;
  border: 0.01rem solid rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
  overflow: hidden;
}
.fontClass {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  font-size: 12px;
}
.fontClass span {
  display: block;
  text-align: center;
}
.more {
  text-align: center;
}
</style>