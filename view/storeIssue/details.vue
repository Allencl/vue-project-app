<template>
    <div style="padding:12px 8px;">
        <div style="text-align:left;font-size:12px;padding-bottom:6px">
            <label style="font-weight:bold;">公司:</label>
            <span style="padding-left:6px">{{supplierName}}</span>
        </div>
        <Table 
            size="small"
            :columns="columns" 
            :data="data"
        ></Table>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                supplierName:'',
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
                        title: '发料数量',
                        key: 'quantity'
                    },
                    {
                        title: '发料批次',
                        key: 'batch'
                    },  
                    {
                        title: '发料炉号',
                        key: 'number'
                    },                      
                    {
                        title: '根数',
                        key: 'order'
                    }                                    
                ],
                data: [
                    // {
                    //     no:1,
                    //     name: '689999',
                    //     quantity: 180,
                    //     batch: 'FL-434343434',
                    //     number: 'A111',
                    //     order:12
                    // },


                ]
            }
        },
        created(){
            this.initFunc();
        },
        methods:{
            initFunc:function(){

                let that=this;
                let params=this.$route.params;

                this.supplierName=params.supplierName;

                this.$wisHTTP.post("api-supply/ostmDetail/list",{
                    id:params.id,
                    rows:1000,
                    offset:0,
                    limit:1000,
                    page:1,
                },{
                    hideLoading:true
                }).then((response={}) => {
          
                    that.data=(response["rows"]||[]).map((o,i)=>{

                        return Object.assign(o,{
                            no:i+1,
                            name: o.materinalName,
                            quantity: o.stmQuantity,
                            batch: o.stmBatch,
                            number: o.furnaceCode,
                            order:o.rootQuantity,
                        })
                    });

                }); 
                }
        }
    }
</script>