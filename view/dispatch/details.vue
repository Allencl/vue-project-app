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
                        title: '需求数量',
                        key: 'age'
                    },
                    {
                        title: '发货数',
                        key: 'age'
                    },  
                    {
                        title: '单个',
                        key: 'age'
                    },                      
                    {
                        title: '要求到货日期',
                        key: 'date'
                    }                                    
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
        }
    }
</script>