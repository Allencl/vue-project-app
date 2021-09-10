<template>
  <div id="app">
    <Layout>

        <Affix v-if="!isLogin">
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
  data () {
      return {
        isLogin:false
      }
  },  
  watch: {
    "$route": {
      handler(newData) {
        this.isLogin=(newData["name"]=="login")?true:false;
      },
      deep: true
    } 
  },  
  created(){
    this.initFunc();
  },
  methods:{
    initFunc:function(){
      let _buffer=JSON.parse(localStorage.getItem("login_config"));
      
      if(!_buffer){
        this.$router.push({
            name:'login',
            params:{
                toLogin:true
            }
        });        
      }
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
