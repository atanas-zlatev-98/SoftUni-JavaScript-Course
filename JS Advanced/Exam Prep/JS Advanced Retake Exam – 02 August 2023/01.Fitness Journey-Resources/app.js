window.addEventListener('load', solve);

function solve() {
const nextBtnRef = document.getElementById('next-btn');

const nameRef = document.getElementById('name');
const emailRef= document.getElementById('email');
const contactNumberRef= document.getElementById('contact-number');
const typeRef = document.getElementById('class-type');
const classTime = document.getElementById('class-time');

const classPreviewRef = document.querySelector('.class-info');
const confirmClassRef = document.querySelector('.confirm-class');

nextBtnRef.addEventListener('click', onNext);

function onNext(e){
    e.preventDefault();

    const data = {
        name: nameRef.value,
        email: emailRef.value,
        contact: contactNumberRef.value,
        type: typeRef.value,
        class: classTime.value
    }

    if(!data.name || !data.email || !data.contact || !data.type || !data.class){
        return
    }

    createPreview(data);

}

function createPreview(data){

    const liElement = createElement('li');
    liElement.classList.add('info-item');

    const article = createElement('article');
    article.classList.add('personal-info');

    const name = createElement('p',data.name);
    const email = createElement('p',data.email);
    const contact = createElement('p',data.contact);
    const classType = createElement('p',data.type);
    const time = createElement('p',data.class);


    article.appendChild(name);
    article.appendChild(email);
    article.appendChild(contact);
    article.appendChild(classType);
    article.appendChild(time);

    liElement.appendChild(article);

    const editBtn = createElement('button', "Edit");
    editBtn.classList.add('edit-btn');
    const continueBtn = createElement('button','Continues');
    continueBtn.classList.add('continue-btn');

    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);
    classPreviewRef.appendChild(liElement);

    editBtn.addEventListener('click',()=> onEdit(data));
    continueBtn.addEventListener('click',() => onContinue(article));

    nextBtnRef.parentElement.reset();
    nextBtnRef.disabled = true;

}

function onContinue(article){
    const liElement = createElement('li');
    liElement.classList.add('continue-info');
    article.classList.add('personal-info');
    classPreviewRef.textContent = '';

    const cancelBtn = createElement('button', 'Cancel');
    cancelBtn.classList.add('cancel-btn');
    const confirmBtn = createElement('button', 'Confirm');
    confirmBtn.classList.add('confirm-btn');

    liElement.appendChild(article);
    liElement.appendChild(cancelBtn);
    liElement.appendChild(confirmBtn);

    confirmClassRef.appendChild(liElement);

    cancelBtn.addEventListener('click', onCancel);
    confirmBtn.addEventListener('click', onConfirm)

}
function onConfirm(){
    const bodyRef = document.getElementById('body');
    const mainRef = document.getElementById('main');
    mainRef.remove();

    const h1 = createElement('h1', 'Thank you for scheduling your appointment, we look forward to seeing you!');
    h1.setAttribute('id','thank-you');

    const doneBtn = createElement('button','Done');

    doneBtn.setAttribute('id','done-btn');
    doneBtn.addEventListener('click', onDone);

    bodyRef.appendChild(h1);
    bodyRef.appendChild(doneBtn);
}
function onDone(){
    location.reload()
}
function onCancel(){
    nextBtnRef.disabled = false;
    confirmClassRef.textContent = '';
}
function onEdit(data){
   classPreviewRef.textContent = '';

   nameRef.value = data.name;
   emailRef.value = data.email;
   contactNumberRef.value = data.contact;
   typeRef.value = data.type;
   classTime.value = data.class;

   nextBtnRef.disabled = false;
}
function createElement(type,text){
    const element = document.createElement(type);

    if(text){
        element.textContent = text;
    }
  
    return element;
}
}




