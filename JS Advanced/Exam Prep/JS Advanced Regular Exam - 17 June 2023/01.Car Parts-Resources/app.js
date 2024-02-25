window.addEventListener("load", solve);

function solve() {
  //Refs
  const carModelRef = document.getElementById("car-model");
  const carYearModelRef = document.getElementById("car-year");
  const partNameRef = document.getElementById("part-name");
  const partNumberRef = document.getElementById("part-number");
  const conditionRef = document.getElementById("condition");
  const completeImgRef = document.getElementById("complete-img");
  const completeTextRef = document.getElementById("complete-text");
  const formRef = document.querySelector("form");

  //Buttons
  const nextBtn = document.getElementById("next-btn");

  //Lists
  const partiInfoListRef = document.querySelector(".info-list");
  const partConfirmListRef = document.querySelector(".confirm-list");

  //Event Listeners
  nextBtn.addEventListener("click", createOrder);

  //Functions

  function createOrder(e) {
    e.preventDefault();
    const data = {
      carModel: carModelRef.value,
      carYear: Number(carYearModelRef.value),
      partName: partNameRef.value,
      partNumber: partNumberRef.value,
      condition: conditionRef.value,
    };

    if (
      !data.carModel ||
      !data.carYear ||
      !data.partName ||
      !data.partNumber ||
      !data.condition ||
      data.carYear < 1980 ||
      data.carYear > 2023
    ) {
      return;
    }

    moveOrder(data);
    completeImgRef.style.visibility = "hidden";
    completeTextRef.textContent = "";
  }

  function moveOrder(data) {
    formRef.reset();

    const li = createElements("li", "", "part-content");
    const article = createElements("article");
    const pModel = createElements("p", `Car Model: ${data.carModel}`);
    const pYear = createElements("p", `Car Year: ${data.carYear}`);
    const pName = createElements("p", `Part Name: ${data.partName}`);
    const pNumber = createElements("p", `Part Number: ${data.partNumber}`);
    const pCondition = createElements("p", `Condition: ${data.condition}`);

    article.appendChild(pModel);
    article.appendChild(pYear);
    article.appendChild(pName);
    article.appendChild(pNumber);
    article.appendChild(pCondition);

    li.appendChild(article);

    const editBtn = createElements("button", "Edit", "edit-btn");
    const continueBtn = createElements("button", "Continue", "continue-btn");

    editBtn.addEventListener("click", () => onEdit(data));
    continueBtn.addEventListener("click", () => onContinue(article));

    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    partiInfoListRef.appendChild(li);

    nextBtn.disabled = true;
  }

  function onContinue(article) {
    partiInfoListRef.textContent = "";

    const li = createElements("li", "", "part-content");

    const confirmBtn = createElements("button", "Confirm", "confirm-btn");
    const cancelBtn = createElements("button", "Cancel", "cancel-btn");

    confirmBtn.addEventListener("click", onConfirm);
    cancelBtn.addEventListener("click", onCancel);

    li.appendChild(article);
    li.appendChild(confirmBtn);
    li.appendChild(cancelBtn);

    partConfirmListRef.appendChild(li);
  }

  function onConfirm() {
    partConfirmListRef.textContent = "";
    nextBtn.disabled = false;
    completeImgRef.style.visibility = "visible";
    completeTextRef.textContent = "Part is Ordered!";
  }

  function onCancel() {
    partConfirmListRef.textContent = "";
    nextBtn.disabled = false;
  }

  function onEdit(data) {
    partiInfoListRef.textContent = "";

    carModelRef.value = data.carModel;
    carYearModelRef.value = data.carYear;
    partNameRef.value = data.partName;
    partNumberRef.value = data.partNumber;
    conditionRef.value = data.condition;

    nextBtn.disabled = false;
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
}
