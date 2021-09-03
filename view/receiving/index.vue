<template>
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
                    <FormItem label="发货时间">
                        <Input v-model="formInline.deliverTime" size="small" disabled></Input>
                    </FormItem>             
                </i-col>
            </Row>
            <Row>
                <i-col span="12">
                    <FormItem label="供应商">
                        <Input v-model="formInline.principal" size="small" disabled></Input>
                    </FormItem>            
                </i-col>
                <i-col span="12">
                    <FormItem label="到货时间">
                        <Input v-model="formInline.arrivalTime" size="small" disabled></Input>
                    </FormItem>             
                </i-col>
            </Row>
            <Row>
                <i-col span="12">
                    <FormItem label="卸货负责人">
                        <Input v-model="formInline.principal" size="small" disabled></Input>
                    </FormItem>            
                </i-col>
                <i-col span="12">
                    <FormItem label="卸货口电话">
                        <Input v-model="formInline.phone" size="small" disabled></Input>
                    </FormItem>             
                </i-col>
            </Row>  
            <Row>
                <i-col span="12">
                    <FormItem label="仓库">
                        <Input v-model="formInline.warehouse" size="small" disabled></Input>
                    </FormItem>            
                </i-col>
                <i-col span="12">
                    <FormItem label="状态">
                        <Input v-model="formInline.status" size="small" disabled></Input>
                    </FormItem>             
                </i-col>
            </Row>                      
        </Form>


        <Table 
            size="small"
            :columns="columns" 
            :data="data"
            style="margin-top:12px"
        ></Table>


        <Affix :offset-bottom="20">
            <div style="text-align:right;padding-right:12px">
                <Button @click="handleSubmit" type="primary" shape="circle" style="padding:0px;font-size:12px;height: 42px;width: 42px;">
                    收货
                </Button>
            </div>
        </Affix>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                valueInput:'',  // 扫码
                formInline: {
                    odd:'23322aqq',
                    supplier:'供应商aaa',
                    principal:'负责人',
                    warehouse:'仓库',
                    deliverTime:'2012-11-09',
                    arrivalTime:"2013-01-09",
                    phone:'18978546787',
                    status:'待发货'
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
                        key: 'no'
                    },
                    {
                        title: '物料信息',
                        key: 'name'
                    },
                    {
                        title: '需求数量',
                        key: 'age'
                    },
                    {
                        title: '发货数',
                        key: 'age'
                    },  
                    {
                        title: '收货数',
                        key: 'age'
                    },                                    
                ],
                data: [
                    {
                        no:1,
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        no:2,
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        no:3,
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },

                ]
            }
        },
        methods: {
            /**
             * 读取
             */
            readHandle:function(){

            },
            /**
             * 扫描
             */
            scanHandle:function(){

            },
            /**
             * 收货
             */
            handleSubmit:function(){

            }
        }        
    }
</script>