window.addEventListener("load", solve);

function solve() {
  const formBtnRef = document.getElementById("form-btn");

  formBtnRef.addEventListener("click", createTask);
  const firstNameRef = document.getElementById("first-name");
  const lastNameRef = document.getElementById("last-name");
  const ageRef = document.getElementById("age");
  const genderRef = document.getElementById("genderSelect");
  const dishInformationRef = document.getElementById("task");

  const inProgressRef = document.getElementById("in-progress");
  const finishedRef = document.getElementById("finished");

  const progressRef = document.getElementById('progress-count');

  const clearBtn = document.getElementById('clear-btn');

  function createTask(e) {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.value,
      lastName: lastNameRef.value,
      age: ageRef.value,
      gender: genderRef.value,
      dishInformation: dishInformationRef.value,
    };

    if (
      !data.firstName ||
      !data.lastName ||
      !data.age ||
      !data.dishInformation
    ) {
      return;
    }

    inProgress(data);
  }

  function inProgress(data) {

    const li = createElements("li", "", "each-line");
    const article = createElements("article");
    const nameElement = createElements("h4",`${data.firstName} ${data.lastName}`);
    const genderAge = createElements("p", `${data.gender}, ${data.age}`);
    const information = createElements("p", `Dish description: ${data.dishInformation}`);

    article.appendChild(nameElement);
    article.appendChild(genderAge);
    article.appendChild(information);

    const editBtn = createElements("button", "Edit", "edit-btn");
    const continueBtn = createElements(
      "button",
      "Mark as complete",
      "complete-btn"
    );
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    inProgressRef.appendChild(li);

    editBtn.addEventListener("click", () => onEdit(data));
    formBtnRef.parentElement.parentElement.reset();

    progressRef.textContent = dishesInProgress(1);

    continueBtn.addEventListener('click', ()=> onContinue(article));
    
  }

  function onContinue(article){
    const removeLi = document.querySelector('#in-progress .each-line');
    removeLi.remove()

    const li = createElements("li", "", "each-line");
    li.appendChild(article);
    finishedRef.appendChild(li);


    progressRef.textContent = dishesInProgress(-1);
  }
  function dishesInProgress(num){
    let value = Number(progressRef.textContent);

    if(num < 0){
      value -= Number(Math.abs(num));
    }else {
      value += Number(num)
    }
    return value
  }
  
  
  function onEdit(data) {
    
    const removeLi = document.querySelector('#in-progress .each-line');
    removeLi.remove();

    progressRef.textContent = dishesInProgress(-1);
    firstNameRef.value = data.firstName;
    lastNameRef.value = data.lastName;
    ageRef.value = data.age;
    genderRef.value = data.gender;
    dishInformationRef.value = data.dishInformation;
  }

  function createElements(type, text, classes) {
    const element = document.createElement(type);

    if (text) {
      element.textContent = text;
    }

    if (classes) {
      element.classList.add(classes);
    }
    return element;
  }

  clearBtn.addEventListener('click', ()=>{
    finishedRef.textContent = '';
  })
}
