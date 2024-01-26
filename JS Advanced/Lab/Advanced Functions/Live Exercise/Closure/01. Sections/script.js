const createPara = (textContent) => createElement('p',{textContent});
const createDiv = (content) => createElement('div',{},content);

function create(words) {

  const container = document.getElementById("content");

  for (let word of words) {
        
    const p = createPara(word);
    const div = createDiv(p);

    p.style.display = "none";
    container.appendChild(div);

    div.addEventListener('click', show);

    function show(){
      p.style.display = '';
    }
  }

}

function createElement(type,attr,content){
  const element = document.createElement(type);
  
  if(attr){
    Object.assign(element,attr);
  }
  if(content !== undefined){
    element.appendChild(content);
  }
  return element;
}
