window.addEventListener("load", solution);

async function solution() {
    const mainRef = document.getElementById('main');
  const response = await fetch(
    `http://localhost:3030/jsonstore/advanced/articles/list`
  );
  const data = await response.json();

  for(let acc of Object.values(data)){
    const el = await createArticle(acc)
    mainRef.appendChild(el);
  }

  async function createArticle(data) {

    const url = `http://localhost:3030/jsonstore/advanced/articles/details/`;

    const response = await fetch(url + data._id)
    const responseData = await response.json();

    const accordion = createElement('div','accordion');
    const accordionHead = createElement('div','head');
    const span =createElement('span','',responseData.title);
    const moreBtn = createElement('button','button','More');
    moreBtn.setAttribute('id',responseData._id);

    const extra = createElement('div','extra');
    const extraP = createElement('p','',responseData.content)

    accordionHead.appendChild(span);
    accordionHead.appendChild(moreBtn);
    accordion.appendChild(accordionHead);
    extra.appendChild(extraP);
    accordion.appendChild(extra)

    moreBtn.addEventListener('click',showContent);

    return accordion
    
  }

  function showContent(e){
    const accordion = e.target.parentElement.parentElement.querySelector('div .extra');

    if(e.target.textContent == 'More'){
        accordion.style.display = 'block';
        e.target.textContent = 'Less'
    }else {
        accordion.style.display = 'none';
        e.target.textContent = 'More';
    }
  }

  function createElement(type, className, content) {
    const createdElement = document.createElement(type);

    if (className) {
      createdElement.classList.add(className);
    }

    if (content) {
      createdElement.textContent = content;
    }

    return createdElement;
  }
}
