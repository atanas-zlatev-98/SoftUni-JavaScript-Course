import { logout } from "./src/api/userService.js";
import { hasUser, removeUser } from "./src/utils/userUtils.js";
import { showCreateView } from "./src/views/createView.js";
import { showDashboardView } from "./src/views/dashboardView.js";
import { showDetailsView } from "./src/views/detailsView.js";
import { showHomeView } from "./src/views/homeView.js";
import { showLoginView } from "./src/views/loginView.js";
import { showRegisterView } from "./src/views/registerView.js";

document.querySelectorAll('div[data-selection="section"]').forEach(section => section.remove());
const main = document.querySelector('main');

const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);
updateNav();

const routes = {
    '/': showHomeView,
    '/home': showHomeView,
    '/dashboard':showDashboardView,
    '/create': showCreateView,
    '/login': showLoginView,
    '/register':showRegisterView,
    '/details': showDetailsView,
    '/logout': async () => {
        await logout();
        updateNav();
        removeUser();
        goTo('/');
    },
    '*': () => console.error('404 Page not found'),
}

function renderer(view){
    main.replaceChildren(view)
}

function updateNav(){
    const user = hasUser();
    const guestA = document.querySelectorAll("a[data-permission='guest']");
    const userA = document.querySelectorAll("a[data-permission='user']");

    if(user){
        guestA.forEach(a => a.style.display = 'none');
        userA.forEach(a => a.style.display = 'block');
    }else {
        guestA.forEach(a => a.style.display = 'block');
        userA.forEach(a => a.style.display = 'none');
    }
}

function onNavigate(event){
    event.preventDefault();
    let element = event.target;

    if(event.target.tagName == 'A' && event.target.tagName !== 'IMG'){
        return 
    }
    if(event.target.tagName == 'IMG'){
        element = event.target.parentElement;
    }

    const viewName = new URL(element.href).pathname;
    goTo(viewName);
}

let ctx = {
    render: renderer,
    goTo,
}

function goTo(name,...params){

const handler = routes[name];

if(typeof(handler) !== 'function'){
    return routes['*']();
}

handler(ctx,params)
}

goTo('/');