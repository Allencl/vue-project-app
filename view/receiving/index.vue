<template>
    <span class="wis-receiving-html">
        <WisQrcode 
            v-if="showCamera"
            @decode="decodeHandle"
            @close="closeHandle"
        />
        <div style="padding:12px 8px;">
            <Row style="margin-bottom:28px;margin-top:12px">
                <i-col span="16">
                    <Input 
                        v-model="valueInput" 
                        placeholder="请扫描或输入单号" 
                        style="width:100%;font-size:12px" 
                        size="small"
                    />
                </i-col>
                <i-col span="8" style="text-align:right">
                    <Button @click="readHandle" type="success" size="small" style="margin-right:8px">读取</Button>
                    <Button @click="scanHandle" type="info" size="small">扫描</Button>

                </i-col>
            </Row>


            <h5 style="text-align:left;padding-bottom:6px">送货单信息</h5>
            <Form 
                ref="formInline" 
                :model="formInline" 
                :rules="ruleInline" 
                :label-colon="true"
                label-position="top"
            >
                <Row>
                    <i-col span="12">
                        <FormItem label="送货单号">
                            <Input v-model="formInline.odd" size="small" disabled></Input>
                        </FormItem>            
                    </i-col>
                    <i-col span="12">
                        <FormItem label="到货时间">
                            <Input v-model="formInline.arrivalTime" size="small" disabled></Input>
                        </FormItem>             
                    </i-col>     
                                   
                    <!-- <i-col span="12">
                        <FormItem label="发货时间">
                            <Input v-model="formInline.deliverTime" size="small" disabled></Input>
                        </FormItem>             
                    </i-col> -->
                </Row>
                <Row>
                    <i-col span="12">
                        <FormItem label="供应商">
                            <Input v-model="formInline.principal" size="small" disabled></Input>
                        </FormItem>            
                    </i-col>
                    <i-col span="12">
                        <FormItem label="卸货负责人">
                            <Input v-model="formInline.principal" size="small" disabled></Input>
                        </FormItem>            
                    </i-col>                    

                </Row>
                <Row>
                    <i-col span="12">
                        <FormItem label="状态">
                            <Input v-model="formInline.status" size="small" disabled></Input>
                        </FormItem>             
                    </i-col>
                    <i-col span="12">
                        <FormItem label="卸货口电话">
                            <Input v-model="formInline.phone" size="small" disabled></Input>
                        </FormItem>             
                    </i-col>

                </Row>  
                <Row>
                    <!-- <i-col span="12">
                        <FormItem label="仓库">
                            <Input v-model="formInline.warehouse" size="small" disabled></Input>
                        </FormItem>            
                    </i-col> -->

                </Row>                      
            </Form>


            <Card v-for="(o,i) in data" :key="i" style="width:100%" class="list-card">
                <p slot="title">
                    <Icon type="ios-pricetag-outline" />
                    {{i+1}}
                </p>

                <ul>
                    <li>
                        <label>物料信息:</label>
                        <strong>{{o.name}}</strong>
                    </li>
                    <li>
                        <label>发货数:</label>
                        <strong>{{o.deliver}}</strong>
                    </li>
                    <li v-if="showTable">
                        <label>收货数:</label>
                        <InputNumber v-model="takeDeliveryValue" size="small"  @on-change="changeInputNumber" :max="o.deliver" :min="0" ></InputNumber>
                    </li>                                        
                </ul>
            </Card>

            <!-- <Table 
                size="small"
                :columns="columns" 
                :data="data"
                style="margin-top:12px"
                v-if="showTable"
            >
                <template slot-scope="{row}" slot="takeDelivery">
                    <InputNumber v-model="takeDeliveryValue" size="small"  @on-change="changeInputNumber" :max="row.deliver" :min="0" ></InputNumber>
                </template>            
            </Table> -->


            <Affix :offset-bottom="20">
                <div style="text-align:right;padding-right:12px">
                    <Button @click="handleSubmit" type="primary" shape="circle" style="padding:0px;font-size:12px;height: 42px;width: 42px;">
                        收货
                    </Button>
                </div>
            </Affix>
        </div>
    </span>
