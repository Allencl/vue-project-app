export default {
    routes: [
        // 业务页面
       






    ].concat([
        // 示例页面
        {
            name: 'listBase',
            path: '/wis/demo/list',
            meta: {title: '基础页面-增删改', keepAlive: true},
            component: () => import("@view/demoList/index.vue")
        },   
        {
            name: 'listBaseEdit',
            path: '/wis/demo/listEdit',
            meta: {title: '基础页面-可编辑', keepAlive: true},
            component: () => import("@view/demoListEdit/index.vue")
        },         
        {
            name: 'formPage',
            path: '/wis/form/page',
            meta: {title: '基础页面-表单页面', keepAlive: true},
            component: () => import("@view/demoFormPage/index.vue")
        }, 
        {
            name: 'formComplex',
            path: '/wis/demo/formComplex',
            meta: {title: '复杂表单-侧栏A', keepAlive: true},
            component: () => import("@view/demoFormComplex/index.vue")
        },  
        {
            name: 'formComplex2',
            path: '/wis/demo/formComplex2',
            meta: {title: '复杂表单-侧栏B', keepAlive: true},
            component: () => import("@view/demoFormComplex2/index.vue")
        },
        {
            name: 'organizationList',
            path: '/wis/organization/list',
            meta: {title: '组织架构', keepAlive: true},
            component: () => import("@view/management/organization/index.vue")
        },
        {
            name: 'employeeList',
            path: '/wis/employee/list',
            meta: {title: '员工管理', keepAlive: true},
            component: () => import("@view/management/employee/index.vue")
        },
        {
            name: 'userList',
            path: '/wis/user/list',
            meta: {title: '用户管理', keepAlive: true},
            component: () => import("@view/management/user/index.vue")
        },
        {
            name: 'warehouseList',
            path: '/wis/warehouse/list',
            meta: {title: '仓库管理', keepAlive: true},
            component: () => import("@view/management/warehouse/index.vue")
        },
        {
            name: 'costcenterList',
            path: '/wis/costcenter/list',
            meta: {title: '成本中心', keepAlive: true},
            component: () => import("@view/costbudget/costcenter/index.vue")
        },
        {
            name: 'routesList',
            path: '/wis/routes/list',
            meta: {title: '线路管理', keepAlive: true},
            component: () => import("@view/routinglines/linemaintenance/index.vue")
        },
        {
            name: 'bizLogList',
            path: '/wis/bizlog/list',
            meta: {title: '业务日志', keepAlive: true},
            component: () => import("@view/log/bizlog/index.vue")
        },
        {
            name: 'interfaceLogList',
            path: '/wis/interfacelog/list',
            meta: {title: '接口日志', keepAlive: true},
            component: () => import("@view/log/interfacelog/index.vue")
        },
        {
            name: 'differencelogList',
            path: '/wis/differencelog/list',
            meta: {title: '差异日志', keepAlive: true},
            component: () => import("@view/log/differencelog/index.vue")
        },
        {

            name: 'lineItemList',
            path: '/wis/transport/list',
            meta: {title: '运输采购行项目', keepAlive: true},
            component: () => import("@view/transportProcurement/lineItem/index.vue")
        },
        {
            name: 'transportRfqItemList',
            path: '/wis/transportRfqItem/list',
            meta: {title: '运输采购RFQ行项目', keepAlive: true},
            component: () => import("@view/rfq/transportRfqItem/index.vue")

        },
        {
            name: 'supplierAuditManageList',
            path: '/wis/supplier_audit_manage/list',
            meta: {title: '供应商审核管理', keepAlive: true},
            component: () => import("@view/supplier/supplierAuditManage/index.vue")
        },

        
        
    ]).concat([
        // 登录  
        {
            name: 'login',
            path: '/login',
            meta: {title: '登录', keepAlive: true},
            component: () => import("@src/layout/login.vue"),
        },  
        // 首页
        {
            name: 'home',
            path: '/',
            meta: {title: '首页', keepAlive: true},
            component: () => import("@src/layout/home.vue"),
        },        
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
}
