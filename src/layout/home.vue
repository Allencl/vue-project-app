
<template>
    <div class="wis-page-home">

        <Row>
            <i-col span="24">
                <Card dis-hover style="width:100%">
                    <p slot="title" style="text-align:left">
                        <Icon type="ios-pricetag-outline" />
                        常用
                    </p>
                    <ul class="menu-box">
                        <li v-for="(o,i) in menuList" :key="i" @click="menuClick(o)">
                            <Icon :type="o.icon" :style="`color:${o.color}`" />
                            <p>{{ o.lable }}</p>
                        </li>
                    </ul>
                </Card>
            </i-col>
        </Row>

    </div>
</template>
<script>
export default {
    data() {
        return {
            colorList:["#2d8cf0","#2db7f5","#19be6b","#ff9900","#ed4014"],
            menuList:[
                {
                    lable:"半成品发货",
                    icon:"ios-paper-plane-outline",
                    color:"#2db7f5",
                    path:"/dispatch"
                },
                {
                    lable:"收货",
                    icon:"ios-options-outline",
                    color:"#ff9900",
                    path:"/receiving"

                }
            ],   // 菜单
        }
    },        
    created() {

    },  
    methods: {
        /**
         * 菜单 跳转
         */
        menuClick:function(option){
            this.$router.push({path:option.path})
        }
    }     
}
</script>

<style lang="less">
.wis-page-home{
    padding: 12px 8px 26px 8px;

    .menu-box{
        text-align: left;

        li{
            display: inline-block;
            list-style: none;
            padding: 18px 2px 8px 2px;
            // border: 1px solid #dcdee2;
            margin-right: 12px;
            font-size: 14px;
            text-align: center;
            min-width: 76px;
            min-height: 76px;

            .ivu-icon{
                font-size: 22px;
            }

            p{
                margin-top: 4px;
                font-size: 12px;
            }
        }
    }
}
</style>