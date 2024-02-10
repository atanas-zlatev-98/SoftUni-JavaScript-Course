window.addEventListener("load", solve);

function solve() {

  const inputs = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    dateIn: document.getElementById("date-in"),
    dateOut: document.getElementById("date-out"),
    peopleCount: document.getElementById("people-count"),
  };

  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", onNextClick);

  const output = document.getElementById('verification');
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector('.confirm-list');
  
  function onNextClick(e) {

    e.preventDefault();

    if (
      inputs.firstName.value == "" ||
      inputs.lastName.value == "" ||
      inputs.dateIn.value == "" ||
      inputs.dateOut.value == "" ||
      inputs.peopleCount.value == ""
    ) {
      return;
    }

    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const dateIn = inputs.dateIn.value;
    const dateOut = inputs.dateOut.value;
    const peopleCount = Number(inputs.peopleCount.value);

    if ((new Date(dateIn)).getTime() >= (new Date(dateOut)).getTime()) {
      return;
    }

    nextBtn.parentElement.reset();
    nextBtn.disabled = true;

    const result = createPreview(firstName,lastName,dateIn,dateOut,peopleCount);
    infoList.appendChild(result);
  }

  function createInfo(firstName, lastName, dateIn, dateOut, peopleCount){
    const element = createElement("li");
    element.className = "reservation-content";

    const article = createElement("article");
    article.appendChild(createElement("h3", `Name: ${firstName} ${lastName}`));
    article.appendChild(createElement("p", `From date: ${dateIn}`));
    article.appendChild(createElement("p", `To date: ${dateOut}`));
    article.appendChild(createElement("p", `For: ${peopleCount} people`));
    element.appendChild(article);

    return element;
  }

  function createPreview(firstName, lastName, dateIn, dateOut, peopleCount) {
    
    const element = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

    const editBtn = createElement("button", "Edit");
    editBtn.className = "edit-btn";

    editBtn.addEventListener("click", () =>
      onEditClick(firstName, lastName, dateIn, dateOut, peopleCount)
    );

    const continueBtn = createElement("button", "Continue");
    continueBtn.className = "continue-btn";
    continueBtn.addEventListener('click', onContinueClick.bind(null,firstName, lastName, dateIn, dateOut, peopleCount))

    element.appendChild(editBtn);
    element.appendChild(continueBtn);

    return element;
  }

  function createConfirmation(firstName, lastName, dateIn, dateOut, peopleCount){
    const element = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

    const confirmBtn = createElement("button", "Confirm");
    confirmBtn.className = "confirm-btn";
    confirmBtn.addEventListener("click", onFinishClick.bind(null,true));

    const cancelBtn = createElement("button", "Cancel");
    cancelBtn.className = "cancel-btn";
    cancelBtn.addEventListener('click', onFinishClick.bind(null,false));

    element.appendChild(confirmBtn);
    element.appendChild(cancelBtn);

    return element;
  }

  function onEditClick(firstName, lastName, dateIn, dateOut, peopleCount) {
    
    inputs.firstName.value = firstName;
    inputs.lastName.value = lastName;
    inputs.dateIn.value = dateIn;
    inputs.dateOut.value = dateOut;
    inputs.peopleCount.value = peopleCount;

    infoList.textContent = '';
    nextBtn.disabled = false;
  }

  function onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount){
    const result  = createConfirmation(firstName, lastName, dateIn, dateOut, peopleCount);
    confirmList.appendChild(result);
    infoList.textContent = '';

  }

  function onFinishClick(confirm){
    const className = confirm ? 'reservation-confirmed' : 'reservation-cancelled';
    const text  = confirm ? 'Confirmed.' : 'Cancelled.';
   
    output.className = className;
    output.textContent = text;

    confirmList.textContent = '';
    nextBtn.disabled = false

  }

  function createElement(type, content) {
    const element = document.createElement(type);

    if (content) {
      element.textContent = content;
    }

    return element;
  }
}
