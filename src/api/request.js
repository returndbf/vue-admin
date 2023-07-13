import axios from 'axios';
import { ElMessage } from "element-plus";
export const API = axios.create({
  baseURL:'http://117.50.184.140:8844/', //请求后端数据的基本地址，自定义
  timeout: 2000   ,
  headers:{
    'Content-Type':"application/json; charset=utf-8"
  }//请求超时设置，单位ms
})
API.interceptors.request.use(config=>{
  config.headers['authorization'] = localStorage.getItem('token') || ""
  return config
})
API.interceptors.response.use(response=>{
  let res = response.data
  if(res.code === 200 || res.code === 1){
    return res
  }else{
    // Promise.reject("error");
    ElMessage.error('Oops, this is a error message.')
  }

},error => {
  Promise.reject(error);
})
export const getReward = () =>{
 return  API({
    url:'user/queryReward',
    method:'get'
  })

}



