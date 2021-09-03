import Vue from "vue";
import VueRouter from "vue-router";


const  routes = [
    // 业务页面

    // 首页
    {
        name: 'home',
        path: '/',
        meta: {title: '首页', keepAlive: true},
        component: () => import("@src/layout/home.vue"),
    }, 
    {
        name: 'dispatchHTML',
        path: '/dispatch',
        meta: {title: '半成品发货', keepAlive: true},
        component: () => import("@view/dispatch/index.vue"),
    }, 
    {
        name: 'receivingHTML',
        path: '/receiving',
        meta: {title: '收货', keepAlive: true},
        component: () => import("@view/receiving/index.vue"),
    }, 


  ].concat([


    // 这个要放在最后
    {
        name: '404',
        path: '/404',
        meta: {title: '404', keepAlive: true},
        component: () => import("@src/router/404.vue")
    },
    {
        path: "*",
        redirect: "/404"
    } 
  ])

Vue.use(VueRouter);


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router;


