import axios from 'axios';
export const API = axios.create({
  baseURL:'http://117.50.184.140:8844/', //请求后端数据的基本地址，自定义
  timeout: 2000                   //请求超时设置，单位ms
})
export const getReward = () =>{
 return  API({
    url:'user/queryReward',
    method:'get'
  })

}



