import {request} from "./reaquestBackend";

export function loginAccount(name,password) {
  return request({
    url:'/account/login',
    params:{
      name,
      password
    }
  })
}

export function registerAccount(name,phoneNumber,password,gender) {
  return request({
    url: '/account/register',
    params:{
      name,
      phoneNumber,
      password,
      gender
    }
  })
}

export function sendPassword(name,oldPassword,newPassword) {
  return request({
    url:'/account/changePassword',
    params:{
      name,
      oldPassword,
      newPassword

    }
  })
  
}
