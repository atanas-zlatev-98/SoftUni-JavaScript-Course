import { showRegisterView } from "./register.js";
import { showHome } from "./home.js";
import { getUserData } from "./userHelper.js";
import { showLogin } from "./login.js";
import { showLogout } from "./logout.js";

document.querySelectorAll('section').forEach(section =>{
    section.style.display = 'none';
})

const userNav = document.querySelectorAll('li.user');
const guestNav = document.querySelectorAll('li.guest');
document.querySelector('nav').addEventListener('',onNavigate);
const userMessage = document.getElementById('welcome-msg');
//const userData = JSON.parse(sessionStorage.getItem('userData'));

const routes = {
    "/register": showRegisterView,
    "/home": showHome,
    "/login": showLogin,
    "/logout": showLogout
}

function onNavigate(e){

    if(e.target.tagName !== 'A' || !e.target.href){
        return
    }
    const url = new URL(e.target.href);
    const path = url.pathname;
    debugger
    routes[path]();
}

export function updateNav(){
    const userData = getUserData();
    if(userData){
        userNav.forEach(li => {
            li.style.display = 'block';  
        })
        guestNav.forEach(li => {
            li.style.display = 'none';  
        })
        userMessage.textContent = `Welcome, ${userData.email}`;
    }else {
        userNav.forEach(li => {
            li.style.display = 'none';  
        })
        guestNav.forEach(li => {
            li.style.display = 'block';  
        })
    }
}


updateNav();