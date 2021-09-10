
<template>
    <div>
        <Row>
            <i-col span="8" style="text-align:left;">
                <Button style="padding:0px;box-shadow:none;" ghost type="text" icon="ios-arrow-back" @click="backHTML">
                    返回
                </Button>
                <span style="padding-left:8px">
                    <Icon style="color:#fff;padding-right:3px" type="ios-pin-outline" />
                    <span style="display:inline-block;white-space:nowrap;font-size:12px;max-width: 40px;color:#fff;font-size:12px">{{pageName}}</span>
                </span>
            </i-col>
            <i-col span="8">
                <h3 class="head-tittle" @click="toHome">Supply Link</h3>
            </i-col>

            <i-col span="8" style="text-align:right">
                <span style="color:#fff;padding-right:6px;font-size:12px">供应商A</span>
            </i-col>
            <!-- <i-col span="8" style="text-align:right;">

                <Dropdown
                    trigger="click"
                    placement="bottom-end"
                    @on-click="clickDropdown"
                >
                    <span style="color:#fff;padding-right:6px;font-size:12px">供应商A</span>
                    <Icon style="color:#fff;font-size:18px" type="md-settings" />
                    <DropdownMenu slot="list">
                        <DropdownItem name="logout">
                            <Icon type="ios-log-out" style="margin-right:8px" />
                            <span>退出登录</span>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </i-col>             -->
        </Row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageName:'',
        }
    },  
    watch:{
        '$route' (to){
            this.pageName=to.meta.title;
        },
    },          
    created() {

    },  
    methods: {
        /**
         * to home
         */
        toHome:function(){
            this.$router.push({name:'home'});
        },
        /**
         * 返回
         */
        backHTML:function(){
            this.$router.go(-1);
            // this.$nextTick(()=>{
            //     if(this.$route["path"]=="/404"){
            //         console.log(23212);
            //         this.$router.push({name:'home'});
            //     }
            // });
        },
        /**
         * 退出 登录
         */
        logoutFunc:function(){
            console.log("sdsd");
        },
        /**
         * 切换
         */
        clickDropdown:function(active){
            switch(active){
                case "logout":
                    this.logoutFunc();  // 退出
                    break;
                default:
                    break;
            }
        }
    }     
}
</script>

<style lang="less">
.ivu-layout-header{
    padding: 0px 12px;

    .head-tittle{
        cursor: pointer;
        color: #fff;
    }
}
</style>