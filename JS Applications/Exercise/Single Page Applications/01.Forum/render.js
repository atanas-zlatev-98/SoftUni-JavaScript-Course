export function renderTemplate(data){
    debugger
const topicNameWrapper = create('div','topic-name-wrapper');
const topicName = create('div','topic-name');

const topicAnchor = create('a','normal');
const h2 = create('h2','',data[1].topicName);

topicAnchor.setAttribute('href','#');
topicAnchor.appendChild(h2);

const columns = create('div','columns');

const div = create('div');
const dataP = create('p','','Date: ');
const dataTime = create('time','',new Date().getFullYear());
const nickName = create('div','nick-name')
const nickNameP = create('p','','Username:');
const nickNamePSpan = create('span','',data[1].username);

nickNameP.appendChild(nickNamePSpan);
nickName.appendChild(nickNameP);

dataP.appendChild(dataTime);

div.appendChild(dataP);
div.appendChild(nickName)
columns.appendChild(div);

topicName.appendChild(topicAnchor);
topicName.appendChild(columns);

topicNameWrapper.appendChild(topicName);

return topicNameWrapper;

}

function create(element,elementClass,elementContext){
    const createdElement = document.createElement(element);
    if(elementClass){
        createdElement.classList.add(elementClass)
    };
    if(elementContext){
        createdElement.textContent = elementContext;
    }
    return createdElement
    }