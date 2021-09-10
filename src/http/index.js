import axios from 'axios';
import qs from 'qs';
import ViewUI from 'view-design';
import instance from './instance.js';  // 拦截



export default {
  // get(url, params = {},ajaxConfig={}) {
  //   return new Promise((resolve, reject) => {
  //     instance
  //       .get(url, { params: params,ajaxConfig:ajaxConfig })
  //       .then((res) => {
  //         if (res) {
  //           resolve(res)
  //         }
  //       })
  //       .catch((err) => {
  //         reject(err)
  //       })
  //   })
  // },
  // post()
  async post (url,params,ajaxConfig){
    await this.timeoutFunc();

    let response=await this.postAjax(url,params,ajaxConfig);
    return response;
  },
  postAjax(url, params = {},ajaxConfig={}) {
    return new Promise((resolve, reject) => {
      instance
        .post(
          url,
          // params,
          qs.stringify(params),
          {ajaxConfig:ajaxConfig},
          // option['formData'] ? params : qs.stringify(params),
          // option['blob'] ? { responseType: 'blob' } : null
        )
        .then((res) => {
          //序列化字符串
          // _loading.close();
          if (res) {
            resolve(res)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  async timeoutFunc(){
    let _newDate=new Date().getTime();
    let _time=localStorage.getItem("new_expires_in");

    // 超时
    if(_newDate>Number(_time)){
      await this.loginFunc();
    }


    return new Promise((resolve) => {
      resolve(true); 
    });
  },
  loginFunc(option={}){
    let that=this;
    let _buffer=JSON.parse( (localStorage.getItem("login_buffer")||"{}") );
    let _username=option["username"]||_buffer["username"];
    let _password=option["password"]||_buffer["password"];


    return new Promise((resolve) => {
      axios({
        method: 'post',
        url: 'api-uaa/oauth/user/token?username='+_username+'&password='+_password+'&zh_CN=zh_CN&customKey=toName=home',
        data: {
          // username:_username,
          // password:_password
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic d2ViQXBwOndlYkFwcA=='
        },
      }).then((response={})=>{

        let _data=response.data;

        localStorage.setItem("login_buffer",JSON.stringify({
          username:_username,
          password:_password          
        }));
        localStorage.setItem("login_config",JSON.stringify(_data));
        localStorage.setItem("new_expires_in",JSON.stringify(new Date().getTime()+(_data.data["expires_in"]*1000)));


        that.post("api-supply/srm/supplier/getSupplierName",{

        },{
          hideLoading:true
        }).then((response={}) => {
          localStorage.setItem("admin_name",response.message);
        }); 


        resolve(true); 
      }).catch((error)=>{
        ViewUI.Message.error(error.response.data.message);
      });
    });
  },
  // upload(url, params = {},ajaxConfig={}) {
  //   return new Promise((resolve, reject) => {
  //     instance
  //       .post(
  //         url,
  //         params,
  //         {
  //           headers: { "Content-Type": "multipart/form-data" },
  //           ajaxConfig:ajaxConfig
  //         },
  //         // option['formData'] ? params : qs.stringify(params),
  //         // option['blob'] ? { responseType: 'blob' } : null
  //       )
  //       .then((res) => {
  //         //序列化字符串
  //         // _loading.close();
  //         if (res) {
  //           resolve(res)
  //         }
  //       })
  //       .catch((err) => {
  //         reject(err)
  //       })
  //   })
  // },  
  // postLogin(url, params = {},ajaxConfig={}) {
  //   return new Promise((resolve, reject) => {
  //     instance
  //       .post(
  //         url,
  //         params,
  //         {
  //           ajaxConfig:ajaxConfig,
  //           headers: {
  //             'Content-Type': 'application/json'
  //           }
  //         },
  //       )
  //       .then((res) => {
  //         //序列化字符串
  //         // _loading.close();
  //         if (res) {
  //           resolve(res)
  //         }
  //       })
  //       .catch((err) => {
  //         reject(err)
  //       })
  //   })
  // },
}
