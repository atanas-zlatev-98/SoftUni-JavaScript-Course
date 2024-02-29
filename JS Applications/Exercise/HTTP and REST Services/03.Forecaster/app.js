function attachEvents() {
  document.getElementById("submit").addEventListener("click", getWather);
  const forecastSectionRef = document.getElementById("forecast");
  const locationInputRef = document.getElementById("location");
  const currentRef = document.getElementById("current");
  const upcomming = document.getElementById("upcoming");
  const baseLocationURL =
    "http://localhost:3030/jsonstore/forecaster/locations";
  const todayURL = `http://localhost:3030/jsonstore/forecaster/today/`;

  const upcomingURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/'

  async function getWather(e) {
    const userInput = locationInputRef.value;
    forecastSectionRef.style.display = "block";
    const locationResponse = await fetch(baseLocationURL);
    const locationData = await locationResponse.json();
    const currentLocationData = locationData.find((x) => x.name === userInput);
    await fillTodayData(currentLocationData.code);
  }
  async function fillTodayData(code) {
    const response = await fetch(todayURL + code);
    const data = await response.json();
    const todayInfo = createForecast(data);
    currentRef.appendChild(todayInfo);
  }

  function createForecast(data) {
    const container = document.createElement("div");
    container.classList.add("forecast");
    const conditionSpan = document.createElement("span");
    conditionSpan.classList.add("condition-symbol");
    conditionSpan.innerHTML = findSymbol(data.condition);
    container.appendChild(conditionSpan);
    const spanContainer = document.createElement("span");
    spanContainer.classList.add("condition");

    const spanName = document.createElement("span");
    spanName.classList.add("forecast-data");
    spanName.textContent = data.name;

    const degree = document.createElement("span");
    degree.classList.add("forecast-data");
    degree.innerHTML = `${data.forecast.low + findSymbol("Degrees")}\\${
      data.forecast.high + findSymbol("Degrees")
    }`;

    const condition = document.createElement("span");
    condition.classList.add("forecast-data");
    condition.textContent = data.forecast.condition;

    spanContainer.appendChild(spanName);
    spanContainer.appendChild(degree);
    spanContainer.appendChild(condition);
    container.appendChild(spanContainer);

    return container;
  }
  
  function createForecastUpcommingSection(data){
    const container = document.createElement('div');
    container.classList.add('forecast-info');
    const upcoming1 = ;
    const upcoming2 = ;
    const upcoming3 = ;
  }

  function findSymbol(condition) {
    switch (condition) {
      case "Sunny":
        return `&#x2600`;
      case "Partly":
        return `&#x26C5`;
      case "Overcast":
        return `&#x2601`;
      case "Rain":
        return `&#x2614`;
      case "Degrees":
        return `&#176`;
    }
  }
}

attachEvents();
