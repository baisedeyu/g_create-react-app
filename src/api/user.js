import  axios from 'axios'


//登录
export const Login=(code)=>{
  return axios.get('http://192.168.99.84:7001/home/try')
}