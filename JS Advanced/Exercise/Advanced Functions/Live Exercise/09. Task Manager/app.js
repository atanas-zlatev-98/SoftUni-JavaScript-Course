function solve() {
    const formRef = document.querySelector('form');
    const [addTask,openTask,inProgress,complate] = document.querySelectorAll('section');
    
    btnHandlerEnum = {
        start:function(e){
            let currentArticle = e.parentElement.parentElement;
            removeBtn(e.parentElement);

            currentArticle.innerHTML += getBtnPartial({classes: 'red', text: 'Delete'},{classes: 'orange',text: 'Finish'});
            let btns = currentArticle.querySelectorAll('button');

            addEventListenerToButton(btns);
            inProgress.children[1].appendChild(currentArticle);

        },
        finish: function(e){
            let currentArticle = e.parentElement.parentElement;
            removeBtn(e.parentElement);
            complate.children[1].appendChild(currentArticle);
        },
        delete: function(e){
            e.parentElement.parentElement.remove();
        },
    }

    formRef.addEventListener('submit', onSubmitHandler);

    function onSubmitHandler(e){
        e.preventDefault();

        let formElements = e.target.elements;

        let taskName = formElements[0].value;
        let formDesc = formElements[1].value;
        let formData = formElements[2].value;

        if(!taskName || !formDesc || !formData){
            return;
        }

        createArticle(taskName,formDesc,formData);
        clearForm(formElements);
    }

    function clearForm(formElements){
        formElements[0].value = '';
        formElements[1].value = '';
        formElements[2].value = '';
    }

    function addEventListenerToButton(btns){
        Array.from(btns).forEach( button =>
            button.addEventListener('click', clickHandler));
    }

    function clickHandler(e){
        let currentAction = e.target.innerText.toLowerCase();
        btnHandlerEnum[currentAction](e.target);
    }

   function createArticle(name,desc,data){
        let newArticle = document.createElement('article');
        newArticle.innerHTML = getArticleTemp(name,desc,data);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll('button');
        addEventListenerToButton(btns);
    }
    

    function getArticleTemp(name,desc,date){
        return `<h3>${name}</h3>` + 
        `<p>Description: ${desc}</p>` + 
        `<p>Due Date: ${date}</p>`+
        getBtnPartial({classes: 'green',text: 'Start'},{classes: 'red',text: 'Delete'})
    }

    function getBtnPartial(btn1,btn2){
        return `<div class="flex">` +
                    `<button class=${btn1.classes}>${btn1.text}</button>` + 
                    `<button class=${btn2.classes}>${btn2.text}</button>` + 
               `</div>`
    }
    function removeBtn(target){
        target.remove();
    }

}