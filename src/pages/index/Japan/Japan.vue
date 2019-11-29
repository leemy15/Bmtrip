<template>
    <div class="paddindiv">
        <image-title :imgurl="link"></image-title>
        <detail-list-wrap>
            <index-list :list="list" v-for="list,index in List" :key="index" ></index-list>
        </detail-list-wrap>
    </div>
</template>

<script lang="ts">
import detailListWrap from "components/detailListWrap.vue"
import indexList from "components/detailList.vue"
import imageTitle from "components/imageTitle.vue";
import { get } from 'utils/http';
    export default{
        data(){
            return{
                List:[],
                link:
                {url:'https://product-ssl-qiniu.bmtrip.com/product_5dcbc7f704706.jpg'}
            }
        },
        components:{
            detailListWrap,
            indexList,
            imageTitle
        },
        async mounted() {
        let result = await get({
          url: '/data/japan.json'
        })
        this.List=result.data.list;
        }
       
    }
</script>

<style scoped>

</style>