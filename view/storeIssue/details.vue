<template>
    <div style="padding:12px 8px;">
        <div style="text-align:left;font-size:12px;padding-bottom:6px">
            <label>公司:</label>
            <span style="padding-left:6px">供应商AAA</span>
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
                    {
                        no:1,
                        name: '689999',
                        quantity: 180,
                        batch: 'FL-434343434',
                        number: 'A111',
                        order:12
                    },
                    {
                        no:2,
                        name: '689999',
                        quantity: 240,
                        batch: 'FL-55434343434',
                        number: 'A899',
                        order:13
                    },


                ]
            }
        }
    }
</script>