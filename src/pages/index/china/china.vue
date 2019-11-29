<template>
    <div class="paddindiv">
        <detail-list-wrap>
            <index-list :list="list" v-for="list,index in List" :key="index" ></index-list>
        </detail-list-wrap>
    </div>
</template>

<script lang="ts">
import detailListWrap from "components/detailListWrap.vue"
import indexList from "components/detailList.vue"
import { get } from 'utils/http';
    export default{
        data(){
            return{
                List:[]
            }
        },
        components:{
            detailListWrap,
            indexList
        },
        async mounted() {
        let result = await get({
          url: '/data/china.json'
        })
        this.List=result.data.list;
        }
       
    }
</script>

<style scoped>

</style>