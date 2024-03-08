import { post,get } from "./requester.js"

const endPoints = {
    register: 'users/register',
    login: 'users/login',
    logout: 'user/logout',
}

async function register(data){
    return await post(endPoints.register,data)
}
async function login(data){
    return await post(endPoints.login,data);
}
async function logout(data){
    return get(endPoints.logout)
}

export {
    register,
    login,
    logout
}