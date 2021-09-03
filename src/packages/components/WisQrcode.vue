<template>
    <span>
        <qrcode-stream @decode="onDecode"></qrcode-stream>
    </span>
</template>
<script>
import { QrcodeStream} from 'vue-qrcode-reader';

export default {
    components: {
        QrcodeStream
    },    
    data() {
        return {
 
        }
    },        
    created() {

    },  
    methods: {
        onDecode:function(url) {
            this.$Notice.open({
                title: 'Notification title',
                desc: url,
            });            
        },

    },
    props: {
                 
    }         
}
</script>

<style lang="less">

</style>