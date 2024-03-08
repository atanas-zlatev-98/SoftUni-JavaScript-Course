import { dataService } from "../api/dataService";

const view = document.querySelector('div[data-view-name="details"]');
const form = view.querySelector("form");
form.addEventListener('submit', onSubmit);


let context = null;

export function showCreateView(ctx){
    context = ctx;
    context.render(view);    
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const {title,description,imgURL} = Object.fromEntries(formData);

    if(title.length < 6 || description.length < 10 || imgURL.length < 5){
        return alert("Error create");
    }

    dataService.create({title,description,imgURL});
    context.goTo('/dashboard');
    form.reset();
}