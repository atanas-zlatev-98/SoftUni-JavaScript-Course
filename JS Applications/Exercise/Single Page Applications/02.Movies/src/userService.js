import {get,post,update,del} from './request.js';

const endpoints = {
    login: 'http://localhost:3030/user/login',
    register: 'http://localhost:3030/user/register',
    logout: 'http://localhost:3030/user/logout'
}

async function register(data){
   return await post(endpoints.register,data);
}
async function login(data){
    return await post(endpoints.login, data);
}
async function logout(){
    return await post(endpoints.logout);
}

export {
    register,
    login,
    logout
}