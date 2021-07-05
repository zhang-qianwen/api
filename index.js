// /**
//  * Created by bootdo.
//  */
//  import axios from "axios";
//  import store from "../vuex/store";
//  import router from "../router/index";
//  import { bus } from "../bus.js";
//  import { Message } from "element-ui";
//  import baseUrl from "./baseUrl";
//  let base = baseUrl;
//  // Vue.prototype.$qs = qs;
 
//  axios.defaults.withCredentials = true;
//  axios.defaults.timeout = 1800000;
//  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//  //  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头
 
//  //添加一个请求拦截器
//  axios.interceptors.request.use(
//    (config) => {
//      if (localStorage.getItem("access-token")) {
//        config.headers.Authorization = window.localStorage.getItem(
//          "access-token"
//        );
//        if (config.method === "post") {
//          config.params = {
//            access_token: window.localStorage.getItem("access-token").substr(7),
//          };
//        } else if (config.method === "get") {
//          config.params = {
//            access_token: window.localStorage.getItem("access-token").substr(7),
//            ...config.params,
//          };
//        }
//      }
//      if(config.url.indexOf('data/juyuanTrapLog/page')<0 && config.url.indexOf('admin/message/getMessageList')<0){
//        store.state.loading = true;
//      }
//      return config;
//    },
//    (error) => {
//      return Promise.reject(error);
//    }
//  );
//  // 添加一个响应拦截器
//  axios.interceptors.response.use(
//    function (response) {
//      // console.log(response.config.url);
//      store.state.loading = false;
//      if (response.data.resultCode) {
//        if (
//          response.data.resultCode === "4006" ||
//          response.data.resultCode === "0001" ||
//          response.data.resultCode === "0004"
//        ) {
//          Message.closeAll();
//          Message({
//            type: "error",
//            message: "登录已失效，请重新登录！",
//            duration: 3000,
//          });
//          localStorage.clear();
//          router.push("/login");
//        } else if (
//          response.data.resultCode !== "0000" &&
//          response.data.resultCode !== "0011"
//        ) {
//          Message({
//            type: "error",
//            message: response.data.resultMessage,
//            duration: 3000,
//          });
//        }
//      }
 
//      return response;
//    },
//    function (error) {
//      store.state.loading = false;
//      if (error.response) {
//        // if(error.response.data.status==500){
 
//        // }else{
//        Message({
//          type: "error",
//          message: error.response.data.resultMessage || error.response.data.error,
//          duration: 3000,
//        });
//        // }
//      } else {
//        Message({
//          type: "error",
//          message: "请求出现异常",
//          duration: 3000,
//        });
//      }
//      // return Promise.reject(error);
//    }
//  );
 

//  //通用方法
//  export const POST = (url, params) => {
//    return axios.post(`${base}${url}`, params).then((res) => res.data);
//  };
 
//  export const GET = (url, params) => {
//    return axios
//      .get(`${base}${url}`, {
//        params: params,
//      })
//      .then((res) => res.data);
//  };
 
//  export const PUT = (url, params) => {
//    return axios.put(`${base}${url}`, params).then((res) => res.data);
//  };
 
//  export const DELETE = (url, params) => {
//    return axios
//      .delete(`${base}${url}`, {
//        params: params,
//      })
//      .then((res) => res.data);
//  };
 
//  export const PATCH = (url, params) => {
//    return axios.patch(`${base}${url}`, params).then((res) => res.data);
//  };