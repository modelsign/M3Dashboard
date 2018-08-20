import axios from 'axios';
import { Message } from 'element-ui';

// 创建axios实例
const service = axios.create({
                               baseURL: process.env.BASE_API, // api的base_url
                               timeout: 5000 // 请求超时时间
                             });

// request拦截器
service.interceptors.request.use(
  config => {
    /** *****************************
     * 这里添加 token 插入
     */
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    } else {
      return Promise.reject('error');
    }
  },
  error => {
    console.log('err' + error); // for debug
    Message({
              message: error.message,
              type: 'error',
              duration: 5 * 1000
            });
    return Promise.reject(error);
  }
);

export default service;
