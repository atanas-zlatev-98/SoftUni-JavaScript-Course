window.addEventListener('load', solve);

function solve() {
   const formRef = document.querySelector('form');

   const firstNameRef = document.getElementById("first-name");
   const lastNameRef = document.getElementById("last-name");
   const peopleCountRef = document.getElementById("people-count");
   const fromDateRef = document.getElementById("from-date");
   const daysCountRef = document.getElementById("days-count");
   const infoTicketUl = document.querySelector(`#info-ticket ul`);
   const nextBtnRef = document.getElementById('next-btn')
   formRef.addEventListener('submit', onSubmit);

   function onSubmit(e){
    e.preventDefault();

    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let peopleCount = peopleCountRef.value;
    let fromDate = fromDateRef.value;
    let daysCount = daysCountRef.value;

    if(!firstName || !lastName || !peopleCount || !fromDate || !daysCount){
        return;
    }

   let ticket =  createTicket(firstName,lastName,peopleCount,fromDate,daysCount);
    infoTicketUl.appendChild(ticket);
    toggleNextButton();
    formRef.reset();
   }

   function createTicket(firstName,lastName,peopleCount,fromDate,daysCount){
    let li = document.createElement('li');
    li.classList.add('ticket');
    li.innerHTML += `<article>`;
    li.innerHTML += `<h3>Name: ${firstName} ${lastName}</h3>`;
    li.innerHTML += `<p>From date: ${fromDate}</p>`;
    li.innerHTML += `<p>For ${daysCount} days</p>`;
    li.innerHTML += `<p>For ${peopleCount} people</p>`
    li.innerHTML += `</article>`;

    let editBtn = createBtn('edit-btn','Edit')
    let continueBtn = createBtn('continue-btn','Continue');
    editBtn.addEventListener('click', onEdit);
    continueBtn.addEventListener('click',onContinue);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    return li;
   }

   function onEdit(e){
        let articleChildren = e.currentTarget.parentElement.querySelector('article').children;
        let nameData = article.children[0].textContent.split(' ');
        let dataTokens = articleChildren[1].textContent.split(' ');
        let daysCountToken = articleChildren[2].textContent.split(' ');
        let peopleCountToken = articleChildren[3].textContent.split(' ');

        let firstName = nameData[1];
        let lastName = nameData[2];
        let fromDate = dataTokens[1];
        let daysCount = daysCountToken[1];
        let peopleCount = peopleCountToken[1];

        firstNameRef.value = firstName;
        lastNameRef.value = lastName;
        fromDateRef.value = fromDate;
        daysCountRef.value = daysCount;
        peopleCountRef.value = peopleCount;

        toggleNextButton();


   }

   function onContinue(){

   }

   function createBtn(classes,text){
    const btn = document.createElement('button');
    btn.classList.add(classes);
    btn.textContent = text;
    return btn;
   }
function toggleNextButton(){
    nextBtnRef.disabled = true;
}
}


    
    