</template>
<script>
    export default {
        data () {
            return {
                takeDeliveryValue:0,
                showCamera:false,   // 相机
                // valueInput:'ADC-21090700000002',  // 扫码
                valueInput:'',  // 扫码


                showTable:true,
                formInline: {
                    // odd:'23322aqq',
                    // supplier:'供应商aaa',
                    // principal:'负责人',
                    // warehouse:'仓库',
                    // deliverTime:'2012-11-09',
                    // arrivalTime:"2013-01-09",
                    // phone:'18978546787',
                    // status:'待发货'
                },
                ruleInline: {
                    // user: [
                    //     { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    // ],
                    // password: [
                    //     { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    //     { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    // ]
                },


                columns: [
                    {
                        title: '行号',
                        key: 'no',
                        maxWidth:60
                    },
                    {
                        title: '物料信息',
                        key: 'name',
              
                    },
                    {
                        title: '发货数',
                        key: 'deliver',
                        maxWidth:80
                    },  
                    {
                        title: '收货数',
                        slot: 'takeDelivery',
                        minWidth:50
                    },                                    
                ],
                data: [


                ]
            }
        },
        created(){
            // this.initFunc();
        },
        methods: {
            initFunc:function(){
                let that=this;
                let {valueInput}=this;
                this.$wisHTTP.post("api-supply/transferOrderForm/load",{
                    // rows:1000,
                    // offset:0,
                    // limit:1000,
                    // page:1,
                    code:valueInput,
                    // quantity:10
                },{
                    // hideLoading:true
                }).then((response={}) => {
                    let _data=response.data||{};

                    var _val='';
                    switch (_data.status) {
                        case "SHIPPED":
                            _val="待收货";
                            break;
                        case "PARTIAL_RECEIPT":
                            _val="部分收货";
                            break;                    
                        default:
                            _val="无";
                            break;
                    }                    

                    that.formInline={
                        odd:_data.code,
                        arrivalTime:_data.estimatedArrivalDate,
                        supplier:_data.fromSupplierName,
                        principal:_data.consignee,
                        status:_data._val,
                        phone:_data.receivingContact,


                    };

                    that.data=(_data.receiptList||[]).map((o,i)=>{
                        return Object.assign(o,{
                            no:i+1,
                            name:o.materialName,
                            deliver:o.shipmentNumber,
                            takeDelivery:0,
                        })
                    });

                }); 
            },
            /**
             * 关闭
             */
            closeHandle:function(){
                this.showCamera=false;
            },
            /**
             * 扫码成功
             */
            decodeHandle:function(code){
                this.$Message.info('扫描成功！');
                this.valueInput=code;
                this.showCamera=false;
            },
            /**
             * 读取
             */
            readHandle:function(){
                let {valueInput}=this;

                if(!valueInput){
                    this.$Message.warning("请扫描或输入单号！");
                    return
                }

                this.initFunc();
            },
            /**
             * 扫描
             */
            scanHandle:function(){
                this.showCamera=true;
            },
            changeInputNumber:function(value){
                if(value==null){
                    this.takeDeliveryValue=0;
                    this.showTable=false;
                    this.$nextTick(()=>{
                        this.showTable=true;
                    });
                }
            },
            /**
             * 收货
             */
            handleSubmit:function(){
                let that=this;
                let {takeDeliveryValue,valueInput}=this;

                this.$wisHTTP.post("api-supply/transferOrderForm/receipt",{
                    code:valueInput,
                    quantity:takeDeliveryValue
                },{
                    hideLoading:true
                }).then((response={}) => {
                    if(response.success){
                        that.$Message.success(response.message);
                    }else{
                        that.$Message.warning(response.message);
                    }
                });
            }
        }        
    }
</script>
<style lang="less">
.wis-receiving-html{
    .list-card{
        .ivu-card-head{
            padding: 8px 12px;
            text-align: left;
            font-size: 12px;
            height: 32px;

            p{
                font-size: 12px;
            }
        }
        .ivu-card-body{
            padding: 8px 8px;
            ul{
                li{
                    list-style: none;
                    font-size: 12px;
                    text-align: left;
                    height: 22px;

                    label{
                        display: inline-block;
                        width: 60px;
                        text-align: right;
                        padding-right: 6px;
                    }

                    strong{
                        font-weight: 300;
                    }
                }
            }
        }

    }
}
</style>