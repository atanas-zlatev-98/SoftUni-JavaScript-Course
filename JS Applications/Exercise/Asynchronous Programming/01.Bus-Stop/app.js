function getInfo() {
    
  const busIdRef = document.getElementById("stopId");
  const stopNameRef = document.getElementById("stopName");
  const busesRef = document.getElementById("buses");

  const baseUrl = "http://localhost:3030/jsonstore/bus/businfo/";

  async function fetchData() {

    try {

      const busId = busIdRef.value;
      const response = await fetch(baseUrl + busId);
      const data = await response.json();
      busesRef.textContent = "";
      stopNameRef.textContent = data.name;

      for (let [busId, time] of Object.entries(data.buses)) {

        const li = document.createElement("li");

        li.textContent = `Bus ${busId} arrives in ${time} minutes`;

        busesRef.appendChild(li);

      }
    } catch (error) {

      stopNameRef.textContent = "Error";
      busesRef.textContent = "";

    }
  }
  fetchData();
}
