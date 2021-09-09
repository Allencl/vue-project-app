import axios from 'axios';
import qs from 'qs';
import ViewUI from 'view-design';
import instance from './instance.js';  // 拦截



export default {
  get(url, params = {},ajaxConfig={}) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, { params: params,ajaxConfig:ajaxConfig })
        .then((res) => {
          if (res) {
            resolve(res)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  post(url, params = {},ajaxConfig={}) {
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
  upload(url, params = {},ajaxConfig={}) {
    return new Promise((resolve, reject) => {
      instance
        .post(
          url,
          params,
          {
            headers: { "Content-Type": "multipart/form-data" },
            ajaxConfig:ajaxConfig
          },
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
  postLogin(url, params = {},ajaxConfig={}) {
    return new Promise((resolve, reject) => {
      instance
        .post(
          url,
          params,
          {
            ajaxConfig:ajaxConfig,
            headers: {
              'Content-Type': 'application/json'
            }
          },
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
}
