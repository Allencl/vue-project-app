<template>
    <div class="wis-login">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" label-position="top">
            <h3 class="title-text">名阳实业</h3>
            <Row style="padding:0px 8px">
                <i-col span="24">
                    <FormItem label="用户名" prop="name">
                        <Input v-model="formValidate.name" placeholder="请输入用户名"></Input>
                    </FormItem>            
                </i-col>
                <i-col span="24" style="margin-top:18px">
                    <FormItem label="密码" prop="password">
                        <Input v-model="formValidate.password" type="password" password placeholder="请输入密码"></Input>
                    </FormItem>            
                </i-col>

                <i-col span="24" style="padding:0px 8px;margin-top:30px">
                    <Button @click="handleSubmit" type="primary" long>登 录</Button>           
                </i-col>

            </Row>

        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    password: '',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                }
            }
        },
        created(){
            this.initFunc();
        },
        methods: {
            initFunc:function(){
                let _buffer=JSON.parse((localStorage.getItem("login_buffer")||"{}"));

                this.formValidate={
                    name: _buffer.username||'',
                    password: _buffer.password||''
                };
            },
            handleSubmit () {
                let that=this;
                let {formValidate}=this;

                this.$refs["formValidate"].validate((valid) => {
                    if (valid) {
                        that.$wisHTTP.loginFunc({
                            username:formValidate.name,
                            password:formValidate.password
                        }).then(()=>{
                            that.$Message.success('登录成功！');

                            that.$router.push({
                                name:'home',
                            });

                        });
                        // this.$Message.success('Success!');
                    } else {
                        // this.$Message.error('!');
                    }
                })
            },

        }
    }
</script>
<style lang="less">
.wis-login{
    .title-text{
        font-size:32px;
        text-align:left;
        margin-top: 60px;
        margin-bottom: 30px;
        padding-left: 12px;
        color: #2d8cf0;
    }
}
</style>