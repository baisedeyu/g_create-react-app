import { Login } from '../api/user'

export const LoginAction = (code) => {
  return (dispatch,getState)=>{
    return Login(code).then(res=>dispatch(changeLogin('登录成功')))
  }
}

export const changeLogin=(code)=>{
  return {
    type:'login',
    value:code
  }
}


