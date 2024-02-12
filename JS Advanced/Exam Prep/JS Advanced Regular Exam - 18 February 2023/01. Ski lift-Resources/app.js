window.addEventListener("load", solve);

function solve() {

  const nextBtnRef = document.getElementById("next-btn");
  const fNamaRef = document.getElementById("first-name");
  const lNameRef = document.getElementById("last-name");
  const nPeople = document.getElementById("people-count");
  const fromDate = document.getElementById("from-date");
  const daysCount = document.getElementById("days-count");
  const ticketPreviewListRef = document.querySelector(".ticket-info-list");
  const continueListRef = document.querySelector(".confirm-ticket");


  nextBtnRef.addEventListener("click", (e) => {
    e.preventDefault();

    let firstName = fNamaRef.value;
    let lastName = lNameRef.value;
    let peopleCount = Number(nPeople.value);
    let date = fromDate.value;
    let days = daysCount.value;

    if (!firstName || !lastName || !peopleCount || !date || !days) {
      return;
    }else {
        previewTicket(firstName, lastName, peopleCount, date, days)
    }

    console.log(firstName, lastName, peopleCount, date, days);
  });

  function previewTicket(firstName, lastName, peopleCount, date, days) {

    const liElement = document.createElement('li');
    liElement.classList.add('ticket')

    const articleElement = document.createElement('article');
    const h3Element =document.createElement('h3');
    h3Element.textContent =`Name: ${firstName} ${lastName}`;

    const dateP = document.createElement('p');
    dateP.textContent = `From date: ${date}`;

    const daysStay = document.createElement('p');
    daysStay.textContent = `For ${days} days`;

    const people = document.createElement('p');
    people.textContent = `For ${peopleCount} people`;

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Edit';

    const continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';

    articleElement.appendChild(h3Element);
    articleElement.appendChild(dateP);
    articleElement.appendChild(daysStay);
    articleElement.appendChild(people);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    ticketPreviewListRef.appendChild(liElement);

    editBtn.addEventListener('click', () =>{editHandler(firstName, lastName, peopleCount, date, days)});
    continueBtn.addEventListener('click', ()=> {continueHandler(articleElement)});

    nextBtnRef.parentElement.reset();
    nextBtnRef.disabled = true;

  }

  function editHandler(firstName, lastName, peopleCount, date, days){

   fNamaRef.value = firstName;
   lNameRef.value = lastName;
   nPeople.value = peopleCount;
   fromDate.value = date;
   daysCount.value = days;

   ticketPreviewListRef.textContent = '';
   nextBtnRef.disabled = false;

  }

  function continueHandler(element){
    ticketPreviewListRef.textContent = '';
    const liElement = document.createElement('li');
    liElement.appendChild(element);
    continueListRef.appendChild(liElement);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-btn');
    confirmBtn.textContent = 'Confirm';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = "Cancel";

    liElement.appendChild(confirmBtn);
    liElement.appendChild(cancelBtn);

    confirmBtn.addEventListener('click', confirmTicket);
    cancelBtn.addEventListener('click', cancelTicket);
  }

  function cancelTicket(){
    continueListRef.textContent = '';
    nextBtnRef.disabled = false;
  }

  function confirmTicket(){
    const body = document.getElementById('body');
    body.textContent = '';

    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'thank-you')
    h1.textContent = 'Thank you, have a nice day!';

    const backBtn = document.createElement('button');
    backBtn.setAttribute('id', 'back-btn');
    backBtn.textContent = 'Back';

    body.appendChild(h1);
    body.appendChild(backBtn);

    backBtn.addEventListener('click', ()=> {
        location.reload();
    })
 }
}
