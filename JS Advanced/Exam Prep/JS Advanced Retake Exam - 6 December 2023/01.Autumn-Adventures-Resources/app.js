window.addEventListener('load', solve);

function solve() {

    const addEventBtnRef = document.getElementById('add-btn');
    const clearBtnRef = document.getElementById('clear');

    const eventTimeRef = document.getElementById('time');
    const eventDateRef = document.getElementById('date');
    const eventPlaceRef = document.getElementById('place');
    const eventNameRef = document.getElementById('event-name');
    const eventContactsRef = document.getElementById('email');

    const checkList = document.getElementById(`check-list`);
    const upcomingList = document.getElementById('upcoming-list');
    const finishedList = document.getElementById('finished-list');

    addEventBtnRef.addEventListener('click', addEvent);

    clearBtnRef.addEventListener('click', ()=> {
        finishedList.textContent = '';
    });

    function addEvent(event){
        event.preventDefault();

        const data = {
            eventTime: eventTimeRef.value,
            eventDate: eventDateRef.value,
            eventPlace: eventPlaceRef.value,
            eventName: eventNameRef.value,
            eventEmail: eventContactsRef.value
        }

        if(!data.eventDate || !data.eventTime || !data.eventPlace || !data.eventName || !data.eventEmail){
            return
        }

        const liElement = createElement('li');
        liElement.classList.add('event-content')
        const article = createElement('article');

        const begins = createElement('p', `Begins: ${data.eventDate} at: ${data.eventTime}`);
        const place = createElement('p',`In: ${data.eventPlace}`);
        const nameOfEvent = createElement('p',`Event: ${data.eventName}`);
        const contacts = createElement('p',`Contact: ${data.eventEmail}`);
        const editBtn = createElement('button', 'Edit','edit-btn');
        const continueBtn = createElement('button', 'Continue', 'continue-btn');

        article.appendChild(begins);
        article.appendChild(place);
        article.appendChild(nameOfEvent);
        article.appendChild(contacts);

        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        checkList.appendChild(liElement);

        addEventBtnRef.disabled = true;
        addEventBtnRef.parentElement.reset();


        editBtn.addEventListener('click',()=>editEvent(data))
        continueBtn.addEventListener('click', () => continueEvent(article));

    }

    function continueEvent(article){

        const liElement = createElement('li');
        liElement.classList.add('event-content');

        liElement.appendChild(article);
        checkList.textContent = '';

        upcomingList.appendChild(liElement);
        addEventBtnRef.disabled = false;

        const moveToFinishBtn = createElement('button','Move to Finish','finished-btn')
        liElement.appendChild(moveToFinishBtn);

        moveToFinishBtn.addEventListener('click',()=> moveToFinish(article))
    }

    function moveToFinish(element){
        const liElement = createElement('li');
        liElement.classList.add('event-content');
        liElement.appendChild(element);

        upcomingList.textContent = '';
        finishedList.appendChild(liElement);
    }
    function editEvent(data){

        eventTimeRef.value = data.eventTime;
        eventDateRef.value = data.eventDate;
        eventPlaceRef.value = data.eventPlace;
        eventNameRef.value = data.eventName; 
        eventContactsRef.value = data.eventEmail;

        addEventBtnRef.disabled = false;
        checkList.textContent = '';
        
    }

    function createElement(elementType,elementContext,elementClass){
        const element = document.createElement(elementType);
        element.textContent = elementContext;

        if(elementClass){
            element.classList.add(elementClass);
        }

        return element
    }

}


    
    
