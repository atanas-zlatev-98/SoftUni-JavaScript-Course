import { createPost } from "./create.js";
import { renderTemplate } from "./render.js";

const btnCreate = document.querySelector('.public');
btnCreate.addEventListener('click', createPost)
const topicContainer = document.querySelector('.topic-container');

const endpoints = {
    allPosts: 'http://localhost:3030/jsonstore/collections/myboard/posts'
}

async function onLoad(){
    const response = await fetch(endpoints.allPosts);
    const data = await response.json();
    console.log(data);
    Object.entries(data).forEach(x=>{
        topicContainer.appendChild(renderTemplate(x));
    })
}

onLoad();


/*function create(element,elementClass,elementContext){
const createdElement = document.createElement(element);
if(elementClass){
    createdElement.classList.add(elementClass)
};
if(elementContext){
    createdElement.textContent = elementContext;
}
return createdElement
}*/