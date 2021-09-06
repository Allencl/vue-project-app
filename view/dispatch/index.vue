
<template>
    <div class="wis-dispatch-html">
        <List border size="small">
            <ListItem v-for="(o,i) in list" :key="i">
                <ul class="list-box" @click="toDetails(o)">
                    <Row>
                        <i-col span="14">
                            <li>
                                <label>转运单号:</label>
                                <p>{{o.number}}</p>
                            </li>
                            <li>
                                <label>{{o.supplier}}</label>
                            </li>
                            <li>
                                <label>创建时间:</label>
                                <p>{{o.time}}</p>
                            </li> 
                        </i-col>
                        <i-col span="10">
                            <Tag class="status" color="cyan">{{o.status}}</Tag>
                            <img :src="o.QRcode"> 
                            <Icon style="position:relative;padding:8px;top:-20px;padding-left:0px;padding-right:0px" type="ios-arrow-forward" />
                            <!-- <Button style=";padding:0px;box-shadow:none;" type="text" icon="ios-arrow-forward">详情</Button>      -->
                        </i-col>
                    </Row>       
                </ul>
            </ListItem>
        </List>
        <p style="padding:26px 0px">没有更多了！</p>

    </div>
</template>
<script>
export default {
    data() {
        return {
            // 列表
            list:[
                {
                    number:"IVC-20297876887",
                    supplier:"供应商A",
                    time:"2012-03-11 08:30:22",
                    status:"待收货",
                    QRcode:"https://qr.api.cli.im/newqr/create?data=4543543545&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=90ad1308004e37c11b1b72c78b21e14a"
                },
                {
                    number:"IVC-560297876887",
                    supplier:"供应商888",
                    time:"2012-12-09 21:56:11",
                    status:"待收货",
                    QRcode:"https://qr.api.cli.im/newqr/create?data=4543543545&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=90ad1308004e37c11b1b72c78b21e14a"
                }                
            ],  
        }
    },        
    created() {

    },  
    methods: {
        /**
         * 详情
         */
        toDetails:function(row){
            this.$router.push({
                name:'dispatchDetailsHTML',
                params: row
            });
        }
    }     
}
</script>

<style lang="less">
.wis-dispatch-html{
    padding-top: 12px;
    
    .ivu-list{
        border-radius: 0px;
        border: none;
    }
    ul.list-box{
        width: 100%;
        li{
            list-style: none;
            width: 100%;
            text-align: left;
            font-size: 12px;

            label{
                margin-right: 6px;
            }

            p{
                display: inline-block;
            }
        }

        .ivu-tag.status{
            position: relative;
            top: -20px;
            right: 6px;
        }

        img{
            width: 50px;
            height: 50px;
        }
    }
}
</style>