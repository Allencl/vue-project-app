<template>
    <div 
        class="wis-qrcode-stream"
        :style="`height:${documentHeight}px`"
    >
        <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>

        <Icon 
            class="close-icon"
            type="md-close-circle" 
            @click="closeHandle"
        />

        <Affix :offset-bottom="20">
            <div style="text-align:center;">
                <span>请扫描二维码</span>
            </div>
        </Affix>


        <div class="move"></div>

    </div>
</template>
<script>
import { QrcodeStream} from 'vue-qrcode-reader';

export default {
    components: {
        QrcodeStream
    },    
    data() {
        return {
            documentHeight:document.documentElement.clientHeight,  // 窗口高度
        }
    },        
    created() {

    },  
    methods: {
        closeHandle:function(){
            this.$emit("close");
        },
        onDecode:function(url) {
            this.$emit("decode",url);
        },
        onInit:function(promise) {
            promise.then(
                // console.log
            )
            .catch(
                // console.error
            )
        }
    },
    props: {
                 
    }         
}
</script>

<style lang="less">
.wis-qrcode-stream{
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 11;
    // height: 100px;

    .close-icon{
        position: fixed;
        top: 20px;
        right: 20px;
        color: #fff;
        z-index: 11;
        font-size: 26px;
    }


    @keyframes move { 
        0% {             
            top:10%;     
        }            
        50%{                
            top:90%;            
        }            
        100%{                
            top:10%; 
        }
    }

    .move{
        position: fixed;
        top:0px;
        z-index: 11;
        animation: move 3s infinite;

        width: 100%;
        height: 1px;
        // background: #19be6b;
        box-shadow: 2px 2px 3px #19be6ba8;
    }

}
</style>