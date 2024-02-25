window.addEventListener("load", solve);

function solve() {
  //Refs 
  const snowmanNameRef = document.getElementById('snowman-name');
  const snowmanHeightRef = document.getElementById('snowman-height');
  const locationRef =document.getElementById('location');
  const creatorNameRef = document.getElementById('creator-name');
  const specialAttributeRef = document.getElementById('special-attribute');
  const formRef = document.querySelector('.snowman');
  const mainRef = document.querySelector('main');
  const bodyRef = document.querySelector('body');
  const imgRef = document.getElementById('back-img');

  //Buttons
  const addButton = document.querySelector('.add-btn');

  //Lists
  const previewList = document.querySelector('.snowman-preview');
  const snowList =document.querySelector('.snow-list');

  //Event Listeners
  addButton.addEventListener('click', onAdd);


  //Functions

  function onAdd(e){
    e.preventDefault();

    const data = {
      name:snowmanNameRef.value,
      height: snowmanHeightRef.value,
      location: locationRef.value,
      creator: creatorNameRef.value,
      special: specialAttributeRef.value,
    }

    if(!data.name || !data.height || !data.location || !data.creator || !data.special){
      return
    }

    moveToPreview(data);
  }

  function moveToPreview(data){
    formRef.reset();

    const li = create('li','','snowman-info');
    const article = create('article');
    const pName = create('p',`Name: ${data.name}`);
    const pHeight = create('p',`Height: ${data.height}`);
    const pLocation = create('p',`Location: ${data.location}`);
    const pCreator = create('p',`Creator: ${data.creator}`);
    const pAttribute = create('p',`Attribute: ${data.special}`);
    const btnContainer = create('div','','btn-container');

    article.appendChild(pName);
    article.appendChild(pHeight);
    article.appendChild(pLocation);
    article.appendChild(pCreator);
    article.appendChild(pAttribute);
    li.appendChild(article);

    const editButton = create('button','Edit','edit-btn');
    const nextButton = create('button','Next','next-btn');

    editButton.addEventListener('click',()=>onEdit(data));
    nextButton.addEventListener('click', ()=>onNext(article));

    btnContainer.appendChild(editButton);
    btnContainer.appendChild(nextButton);

    li.appendChild(btnContainer);

    previewList.appendChild(li);

    addButton.disabled = true;

  }
  function onNext(article){

    previewList.textContent = '';

    const li = create('li','','snowman-content');
    const sendButton = create('button','Send','send-btn');

    article.appendChild(sendButton);
    li.appendChild(article);

    sendButton.addEventListener('click', onSend);

    snowList.appendChild(li);

  }

  function onSend(){
    mainRef.remove();

    const backButton = create('button','Back','back-btn');

    imgRef.removeAttribute('hidden');
    backButton.addEventListener('click',()=>{
      location.reload();
    })

    bodyRef.appendChild(backButton)
  }
  function onEdit(data){
    previewList.textContent = '';

    snowmanNameRef.value = data.name
    snowmanHeightRef.value = data.height
    locationRef.value = data.location
    creatorNameRef.value = data.creator
    specialAttributeRef.value = data.special;

    addButton.disabled = false;
  }

  function create(element,elementContent,elementStyle){
    const createdElement = document.createElement(element);

    if(elementContent){
      createdElement.textContent = elementContent
    }

    if(elementStyle){
      createdElement.classList.add(elementStyle);
    }
    return createdElement;
  }
}
