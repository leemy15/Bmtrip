<template>
    <div>
        <img alt=""  :src="imgurl.url">
    </div>
</template>

<script lang="ts">
    export default({
        props: ['imgurl'],
    })
</script>

<style scoped lang="stylus">
    div
        display flex
        flex-direction column
        align-items center
        margin 0rem .16rem .1rem .16rem
        img 
           width  100%

</style>