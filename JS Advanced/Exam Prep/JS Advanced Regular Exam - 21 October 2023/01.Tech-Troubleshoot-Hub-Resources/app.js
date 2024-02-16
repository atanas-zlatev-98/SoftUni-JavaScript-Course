window.addEventListener("load", solution);

function solution() {
  //Refs
  const empRef = document.getElementById("employee");
  const categoryRef = document.getElementById("category");
  const urgencyRef = document.getElementById("urgency");
  const teamRef = document.getElementById("team");
  const descRef = document.getElementById("description");

  //Buttons
  const addButtonRef = document.getElementById("add-btn");

  //Lists
  const previewList = document.querySelector(".preview-list");
  const pendingList = document.querySelector('.pending-list');
  const resolvedList = document.querySelector('.resolved-list');

  //Event Listeners
  addButtonRef.addEventListener("click", addProblem);

  //Functions
  function addProblem(e) {
    e.preventDefault();
    const data = {
      emp: empRef.value,
      category: categoryRef.value,
      urgency: urgencyRef.value,
      team: teamRef.value,
      description: descRef.value,
    };

    if (
      !data.emp ||
      !data.category ||
      !data.urgency ||
      !data.team ||
      !data.description
    ) {
      return;
    }

    const li = createElements("li", "", "problem-content");
    const article = createElements("article");
    const pFrom = createElements("p", `From: ${data.emp}`);
    const pCategory = createElements("p", `Category: ${data.category}`);
    const pUrgency = createElements("p", `Urgency: ${data.urgency}`);
    const pAssigned = createElements("p", `Assigned to: ${data.team}`);
    const pDescription = createElements(
      "p",
      `Description: ${data.description}`
    );

    article.appendChild(pFrom);
    article.appendChild(pCategory);
    article.appendChild(pUrgency);
    article.appendChild(pAssigned);
    article.appendChild(pDescription);

    const editBtn = createElements('button','Edit','edit-btn');
    const continueBtn = createElements('button','Continue','continue-btn');

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    previewList.appendChild(li);

    editBtn.addEventListener('click', ()=> onEdit(data));
    continueBtn.addEventListener('click', ()=> onContinue(article));

    clearForm();
    addButtonRef.disabled = true;
    
  }

  function onContinue(article){

    previewList.textContent = '';

    const li = createElements('li','','problem-content');
    const resolveBtn = createElements('button','Resolved','resolve-btn');

    resolveBtn.addEventListener('click', () => onReselve(article));

    li.appendChild(article);
    li.appendChild(resolveBtn);

    pendingList.appendChild(li);
    
    addButtonRef.disabled = false;

  }
  function onReselve(article){
    pendingList.textContent = '';

    const li = createElements('li','','problem-content');
    li.appendChild(article);

    const clearBtn = createElements('button','Clear','clear-btn');
    clearBtn.addEventListener('click',onClear);
    li.appendChild(clearBtn)
    resolvedList.appendChild(li);    

  }
  function onClear(){
    resolvedList.textContent = '';
    addButtonRef.disabled = false;
  }
  function onEdit(data){

    empRef.value = data.emp;
    categoryRef.value = data.category;
    urgencyRef.value = data.urgency;
    teamRef.value = data.team;
    descRef.value = data.description;

    addButtonRef.disabled = false;
    previewList.textContent = '';
  }

  function createElements(element, elementContext, elementClass) {
    const createdElement = document.createElement(element);

    if (elementContext) {
      createdElement.textContent = elementContext;
    }

    if (elementClass) {
      createdElement.classList.add(elementClass);
    }

    return createdElement;
  }

  function clearForm(){
    const form =document.querySelector('form');
    form.reset();
  }
}
