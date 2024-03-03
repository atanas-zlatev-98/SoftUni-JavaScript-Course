import { showHomeView } from "./home.js";
import "./login.js";
import { showView } from "./nav.js";
import './create.js'
const views ={
    'home-link':['home-view',showHomeView],
    'login-link':['login-view'],
    'create-link':['create-view']
}

for(const linkId in views){
    const [sectionId,callback] = views[linkId]
    document.getElementById(linkId).addEventListener("click", event=> showView(sectionId,callback,event));
}

/*document.getElementById("home-link").addEventListener("click", event=> showView(event,'home-view',showHomeView));
document.getElementById("login-link").addEventListener("click", event=> showView(event,'login-view',showLoginView));*/

document.getElementById("loading").remove();
showView('home-view',showHomeView);


