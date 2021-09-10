
<template>
    <div class="wis-head">
        <Row>
            <i-col span="8" style="text-align:left;">
                <Row>
                    <i-col span="6">
                        <Button class="back-btn" size="small" style="padding:0px;box-shadow:none;" ghost type="text" icon="ios-arrow-back" @click="backHTML">
                            
                        </Button>
                    </i-col>
                    <i-col span="18" style="text-align:left">
                        <div class="adress-head">
                            <Icon style="color:#fff;padding-right:3px" type="ios-pin-outline" />
                            <span>{{pageName}}</span>
                        </div>                        
                    </i-col>                    
                </Row>
            </i-col>
            <i-col span="8">
                <h3 class="head-tittle" @click="toHome">Supply Link</h3>
            </i-col>

            <i-col span="8" class="user-name-box" style="text-align:right">
                <span>{{userName}}</span>
                <Dropdown
                    class="dropdown-box"
                    trigger="click"
                    placement="bottom-end"
                    @on-click="clickDropdown"
                >
                    <!-- <span style="color:#fff;padding-right:6px;font-size:12px">供应商A</span> -->
                    <Icon style="color:#fff;font-size:18px" type="md-settings" />
                    <DropdownMenu slot="list">
                        <DropdownItem name="logout">
                            <Icon type="ios-log-out" style="margin-right:8px" />
                            <span>退出登录</span>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

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
            userName:localStorage.getItem("admin_name")
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
            this.$router.push({
                name:'login',
                params:{
                    toLogin:true
                }
            });
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
.wis-head{

    .dropdown-box{
        position: absolute;
        top: 2px;
        right: 4px;
        z-index: 11;
    }

    .adress-head{
        padding-left:8px;
        position: relative;
        padding-top: 2px;

        .ivu-icon{
            position: absolute;
            top: 28px;
            left: -1px;
            font-size: 12px;
        }

        span{
            display: inline-block;
            display: inline-block;
            padding-left: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            color: #fff;
            font-size: 10px;
        }
    }
}
.ivu-layout-header{
    padding: 0px 4px;

    .back-btn{
        font-size: 12px;

        span{
            margin: 0px;

        }
    }

    .user-name-box{
        position: relative;
        >span{
            padding-top: 2px;
            display: inline-block;
            padding-left: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            color:#fff;
            padding-right:26px;
            font-size:10px;
        }
    }

    .head-tittle{
        cursor: pointer;
        color: #fff;
    }
}
</style>