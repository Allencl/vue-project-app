
<template>
    <div class="wis-storeIssue-html">
        <List border size="small">
            <ListItem v-for="(o,i) in list" :key="i">
                <ul class="list-box" @click="toDetails(o)">
                    <Row>
                        <i-col span="20">
                            <li>
                                <label>发料单号:</label>
                                <p>{{o.number}}</p>
                            </li>
                            <li>
                                <label style="font-weight:bold;">{{o.supplier}}</label>
                            </li>
                            <!-- <li>
                                <label>物料信息:</label>
                                <p>{{o.material}}</p>
                            </li>  
                            <li>
                                <label>发料数量:</label>
                                <p>{{o.deliver}}</p>
                            </li>    
                            <li>
                                <label>根数:</label>
                                <p>{{o.roots}}</p>
                            </li>                                                                                   -->
                            <li>
                                <label>创建时间:</label>
                                <p>{{o.time}}</p>
                            </li> 
                        </i-col>
                        <i-col span="4" style="text-align:right">
                            <Tag class="status" color="cyan">{{o.status}}</Tag>
                            <!-- <img :src="o.QRcode" style="">  -->
                            <div style="width:10px;height:50px;display:inline-block"></div>
                            <!-- <Icon style="position:relative;padding:8px;top:-20px;padding-left:0px;padding-right:0px" type="ios-arrow-forward" /> -->
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
                // {
                //     number:"IVC-20297876887",
                //     supplier:"供应商A",
                //     time:"2012-03-11 08:30:22",
                //     status:"待确认",
                //     // QRcode:"https://qr.api.cli.im/newqr/create?data=4543543545&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=90ad1308004e37c11b1b72c78b21e14a"
                // },
                // {
                //     number:"IVC-560297876887",
                //     supplier:"供应商888",
                //     time:"2012-12-09 21:56:11",
                //     status:"已确认",
                //     // QRcode:"https://qr.api.cli.im/newqr/create?data=4543543545&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=90ad1308004e37c11b1b72c78b21e14a"
                // }                
            ],  
        }
    },        
    created() {
        this.initFunc();
    },  
    methods: {
        initFunc:function(){
            let that=this;
            this.$wisHTTP.post("api-supply/ostm/list",{
                rows:1000,
                offset:0,
                limit:1000,
                page:1,
            },{
                hideLoading:true
            }).then((response={}) => {
                that.list=(response["rows"]||[]).map((o)=>{

                    var _val='';
                    switch (o.status) {
                        case "UNCONFIRMED":
                            _val="待确认";
                            break;
                        case "CONFIRMED":
                            _val="已确认";
                            break;                    
                        default:
                            _val="无";
                            break;
                    }


                    return Object.assign(o,{
                        number:o.stmCode,
                        supplier:o.supplierName,
                        // material:o.ostmDetailList.createTime,
                        // deliver:o.createTime,
                        // roots:o.createTime,
                        time:o.createTime,
                        status:_val
                    })
                });

            }); 
        },

        /**
         * 详情
         */
        toDetails:function(row){
            this.$router.push({
                name:'storeIssueDetailsHTML',
                params: row
            });
        }
    }     
}
</script>

<style lang="less">
.wis-storeIssue-html{
    padding-top: 12px;
    
    .ivu-list{
        border-radius: 0px;
        border: none;
    }
    ul.list-box{
        width: 100%;
        li{
            min-height: 22px;
            list-style: none;
            width: 100%;
            text-align: left;
            font-size: 12px;

            label{
                margin-right: 6px;
                min-width: 52px;
                text-align: right;
                display: inline-block;
            }

            p{
                display: inline-block;
            }
        }

        .ivu-tag.status{
            position: relative;
            top: -16px;
            right: 6px;
        }

        img{
            width: 100px;
            height: 100px;
        }
    }
}
</style>