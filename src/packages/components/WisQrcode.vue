<template>
    <div 
        class="wis-qrcode-stream"
        :style="`height:${documentHeight}px`"
    >
        <!-- camera="auto" -->
        <qrcode-stream 
            camera="auto" 
            :torch="torchActive"
            @decode="onDecode" 
            @init="onInit"
        >  
        </qrcode-stream>


            <Icon 
                class="close-icon"
                type="md-close-circle" 
                @click="closeHandle"
            />   
            <Affix  v-if="lodding" :offset-bottom="20">
                <div style="text-align:center;">
                    <div>
                        <Icon v-if="torchActive" @click="toggleTorchHandle" type="md-bulb" style="margin-bottom:20px;color:#fff;font-size:26px;padding:8px;" />
                        <Icon v-if="!torchActive" @click="toggleTorchHandle" type="ios-bulb-outline" style="margin-bottom:20px;color:#fff;font-size:26px;padding:8px;" />
                    </div>
                    <span style="color:#fff">请扫描二维码</span>
                </div>
            </Affix>

            <div  v-if="lodding" class="move"></div>

            <p v-if="!lodding" style="text-align:center">相机加载中。。。</p>
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
            torchActive:false,   // 电筒
            lodding:false,
        }
    },        
    created() {

    },  
    methods: {
        toggleTorchHandle:function(){
            this.torchActive=!this.torchActive;
        },
        closeHandle:function(){
            this.$emit("close");
        },
        onDecode:function(url) {
            this.$emit("decode",url);
        },
        showError:function(error){
            this.$Message.error({
                content: error.name,
                duration: 5,
                closable: true
            });            
        },
        onInit:function(promise) {
            let that=this;
            promise.then(
                // console.log
                that.lodding=true
            )
            .catch((error)=>{

                // this.showError(error);
                that.$emit("close");


                if (error.name === 'NotAllowedError') {
                    this.$Message.error("用户拒绝摄像头访问权限！");
                    // user denied camera access permisson
                } else if (error.name === 'NotFoundError') {
                    this.$Message.error("没有安装合适的摄像设备！");
                    // no suitable camera device installed
                } else if (error.name === 'NotSupportedError') {
                    this.showError(error);
                    // page is not served over HTTPS (or localhost)
                } else if (error.name === 'NotReadableError') {
                    this.$Message.error("摄像设备正在使用！");
                    // maybe camera is already in use
                } else if (error.name === 'OverconstrainedError') {
                    this.showError(error);
                    // did you requested the front camera although there is none?
                } else if (error.name === 'StreamApiNotSupportedError') {
                    this.$Message.error("浏览器没有此功能！");
                    // browser seems to be lacking features
                }




            })
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