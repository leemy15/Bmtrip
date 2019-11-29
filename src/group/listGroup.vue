<template>
    <div class="listGroup">
        <image-title :imgurl="Imgurl"></image-title>
        <div class="padding123">
        <index-list-warp>
          <index-list :list="list" v-for="list,index in List" :key="index" >
          </index-list>
        </index-list-warp>
        </div>
    </div>
</template>

<script lang="ts">
    import imageTitle from "components/imageTitle.vue"
    import indexList from "components/detailList.vue"
    import indexListWarp from "components/detailListWrap.vue"
    import { get } from 'utils/http';
    export default {
        data(){
            return{
              List: [],
              Imgurl:[]
           }
        },
        props: ['list','imgurl'],
        components:{
            imageTitle,
            indexList,
            indexListWarp
            },
        watch:{
            list(value){
                this.List=value
            },
            imgurl(value){
                this.Imgurl=value
            }
        },
        async mounted() {
        let result = await get({
          url: '/data/europe.json'
        })
        this.List=result.data.list;
        }
    }

</script>

<style  lang="stylus">
.listGroup
    margin-top .2rem
.van-tree-select__content
    padding 0.18rem !important
</style>