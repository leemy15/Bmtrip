<template>
  <div>
    <detail-child :children="index.children" :childes="child"></detail-child>
    <div class="bm-destination-product-title" v-if="type==1">热门推荐</div>
    <detail-car :car="index.product"></detail-car>
  </div>
</template>

<script>
import detailChild from 'components/detailChild.vue'
import detailCar from 'components/detailCar.vue'

export default {
        props: ['index','child','type'],
        components:{
            detailChild,
            detailCar
        },   
};
</script>

<style scoped>


.bm-destination-product-title {
  font-size: 0.15rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 18px;
}

</style>