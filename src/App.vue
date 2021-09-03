<template>
  <div id="app">
    <Layout>

        <Affix>
            <Header>
              <HeaderHTML />
            </Header>
        </Affix>



        <Content>
            <keep-alive>
              <router-view v-if='$route.meta.keepAlive'></router-view>
            </keep-alive>
            <router-view v-if='!$route.meta.keepAlive'></router-view>
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
