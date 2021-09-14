import axios from 'axios';
import qs from 'qs';
import ViewUI from 'view-design';



// import { Loading } from 'element-ui'

// axios.defaults.baseURL =
//   process.env.NODE_ENV == 'development'
//     // ? 'http://182.168.1.132:8144/api/tenant'asda
//     ? ''
//     //: 'http://www.wis-longyun.com';
//     : 'http://127.0.0.1:8080';
//     // : 'http://192.168.1.97/merger-mobile' //动态配置网络请求不同环境下的地址
// //西信测试环境
// // axios.defaults.baseURL = 'http://manage.merger-link.cn/merger-mobile'
// //97
// // axios.defaults.baseURL = 'http://192.168.1.97/merger-mobile'
// //正式环境
// // axios.defaults.baseURL = 'http://m.merger-link.com/merger-mobile'
// axios.defaults.withCredentials = true //让ajax携带cookie
// localStorage.setItem('host', axios.defaults.baseURL);


axios.defaults.withCredentials = true; //让ajax携带cookie


// 设置 生产环境 BASE_API
// axios.defaults.baseURL=(process.env.NODE_ENV=='production') ? process.env.VUE_APP_SERVER_API_BASE :'';
// axios.defaults.baseURL=window.location.origin;
// axios.defaults.baseURL="http://127.0.0.1:8082/";

axios.defaults.baseURL=process.env.VUE_APP_SERVER_API_BASE;


let instance = axios.create();
// let requestList = new Set() // 存储请求url

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    // 1. 这个位置就请求前最后的配置
    // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
    // config.headers['webClient'] = 1 // 后台要的
    // 利用cancelToken 取消当次请求
    // config.cancelToken = new axios.CancelToken(e => {
    //   // 在这里阻止重复请求，上个请求未完成时，相同的请求不会再次执行
    //   requestList.has(config.url)
    //     ? e(`${location.host}${config.url}---重复请求被中断`)
    //     : requestList.add(config.url)
    // })

    try {
      // let _login=JSON.parse(localStorage.getItem("_login")||"{}");
      // let _token=JSON.parse(localStorage.getItem("_token")||"");
      // config.headers["userId"]=utils.getCookie("userCode")
      // config.headers["tenantId"]=utils.getCookie("tenantId")


    
      let _token=JSON.parse((localStorage.getItem("login_config")||"{}"));
      let _access_token=(_token["data"]||{})["access_token"];

      if(_access_token){
        config.headers["Authorization"]='Bearer '+_access_token;
      }
      // Cookie
      // if(config["ajaxConfig"]["isLogin"]){
      //   config.headers["Authorization"]='Basic d2ViQXBwOndlYkFwcA==';
      // }else{
      //   config.headers["Authorization"]='Bearer '+_access_token;
      // }
      
      // config.headers["Content-Type"]='application/x-www-form-urlencoded';

    } catch (error) {
    }
   
    if( !config["ajaxConfig"]["hideLoading"] ) ViewUI.Spin.show();  // lodding  
    
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    // 相同请求不得在600毫秒内重复发送，反之继续执行
    // setTimeout(() => {
    //   requestList.delete(response.config.url)
    // }, 600)
    // 1. 根据自己项目需求定制自己的拦截
    // 2. 然后返回数据
   
    ViewUI.Spin.hide();  // lodding

    // 请求成功
    if (response.status == 200) {
      return response.data
    }
    
  },
  (error) => {
    ViewUI.Spin.hide();  // lodding
    ViewUI.Message.error(error.message);
    return false;
  }
)



export default instance;