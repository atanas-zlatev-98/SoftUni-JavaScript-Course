function getInfo() {

  const checkButton = document.getElementById("submit");
  const stopIDRef = document.getElementById("stopId");
  const stopNameRef = document.getElementById("stopName");
  const bussesContainer = document.getElementById("buses");

  checkButton.addEventListener("click", onFetch);

  function onFetch() {
    
    const stopId = stopIDRef.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => renderData(data))
      .catch((err) => {
        if(err){
            stopNameRef.textContent = 'Error';
            bussesContainer.textContent = '';
        }
      });
  }

  function renderData(data) {
    bussesContainer.textContent = '';
    const busses = data.buses;
    const street = data.name;

    for (let [key, value] of Object.entries(busses)) {
        const str = `Bus ${key} arrives in ${value} minutes`
        const li = createElement('li',str);
        bussesContainer.appendChild(li);
    }

    stopNameRef.textContent = street;

  }

  function createElement(type,text){
    const createdElement = document.createElement(type);
    createdElement.textContent = text;

    return createdElement;

  }
}
