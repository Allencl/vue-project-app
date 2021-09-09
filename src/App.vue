<template>
  <div id="app">
    <Layout>

        <Affix>
            <Header>
              <HeaderHTML />
            </Header>
        </Affix>



        <Content>
            <!-- <keep-alive>
              <router-view v-if='$route.meta.keepAlive'></router-view>
            </keep-alive>
            <router-view v-if='!$route.meta.keepAlive'></router-view> -->

            <router-view></router-view>
        </Content>
    </Layout>
  </div>
</template>

<script>
import HeaderHTML from '@src/layout/header.vue';  // 头部



export default {
  name: 'App',
  components: {
    HeaderHTML,
  },
  created(){
    this.initFunc();
  },
  methods:{
    initFunc:function(){
      let that=this;
      this.$wisHTTP.post("api-uaa/oauth/user/token?username=longfeitest&password=1&zh_CN=zh_CN&customKey=toName=home",{

      },{
          isLogin:true,
          hideLoading:true
      }).then((response={}) => {
        localStorage.setItem("login_config",JSON.stringify(response));
      }); 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ivu-layout{
  background: #fff;
}
</style>
