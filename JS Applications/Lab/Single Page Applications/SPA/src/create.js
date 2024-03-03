import { showDetailsView } from "./details";
import { showView } from "./nav";
import { request } from "./request.js";

start();

function start(){
    document.getElementById('create-form').addEventListener('submit',onPublish);

}

async function onPublish(e){
e.preventDefault();

const formData = new FormData(e.target);
const data = Object.fromEntries(formData.entries());
const title = data.title.trim();
const img = data.img.trim();
const description = data.description.trim();
const url = 'http://localhost:3030/data/movies';
const userData = JSON.parse(localStorage.getItem('user'));

if(!userData){
    alert('You must be logged in to publish movies!');
}

try{
const movie = await request(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Authorization': userData.accessToken,
    },
    body: JSON.stringify({title,img,description})
})
showView('details-view', showDetailsView,undefined,movie._id);
}catch(err){
// DO NOTHING
}
}