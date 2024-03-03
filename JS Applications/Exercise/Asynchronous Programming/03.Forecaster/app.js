function attachEvents() {
  const locationRef = document.getElementById("location");
  document.querySelector("input#submit").addEventListener("click", getLocations);
  const forecastRef = document.getElementById("forecast");
  const currentWeather = document.getElementById('current');
  const upcommingWeatherRef = document.getElementById('upcoming');

  const endpoints = {
    getLocation: "http://localhost:3030/jsonstore/forecaster/locations",
    getLocationToday: "http://localhost:3030/jsonstore/forecaster/today/",
    getUpcomming: "http://localhost:3030/jsonstore/forecaster/upcoming/",
  };
  async function getLocations() {
    try{
        const userInput = locationRef.value;
        forecastRef.style.display = "block";
    
        const response = await fetch(endpoints.getLocation);
        const data = await response.json();
        const currentLocation = data.find((x) => x.name === userInput);
        await fillToday(currentLocation.code);
        await fillUpcomming(currentLocation.code);
    }catch(err){
        forecastRef.textContent = 'Error';
    }
   
  }
  
  async function fillUpcomming(code){
    const response = await fetch(endpoints.getUpcomming + code);
    const data = await response.json();
    const upcomingInfo =  createForecastUpcommingSection(data);
    upcommingWeatherRef.appendChild(upcomingInfo);
  }

  function generation(classContainer,classSpan,name,data){

    const spanContainer = document.createElement('span');
    spanContainer.classList.add(classContainer);

    const spanName = document.createElement('span');
    spanName.classList.add(classSpan);
    classSpan === "symbol" ? spanName.innerHTML = findSymbol(data.condition) :  spanName.textContent = name;

    const degree = document.createElement('span');
    degree.classList.add('forecast-data');
    degree.innerHTML = `${data.low + findSymbol('Degrees')}/${data.high + findSymbol('Degrees')}`;

    const condition = document.createElement('span');
    condition.classList.add('forecast-data');
    condition.textContent = data.condition;

    spanContainer.appendChild(spanName);
    spanContainer.appendChild(degree);
    spanContainer.appendChild(condition);

    return spanContainer;

  }

  function createForecastUpcommingSection(data){
    const container = document.createElement('div');
    container.classList.add('forecast-info');

    const upcomming1 = generation('upcoming','symbol',data.name,data.forecast[0]);
    const upcomming2 = generation('upcoming','symbol',data.name,data.forecast[1]);
    const upcomming3 = generation('upcoming','symbol',data.name,data.forecast[2]);

    container.appendChild(upcomming1);
    container.appendChild(upcomming2);
    container.appendChild(upcomming3);

    return container;
  } 

  async function fillToday(code) {
    const response = await fetch(endpoints.getLocationToday + code);
    const data = await response.json();
    const todayInfo = createForecastTodaySection(data);
    currentWeather.appendChild(todayInfo);
  }

  function createForecastTodaySection(data) {

    const container = document.createElement("div");
    container.classList.add("forecasts");
    const conditionSpan = document.createElement("span");

    conditionSpan.classList.add("condition");
    conditionSpan.classList.add('symbol');
    conditionSpan.innerHTML = findSymbol(data.forecast.condition);

    container.appendChild(conditionSpan);

    const spanContainer = generation('condition','forecast-data',data.name,data.forecast);
    container.appendChild(spanContainer);

    return container;
  }

  function findSymbol(condition) {
    switch (condition) {
        case 'Sunny': return `&#x2600`;
        case 'Partly sunny': return '&#x26C5';
        case 'Overcast': return '&#x2601';
        case 'Rain': return '&#x2614';
        case 'Degrees': return '&#176';
        default: return condition;
    }
  }
}

attachEvents();
