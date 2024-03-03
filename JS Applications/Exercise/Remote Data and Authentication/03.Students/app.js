window.addEventListener('load',start);

const tbodyRef = document.querySelector("tbody");
const formRef = document.getElementById("form");

formRef.addEventListener("submit", onSubmit);

async function start(){
    tbodyRef.textContent = '';
    const data = await getStudents();
    renderStudents(data);
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const firstName = data.firstName;
  const lastName = data.lastName;
  const facultyNumber = data.facultyNumber
  const grade = data.grade;
  
  const student = {
    firstName,
    lastName,
    facultyNumber,
    grade
  }

  createStudent(student);
  e.target.reset();
}

async function createStudent(data){
    const url = "http://localhost:3030/jsonstore/collections/students";

    const postData = await fetch(url,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    start();
    return postData;
}

async function getStudents() {
  const url = "http://localhost:3030/jsonstore/collections/students";
  const reponse = await fetch(url);
  const data = await reponse.json();

  return data;
}

function renderStudents(data) {

  for (let value of Object.values(data)) {
    
    const tr = create('tr');
    const thFirstName = create('th',`${value.firstName}`);
    const thLastName = create('th',`${value.lastName}`);
    const thFacNum = create('th',`${value.facultyNumber}`);
    const thGrade = create('th',`${value.grade}`);
    
    tr.appendChild(thFirstName);
    tr.appendChild(thLastName);
    tr.appendChild(thFacNum);
    tr.appendChild(thGrade);

    tbodyRef.appendChild(tr);
  }
}

function create(element,content){
    const createdElement = document.createElement(element);

    if(content){
        createdElement.textContent = content
    }

    return createdElement;
}

/*<tr>
  <th>asd</th>
  <th>asd</th>
  <th>asd</th>
  <th>asd</th>
</tr>;*/
