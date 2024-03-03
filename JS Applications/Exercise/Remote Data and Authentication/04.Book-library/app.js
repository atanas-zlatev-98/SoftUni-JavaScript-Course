document.getElementById("loadBooks").addEventListener("click", onLoad);
const h3Ref = document.querySelector("h3");

const submitBtn = document.querySelector("form button");
const tbodyRef = document.querySelector("tbody");

if(submitBtn.textContent == 'Submit'){
    submitBtn.addEventListener("click", onSubmit);
}

const endpoints = {
  allBooks: "http://localhost:3030/jsonstore/collections/books",
  delete: "http://localhost:3030/jsonstore/collections/books/",
};

async function onLoad() {
  const response = await fetch(endpoints.allBooks);
  const data = await response.json();
  template(data);
}

function onSubmit(e) {
  e.preventDefault();
  submitBtn.textContent = "Submit";

  const formData = new FormData(e.target.parentElement);
  const data = Object.fromEntries(formData.entries());

  if(!data.title || !data.author){
    return
  }
 
  addNewBook(data);

  e.target.parentElement.reset();
}

async function addNewBook(data) {
  await fetch(endpoints.allBooks, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  onLoad();
}

function template(data) {
  tbodyRef.textContent = "";

  for (let [key, value] of Object.entries(data)) {
    const tr = create("tr");
    const tdTitle = create("td", value.title);
    const tdAuthor = create("td", value.author);
    const tdAction = create("td");

    const btnEdit = create("button", "Edit");
    btnEdit.addEventListener("click", () => {
      onEdit(key);
    });

    const btnDelete = create("button", "Delete");

    btnDelete.addEventListener("click", () => {
        debugger
      onDelete(key);
    });

    tdAction.appendChild(btnEdit);
    tdAction.appendChild(btnDelete);

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdAction);

    tbodyRef.appendChild(tr);
  }
}

function create(el, content) {
  const createdElement = document.createElement(el);
  if (content) {
    createdElement.textContent = content;
  }
  return createdElement;
}

async function onEdit(key) {

  const editButton = create('button','Edit')
  const form = document.querySelector("form");
  form.appendChild(editButton)

  h3Ref.textContent = 'Edit FORM';
  submitBtn.style.display = 'none';
  
  const response = await fetch(endpoints.allBooks + "/" + key);
  const data = await response.json();

  const title = document.querySelector('input[name="title"]');
  title.value = data.title;

  const author = document.querySelector('input[name="author"]');
  author.value = data.author;

  editButton.addEventListener('click',(e)=>{
    e.preventDefault();

    const bookData = {
      author: author.value,
      title: title.value
    }

    if(!data.title || !data.author){
      return
    }
  
    onUpdate(bookData,key)
    editButton.style.display = 'none';
    title.value = '';
    author.value = '';
  })

  
}

async function onUpdate(book,key){
  submitBtn.style.display = 'block';
    try{
        await fetch(endpoints.delete + key, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
          });
    }catch(err){
        console.error("Error:", err);
    }
    h3Ref.textContent = 'FORM';
    onLoad();
}

async function onDelete(key) {
  try {
    await fetch(endpoints.delete + key, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err){

  }

  onLoad();
}
