<template>
    <div style="text-align: center;">
        <img :src="image" alt="404" style="width:360px"> 
    </div>
</template>
<script>
    export default {
        data () {
            return {
                image: require("@assets/images/404.gif"), // logo
            }
        },
    
    }
</script>

<style lang="less">

</style>