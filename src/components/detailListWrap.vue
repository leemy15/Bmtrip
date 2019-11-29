<template>
    
<div class="warpList">
    <slot></slot>        
</div>

</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped lang="stylus">
.warpList
    padding 0 .16rem 
    display flex
    justify-content space-between
    flex-wrap wrap 
</style>