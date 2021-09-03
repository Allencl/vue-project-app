
<template>
    <div>
        <Row>
            <i-col span="4" style="text-align:left;">
                <Button ghost type="text" icon="ios-arrow-back" @click="backHTML">
                    返回
                </Button>
            </i-col>
            <i-col span="16">
                <h3 class="head-tittle" @click="toHome">Supply Link</h3>
            </i-col>
            <i-col span="4" style="text-align:right;">

                <Dropdown
                    trigger="click"
                    placement="bottom-end"
                    @on-click="clickDropdown"
                >
                    <span style="color:#fff;padding-right:6px">供应商A</span>
                    <Icon style="color:#fff;font-size:18px" type="md-settings" />
                    <DropdownMenu slot="list">
                        <DropdownItem name="logout">
                            <Icon type="ios-log-out" style="margin-right:8px" />
                            <span>退出登录</span>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </i-col>            
        </Row>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
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